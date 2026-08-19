# MASTER CHECKLIST - TAKE THIS WITH YOU
## Your complete on-site deployment reference

---

## 🎒 BEFORE YOU LEAVE (DO THIS NOW)

- [ ] **PRINT these 4 documents** from Hostinger-Deployment folder:
  - [ ] `IN-PERSON-DEPLOYMENT.md` (main guide, ~7 pages)
  - [ ] `ON-SITE-CHECKLIST.md` (track progress, ~4 pages)
  - [ ] `COMMANDS-QUICK-REF.txt` (copy-paste commands, ~2 pages)
  - [ ] `TROUBLESHOOTING-GUIDE.md` (reference if stuck, ~5 pages)

- [ ] **Get USB ready** with:
  - [ ] `Hostinger-Deployment` folder (or zip file)

- [ ] **Write down credentials**:
  - [ ] Hostinger username: ____________________________
  - [ ] Hostinger password: ____________________________
  - [ ] Domain name: ____________________________
  - [ ] Their email: ____________________________
  - [ ] Their phone: ____________________________

- [ ] **Pack physically**:
  - [ ] USB drive
  - [ ] Printed documents (fasten together)
  - [ ] Pen
  - [ ] Notepad
  - [ ] Phone charged

---

## 🚗 WHEN YOU ARRIVE (5 MIN)

- [ ] Greet and explain you're deploying their website
- [ ] Ask: "Can I use your laptop?"
- [ ] Ask: "Is your internet working?"
- [ ] Ask: "Do you have administrator access?"
- [ ] Find: Where to work comfortably
- [ ] Get: Their Hostinger credentials (login info)
- [ ] Get: Their domain name
- [ ] Set expectations: "This will take about 45 minutes"

---

## ⚙️ DEPLOYMENT PHASES (FOLLOW IN ORDER)

### PHASE 1: EXTRACT & VERIFY (5-10 min)
**Reference:** IN-PERSON-DEPLOYMENT.md - Phase 1

- [ ] Insert USB drive
- [ ] Extract `Hostinger-Deployment.zip` to `C:\Projects\`
- [ ] Open PowerShell as Administrator
- [ ] Run: `cd C:\Projects\Hostinger-Deployment`
- [ ] Run: `ls` (verify files exist)
- [ ] Use: ON-SITE-CHECKLIST.md to track

### PHASE 2: LOCAL BUILD (10 min)
**Reference:** IN-PERSON-DEPLOYMENT.md - Phase 2

- [ ] Check Node.js: `node --version`
- [ ] **If not installed:** Download from nodejs.org and install
- [ ] Run: `npm install` (WAIT 2-3 min)
- [ ] Run: `npm run build` (WAIT 1-2 min)
- [ ] Verify: `ls .next` (folder should exist)
- [ ] Check: ON-SITE-CHECKLIST.md Phase 2

### PHASE 3: HOSTINGER SETUP (5 min)
**Reference:** IN-PERSON-DEPLOYMENT.md - Phase 3

- [ ] Open browser: https://hpanel.hostinger.com
- [ ] Login with their credentials
- [ ] Go: Hosting → Advanced → Node.js Applications
- [ ] Create New Application with:
  - [ ] Name: `faith-impact-forum`
  - [ ] Node Version: `18.17.0` or higher
  - [ ] Startup File: `server.js`
  - [ ] Port: `3000`
  - [ ] Root Path: `/`
- [ ] Write down: Working Directory shown
- [ ] Wait 1-2 minutes for initialization

### PHASE 4: UPLOAD FILES (10 min)
**Reference:** IN-PERSON-DEPLOYMENT.md - Phase 4

- [ ] Go: File Manager in Hostinger
- [ ] Delete: Old `node_modules/` and `.next/` folders
- [ ] Upload folders one by one:
  - [ ] `app/`
  - [ ] `components/`
  - [ ] `lib/`
  - [ ] `public/`
  - [ ] `scripts/`
- [ ] Upload individual files:
  - [ ] `package.json`
  - [ ] `server.js`
  - [ ] `next.config.mjs`
  - [ ] `.env.production`
  - [ ] `hostinger.json`
  - [ ] `tsconfig.json`
  - [ ] `tailwind.config.ts`
  - [ ] `postcss.config.cjs`

### PHASE 5: BUILD ON SERVER (5-10 min)
**Reference:** IN-PERSON-DEPLOYMENT.md - Phase 5

- [ ] Open: Hostinger Terminal/SSH
- [ ] Run: `npm install` (WAIT 2-3 min)
- [ ] Run: `npm run build` (WAIT 1-2 min)
- [ ] **RUN CRITICAL:** `npm start`
- [ ] **VERIFY:** See "Server running at http://0.0.0.0:3000"
- [ ] **IMPORTANT:** Don't close terminal!

### PHASE 6: VERIFY WEBSITE (5-10 min)
**Reference:** IN-PERSON-DEPLOYMENT.md - Phase 6

- [ ] Open new browser tab
- [ ] Go: `https://your-domain.com`
- [ ] Website loads? YES / NO
- [ ] Click links - pages navigate? YES / NO
- [ ] Press F12 for DevTools
- [ ] Go: Console tab
- [ ] Red errors? NO (this is good!)
- [ ] Press Ctrl+Shift+M for mobile view
- [ ] Mobile looks good? YES / NO

