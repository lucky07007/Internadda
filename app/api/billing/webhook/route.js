import crypto from "node:crypto";
export const runtime="nodejs";
export async function POST(req){const secret=process.env.RAZORPAY_WEBHOOK_SECRET;if(!secret)return new Response("Webhook not configured",{status:503});const signature=req.headers.get("x-razorpay-signature")||"";const raw=await req.text();const expected=crypto.createHmac("sha256",secret).update(raw).digest("hex");if(signature!==expected)return new Response("Invalid signature",{status:401});return Response.json({ok:true,received:true,note:"Wire verified payment -> Firebase entitlement here when Razorpay is enabled."});}
