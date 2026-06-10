# Analysis

## Existing Project State
- **Stack**: Vue 3, Vite, Dexie.js, CSS.
- **Crypto**: `src/crypto.js` correctly implements PBKDF2 (600k), AES-GCM 256, and `wipe()`.
- **DB**: `src/db.js` has version 2 with all required fields. It also has a `config` table.
- **App Structure**: Navbar with hamburger (right) and title (left) exists. Records and Tags pages exist.
- **Session**: `src/store/session.js` handles lock/unlock but lacks salt persistence.
- **UI**: Some records and tags are displayed, but the "Compact" requirement for buttons is not fully met.

## Requirements Gap Analysis
- [ ] **Salt Persistence**: Salt is currently volatile. Needs to be saved to `db.config`.
- [ ] **Import/Export**: Not implemented.
- [ ] **About Page**: Not implemented.
- [ ] **UI Refinements**: Need to adjust button heights, navbar search behavior, and "Copié" feedback.
- [ ] **Release Logic**: Need to implement versioning and GitHub release check.
- [ ] **Memory Wiping**: `session.masterKey` should be wiped on lock.

## Dependencies
- `dexie`
- `vue-router`
- `vite-plugin-pwa`
