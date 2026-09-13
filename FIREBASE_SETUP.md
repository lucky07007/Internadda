# UpForge.in — one-time Firebase setup

## 1. Create a NEW Firebase project
Use a new project for UpForge.in. Do not migrate old Internadda password fields.

## 2. Add Web app
Firebase Console → Project overview → Add app → Web.
Copy these values to Cloudflare and `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## 3. Authentication
Enable:
- Google
- Email/Password

Add authorized domains:
- `upforge.in`
- `www.upforge.in`
- `localhost`

## 4. Firestore
Create Firestore Database in Production mode.
Deploy `firebase/firestore.rules`.

The app creates documents automatically. Main paths:
- `users/{uid}`
- `learningProfiles/{uid}`
- `learningProgress/{uid}`
- `quizProgress/{uid}`
- `aiUsage/{uid}`

## 5. Storage
Enable Firebase Storage and deploy `firebase/storage.rules`.
Resume PDFs are stored under:
`resumes/{uid}/{fileName}`

The rule restricts upload to the authenticated owner, PDF files and <5 MB.

Firebase currently requires the Blaze/pay-as-you-go plan for Firebase Cloud Storage. You can still have no-cost usage within the applicable Blaze limits.

## 6. Do NOT create passwords in Firestore
Firebase Authentication owns passwords. Never create a `Password` field in `users`, `learningProfiles` or any other application document.

## 7. Cloudflare environment variables
Add all values from `.env.example` to the production Worker environment. Only Firebase `NEXT_PUBLIC_*` config belongs in public variables. Groq and Razorpay secrets must remain server-only.

## 8. Optional Razorpay later
The app already has one plan: `UpForge Personal — ₹49 one-time`.
When ready, add:

```env
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=
```

The order route is `/api/billing/create-order`. The webhook route is `/api/billing/webhook`.
Before accepting production payments, wire the signature-verified payment event to the Firebase entitlement field:

`aiUsage/{uid}.subscription = active`

The personalized AI plan is then unlocked by the dashboard.
