# Security notes
- Never put Groq or Razorpay secrets in `NEXT_PUBLIC_*` variables.
- Firebase Web API configuration is intended for the client, but Firestore/Storage rules are the real access boundary.
- Resume uploads are restricted to the authenticated owner's PDF path and 5 MB.
- AI routes require a valid Firebase ID token.
- Free technical-round usage is checked server-side using Firestore REST authenticated by the user's Firebase token.
- Razorpay webhook must be signature verified before granting entitlements.
- Do not store passwords in Firestore. Firebase Authentication owns passwords.
