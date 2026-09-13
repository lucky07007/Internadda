import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, googleProvider } from "../firebase";

const AuthContext = createContext(null);

async function ensureUserProfile(user, extra = {}) {
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, { uid: user.uid, email: user.email || "", displayName: user.displayName || extra.displayName || "", photoURL: user.photoURL || "", createdAt: serverTimestamp(), updatedAt: serverTimestamp(), ...extra });
  } else if (Object.keys(extra).length) {
    await setDoc(ref, { ...extra, updatedAt: serverTimestamp() }, { merge: true });
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => onAuthStateChanged(auth, async (next) => {
    setUser(next);
    if (next) { try { const snap = await getDoc(doc(db, "users", next.uid)); setProfile(snap.exists() ? snap.data() : null); } catch { setProfile(null); } }
    else setProfile(null);
    setLoading(false);
  }), []);

  const refreshProfile = async () => {
    if (!auth.currentUser) return null;
    const snap = await getDoc(doc(db, "users", auth.currentUser.uid));
    const data = snap.exists() ? snap.data() : null; setProfile(data); return data;
  };

  const signup = async (email, password, displayName) => {
    const result = await createUserWithEmailAndPassword(auth, email.trim(), password);
    await ensureUserProfile(result.user, { displayName: displayName.trim() });
    await refreshProfile(); return result.user;
  };
  const login = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email.trim(), password);
    await ensureUserProfile(result.user); await refreshProfile(); return result.user;
  };
  const googleLogin = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    await ensureUserProfile(result.user); await refreshProfile(); return result.user;
  };
  const logout = () => signOut(auth);

  return <AuthContext.Provider value={{ user, profile, loading, signup, login, googleLogin, logout, refreshProfile }}>{!loading && children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
