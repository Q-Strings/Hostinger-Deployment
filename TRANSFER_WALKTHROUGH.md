# COMPLETE TRANSFER & DEPLOYMENT WALKTHROUGH
## Faith Impact Forum → Hostinger

---

## 📊 PROCESS FLOW DIAGRAM

```
YOUR SYSTEM                    TRANSFER METHOD              TARGET SYSTEM              HOSTINGER
═════════════════════════════════════════════════════════════════════════════════════════════════

Project Files        ──→  Prepare-Deployment.ps1
  (current setup)    ├─→  Hostinger-Deployment/
                     └─→  Hostinger-Deployment.zip
                                    │
                     ┌──────────────┴──────────────┐
                     │                              │
                  USB DRIVE                   GOOGLE DRIVE
                     │                              │
                     ↓                              ↓
               INSERT ON TARGET              DOWNLOAD ON TARGET
                     │                              │
                     └──────────────┬───────────────┘
                                    │
                     EXTRACT TO: C:\Projects\
                            │
                     Deploy-To-Hostinger.ps1
                            │
                     ┌──────┴──────┐
                     │             │
                npm install    npm run build
                     │             │
                     └──────┬──────┘
                            │
                    .next/ folder created
                            │
                UPLOAD ALL FILES TO HOSTINGER
                            │
                    ┌────────┴────────┐
                    │                 │
                npm install      npm run build
                    │                 │
                    └────────┬────────┘
                            │
                        npm start
                            │
              ✓ Server running on port 3000
                            │
                        DNS Resolution
                            │
                    Visit: your-domain.com
```

---

## 🚀 STEP-BY-STEP WALKTHROUGH

### PHASE 1: YOUR SYSTEM - PREPARATION (Right Now!)

**Time: 5-10 minutes**

#### Step 1.1: Open PowerShell as Administrator

```powershell
# Right-click PowerShell icon → Run as Administrator
```

#### Step 1.2: Navigate to Project

```powershell
cd "d:\CCI DATA\FAITH IMPACT FORUM WWW"
```

#### Step 1.3: Run Preparation Script

```powershell
.\Prepare-Deployment.ps1
```

**What it does:**
- ✓ Creates `Hostinger-Deployment` folder
- ✓ Copies all essential files and directories
- ✓ Creates `Hostinger-Deployment.zip`
- ✓ Shows completion summary

**Expected Output:**
```
🚀 Starting Deployment Package Preparation...
✅ DEPLOYMENT PACKAGE READY!
📁 Hostinger-Deployment folder created
📦 Hostinger-Deployment.zip created
```

---

### PHASE 2: TRANSFER FILES

**Time: 5-30 minutes** (depending on method)

#### Option A: USB Drive Transfer (Fastest)

```powershell
# Insert USB drive (assume it's E:)
Copy-Item -Path "Hostinger-Deployment" -Destination "E:\Hostinger-Deployment" -Recurse
Copy-Item -Path "DEPLOYMENT_GUIDE.md" -Destination "E\"
Copy-Item -Path "QUICK_REFERENCE.md" -Destination "E\"

# Eject USB safely
```

**What to give to target system:**
- USB with `Hostinger-Deployment` folder
- Print or share DEPLOYMENT_GUIDE.md
- Print or share QUICK_REFERENCE.md

#### Option B: Cloud Transfer (Most Convenient)

```powershell
# File already created: Hostinger-Deployment.zip

# On your computer:
# 1. Go to Google Drive or OneDrive
# 2. Create new folder "FaithForum-Hostinger"
# 3. Upload: Hostinger-Deployment.zip
# 4. Upload: DEPLOYMENT_GUIDE.md
# 5. Upload: QUICK_REFERENCE.md
# 6. Right-click folder → Share → Get link
# 7. Send link to target system person
```

---

### PHASE 3: TARGET SYSTEM - SETUP (Their Laptop)

**Time: 10-15 minutes**

#### Step 3.1: Receive Files

**If USB:**
```powershell
# 1. Insert USB
# 2. Copy Hostinger-Deployment folder to C:\Projects\
```

**If Cloud:**
```powershell
# 1. Click shared link
# 2. Download Hostinger-Deployment.zip
# 3. Right-click → Extract All → C:\Projects\
```

#### Step 3.2: Verify Files Exist

```powershell
cd C:\Projects\Hostinger-Deployment
ls  # Should show package.json, server.js, app/, components/, etc.
```

