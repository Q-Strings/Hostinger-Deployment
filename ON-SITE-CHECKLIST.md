# ON-SITE DEPLOYMENT CHECKLIST
## Use this to track progress during deployment

---

## BEFORE YOU ARRIVE

- [ ] USB drive with Hostinger-Deployment
- [ ] This checklist (printed)
- [ ] IN-PERSON-DEPLOYMENT.md (printed or on phone)
- [ ] COMMANDS-QUICK-REF.txt (printed)
- [ ] Hostinger credentials written down
- [ ] Domain name written down

---

## UPON ARRIVAL (5 min)

- [ ] Greet and explain what you're doing
- [ ] Ask for USB drive location or cloud access
- [ ] Get Hostinger credentials
- [ ] Get domain name
- [ ] Confirm internet connection working
- [ ] Confirm administrator access available

---

## PHASE 1: EXTRACT & VERIFY (Time: ______)

- [ ] Insert USB drive
- [ ] Navigate to `C:\Projects\` in File Explorer
- [ ] Extract `Hostinger-Deployment.zip` (or copy folder)
- [ ] Verify folder exists at `C:\Projects\Hostinger-Deployment`
- [ ] Open PowerShell as Administrator
- [ ] Run: `cd C:\Projects\Hostinger-Deployment`
- [ ] Run: `ls` (verify files exist)
- [ ] All files present? YES / NO

**If NO:** Stop, re-extract files

---

## PHASE 2: CHECK NODE.JS (Time: ______)

- [ ] Run: `node --version`
- [ ] Node version shown? YES / NO
- [ ] Run: `npm --version`
- [ ] npm version shown? YES / NO

**If NO to either:**
- [ ] Download Node.js from nodejs.org
- [ ] Run installer
- [ ] Restart PowerShell
- [ ] Try commands again

---

## PHASE 2: BUILD APPLICATION (Time: ______)

- [ ] Directory is: `C:\Projects\Hostinger-Deployment`
- [ ] Run: `npm install`
- [ ] Wait 2-3 minutes
- [ ] Completes successfully? YES / NO
- [ ] Run: `npm run build`
- [ ] Wait 1-2 minutes
- [ ] Completes successfully? YES / NO
- [ ] Run: `ls .next` (verify .next folder exists)
- [ ] .next folder exists? YES / NO

**If NO to any:** Troubleshoot (see end of this checklist)

---

## PHASE 3: HOSTINGER SETUP (Time: ______)

- [ ] Open browser
- [ ] Go to: https://hpanel.hostinger.com
- [ ] Login successful? YES / NO
- [ ] Navigate to: Hosting → Advanced → Node.js Applications
- [ ] Found Node.js section? YES / NO
- [ ] Click: Create New Application
- [ ] Fill form exactly as shown:
  - [ ] Application Name: `faith-impact-forum`
  - [ ] Node Version: `18.17.0` or higher
  - [ ] Startup File: `server.js`
  - [ ] Port: `3000`
  - [ ] Root Path: `/`
- [ ] Click: Create/Save
- [ ] Wait 1-2 minutes for initialization
- [ ] Write down Working Directory: _______________________________

---

## PHASE 4: UPLOAD FILES (Time: ______)

- [ ] Go to: File Manager in Hostinger
- [ ] Navigate to: Working Directory from above
- [ ] Delete (if exist):
  - [ ] node_modules/ folder
  - [ ] .next/ folder
- [ ] Upload folders (wait for each to complete):
  - [ ] app/
  - [ ] components/
  - [ ] lib/
  - [ ] public/
  - [ ] scripts/
- [ ] Upload files:
  - [ ] package.json
  - [ ] server.js
  - [ ] next.config.mjs
  - [ ] .env.production
  - [ ] hostinger.json
  - [ ] tsconfig.json
  - [ ] tailwind.config.ts
  - [ ] postcss.config.cjs
- [ ] All files visible in File Manager? YES / NO

**If NO:** Re-upload files

---

## PHASE 5: BUILD ON SERVER (Time: ______)

- [ ] Go to: Hostinger Terminal/SSH
- [ ] Connected? YES / NO
- [ ] Run: `pwd` (check directory)
- [ ] Directory looks like: `/home/username/public_html` or similar? YES / NO
- [ ] Run: `npm install` (WAIT 2-3 MIN)
- [ ] Completed successfully? YES / NO
- [ ] Run: `npm run build` (WAIT 1-2 MIN)
- [ ] Completed successfully? YES / NO
- [ ] Run: `npm start`
- [ ] See message "Server running at http://0.0.0.0:3000"? YES / NO

**If YES:** ✓✓✓ DEPLOYMENT SUCCESSFUL! ✓✓✓

**If NO:** Check error message, troubleshoot below

---

## PHASE 6: VERIFY WEBSITE (Time: ______)

- [ ] Keep terminal window open (running)
- [ ] Open new browser tab
- [ ] Go to: https://[your-domain]
- [ ] Website loads? YES / NO
- [ ] Click Home link - works? YES / NO
- [ ] Click Events link - works? YES / NO
- [ ] Click FAQ link - works? YES / NO
- [ ] Try other pages - work? YES / NO
- [ ] Press F12 for DevTools
- [ ] Go to Console tab
- [ ] See any RED error messages? NO (this is good!)
- [ ] Press Ctrl+Shift+M for mobile view
- [ ] Mobile view looks good? YES / NO

**If ALL YES:** DEPLOYMENT COMPLETE! 🎉

**If ANY NO:** Note issue below

---

## NOTES & OBSERVATIONS

**Time Started:** ______________
**Time Completed:** ______________
**Total Time:** ______________

**Problems Encountered:**


**Error Messages Seen:**


**Hostinger Working Directory:**


**Domain URL:**


**Final Status:** ✓ SUCCESS / ✗ INCOMPLETE / ✗ FAILED

**Next Steps:**


---

## IF SOMETHING GOES WRONG

### npm install fails
- [ ] Run: `npm cache clean --force`
- [ ] Run: `npm install` again
- [ ] Still failing? Move to next step anyway

### npm run build fails
- [ ] Check error message carefully
- [ ] Run: `npm install` again
- [ ] Run: `npm run build` again
- [ ] Failing? Note error and try Step "npm start" anyway

### npm start shows error
- [ ] If "Port 3000 in use" - don't worry, this is normal
- [ ] If other error - note the exact message
- [ ] Try running again: `npm start`

### Website shows 404 or blank
- [ ] WAIT 10-15 minutes for DNS to propagate
- [ ] Try different browser
- [ ] Try incognito/private browsing
- [ ] Check if HTTPS is working (green lock)

### Can't upload files to Hostinger
- [ ] Try uploading one file at a time
- [ ] Try smaller files first
- [ ] Check file names have no spaces
- [ ] Alternative: Use Terminal upload via SFTP

---

## EMERGENCY CONTACT INFO

If completely stuck:
- Check Hostinger documentation: https://support.hostinger.com
- Check Node.js docs: https://nodejs.org/docs
- Terminal error messages have clues - read them carefully!
- Restart terminal and try again

---

## BEFORE YOU LEAVE

- [ ] Website loads in browser ✓
- [ ] No red errors in console ✓
- [ ] All pages navigate ✓
- [ ] Terminal is still running ✓
- [ ] Write down credentials for them ✓
- [ ] Explain what to do if it stops ✓
- [ ] Leave this checklist with them ✓

---

**Date:** March 16, 2026  
**Project:** Faith Impact Forum  
**Status:** ______________________

**Deployed by:** ______________________

