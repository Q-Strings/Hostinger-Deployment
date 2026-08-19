# TROUBLESHOOTING GUIDE - ON-SITE SOLUTIONS

---

## COMMON ISSUES & SOLUTIONS

### Issue 1: Node.js Not Installed

**Error:** `'node' is not recognized as an internal or external command`

**Solution:**
1. Visit: https://nodejs.org/
2. Download LTS version (18+)
3. Run installer on their computer
4. Complete installation
5. Restart PowerShell (close and reopen)
6. Run: `node --version` again

**Time:** 5-10 minutes

---

### Issue 2: npm install Fails

**Error:** `ERR! code` or `Cannot find module`

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules if exists
rm -r node_modules

# Try install again
npm install
```

**If still fails:**
- [ ] Check internet connection
- [ ] Try again (sometimes just needs retry)
- [ ] Proceed to build anyway (might work)

**Time:** 2 minutes

---

### Issue 3: npm run build Fails

**Error:** `JavaScript heap out of memory` or build errors

**Solution:**

**Option A (Quick):**
```bash
# Try building again
npm run build
```

**Option B (If still fails):**
- Continue to `npm start` anyway
- It might run despite build errors

**Option C (Last resort):**
- Ask them to restart their laptop
- Try build again after restart

**Time:** 5 minutes

---

### Issue 4: Files Won't Upload to Hostinger

**Error:** Upload fails in File Manager

**Solution:**

**Try Again:**
1. Refresh File Manager (F5)
2. Try uploading again
3. Try one file at a time

**If Still Fails:**
- Uploading via Terminal is backup (more complex)
- At least upload package.json and server.js
- Then try: `npm install` on server
- It might auto-download other files

**Time:** 5-10 minutes

---

### Issue 5: Terminal Connection Issues

**Error:** Can't connect to Hostinger Terminal/SSH

**Solution:**
1. Refresh browser (F5)
2. Click Terminal again
3. Wait 10 seconds for connection
4. If still fails, try File Manager upload method instead

**Time:** 2-3 minutes

---

### Issue 6: npm start Fails

**Error:** `Port 3000 already in use` or other error

**Solution:**

**If port issue:**
- This is NORMAL on Hostinger
- The app still works
- Don't worry

**If other error:**
- Note the exact error message
- Try again: `npm start`
- Check console output for clues

**If keeps failing:**
- Check Terminal for other processes running
- Ask them to restart Hostinger account
- Or proceed with what you have

**Time:** 2-5 minutes

---

### Issue 7: Website Shows 404 or Blank Page

**Error:** Browser shows "404 Not Found" or blank page

**Solution:**

**Most likely:** DNS hasn't propagated yet

**What to do:**
1. Note the current time
2. Wait 5-10 minutes
3. Refresh browser (Ctrl+F5)
4. Try again

**DNS can take:** 5 minutes to 48 hours (typically 30 min)

**Alternative checks:**
- Try different browser
- Try incognito/private window
- Try from different device (phone on WiFi)

**Time:** Wait, then 1 minute

---

### Issue 8: Website Loads but Shows Errors

**Error:** Website loads but something doesn't work

**Solution:**
1. Press **F12** (open DevTools)
2. Click **Console** tab
3. Look for RED error messages
4. Take screenshot of errors
5. Note what's not working
6. This is normal - app still deployed
7. Errors can be fixed later

**Time:** 2 minutes (just document it)

---

### Issue 9: Terminal Output Confusing

**Error:** Too much text in terminal, don't know what's happening

**Solution:**
1. Press **Ctrl+L** to clear terminal
2. Re-run the command slowly
3. Read the output line by line
4. If see "successfully" → good
5. If see "error" in red → bad

**Common success keywords:** ✓
- "successfully"
- "compiled"
- "added XXX packages"
- "Server running"

**Common error keywords:** ✗
- "error"
- "failed"
- "Cannot find"
- "ERR!"

**Time:** 1-2 minutes

---

### Issue 10: Need to Stop npm start

**If:** You ran `npm start` but need to stop it

**Solution:**
1. Click in terminal window
2. Press: **Ctrl + C**
3. Terminal should show: `^C` and return to prompt
4. To restart: `npm start` again

**Time:** 5 seconds

---

## SEVERITY LEVELS

### 🟢 GREEN - Can Continue
- npm install fails (usually works on retry)
- Build has minor errors
- DNS not propagated yet
- First time npm start fails

**Action:** Keep going, likely will resolve

### 🟡 YELLOW - Proceed Carefully
- Some files won't upload
- Terminal connection issues
- Website loads but with errors
- npm start shows warnings

**Action:** Document issues, but deployment may still work

### 🔴 RED - Major Issue
- Can't install Node.js
- Can't upload ANY files
- Terminal completely unresponsive
- Website completely broken/won't load after 30 minutes

**Action:** Document everything, may need to retry later

---

## WHEN TO GIVE UP (Short-term)

If you've been troubleshooting for 30+ minutes and:
- [ ] Terminal won't connect
- [ ] Files won't upload
- [ ] npm won't work at all

**Then:**
1. Document all errors/screenshots
2. Leave everything set up as far as you can
3. Explain to them: "We got as far as X, try Y later"
4. You can revisit later or via remote support

**This is NOT failure** - deployment is complex and sometimes needs retry

---

## POSITIVE SIGNS DESPITE ERRORS

Even if errors are shown, deployment might still be working:

✓ `npm start` ran and didn't quit
✓ Terminal shows "Server running"
✓ Website loads at domain (even if slow)
✓ Some pages work even if others have errors
✓ Browser shows HTTPS/green lock

= **DEPLOYMENT PARTIALLY/FULLY SUCCEEDED**

---

## DOCUMENTATION DURING TROUBLESHOOTING

**Always write down:**

Error message exactly as shown:
_________________________________________________________________

When it occurred (which phase):
_________________________________________________________________

What you tried to fix it:
_________________________________________________________________

Did any solution help? YES / NO / PARTIALLY
_________________________________________________________________

Current status:
_________________________________________________________________

---

## QUICK DECISION TREE

```
Problem?
  → npm install fails
    → npm cache clean --force && npm install
    → If still fails, continue anyway
  → npm run build fails
    → npm install && npm run build
    → If still fails, continue anyway
  → npm start fails
    → Try again
    → If "Port in use" - don't worry
    → If other error - note and continue
  → Files won't upload
    → Try one more time slowly
    → Or skip and proceed with Terminal upload
  → Website won't load
    → Wait 10 minutes (DNS)
    → Refresh browser (Ctrl+F5)
    → Check from different device
  → Still stuck?
    → Document everything
    → Leave setup as-is
    → Can retry later or get remote help
```

---

## WHEN EVERYTHING WORKS

**You'll see:**

✓ `npm start` outputs "Server running at http://0.0.0.0:3000"
✓ Website loads at https://domain.com
✓ Pages navigate without errors
✓ No red errors in browser console (F12)
✓ Mobile view looks good (Ctrl+Shift+M)
✓ HTTPS lock shows green

= **SUCCESS! 🎉 LEAVE TERMINAL RUNNING!**

---

## AFTER DEPLOYMENT

**If working, explain to them:**

1. **Keep terminal running** - or Hostinger auto-restarts via PM2
2. **If it stops**, they can restart with:
   ```bash
   npm start
   ```
3. **Monitor website** for first 24 hours
4. **Contact Hostinger support** if major issues
5. **Keep these files** in case they need to redeploy

---

## SUPPORT RESOURCES

Before giving up, check:
- Hostinger Support: https://support.hostinger.com
- Node.js: https://nodejs.org/docs
- Npm: https://docs.npmjs.com
- Next.js: https://nextjs.org/docs

Google search: `[error message] hostinger` often helps!

---

**Remember:** Most issues have simple solutions.
**Read error messages carefully!**
**Retry failed steps - often they just work second time.**

**Good luck! 🚀**