#### Step 3.3: Check Node.js

```powershell
node --version   # Should show v18.x.x or higher
npm --version    # Should show 9.x.x or higher
```

**If Node.js not installed:**
1. Visit: https://nodejs.org/ (download LTS)
2. Run installer on target system
3. Restart PowerShell

#### Step 3.4: Run Setup Script

```powershell
cd C:\Projects\Hostinger-Deployment

# Make script executable (Windows only if needed)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Run the deployment script
.\Deploy-To-Hostinger.ps1
```

**What it does:**
- ✓ Checks Node.js and npm installed
- ✓ Asks for deployment folder path
- ✓ Runs `npm install` (takes ~2-3 minutes)
- ✓ Runs `npm run build` (takes ~1-2 minutes)
- ✓ Verifies `.next` folder was created
- ✓ Shows success message

**Output when complete:**
```
✅ LOCAL SETUP COMPLETE!
📊 Summary:
  Project: Faith Impact Forum
  Status: Ready for Hostinger deployment
```

---

### PHASE 4: HOSTINGER SETUP & DEPLOYMENT (During Video Call)

**Time: 20-30 minutes**

#### Step 4.1: Access Hostinger

```
1. Browser → https://hpanel.hostinger.com
2. Login with Hostinger credentials
3. Select domain/hosting account
```

#### Step 4.2: Create Node.js Application

Navigate in Hostinger:
```
Hosting
  → [Select your domain]
    → Advanced (or Manage)
      → Node.js Applications
        → Create New Application
```

**Fill in:**
| Field | Value |
|-------|-------|
| Application Name | `faith-impact-forum` |
| Node Version | `18.17.0` or `20.x.x` |
| Startup File | `server.js` |
| Port | `3000` |
| Root Path | `/` |

**Click:** Create/Save

**Wait:** 1-2 minutes for initialization

#### Step 4.3: Upload Files via File Manager

Navigate:
```
Hosting
  → [Your domain]
    → File Manager
```

**Upload process:**
1. Create new folder (if needed) or use existing `public_html`
2. Delete any existing `node_modules` folder
3. Upload these folders:
   - `app/` (entire folder)
   - `components/` (entire folder)
   - `lib/` (entire folder)
   - `public/` (entire folder)
   - `scripts/` (entire folder)

4. Upload these files:
   - `package.json`
   - `server.js`
   - `next.config.mjs`
   - `tsconfig.json`
   - `tailwind.config.ts`
   - `postcss.config.cjs`
   - `.env.production`
   - `hostinger.json`

**DO NOT UPLOAD:**
- `node_modules/` (let npm create this)
- `.next/` (let build create this)
- `.git/` (not needed)

#### Step 4.4: Build on Hostinger Server

Navigate:
```
Hosting
  → [Your domain]
    → Advanced
      → Terminal (SSH)
```

**Run these commands in order:**

```bash
# Navigate to your application directory
cd /home/yourusername/public_html
# (or whatever directory Hostinger shows)

# Install dependencies (TAKES 2-3 MINUTES)
npm install

# Wait for completion, should end with:
# "added XXX packages in XXX seconds"

# Build the application (TAKES 1-2 MINUTES)
npm run build

# Wait for completion, should end with:
# "✓ Route (app) compiled successfully"

# Start the application
npm start
```

**Expected Success Message:**
```
✓ Server running at http://0.0.0.0:3000
✓ Environment: production
```

**If you see this:** ✅ Deployment succeeded!

**If you see error:** 
- Note the error message
- See Troubleshooting section below

#### Step 4.5: Connect Domain (Already Should Be Done)

Verify in Hostinger:
```
Domains
  → [Your domain]
    → Ensure pointing to Hostinger servers
    → Enable SSL (usually auto)
```

---

### PHASE 5: VERIFICATION & TESTING

**Time: 10-15 minutes**

#### Step 5.1: Wait for DNS Propagation

```
⏳ Wait 5-30 minutes for DNS to propagate
```

#### Step 5.2: Visit Your Website

```
Browser: https://your-domain.com
```

**Check for:**
- ✓ Page loads (no 404)
- ✓ HTTPS with green lock
- ✓ Images display correctly
- ✓ Navigation works

#### Step 5.3: Open Browser DevTools

```
Press: F12
Go to: Console tab
Look for: Any red error messages

If none → ✅ Application working!
If errors → Screenshot and troubleshoot
```