---

## 🎯 SUCCESS CRITERIA

✅ Check if ALL these are true:

- [ ] Website loads at domain.com
- [ ] No 404 or blank page
- [ ] Pages navigate correctly
- [ ] No red errors in console (F12)
- [ ] Mobile view responsive
- [ ] HTTPS shows green lock
- [ ] Terminal shows "Server running"
- [ ] npm start is STILL RUNNING (terminal open)

**If ALL checked:** DEPLOYMENT SUCCESSFUL! 🎉

---

## 🆘 TROUBLESHOOTING QUICK LOOKUP

**Stuck?** Use TROUBLESHOOTING-GUIDE.md or see below:

| Problem | Try This |
|---------|----------|
| npm install fails | `npm cache clean --force && npm install` |
| npm build fails | `npm install && npm build` again |
| npm start fails | Try again, or note error |
| Website won't load | Wait 10 min (DNS), refresh |
| Files won't upload | Upload one at a time |
| Terminal closes | Normal - Hostinger auto-restarts |

**Keep COMMANDS-QUICK-REF.txt handy!**

---

## 📋 NOTES DURING DEPLOYMENT

**Write these down as you progress:**

Time started: ____________________________
Working Directory: ____________________________
Domain URL: ____________________________

Problems encountered:
_________________________________________________________________

Error messages:
_________________________________________________________________

Solutions tried:
_________________________________________________________________

Final status: ✓ SUCCESS / ✗ INCOMPLETE

Time completed: ____________________________

---

## ✨ BEFORE YOU LEAVE

- [ ] Website loads and works
- [ ] Terminal is STILL RUNNING
- [ ] Explain to them: "Leave terminal running"
- [ ] If it stops, they run: `npm start` in Hostinger Terminal
- [ ] Leave them printed documents
- [ ] Give them your contact info (email/phone)
- [ ] Take notes and photographs if needed
- [ ] Confirm they can access website

---

## 📞 LEFT WITH THEM

**Leave at their place:**
- [ ] Printed IN-PERSON-DEPLOYMENT.md (for reference)
- [ ] Hostinger credentials (written securely)
- [ ] Your contact info: ____________________________
- [ ] Simple restart instructions

---

## 🚀 YOU'RE READY!

**You have:**
- ✓ USB with all files
- ✓ Printed guides
- ✓ Commands ready
- ✓ Troubleshooting guide
- ✓ This checklist

**Follow phases in order**
**Reference guides when needed**
**Use checklists to track**
**You've got this!**

---

## KEY REMINDERS

1. **Extract to:** `C:\Projects\Hostinger-Deployment`
2. **Hostinger app name:** `faith-impact-forum`
3. **Startup file:** `server.js`
4. **Port:** `3000`
5. **Don't close terminal** after `npm start`!
6. **Wait for DNS** (5-30 minutes for website to be live)
7. **Test all pages** before declaring success

---

## 📝 HOSTINGER QUICK LOGIN

```
Browser: https://hpanel.hostinger.com
Username: ____________________________
Password: ____________________________
```

---

**Good luck on deployment day! 🚀**

**You have everything you need. Follow the guides step-by-step and you'll succeed!**

---

**Created:** March 16, 2026
**Project:** Faith Impact Forum
**Status:** Ready for On-Site Deployment ✓
**Estimated Time:** 45 minutes
**Difficulty:** Medium (follow steps!)
