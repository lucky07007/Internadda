const MODEL = () => process.env.GROQ_MODEL || "llama-3.3-70b-versatile";
export async function groqChat(messages, options={}) {
  const keys=[process.env.GROQ_API_KEY,process.env.GROQ_API_KEY_2].filter(Boolean);
  if(!keys.length) throw new Error("Groq API keys are not configured.");
  let last="AI provider unavailable";
  for(const key of keys){
    try{
      const r=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({model:MODEL(),messages,max_tokens:options.max_tokens||700,temperature:options.temperature??0.35})});
      const d=await r.json().catch(()=>({}));
      if(r.ok) return d.choices?.[0]?.message?.content?.trim()||"";
      last=d?.error?.message||`Groq request failed (${r.status})`;
      if(r.status!==429 && r.status!==408 && r.status!==500 && r.status!==502 && r.status!==503) break;
    }catch(e){last=e.message||last;}
  }
  throw new Error(last);
}
export function extractJson(text){const clean=String(text||"").replace(/^```json\s*/i,"").replace(/```$/i,"").trim();const start=clean.indexOf("{");const end=clean.lastIndexOf("}");if(start<0||end<start)throw new Error("AI returned invalid JSON");return JSON.parse(clean.slice(start,end+1));}
