# UpForge.in deployment checklist

## Firebase
1. Create a new Firebase project.
2. Add a Web app and copy its config into Cloudflare env vars.
3. Enable Google and Email/Password authentication.
4. Add `upforge.in` and `www.upforge.in` to Authentication authorized domains.
5. Create Firestore in production mode.
6. Enable Storage (Blaze/pay-as-you-go is currently required for Firebase Storage).
7. Deploy `firebase/firestore.rules` and `firebase/storage.rules`.

## Cloudflare
1. Connect this repository.
2. Build with `npm install && npm run cf:build`.
3. Deploy with `npm run cf:deploy` or the configured Cloudflare integration.
4. Add all variables from `.env.example` in production.
5. Add the custom domains `upforge.in` and `www.upforge.in`.

## Groq
Add two server-only keys:
`GROQ_API_KEY` and `GROQ_API_KEY_2`.
The app automatically tries the second key when the first provider call fails on transient/rate-limit errors.

## Razorpay later
Add `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET` and `RAZORPAY_WEBHOOK_SECRET`. The order endpoint is already isolated. Before launch, connect the verified webhook event to a Firebase entitlement document (`aiUsage/{uid}.subscription = active`) and only then enable paid checkout UI.
