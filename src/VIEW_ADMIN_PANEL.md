# 🔐 How to View Admin Panel in This Demo

Since this is a demo environment with a single entry point, follow these steps to view the admin panel:

## Quick Switch Guide

### Currently Viewing: **Main Application** (Default)

To view the **Admin Panel**, you need to temporarily change the main export.

---

## Method 1: Ask Me to Switch

Simply say:
- **"Show me the admin panel"** - I'll switch to AdminApp
- **"Back to main app"** - I'll switch back to the main platform

---

## Method 2: Manual Switch (Technical)

The main entry point currently imports:
```typescript
import App from './App';  // ← Main customer/model platform
```

To view admin, it would need to import:
```typescript
import App from './AdminApp';  // ← Admin panel
```

---

## 📦 What You're Viewing Now

**✅ Main Platform** (`App.tsx`)
- Landing page with "Models" and "Customers" options
- Model application and signup flows
- Customer registration and booking
- Model and customer dashboards
- NO admin access

**❌ Admin Panel** (`AdminApp.tsx`) - Not currently visible
- Dark themed admin login
- Admin dashboard with all management tools
- Completely separate system

---

## 🎯 In Production

These would be **completely separate deployments**:

| Application | URL | Entry Point |
|-------------|-----|-------------|
| Main Platform | `yoursite.com` | `App.tsx` |
| Admin Panel | `admin.yoursite.com` | `AdminApp.tsx` |

No switching needed - they're on different URLs!

---

## 💡 Ready to View Admin?

Just ask me: **"Switch to admin panel"** or **"Show admin"**

I'll make the change and you'll see:
- Dark themed admin login screen
- Username: `admin`
- Password: `admin123`
- Full admin dashboard with all management features
