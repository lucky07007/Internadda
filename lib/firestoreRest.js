function base(projectId){return `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(projectId)}/databases/(default)/documents`}
export async function getUserDocument(idToken, collection, uid){
  const r=await fetch(`${base(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID)}/${collection}/${uid}`,{headers:{Authorization:`Bearer ${idToken}`}});
  if(r.status===404)return null;const d=await r.json();if(!r.ok)throw new Error(d?.error?.message||"Could not read account data");return d;
}
export function fieldValue(v){if(Number.isInteger(v))return {integerValue:String(v)};if(typeof v==='boolean')return {booleanValue:v};return {stringValue:String(v??"")}}
export async function setUserFields(idToken,collection,uid,fields){
  const body={fields:Object.fromEntries(Object.entries(fields).map(([k,v])=>[k,fieldValue(v)]))};
  const mask=Object.keys(fields).map(k=>`updateMask.fieldPaths=${encodeURIComponent(k)}`).join("&");
  const r=await fetch(`${base(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID)}/${collection}/${uid}?${mask}`,{method:"PATCH",headers:{Authorization:`Bearer ${idToken}`,"Content-Type":"application/json"},body:JSON.stringify(body)});const d=await r.json();if(!r.ok)throw new Error(d?.error?.message||"Could not save account data");return d;
}
export function integerField(doc,key,fallback=0){return Number(doc?.fields?.[key]?.integerValue??fallback)}
export function stringField(doc,key,fallback=""){return String(doc?.fields?.[key]?.stringValue??fallback)}
