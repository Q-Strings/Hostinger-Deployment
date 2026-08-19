# FAITH IMPACT FORUM - QUICK REFERENCE CHECKLIST
# Use this during deployment on target system

# ============================================
# YOUR SYSTEM - PREPARATION (Right Now)
# ============================================

STEP 1: PREPARE DEPLOYMENT PACKAGE
   [ ] Run PowerShell as Administrator
   [ ] Navigate to: d:\CCI DATA\FAITH IMPACT FORUM WWW
   [ ] Run: .\Prepare-Deployment.ps1
   [ ] Wait for completion
   [ ] Verify Hostinger-Deployment.zip created

STEP 2: CHOOSE TRANSFER METHOD
   [ ] USB Drive:
       - Copy Hostinger-Deployment folder to USB
       - Keep hostinger.json file safe
   
   [ ] Cloud Storage (Recommended):
       - Upload Hostinger-Deployment.zip to Google Drive/OneDrive
       - Get shareable link
       - Send link to target system person

STEP 3: SEND TO TARGET SYSTEM
   [ ] USB: Physically provide to other person
   [ ] Cloud: Share link via email/message
   [ ] Include this file (QUICK_REFERENCE.md)
   [ ] Include DEPLOYMENT_GUIDE.md

---

# ============================================
# TARGET SYSTEM - DEPLOYMENT
# ============================================

STEP 1: RECEIVE & EXTRACT FILES
   [ ] Receive USB/download from cloud
   [ ] Extract to: C:\Projects\
   [ ] Verify these files exist:
       - package.json
       - server.js
       - .env.production
       - hostinger.json
       - DEPLOYMENT_GUIDE.md

STEP 2: INSTALL NODE.JS (if needed)
   [ ] Run: node --version
   [ ] If not installed, download from https://nodejs.org/
   [ ] Restart PowerShell after install

STEP 3: PREPARE LOCAL BUILD
   [ ] Open PowerShell as Administrator
   [ ] Run: .\Deploy-To-Hostinger.ps1
   [ ] Follow prompts
   [ ] Wait for completion

STEP 4: HOSTINGER SETUP (During Video Call/Visit)
   [ ] Log into Hostinger Control Panel at hpanel.hostinger.com
   [ ] Create Node.js Application:
       - Name: faith-impact-forum
       - Node Version: 18+
       - Startup File: server.js
       - Port: 3000
   [ ] Note the Working Directory path shown

STEP 5: UPLOAD TO HOSTINGER
   File Manager Method (Easiest):
   [ ] Go to File Manager in Hostinger
   [ ] Navigate to application directory
   [ ] Upload all files except node_modules:
       - app/
       - components/
       - lib/
       - public/
       - scripts/
       - package.json
       - server.js
       - next.config.mjs
       - .env.production
       - And other config files

STEP 6: BUILD ON HOSTINGER SERVER
   SSH Terminal Method:
   [ ] Open Terminal in Hostinger Control Panel
   [ ] Run: npm install (wait 2-3 min)
   [ ] Run: npm run build (wait 1-2 min)
   [ ] Run: npm start
   [ ] Should see: "✓ Server running at http://0.0.0.0:3000"

STEP 7: VERIFY DEPLOYMENT
   [ ] Wait 5 minutes for DNS
   [ ] Visit: https://yourdomain.com
   [ ] Check browser console for errors (F12)
   [ ] Test navigation between pages
   [ ] Test forms (if any)
   [ ] Check on mobile

---

# ============================================
# QUICK COMMAND REFERENCE - COPY & PASTE
# ============================================

--- FOR YOUR SYSTEM (Preparation) ---

# PowerShell - Navigate to project
cd "d:\CCI DATA\FAITH IMPACT FORUM WWW"

# PowerShell - Run preparation script
.\Prepare-Deployment.ps1

# PowerShell - Copy to USB (replace E: with USB drive letter)
Copy-Item -Path "Hostinger-Deployment" -Destination "E:\Hostinger-Deployment" -Recurse


--- FOR TARGET SYSTEM (During Deployment) ---

# PowerShell - Navigate to deployment folder
cd "C:\Projects\Hostinger-Deployment"

# PowerShell - Run deployment script
.\Deploy-To-Hostinger.ps1


--- FOR HOSTINGER TERMINAL ---

# Check Node version
node --version

# Install dependencies
npm install

# Build project
npm run build

# Start application (IMPORTANT!)
npm start

# Check if running (if npm start doesn't show output)
pm2 status

# View logs if something's wrong
pm2 logs


---  HOSTINGER "FILE MANAGER" UPLOAD ORDER ---

Upload in this order for cleanest deployment:
1. package.json
2. server.js
3. next.config.mjs
4. .env.production
5. hostinger.json
6. app/ (entire folder)
7. components/ (entire folder)
8. lib/ (entire folder)
9. public/ (entire folder)
10. scripts/ (entire folder)
11. Other config files (tailwind.config.ts, postcss.config.cjs, tsconfig.json)

DO NOT UPLOAD:
- node_modules/ (let npm install create it)
- .next/ (let npm build create it)
- .git/ (if present)

---

# ============================================
# TROUBLESHOOTING
# ============================================

PROBLEM: npm install fails with "Cannot find module"
SOLUTION: Run again - npm install
          If persists: Delete node_modules, npm install fresh

PROBLEM: npm run build fails
SOLUTION: Check errors in output
          Increase Hostinger plan if out of memory
          OR build locally, upload .next folder

PROBLEM: npm start shows "Port 3000 already in use"
SOLUTION: This is normal on Hostinger, it uses reverse proxy
          Application still works correctly

PROBLEM: Website shows 404 or doesn't load
SOLUTION: Check if DNS has propagated (wait 24-48 hours)
          Check browser console for errors
          Verify domain is connected in Hostinger

PROBLEM: "Cannot connect to Hostinger"
SOLUTION: Check connection with: ping hostinger.com
          Try later if server issues
          Contact Hostinger support


---

# ============================================
# HOSTINGER CONTROL PANEL NAVIGATION
# ============================================

Login: https://hpanel.hostinger.com

For Node.js App:
  > Hosting
  > [Select your domain]
  > Advanced
  > Node.js Applications
  > Create New Application

For File Manager:
  > Hosting
  > [Select your domain]
  > File Manager

For Terminal:
  > Hosting
  > [Select your domain]
  > Advanced
  > Terminal (SSH)

For Domain Setup:
  > Domains
  > [Your domain]
  > Manage DNS
  > Point to Hostinger servers

---

# ============================================
# FILES YOU NEED
# ============================================

CRITICAL - MUST HAVE:
✓ Hostinger-Deployment folder (all contents)
✓ DEPLOYMENT_GUIDE.md
✓ QUICK_REFERENCE.md (this file)
✓ Deploy-To-Hostinger.ps1

OPTIONAL - NICE TO HAVE:
✓ Prepare-Deployment.ps1 (for next time)
✓ server.js (backup copy)
✓ .env.production (backup copy)

---

# ============================================
# SUPPORT CONTACT INFO
# ============================================

During Deployment:
- Keep DEPLOYMENT_GUIDE.md open for reference
- Share screen during critical steps
- Note any error messages

After Deployment:
- Check Hostinger dashboard for resource usage
- Monitor for first 24 hours
- Keep deployment files safe for future updates

---

Created: March 16, 2026
Project: Faith Impact Forum
Target: Hostinger Cloud Hosting

Questions? Refer to DEPLOYMENT_GUIDE.md for detailed instructions.
