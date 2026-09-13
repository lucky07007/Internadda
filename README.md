# Internadda — Personalized Internship & Interview Learning

This build moves Internadda from an AI-interview-only product to a personalized learning platform. Existing interview routes are retained as legacy practice flows.

## Firebase
Project: `internadda-c7217`

Enable Authentication providers: Google and Email/Password. Enable Firestore and Storage. The Frontend Firebase web configuration is in `Frontend/src/firebase.js`. Deploy rules from the Frontend directory with Firebase CLI after reviewing them.

Important: the old Firebase project is not used by this build. Do not copy old service-account credentials.

## Railway
Deploy `Backend` as a Node service. Set `GROQ_API_KEY`, `FRONTEND_URL` and optional `GROQ_MODEL` in Railway variables. Never commit keys.

## Cloudflare
Build the `Frontend` with `npm run build` and deploy the generated `dist` as a static site. Set `VITE_API_BASE_URL` to the Railway API URL.

## Local
Terminal 1: `cd Backend && npm install && npm start`
Terminal 2: `cd Frontend && npm install && npm run dev`

## Product flow
Account → name + target role + updated PDF resume → resume parsing → personalized learning plan → lessons → practice → progress → interview simulation.

The ₹49 price is a real product price in the UI. Payment gateway integration should be configured with server-side credentials before taking production payments; this repository deliberately contains no payment secrets.
