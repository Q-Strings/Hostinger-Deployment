# FAITH IMPACT FORUM - HOSTINGER DEPLOYMENT GUIDE
## For Transfer to Another System

**Created**: March 16, 2026  
**Project**: Faith Impact Forum Website  
**Deployment Target**: Hostinger Cloud Hosting  

---

## 📋 BEFORE YOU START

Ensure you have:
- [ ] USB drive (8GB+ recommended) OR cloud storage access (Google Drive, Dropbox, OneDrive)
- [ ] Administrator access on the target laptop
- [ ] Hostinger account credentials ready
- [ ] Domain name or Hostinger domain
- [ ] Internet connection on target system

---

## 🔄 PHASE 1: PREPARE FOR TRANSFER (Current System - YOUR LAPTOP)

### Step 1.1: Create Deployment Package

**On your current system (Windows)**, open PowerShell and run:

```powershell
# Navigate to project directory
cd "d:\CCI DATA\FAITH IMPACT FORUM WWW"

# Create a deployment folder
New-Item -ItemType Directory -Name "Hostinger-Deployment" -Force

# Copy essential files
Copy-Item -Path "package.json" -Destination "Hostinger-Deployment\"
Copy-Item -Path "package-lock.json" -Destination "Hostinger-Deployment\" -ErrorAction SilentlyContinue
Copy-Item -Path "tsconfig.json" -Destination "Hostinger-Deployment\"
Copy-Item -Path "next.config.mjs" -Destination "Hostinger-Deployment\"
Copy-Item -Path "tailwind.config.ts" -Destination "Hostinger-Deployment\"
Copy-Item -Path "postcss.config.cjs" -Destination "Hostinger-Deployment\"
Copy-Item -Path "server.js" -Destination "Hostinger-Deployment\"
Copy-Item -Path ".env.production" -Destination "Hostinger-Deployment\"
Copy-Item -Path "hostinger.json" -Destination "Hostinger-Deployment\"
Copy-Item -Path "deploy.sh" -Destination "Hostinger-Deployment\"
Copy-Item -Path "wrangler.toml" -Destination "Hostinger-Deployment\"

# Copy entire directories
Copy-Item -Path "app" -Destination "Hostinger-Deployment\" -Recurse
Copy-Item -Path "components" -Destination "Hostinger-Deployment\" -Recurse
Copy-Item -Path "lib" -Destination "Hostinger-Deployment\" -Recurse
Copy-Item -Path "public" -Destination "Hostinger-Deployment\" -Recurse
Copy-Item -Path "scripts" -Destination "Hostinger-Deployment\" -Recurse

# Verify deployment folder
Get-ChildItem -Path "Hostinger-Deployment" -Recurse | Measure-Object
```

### Step 1.2: Create Instructions File

This file should be in the deployment folder. I'll create it below.

### Step 1.3: Copy to USB or Cloud

**Option A - USB Transfer:**
```powershell
# Copy entire folder to USB (replace E:\ with your USB drive letter)
Copy-Item -Path "Hostinger-Deployment" -Destination "E:\Hostinger-Deployment" -Recurse
```

**Option B - Cloud Transfer (Google Drive/OneDrive):**
- Right-click `Hostinger-Deployment` folder
- Send to → Compress → `Hostinger-Deployment.zip`
- Upload to Google Drive or OneDrive
- Share link with the other person

---

## 🚀 PHASE 2: ON TARGET SYSTEM (Their Laptop)

### Step 2.1: Receive Files

**If USB:**
1. Insert USB on target laptop
2. Copy `Hostinger-Deployment` folder to `C:\Projects\` (or any location)

**If Cloud (Google Drive/OneDrive):**
1. Download `Hostinger-Deployment.zip`
2. Right-click → Extract All → Extract to `C:\Projects\`

### Step 2.2: Verify Files

Open PowerShell on target system:

```powershell
cd C:\Projects\Hostinger-Deployment

# List all files to verify transfer
Get-ChildItem -Path . -Recurse -File | Select-Object Name | Sort-Object
```

**Expected files:**
- package.json ✓
- server.js ✓
- next.config.mjs ✓
- .env.production ✓
- hostinger.json ✓
- folders: app/, components/, lib/, public/ ✓

### Step 2.3: Install Node.js (if not installed)

On target system, check if Node.js is installed:

```powershell
node --version
npm --version
```

**If not installed:**
1. Download from: https://nodejs.org/ (LTS version 18+)
2. Run installer on target system
3. Restart PowerShell after installation

### Step 2.4: Install Dependencies & Build

```powershell
cd C:\Projects\Hostinger-Deployment

# Install dependencies (takes 2-3 minutes)
npm install

# Build the project
npm run build

