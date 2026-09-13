# What changed from Internadda

This is a clean rebuild using the useful product logic from the previous Internadda codebase, not a rename of the old Express/Vite app.

### Removed from the critical path
- Separate Express backend
- Hardcoded admin credentials
- Hardcoded Cashfree secrets
- Firebase password fields in Firestore
- Interview-only landing flow

### New core
- UpForge.in branding under UpForge.org
- Learning-first home page
- Role selection
- Structured lessons and notes
- Quizzes with explanations
- AI interview practice
- AI lesson feedback
- AI role-aware plan generation
- Optional resume PDF upload to Firebase Storage
- Saved learning progress
- Career blog and SEO sitemap
- Free/open resource discovery
- Hiring-team handoff page without unsupported partnership claims

### Runtime architecture
Browser → Firebase Auth/Firestore/Storage
Browser → Cloudflare → Next.js Edge route → Groq

No Render service is required for this first architecture. If a future feature requires a Node-only library or long-running job, add a small Render service for that feature instead of moving the whole application back to a traditional backend.
