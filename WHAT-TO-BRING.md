# ON-SITE DEPLOYMENT - WHAT TO BRING & PRINT

---

## 📦 FILES YOU NEED TO BRING

### Physical USB Drive
```
USB Contents:
  Hostinger-Deployment/              (entire folder)
    ├── app/
    ├── components/
    ├── lib/
    ├── public/
    ├── scripts/
    ├── package.json
    ├── server.js
    ├── next.config.mjs
    ├── .env.production
    ├── hostinger.json
    ├── IN-PERSON-DEPLOYMENT.md       (PRINT THIS!)
    ├── ON-SITE-CHECKLIST.md          (USE THIS!)
    ├── COMMANDS-QUICK-REF.txt        (PRINT THIS!)
    ├── TROUBLESHOOTING-GUIDE.md      (PRINT THIS!)
    └── [other files]
```

**USB Size:** ~5-10MB (small, fits any drive)

OR

### Alternative: Hostinger-Deployment.zip
```
Single file: Hostinger-Deployment.zip (5.16 MB)
Extract on their system to: C:\Projects\
```

---

## 🖨️ PRINT THESE DOCUMENTS

**Print at least these 4:**

1. **IN-PERSON-DEPLOYMENT.md**
   - Main step-by-step guide
   - Most important document
   - PAGES: ~5-7
   - Highlight key sections
   - Write notes as you go

2. **ON-SITE-CHECKLIST.md**
   - Checklist to track progress
   - PAGES: ~4
   - Use pen to check off items
   - Write times in blanks

3. **COMMANDS-QUICK-REF.txt**
   - Commands ready to copy-paste
   - PAGES: ~1-2
   - Keep separate for quick lookup

4. **TROUBLESHOOTING-GUIDE.md**
   - For when things go wrong
   - PAGES: ~4-5
   - Quick decision tree
   - Solutions for common issues

**Total pages to print:** ~15 pages

---

## 📝 WRITE DOWN BEFORE YOU GO

**On a notepad or phone, write:**

```
=== DEPLOYMENT INFO ===

Hostinger Username: ____________________________
Hostinger Password: ____________________________
(Note: Keep secure!)

Domain Name: ____________________________
(The website URL)

Their Email: ____________________________
(For future reference)

Their Phone: ____________________________
(In case you need to call)

Contact after deployment? YES / NO
Follow-up date: ____________________________
```

---

## 📱 ON YOUR PHONE/TABLET

**Have available:**
- [ ] Copy of IN-PERSON-DEPLOYMENT.md (PDF or text)
- [ ] Copy of COMMANDS-QUICK-REF.txt
- [ ] Copy of this list
- [ ] Notepad app ready

**For reference if no printer available**

---

## 🎒 CHECKLIST - WHAT TO BRING

**Hardware:**
- [ ] USB drive with Hostinger-Deployment
- [ ] Laptop (if needed for reference)
- [ ] Phone (for notes/reminders)

**Documents (printed or digital):**
- [ ] IN-PERSON-DEPLOYMENT.md (PRINTED)
- [ ] ON-SITE-CHECKLIST.md (PRINTED)
- [ ] COMMANDS-QUICK-REF.txt (PRINTED)
- [ ] TROUBLESHOOTING-GUIDE.md (PRINTED)
- [ ] This document (on phone)

**Credentials:**
- [ ] Hostinger username written down
- [ ] Hostinger password written down
- [ ] Domain name written down

**Tools:**
- [ ] Pen for notes
- [ ] Notepad
- [ ] Phone charger
- [ ] Optional: Laptop charger

---

## 📅 TIMELINE - WHAT TO EXPECT

| Time | Task | Duration |
|------|------|----------|
| Arrival | Greetings, setup | 2 min |
| Phase 1 | Extract files, verify | 5-10 min |
| Phase 2 | Local build (npm install/build) | 5-10 min |
| *Break* | *Explanations, coffee* | *5 min* |
| Phase 3 | Hostinger setup | 5 min |
| Phase 4 | Upload files | 10 min |
| Phase 5 | Build on server (npm install/build/start) | 5-10 min |
| Phase 6 | Verify website working | 5-10 min |
| Wrap-up | Explanations, notes, goodbyes | 5 min |
| **TOTAL** | | **~50-65 min** |

