# Step 02: Plan

**Task:** implement Z-Services based on PROMPT-2.md. The project already has a basic Vite + Vue 3 + Dexie.js setup. Need to implement: full record model, security (PBKDF2, AES-GCM), offline-first PWA, paginated list with full-text AND search, record view/edit with copy buttons, tags management, CSV/JSON import/export, hamburger menu, and About page with release check.
**Started:** 2026-06-10T07:37:13Z

---

## Implementation Strategy

### Phase 1: Foundation & Security
1.  **Update Database Schema**: Modify `src/db.js` to include all fields required by `PROMPT-2.md`.
2.  **Refine Crypto Logic**: Ensure `deriveKey`, `encrypt`, and `decrypt` are robust and handle `Uint8Array` correctly (including `wipe`).
3.  **Session Management**: Implement master password entry, salt generation, and persistent session state in `src/store/session.js`.

### Phase 2: Core Features (Records & Tags)
4.  **Records List**:
    - Implement pagination (10 per page).
    - Implement sorting logic.
    - Refine full-text search with `AND` logic.
5.  **Record View/Edit**:
    - Create comprehensive form for all fields.
    - Implement read-only view with labels.
    - Add copy buttons for specific fields.
    - Implement tag chips for selection.
6.  **Tags Management**:
    - Create dedicated CRUD for tags.

### Phase 3: Data & Navigation
7.  **Import/Export**:
    - Implement CSV export/import (reset DB on import).
    - Implement JSON config import/export.
8.  **Navigation**:
    - Refine hamburger menu (right side, compact buttons).
    - Ensure "Z-Services" title does not wrap.
9.  **About Page**:
    - Implement release check.
    - Add GitHub links and versioning.

### Phase 4: PWA & Polish
10. **PWA Configuration**: Finalize `vite-plugin-pwa` settings.
11. **Styling & UX**: Refine dark theme and button heights.
12. **Validation**: Final visual check on port 4173.

---

## Technical Notes
- All secrets must be encrypted before storage.
- Master key never stored; only salt, iv, and ciphertext.
- Use native Web Crypto exclusively.
- Mobile-first responsive design for all views.

---

## Success Criteria
- [ ] All record fields are present and functional.
- [ ] Encryption/decryption works correctly for all secrets.
- [ ] Search is real-time and supports multiple terms.
- [ ] Pagination is functional.
- [ ] Hamburger menu behaves correctly on mobile.
- [ ] CSV import resets the database.
- [ ] About page shows latest release info.
