# Firebase setup for Internadda

Use the Firebase project shown in the supplied web configuration: `internadda-c7217`.

## Enable
1. Authentication → Sign-in method → Google → Enable.
2. Authentication → Sign-in method → Email/Password → Enable.
3. Firestore Database → keep the existing database if it is the Internadda project.
4. Storage → enable Storage.
5. Project Settings → Your apps → make sure the Web app uses the `internadda-c7217` configuration in `Frontend/src/firebase.js`.

## Existing data in the supplied screenshots
Do not wipe the entire project just to use this build. Existing Firebase Auth users can remain. The new application stores profile/progress using the authenticated Firebase UID.

The screenshot shows a Firestore document with a `Password` field. Do not store passwords in Firestore. Firebase Authentication already owns password credentials. Delete any plaintext/duplicate `Password` fields from old Firestore documents. If the old `internadda` collection is no longer used, archive/export it if needed and then delete it. The new app does not read that collection.

Existing `blogPosts`, `pendingBlogPosts`, `artifacts` and other old collections can remain until you intentionally migrate them; the new build uses its own static content for speed.

## Rules
From `Frontend/`, deploy the supplied `firestore.rules` and `storage.rules` with Firebase CLI. The rules intentionally allow each signed-in user to access only their own profile/progress/resume path, while public blog documents are read-only.

## Important
The Firebase Web API key in the client configuration is not a service-account credential. Never put Firebase Admin private keys or Groq/Cashfree secrets in the frontend.
