# IN-PERSON HOSTINGER DEPLOYMENT - PROCEDURE GUIDE
## For On-Site Deployment (No Screen Sharing)

**Date:** March 16, 2026  
**Project:** Faith Impact Forum  
**Target:** Hostinger Cloud Hosting  

---

## 🎯 WHAT YOU NEED TO BRING

**Physical/Digital:**
- [ ] USB Drive with Hostinger-Deployment folder
- [ ] This guide (printed or on phone/tablet)
- [ ] Hostinger login credentials (written down)
- [ ] Domain name written down
- [ ] Notepad for notes during deployment

**On Target Laptop:**
- [ ] Node.js installed (or installer ready)
- [ ] Internet connection
- [ ] Administrator access

---

## ⏱️ TIME BREAKDOWN

| Phase | Duration | Location |
|-------|----------|----------|
| 1. Extract & Setup | 10 min | Their laptop |
| 2. Local Build | 5-10 min | Their laptop |
| 3. Hostinger Config | 5 min | Browser on their laptop |
| 4. Upload Files | 10 min | Hostinger File Manager |
| 5. Build on Server | 5 min | Hostinger Terminal |
| 6. Verify & Test | 5 min | Browser test |
| **TOTAL** | **~45 min** | - |

---

## 📝 PHASE 1: EXTRACT & VERIFY FILES (10 min)

### Step 1.1: Insert USB & Extract

On their laptop:

```
1. Insert USB drive
2. Open File Explorer
3. Right-click Hostinger-Deployment.zip (or folder)
4. "Extract All" → C:\Projects\
5. Click Extract
```

**Result:** Folder appears at `C:\Projects\Hostinger-Deployment`

### Step 1.2: Verify Files Exist

Open PowerShell and run:

```powershell
cd C:\Projects\Hostinger-Deployment
ls
```

**You should see:**
```
app                          (folder)
components                   (folder)
lib                          (folder)
public                       (folder)
package.json                 (file)
server.js                    (file)
next.config.mjs              (file)
.env.production              (file)
DEPLOYMENT_GUIDE.md          (file)
```

✓ If files exist → Continue to Phase 2
✗ If files missing → Check USB or re-extract

---

## 📋 PHASE 2: LOCAL BUILD (10 min)

### Step 2.1: Check Node.js

In PowerShell, run:

```powershell
node --version
npm --version
```

**Expected:** v18.x.x or higher and 9.x.x or higher

**If not installed:**
- Download from: https://nodejs.org/ (LTS version)
- Run installer
- Restart PowerShell
- Try again

### Step 2.2: Install Dependencies

In PowerShell, run:

```powershell
cd C:\Projects\Hostinger-Deployment
npm install
```

**⏱️ Wait 2-3 minutes**

**Expected output ends with:**
```
added XXX packages in XXX seconds
```

**If error:** Run again: `npm install`

### Step 2.3: Build Application

In PowerShell, run:

```powershell
npm run build
```

**⏱️ Wait 1-2 minutes**

**Expected output ends with:**
```
✓ Route (app) compiled successfully
```

**If error:** Check console for details, note error message

### Step 2.4: Verify Build Success

In PowerShell, run:

```powershell
ls .next
```

**You should see:** `.next` folder exists

✓ If folder exists → Ready for Hostinger!
✗ If folder missing → Build failed, check errors above

---

## 🌐 PHASE 3: HOSTINGER SETUP (5 min)

### Step 3.1: Log Into Hostinger

Browser URL:
```
https://hpanel.hostinger.com
```

**Login with:**
- Username: [Write their username here: ____________]
- Password: [Write their password here: ____________]

### Step 3.2: Create Node.js Application

**Navigate in Hostinger:**
```
Hosting (left menu)
  → [Select domain/hosting]
    → Advanced (or Manage)
      → Node.js Applications
        → Create New Application (or + button)
```

### Step 3.3: Fill Application Form

**EXACT VALUES TO ENTER:**