#### Step 5.4: Test All Pages

```
✓ Home page (/)
✓ Events page (/events)
✓ FAQ page (/faq)
✓ Register page (/register)
✓ Sponsor pages (/sponsor/*)
✓ Mobile responsive (F12 → Toggle mobile)
```

#### Step 5.5: Monitor Hostinger Dashboard

```
Hosting
  → [Your domain]
    → Overview/Stats
      → Check CPU/Memory usage
      → Should be under 50%
```

---

## 🔍 TROUBLESHOOTING GUIDE

### Problem: Deployment Script Won't Run

**Error:** `"cannot be loaded because execution of scripts is disabled..."`

**Solution:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
# Answer: Y (Yes)
# Try script again
```

---

### Problem: npm install Fails

**Error:** `"ERR! code ERESOLVE"`

**Solution:**
```bash
# On Hostinger terminal:
npm cache clean --force
rm -rf node_modules
npm install
```

---

### Problem: npm run build Fails

**Error:** `"JavaScript heap out of memory"`

**Solution:**
1. Option A: Upgrade Hostinger plan to more RAM
2. Option B: Build locally on target system:
   ```bash
   npm run build  # Run locally first
   # Upload .next folder to Hostinger
   ```

---

### Problem: Website Shows 404

**Reason:** DNS hasn't propagated yet

**Solution:**
```
1. Wait another 24 hours
2. Open browser DevTools (F12)
3. Go to Network tab
4. Refresh page
5. Look for failed requests
```

---

### Problem: Slow Website

**Solution:**
```bash
# Check server status
pm2 status

# Check logs
pm2 logs

# Monitor resources
top
# (or 'htop' if available)
```

**Common fixes:**
- Upgrade Hostinger plan
- Enable caching
- Optimize images
- Use CDN for static files

---

### Problem: Application Keeps Crashing

**Solution:**
```bash
# Check logs
pm2 logs faith-impact-forum

# Restart application
pm2 restart faith-impact-forum

# Or reinstall
npm install
npm run build
npm start
```

---

## 📞 COMMUNICATION CHECKLIST

**Before Target System Work:**
- [ ] Provide USB or cloud link
- [ ] Include DEPLOYMENT_GUIDE.md
- [ ] Include QUICK_REFERENCE.md
- [ ] Schedule video call/appearance time

**During Hostinger Setup:**
- [ ] Be available for questions
- [ ] Note Hostinger username/email
- [ ] Have deployment folder ready
- [ ] Note any error messages

**After Deployment:**
- [ ] Verify website loads
- [ ] Get domain URL
- [ ] Test all features work
- [ ] Confirm backup access

---

## ✅ FINAL CHECKLIST

**Your System (NOW):**
- [ ] Ran Prepare-Deployment.ps1
- [ ] Hostinger-Deployment.zip created
- [ ] Files ready for transfer

**Target System:**
- [ ] Received files (USB or cloud)
- [ ] Node.js installed
- [ ] Deploy-To-Hostinger.ps1 ran successfully
- [ ] Build showed no errors

**Hostinger Setup:**
- [ ] Node.js Application created
- [ ] Files uploaded via File Manager
- [ ] npm install ran successfully
- [ ] npm run build completed
- [ ] npm start showed success message

**Verification:**
- [ ] Website loads at domain
- [ ] No error messages in console
- [ ] All pages accessible
- [ ] Mobile view responsive
- [ ] HTTPS/SSL working

---

## 📝 QUICK CONTACTS

Keep these handy during deployment:

- **Hostinger Support:** https://support.hostinger.com
- **Node.js Docs:** https://nodejs.org/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Your Hostinger Account:** hpanel.hostinger.com

---

## 🎉 SUCCESS INDICATORS

✅ You'll know deployment succeeded when:

1. Website loads at `https://your-domain.com`
2. Pages navigate without 404 errors
3. Browser DevTools console shows no red errors
4. Mobile view is responsive
5. Green HTTPS lock in browser
6. All functionality works (forms, navigation, etc.)
7. Hostinger dashboard shows low CPU/memory usage

---

**This process is designed to be straightforward and bulletproof.**
**Each step is essential - don't skip any!**

Created: March 16, 2026
Last Updated: March 16, 2026
Questions? Refer to DEPLOYMENT_GUIDE.md or QUICK_REFERENCE.md
