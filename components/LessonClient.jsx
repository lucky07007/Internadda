"use client";
import { useState } from "react";
import { doc,setDoc,serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "./AuthProvider";
export default function LessonClient({lesson}){const {user}=useAuth();const [answer,setAnswer]=useState("");const [feedback,setFeedback]=useState("");const [busy,setBusy]=useState(false);const [done,setDone]=useState(false);
async function getFeedback(){if(!answer.trim())return;setBusy(true);setFeedback("");try{const token=await user?.getIdToken();const r=await fetch("/api/ai",{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${token}`},body:JSON.stringify({type:"feedback",lesson:lesson.title,answer})});const d=await r.json();if(!r.ok)throw new Error(d.error);setFeedback(d.text)}catch(e){setFeedback(e.message||"AI feedback unavailable.")}finally{setBusy(false)}}
async function complete(){if(user){await setDoc(doc(db,"learningProgress",user.uid),{[`lessons.${lesson.id}`]:true,updatedAt:serverTimestamp()},{merge:true})}setDone(true)}
return <aside className="card"><h2>Practice</h2><p className="muted">Write your answer first. Then ask the AI coach for concise feedback.</p><textarea className="field" style={{minHeight:170}} value={answer} onChange={e=>setAnswer(e.target.value)} placeholder="Write your answer here..."/><div className="actions"><button className="btn yellow" onClick={getFeedback} disabled={busy}>{busy?"Thinking…":"Get AI feedback"}</button><button className="btn primary" onClick={complete}>{done?"Completed ✓":"Mark complete"}</button></div>{feedback&&<div className="success" style={{marginTop:14,whiteSpace:"pre-wrap"}}>{feedback}</div>}</aside>}
