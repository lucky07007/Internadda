import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function ProtectedRoute({ children }) { const { user, loading } = useAuth(); const loc=useLocation(); if(loading) return <div className="min-h-screen grid place-items-center bg-slate-950 text-white">Loading your workspace…</div>; return user ? children : <Navigate to="/login" state={{from:loc.pathname}} replace/>; }
