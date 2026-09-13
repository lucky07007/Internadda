# UPFORGE.IN — START HERE

This is the final production-oriented code package.

## What is already included
- Next.js + Cloudflare/OpenNext architecture
- Firebase Authentication, Firestore and Storage
- Google + Email/Password login
- 5 career tracks
- role-specific notes
- shared interview lessons
- quizzes + explanations + saved scores
- curated video library with source/license links
- career resources
- SEO blog + sitemap + robots
- personal dashboard
- optional resume PDF upload
- AI lesson feedback
- AI resume-aware learning plan (paid entitlement)
- AI technical interview with follow-up questions
- 2 free technical rounds per account
- two Groq API key fallback
- ₹49 one-time UpForge Personal plan
- Razorpay order route + webhook scaffold
- no Express/Render backend

## 1. Firebase once
Follow `FIREBASE_SETUP.md` exactly.

## 2. Local environment
Copy `.env.example` to `.env.local` and fill Firebase + Groq values.

## 3. Install
`npm install`

## 4. Run
`npm run dev`

## 5. Cloudflare
Set the same production environment variables in Cloudflare.

Build:
`npm run cf:build`

Deploy:
`npm run cf:deploy`

## 6. Razorpay later
Leave Razorpay variables empty until payment activation. When ready, add the three Razorpay variables and wire the signature-verified webhook to set `aiUsage/{uid}.subscription` to `active`.

## Important
Do not put Groq or Razorpay secrets into `NEXT_PUBLIC_*` variables.
Do not store passwords in Firestore.
Do not describe every external video as public domain. The video cards expose source/license information.