---

## 🎯 KEY POINTS TO REMEMBER

### Before You Start:
1. Explain what you're doing at high level
2. Get them comfortable (bathroom, water)
3. Set expectations: "This will take about 1 hour"

### During Deployment:
1. Follow IN-PERSON-DEPLOYMENT.md step-by-step
2. Use ON-SITE-CHECKLIST.md to track progress
3. Keep COMMANDS-QUICK-REF.txt nearby
4. Tell them what each command does

### If Problems Occur:
1. Reference TROUBLESHOOTING-GUIDE.md
2. Try suggested solutions
3. Don't panic - usually has simple fix
4. Document the issue for later

### Before You Leave:
1. Verify website loads and works
2. Explain how to restart if needed
3. Give them these documents (or copies)
4. Leave contact info (email/phone)
5. Offer remote support if things go wrong

---

## 💾 FILES BACKUP

**Keep copies of:**
- [ ] Hostinger-Deployment.zip (save on PC)
- [ ] All markdown documents
- [ ] Credentials written down safely

**Why?** For future updates or if they need to redeploy

---

## 🆘 IF YOU GET STUCK

**First check:**
- [ ] Is terminal still running? (Don't close it!)
- [ ] Did any previous command error out?
- [ ] Are you following step-by-step?

**Then:**
- [ ] Go to TROUBLESHOOTING-GUIDE.md
- [ ] Find your issue
- [ ] Follow suggested solution
- [ ] Try again

**If still stuck:**
- [ ] Document the error exactly
- [ ] Proceed to next phase if possible
- [ ] You can debug later or get help

---

## 📞 SUPPORT DURING VISIT

**If they ask questions:**

**"What is npm?"** → Package manager for Node.js, installs dependencies

**"What is Node.js?"** → JavaScript runtime for server-side code

**"Why npm install twice?"** → Once locally, once on server. Different environments.

**"What does 'Server running' mean?"** → Website is live and working!

**"Will it work at the domain?"** → Yes, but wait 5-30 min for DNS

**"What if it crashes?"** → Hostinger auto-restarts via PM2, or we run npm start again

---

## ✅ SUCCESS CHECKLIST

You succeeded if:
- [ ] Website loads at domain
- [ ] No 404 errors
- [ ] Pages navigate correctly
- [ ] No red errors in console
- [ ] Mobile view works
- [ ] HTTPS shows green lock
- [ ] Terminal shows "Server running"

---

## 📝 AFTER DEPLOYMENT

**Leave them with:**
- [ ] Printed IN-PERSON-DEPLOYMENT.md
- [ ] Hostinger credentials (written securely)
- [ ] Simple instructions: "If it stops, SSH and run 'npm start'"
- [ ] Your contact info (email/phone)
- [ ] Offer: "Call me if anything goes wrong"

---

## 🚀 YOU'RE READY!

**All materials prepared. You have:**

✓ Complete deployment package (USB/zip)
✓ Step-by-step guide (IN-PERSON-DEPLOYMENT.md)
✓ Progress checklist (ON-SITE-CHECKLIST.md)
✓ Quick commands (COMMANDS-QUICK-REF.txt)
✓ Troubleshooting (TROUBLESHOOTING-GUIDE.md)
✓ This summary (WHAT-TO-BRING.md)

**Print the guides, bring the USB, follow the steps.**

**You've got this! 🎉**

---

## 📋 FINAL PACKING LIST

```
BEFORE YOU LEAVE YOUR PLACE:
[ ] Print IN-PERSON-DEPLOYMENT.md
[ ] Print ON-SITE-CHECKLIST.md
[ ] Print COMMANDS-QUICK-REF.txt
[ ] Print TROUBLESHOOTING-GUIDE.md
[ ] Grab USB with Hostinger-Deployment
[ ] Write down credentials
[ ] Bring pen/notepad
[ ] Bring phone
[ ] Backup files on laptop if needed
```

**You're ready to deploy! Good luck! 🚀**

---

**Created:** March 16, 2026
**Project:** Faith Impact Forum
**Status:** Ready for On-Site Deployment ✓