# Verify build succeeded
ls -la .next
```

If successful, you'll see a `.next` folder created.

---

## 🌐 PHASE 3: HOSTINGER SETUP (During Transfer Call)

### Step 3.1: Access Hostinger Account

1. Open browser on target system
2. Go to: https://www.hostinger.com or https://hpanel.hostinger.com
3. Login with Hostinger credentials

### Step 3.2: Create Node.js Application

In Hostinger Control Panel:

1. Navigate: **Hosting** → **Manage** → **Advanced** → **Node.js Applications**
2. Click **+ Create New Application**
3. Fill in these fields:

| Field | Value |
|-------|-------|
| Application Name | `faith-impact-forum` |
| Node Version | `18.17.0` or higher |
| Application Startup File | `server.js` |
| Application Port | `3000` |
| Application Root Path | `/` |
| Working Directory | Path shown in Hostinger |

4. Click **Create** and wait for it to initialize

### Step 3.3: Connect Domain

In Hostinger:

1. Go: **Domains**
2. Select your domain
3. Set DNS to point to Hostinger servers
4. Enable **SSL Certificate** (Free Let's Encrypt)
5. Wait 5-10 minutes for activation

---

## 📤 PHASE 4: DEPLOY VIA FILE MANAGER (Easiest Method)

### Step 4.1: Upload Files via File Manager

In Hostinger Control Panel:

1. Go: **Hosting** → **Manage** → **File Manager**
2. Navigate to the root directory shown in Node.js Application settings
3. Delete any existing `node_modules` or `.next` folders
4. Upload all files from `C:\Projects\Hostinger-Deployment\`:
   - **app/** (drag entire folder)
   - **components/** (drag entire folder)
   - **lib/** (drag entire folder)
   - **public/** (drag entire folder)
   - **scripts/** (drag entire folder)
   - **package.json**
   - **server.js**
   - **next.config.mjs**
   - **.env.production**
   - **hostinger.json**
   - All other config files

### Step 4.2: Build on Hostinger Server

In Hostinger:

1. Go: **Hosting** → **Manage** → **Terminal** (or SSH)
2. Run these commands:

```bash
# Navigate to application root
cd /home/yourusername/public_html  # or path shown

# Install dependencies
npm install

# Build the application
npm run build

# Verify build
ls -la .next
```

Wait for both commands to complete (usually 3-5 minutes total).

### Step 4.3: Start the Application

Still in Terminal:

```bash
# Start the application
npm start

# You should see:
# ✓ Server running at http://0.0.0.0:3000
# ✓ Environment: production
```

If you see this message, deployment succeeded! 

**If it shows error**, see troubleshooting below.

---

## ✅ VERIFICATION STEPS

### Step 1: Check Application Status

In Hostinger Terminal:
```bash
pm2 status
```

Should show `faith-impact-forum` with status `online`.

### Step 2: Visit Your Website

Open browser and go to:
- `http://your-domain.com` (might show warning if DNS not propagated)
- Check after waiting 5-30 minutes for DNS

### Step 3: Check Console for Errors

1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for red error messages
4. Report any errors

### Step 4: Test Functionality

✓ Load homepage
✓ Click navigation links
✓ Go to /events, /faq, /register pages
✓ Test forms (if any)
✓ Check mobile view (F12 → mobile toggle)

---

## 🔧 TROUBLESHOOTING

### Issue: "Cannot find module 'next'"

**Solution:**
```bash
npm install
npm run build
```

### Issue: "Port 3000 already in use"

**Solution:** Hostinger handles this automatically, no action needed.

### Issue: Website shows 404 or blank page

**Solution:**
```bash
# Check logs
pm2 logs

# Rebuild
npm run build

# Restart
npm start
```

### Issue: Domain shows "Site not found"

**Solution:**
1. DNS hasn't propagated (wait 24-48 hours)
2. Check nameservers in domain registrar
3. Verify domain is connected in Hostinger

### Issue: Memory/CPU errors during build

**Solution:**
1. Upgrade Hostinger plan to more resources
2. Or build locally, upload built `.next` folder

---

## 📞 SUPPORT DURING DEPLOYMENT

Keep these ready:
- [ ] Hostinger login credentials
- [ ] Domain name
- [ ] Target system IP (if needed)
- [ ] Project folder location on target

---

## ✨ AFTER DEPLOYMENT CHECKLIST

- [ ] Website loads at domain
- [ ] All pages navigate correctly
- [ ] Forms work (if any)
- [ ] Images load properly
- [ ] Mobile view is responsive
- [ ] HTTPS/SSL working (green lock in browser)
- [ ] Monitor CPU/Memory in Hostinger dashboard

---

## 📝 NOTES FOR TARGET SYSTEM OWNER

Once deployed, they can:

1. **Monitor Application**: Hostinger Dashboard → Control Panel
2. **View Logs**: Terminal → `pm2 logs`
3. **Restart**: `npm start`
4. **Backup**: Hostinger Backup options
5. **Scale**: Upgrade Hostinger plan if needed

---

**Questions?** Contact deployment team during transfer session.

