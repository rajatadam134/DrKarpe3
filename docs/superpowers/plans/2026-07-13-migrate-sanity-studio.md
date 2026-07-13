# Migrate Sanity Studio into Dr. Karpe 3 Workspace Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Copy the entire Sanity Studio setup from the `Dr. Karpe 2` workspace to the `Dr. Karpe 3` workspace inside a dedicated `studio/` subdirectory, and properly configure Git ignores.

**Architecture:** We will use PowerShell script command tools to copy all configurations and schemas recursively while avoiding massive node dependencies, update the project `.gitignore`, and commit/push the migrated files.

**Tech Stack:** Git, PowerShell, npm

## Global Constraints
* Do NOT copy or track `studio/node_modules/` or `studio/.sanity/`.

---

### Task 1: Copy Studio Files and Update Gitignore

**Files:**
- Create: `studio/` directory structure and replica configuration files
- Modify: `.gitignore`

- [ ] **Step 1: Copy Studio folder recursively (excluding dependencies)**

Run in PowerShell:
`robocopy "C:\Users\rajat\OneDrive\Documents\Antigravity\Dr. Karpe 2\studio" "c:\Users\rajat\OneDrive\Documents\Antigravity\Dr. Karpe 3\studio" /E /XD node_modules .sanity dist`
*Note: robocopy exit codes 0-3 indicate success (files copied or directories matched).*

Expected: Replicated folders and files (`sanity.config.js`, `package.json`, `schemas/`, etc.) in the new `studio/` subfolder.

- [ ] **Step 2: Append studio patterns to project .gitignore**

Open [c:\Users\rajat\OneDrive\Documents\Antigravity\Dr. Karpe 3\.gitignore](file:///c:/Users/rajat/OneDrive/Documents/Antigravity/Dr.%20Karpe%203/.gitignore) and append:
```gitignore
# Sanity Studio
studio/node_modules/
studio/.sanity/
studio/dist/
```

- [ ] **Step 3: Run git status to verify ignore rules**

Run: `git status`
Expected: Newly added studio files are listed as untracked, but `node_modules` or `.sanity` folders inside `studio` are NOT listed.

- [ ] **Step 4: Commit initial files copy**

```bash
git add .gitignore studio/
git commit -m "feat: migrate sanity studio into project subdirectory"
```

---

### Task 2: Verify Configs and Push Changes

**Files:**
- Modify: `studio/` config status

- [ ] **Step 1: Check sanity schema configurations**

Verify that `studio/schemas/category.js` exists and matches the reference schema from `Dr. Karpe 2`.

- [ ] **Step 2: Push changes to GitHub**

Run: `git push`
Expected: Remote repository updated successfully.
