# APEX Task: 00-z-services-implementation

**Created:** 2026-06-10
**Task:** Implement the requirements in PROMPT-2.md for the Z-Services PWA.

## Flags
- Auto mode: true
- Save mode: true
- Economy mode: false

## User Request
Implement the features and constraints defined in PROMPT-2.md. Ensure the app is a mobile-first, offline-first PWA using the specified stack (Vue 3, Dexie.js, Vite, vite-plugin-pwa). Focus on security (AES-GCM 256-bit, PBKDF2), record management with tags, and the UI requirements (compact buttons, no title wrap). Use the existing project files and structure as a base.

## Acceptance Criteria
- [ ] Salt persistence in IndexedDB
- [ ] AES-GCM 256-bit encryption with PBKDF2 (600k iterations)
- [ ] Full record management (CRUD) with tags
- [ ] Import/Export (CSV, JSON)
- [ ] About page with version and release check
- [ ] UI refinements (compact buttons, no header wrap)
- [ ] Copy to clipboard with "Copié" feedback
- [ ] Memory wiping on lock/unlock
- [ ] Versioning 0.0.x and release logic
