# UpForge.in — production learning + AI interview platform

## Product
UpForge.in is the learning/interview-preparation layer of UpForge.org. It combines role-specific notes, open/trusted videos, quizzes, saved progress, resume-aware planning and AI technical interview practice.

## Architecture
- Next.js App Router
- Cloudflare Workers via OpenNext
- Firebase Auth + Firestore + Storage
- Groq through server-side Edge route handlers
- Two Groq keys with automatic fallback
- No Express/Render backend required
- Razorpay integration isolated behind `/api/billing/create-order` and webhook scaffolding; leave keys empty until payments are ready

## Career tracks
1. Full Stack Developer
2. AI / ML Engineer
3. Data Analyst / Data Science
4. Cloud / DevOps Engineer
5. Cybersecurity Engineer

## AI technical practice
Logged-in free accounts receive 2 technical practice rounds. The server tracks lifetime free-round usage in `aiUsage/{uid}` using the authenticated Firebase ID token. Premium entitlement is designed around `subscription=active` for future Razorpay activation.

## Environment
Copy `.env.example` to `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_SITE_URL=https://upforge.in
GROQ_API_KEY=
GROQ_API_KEY_2=
GROQ_MODEL=llama-3.3-70b-versatile
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=
```

## Run
`npm install`
`npm run dev`

## Cloudflare
`npm run cf:build`
`npm run cf:deploy`

## Firebase
Deploy the included `firebase/firestore.rules` and `firebase/storage.rules`. Enable Google + Email/Password authentication and Storage. Storage currently requires Blaze/pay-as-you-go.

## Payment
The product has one plan: **UpForge Personal — ₹49 one-time**. The code creates a Razorpay order when the keys exist. Do not enable checkout until you have configured the webhook to grant the Firebase entitlement after signature-verified payment. No payment secret belongs in `NEXT_PUBLIC_*`.

## Video licensing
The video library intentionally shows source/license links. Some items are U.S. public-domain government works; others are Creative Commons. Do not label every video as public domain. Check the source/license before reuse or redistribution.
