# GitHub Pages Deployment Checklist

## ✅ What's Been Fixed

1. **Router Configuration**: Added `basename="/prj1"` to match your repository path
2. **404 Handling**: Added 404.html and redirect script for client-side routing
3. **Error Boundary**: Added global error boundary to catch and display errors
4. **Supabase Fallback**: App won't crash if Supabase env vars are missing
5. **Debug Logging**: Added console logs to verify environment variables

## 🔧 GitHub Repository Settings

### 1. Enable GitHub Pages
- Go to **Settings** → **Pages**
- Under "Build and deployment", set **Source** to **GitHub Actions**

### 2. Verify Repository Secrets
Make sure these are set in **Settings** → **Secrets and variables** → **Actions**:
- ✅ `VITE_SUPABASE_URL`
- ✅ `VITE_SUPABASE_ANON_KEY`

### 3. Check Branch Name
The workflow deploys from the `main` branch. If your default branch is different (e.g., `master`), update `.github/workflows/deploy.yml` line 6.

## 🚀 Deployment Steps

1. **Commit and push all changes**:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. **Monitor the deployment**:
   - Go to the **Actions** tab in your repository
   - Watch the "Deploy to GitHub Pages" workflow run
   - Check for any errors in the workflow logs

3. **Check the build output**:
   - In the Actions log, look for the "Build with Supabase credentials" step
   - The console should show: "Supabase Config Check: { hasUrl: true, hasKey: true, ... }"
   - If it shows `false`, your secrets aren't configured correctly

4. **Access your site**:
   - After successful deployment: `https://yourusername.github.io/prj1/`
   - Or check the URL in the deployment step output

## 🐛 Debugging White Screen

If you still see a white screen:

1. **Open browser console** (F12 or Right-click → Inspect → Console)
2. **Look for the Supabase Config Check log**:
   - Should show: `{ hasUrl: true, hasKey: true, urlPrefix: 'https://...' }`
   - If false, your secrets aren't being injected during build

3. **Check for errors**:
   - Any red error messages in the console?
   - The error boundary should catch and display them

4. **Verify the workflow ran**:
   - Check the Actions tab for successful workflow completion
   - Look at the build logs for any errors

## 🔍 Common Issues

### Issue: Secrets showing as `false` in console
**Solution**:
- Verify secrets are named exactly: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Re-run the workflow from the Actions tab

### Issue: 404 on page refresh
**Solution**: Already handled with 404.html redirect

### Issue: Assets not loading
**Solution**: Already configured with `base: '/prj1/'` in vite.config.ts

### Issue: Different repository name
**Solution**: Update both:
- `vite.config.ts`: Change `base: '/prj1/'` to `base: '/your-repo-name/'`
- `src/App.tsx`: Change `basename="/prj1"` to `basename="/your-repo-name"`

## 📝 Next Steps

Once deployed successfully:
1. Test all pages work (Home, Services, Clients, About, Contact)
2. Verify database content loads on Services and Clients pages
3. Remove debug console.log from `src/lib/supabase.ts` if desired
4. Update the site title in `index.html` if needed