| Field | Value |
|-------|-------|
| Application Name | `faith-impact-forum` |
| Node Version | `18.17.0` or higher |
| Startup File | `server.js` |
| Port | `3000` |
| Root Path | `/` |

**Click:** Create/Save/Install

**Wait:** 1-2 minutes for initialization

**Copy down:** Working Directory path shown (you'll need it next)

Working Directory: ______________________________

---

## 📤 PHASE 4: UPLOAD FILES (10 min)

### Step 4.1: Open File Manager

**In Hostinger:**
```
Hosting (left menu)
  → [Your domain]
    → File Manager (or Advanced → File Manager)
```

### Step 4.2: Navigate to Application Folder

In File Manager, you should see a folder like:
```
/home/username/public_html/
   OR
[The path shown in Working Directory above]
```

**Click into it**

### Step 4.3: Delete Old Files (if any)

Look for and delete:
- `node_modules/` folder (if exists)
- `.next/` folder (if exists)

**Keep:** Other files are okay

### Step 4.4: Upload Folders

One at a time, drag or upload these folders from `C:\Projects\Hostinger-Deployment\`:

1. **app/** folder
2. **components/** folder
3. **lib/** folder
4. **public/** folder
5. **scripts/** folder

**For each:** Wait for upload to complete (shows 100%)

### Step 4.5: Upload Files

Now upload these individual files:

1. **package.json**
2. **server.js**
3. **next.config.mjs**
4. **.env.production**
5. **hostinger.json**
6. **tsconfig.json**
7. **tailwind.config.ts**
8. **postcss.config.cjs**

**Check:** All files appear in Hostinger File Manager

✓ If all uploaded → Continue to Phase 5
✗ If upload fails → Try again or use Terminal method below

---

## 🔨 PHASE 5: BUILD ON SERVER (5 min)

### Step 5.1: Open Terminal

**In Hostinger:**
```
Hosting
  → [Your domain]
    → Advanced
      → Terminal (SSH)
```

### Step 5.2: Check Directory

In Terminal, run:

```bash
pwd
```

Should show: `/home/username/public_html` (or similar)

### Step 5.3: Install Dependencies

**RUN THIS COMMAND:**

```bash
npm install
```

**⏱️ WAIT 2-3 MINUTES** (screen will show progress)

**Expected ending:**
```
added XXX packages
```

**If stuck:** Wait longer (npm can be slow on servers)

**If error shows "Cannot find module":** 
- Wait and try again
- OR type: `npm install --force` then Enter

### Step 5.4: Build Project

**RUN THIS COMMAND:**

```bash
npm run build
```

**⏱️ WAIT 1-2 MINUTES** (screen will show progress)

**Expected ending:**
```
✓ Route (app) compiled successfully
```

**If this appears:** ✓ Build succeeded!

### Step 5.5: START THE APPLICATION

**THIS IS THE CRITICAL COMMAND - RUN IT:**

```bash
npm start
```

**You should immediately see:**

```
✓ Server running at http://0.0.0.0:3000
✓ Environment: production
```

**If you see this message:** ✓✓✓ DEPLOYMENT SUCCEEDED! ✓✓✓

**Do NOT close terminal** - keep it running

---

## ✅ PHASE 6: VERIFY & TEST (5 min)

### Step 6.1: Check Website in Browser

Open new browser tab and go to:

```
https://your-domain.com
```

(Replace with actual domain)

**Expected:**
- Page loads (not blank or 404)
- You see the website
- HTTPS lock icon (green)

**If blank/404:** Wait 5 minutes and try again (DNS propagating)

### Step 6.2: Test Navigation

On website:
- Click Home link ✓
- Click Events link ✓
- Click FAQ link ✓
- Try other pages ✓

**All should work without errors**

### Step 6.3: Check Console for Errors

In browser:
- Press **F12** (Developer Tools)
- Click **Console** tab
- Look for red error messages

**If no red errors:** ✓ Everything working!
**If red errors:** Take screenshot and note message

### Step 6.4: Mobile Test

In browser DevTools:
- Press **F12**
- Click **Toggle device toolbar** icon (or Ctrl+Shift+M)
- Select iPhone/phone view
- Website should still look good and work

---

## 🎉 SUCCESS INDICATORS

✅ You'll know deployment succeeded IF:

- [ ] Website loads at domain.com
- [ ] No 404 or blank page
- [ ] Pages navigate without errors
- [ ] No red errors in console (F12)
- [ ] Mobile view is responsive
- [ ] HTTPS lock is green
- [ ] npm start shows "Server running"

**If ALL above are ✓:** Deployment is complete!

---

## 🆘 TROUBLESHOOTING - ON-SITE

### Problem: npm install fails

**Solution:**
```bash
npm cache clean --force
npm install
```

Try again.

---

### Problem: npm run build fails

**Solution:**
```bash
npm install
npm run build
```

Run build again.

---

### Problem: npm start shows error "Port 3000 in use"

**This is normal on Hostinger.** Don't worry - the application still works. It uses a reverse proxy automatically.

---

### Problem: Website shows 404 or blank

**Solution:**
- Wait 10-15 minutes (DNS hasn't propagated yet)
- Try from different browser
- Restart terminal

---

### Problem: I'm stuck and don't know what to do

**Do this:**
1. Note the exact error message
2. Take screenshot
3. Check Terminal output in Hostinger
4. Wait 5 minutes and try again
5. Move to next step

---

## 📝 NOTES & OBSERVATIONS

**During Deployment - Write Down:**

Problems encountered:
___________________________________________________________________

Error messages seen:
___________________________________________________________________

Working Directory path:
___________________________________________________________________

Application URL after deployment:
___________________________________________________________________

Time to complete:
___________________________________________________________________

---

## 🔐 IMPORTANT CREDENTIALS TO SAVE

**Keep these safe after deployment:**

Hostinger Username: ____________
Hostinger Password: ____________
Domain: ____________
Application Name: faith-impact-forum
SSH Access: (Usually included with hosting)

**Store in:** Safe place (password manager recommended)

---

## 📋 FINAL CHECKLIST

Before leaving their place:

- [ ] Website loads in browser
- [ ] npm start command still running (don't close terminal!)
- [ ] Note any errors or issues
- [ ] Test on mobile
- [ ] HTTPS lock shown
- [ ] All pages navigate
- [ ] No red errors in console (F12)

---

## ⚠️ IMPORTANT REMINDERS

1. **Don't close the terminal** after `npm start` - leave it running
2. **Wait for DNS** - can take 5-30 minutes, be patient
3. **Keep Node.js running** - if you restart their laptop, you need to run `npm start` again
4. **Hostinger might auto-restart** - it has PM2 process manager, so even if terminal closes, app usually restarts
5. **Keep deployment files** - don't delete Hostinger-Deployment folder in case you need to redeploy

---

## 🚀 POST-DEPLOYMENT

**What they need to know:**

1. **Restarting the Application:**
   ```bash
   # If it stops, go to terminal and run:
   npm start
   ```

2. **Checking Status:**
   ```bash
   # In Hostinger Terminal:
   pm2 status
   pm2 logs
   ```

3. **Monitoring:**
   - Check Hostinger Dashboard regularly
   - Watch for CPU/Memory usage
   - Monitor website for errors

4. **Updates:**
   - For future updates, repeat this process
   - Keep deployment files for reference

---

## 📞 AFTER YOU LEAVE

**They can restart the app if needed:**
```bash
ssh (their account)@(hostinger server)
cd /path/to/app
npm start
```

OR use Hostinger Terminal GUI.

---

**Created:** March 16, 2026  
**For:** In-Person Hostinger Deployment  
**Estimated Time:** 45 minutes  
**Difficulty:** Medium (follow steps exactly!)

**Good luck! You've got this!** 🚀

