# Step 01: Analyze

**Task:** implement Z-Services based on PROMPT-2.md. The project already has a basic Vite + Vue 3 + Dexie.js setup. Need to implement: full record model, security (PBKDF2, AES-GCM), offline-first PWA, paginated list with full-text AND search, record view/edit with copy buttons, tags management, CSV/JSON import/export, hamburger menu, and About page with release check.
**Started:** 2026-06-10T07:37:13Z

---

## Context Discovery

### Current Stack & Config
- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite + `vite-plugin-pwa`
- **Database**: Dexie.js (IndexedDB)
- **Crypto**: Native Web Crypto API (AES-GCM, PBKDF2)
- **Styling**: Tailwind CSS

### Analysis of Existing Implementation
- **Database (`src/db.js`)**: Initialized but needs more fields in `records` store.
- **Crypto (`src/crypto.js`)**: Basic functions are implemented but need to be integrated into the record saving/loading logic.
- **Session (`src/store/session.js`)**: Skeleton for session management exists.
- **Router (`src/router.js`)**: Basic routes are defined.
- **Components**: 
    - `App.vue`: Basic navbar with hamburger (needs refinement).
    - `Records.vue`: Partial search logic implemented, needs pagination and sorting.
    - `RecordView.vue`: Placeholder view.
    - `Tags.vue`: Placeholder view.
    - `Tools.vue`: Placeholder view.
    - `Help.vue`: Placeholder view.
    - `About.vue`: Placeholder view.

### Missing Requirements / To-Do
- [ ] **Data Schema**: Update `records` store with all required fields.
- [ ] **Security Layer**: Implement encryption/decryption for specific fields during DB operations.
- [ ] **PWA Config**: Configure `vite-plugin-pwa` for offline-first behavior.
- [ ] **Records UI**:
    - Pagination (10 records/page).
    - Sorting on all columns.
    - Full-text search with AND logic.
- [ ] **Record Detail UI**:
    - Read/Edit mode toggle.
    - Copy buttons for IP, SSH, HTML fields.
    - Tag selection/deletion (chips).
- [ ] **Tags Management**: Full CRUD for tags.
- [ ] **Data Mobility**: CSV/JSON Import/Export logic (CSV reset).
- [ ] **Navigation**: Hamburger menu on the right, compact buttons.
- [ ] **About Page**: GitHub release check, versioning.
- [ ] **Styling**: Refine "sober, modern" dark theme.
