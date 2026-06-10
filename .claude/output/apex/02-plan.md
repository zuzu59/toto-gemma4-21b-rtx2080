# Plan

## Task 1: Data Persistence & Session
- [ ] Clean up `src/db.js` (remove duplication).
- [ ] Update `src/store/session.js` to save/load salt from `db.config`.
- [ ] Implement memory wiping in `session.js`.

## Task 2: Core Features
- [ ] Implement Import/Export (CSV/JSON) in `src/views/Tools.vue`.
- [ ] Implement About page in `src/views/About.vue` with version check.

## Task 3: UI/UX Refinements
- [ ] Standardize button heights (compact).
- [ ] Add "Copié" feedback for copy buttons in `RecordView.vue`.
- [ ] Refine navbar to prevent title wrap and ensure compact search.

## Task 4: Release & Versioning
- [ ] Implement `0.0.x` versioning logic.
- [ ] Implement GitHub release check in `About.vue`.

## Task 5: Validation
- [ ] Manual verification of each feature.
- [ ] Visual check on mobile and desktop.
