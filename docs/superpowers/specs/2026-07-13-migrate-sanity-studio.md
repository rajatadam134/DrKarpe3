# Design Spec — Migrate Sanity Studio into Dr. Karpe 3 Workspace

This design document outlines the copy and integration of the entire Sanity Studio setup from the `Dr. Karpe 2` workspace to the `Dr. Karpe 3` workspace.

---

## 1. Scope and Strategy
* **Location:** The Sanity Studio configuration, package definitions, and schemas will be copied into a dedicated subdirectory: `c:\Users\rajat\OneDrive\Documents\Antigravity\Dr. Karpe 3\studio`.
* **Copy Exclusions:** Heavy and system-specific directories (`node_modules`, `.sanity` cache) will be excluded from the copy process.
* **Git Configuration:** Update `.gitignore` in `Dr. Karpe 3` to ensure that `studio/node_modules/` and `studio/.sanity/` are properly ignored.
* **Cleanup:** The original `Dr. Karpe 2` folder and repository are slated for manual deletion by the user after this migration is successfully verified and pushed.

---

## 2. Integration Steps
1. **Directory Replication:** Copy all files and folders recursively from `C:\Users\rajat\OneDrive\Documents\Antigravity\Dr. Karpe 2\studio` to `c:\Users\rajat\OneDrive\Documents\Antigravity\Dr. Karpe 3\studio`, excluding `node_modules` and `.sanity`.
2. **Gitignore Adjustment:** Add studio specific ignores to `c:\Users\rajat\OneDrive\Documents\Antigravity\Dr. Karpe 3\.gitignore`.
3. **Verify Configs:** Confirm that all paths and files (`package.json`, `sanity.config.js`, `sanity.cli.js`, `schemas/post.js`, `schemas/category.js`, `schemas/index.js`) are successfully replicated.
4. **Git Checkpoint:** Commit the newly migrated files in `Dr. Karpe 3` and push to the remote repository.

---

## 3. Verification Plan
* Run `git status` in `Dr. Karpe 3` to verify that `studio/` files are added, but `node_modules` and `.sanity` are ignored.
* Confirm file replication of all schemas (including the category reference schema).
