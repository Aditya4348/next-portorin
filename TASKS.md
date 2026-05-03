# 🚀 TASK MANAGEMENT - Next Portorin Project

**Project Type:** Next.js 16 Portfolio Website dengan Admin Panel  
**Tech Stack:** Next.js, Prisma, PostgreSQL/MySQL, Supabase, TanStack Query, Tailwind CSS  
**Status:** Dalam Pengembangan  
**Last Updated:** 2026-05-01

---

## 📋 PRIORITAS PEKERJAAN

### **PHASE 1: FOUNDATION & SETUP** ⚙️
Tahap ini untuk memastikan project siap production-ready

#### Task 1.1: Fix Database Connection & Prisma Schema ⭐ **START HERE**
- [ ] **Priority:** 🔴 CRITICAL
- [ ] **Files to Check:**
  - `prisma/schema.prisma` - Datasource masih undefined (MySQL/PostgreSQL?)
  - `.env.local` - Setup DATABASE_URL
  - `lib/prisma.ts` - Verify client initialization
- **Pekerjaan:**
  - Tentukan database yang akan digunakan (PostgreSQL/MySQL)
  - Update `datasource db` di schema.prisma dengan provider yang tepat
  - Setup connection string di `.env.local`
  - Jalankan `prisma migrate dev --name init` untuk membuat migration pertama
  - Test koneksi dengan `prisma studio`
- **Status:** DONE

#### Task 1.2: Fix Password Security Issue
- [ ] **Priority:** 🔴 CRITICAL
- [ ] **Issue:** Passwords disimpan plain-text di database (lihat: `app/api/auth/login/route.ts`)
- **Pekerjaan:**
  - Update login route untuk hash password dengan bcryptjs
  - Buat migration untuk update kolom password existing users
  - Implementasi password validation yang lebih ketat
  - Add password strength requirements
- **Files:** `app/api/auth/login/route.ts`, prisma migrations
- **Status:** DONE

#### Task 1.3: Setup Environment Variables
- [ ] **Priority:** 🔴 CRITICAL
- **Pekerjaan:**
  - Buat `.env.local` dengan semua required variables:
    ```
    DATABASE_URL=
    JWT_SECRET=
    NEXT_PUBLIC_SUPABASE_URL=
    NEXT_PUBLIC_SUPABASE_ANON_KEY=
    SUPABASE_SERVICE_ROLE_KEY=
    ```
  - Buat `.env.example` untuk dokumentasi
  - Add .env.local ke .gitignore (jika belum)
- **Status:** DONE

---

### **PHASE 2: AUTHENTICATION & USER MANAGEMENT** 🔐
Lengkapi sistem autentikasi

#### Task 2.1: Complete Login API ✅ Partially Done
- [ ] **Priority:** 🟠 HIGH
- [ ] **Status:** Partially implemented
- **Pekerjaan:**
  - Complete error handling di login endpoint
  - Add rate limiting untuk prevent brute force
  - Add token validation middleware
  - Implement refresh token mechanism (optional)
- **Files:** `app/api/auth/login/route.ts`
- **Status:** 50% selesai

#### Task 2.2: Implement Logout API
- [ ] **Priority:** 🟠 HIGH
- [ ] **Files:** `app/api/auth/logout/route.ts`
- **Pekerjaan:**
  - Implement token invalidation logic
  - Clear cookies/tokens dari client
  - Add redirect logic
- **Status:** ❌ File exists tapi kosong

#### Task 2.3: Implement Get User API
- [ ] **Priority:** 🟠 HIGH
- [ ] **Files:** `app/api/auth/user/route.ts`
- **Pekerjaan:**
  - Verify JWT token dari request
  - Return user data
  - Add error handling untuk invalid tokens
- **Status:** ❌ File exists tapi kosong

#### Task 2.4: Complete AuthContext Hook
- [ ] **Priority:** 🟠 HIGH
- [ ] **Files:** `context/AuthContext.tsx`
- **Pekerjaan:**
  - Complete useAuth hook implementation
  - Add logout mutation
  - Add error handling & loading states
  - Integrate dengan TanStack Query properly
  - Test di admin login page
- **Status:** 50% selesai

#### Task 2.5: Create Admin Login Page
- [ ] **Priority:** 🟠 HIGH
- [ ] **Files:** `app/[locale]/adminkelola/login/page.tsx`
- **Pekerjaan:**
  - Build login form dengan validation
  - Integrate dengan AuthContext
  - Add error messages & loading states
  - Redirect ke dashboard setelah login berhasil
  - Implement "remember me" feature (optional)
- **Status:** ❌ File exists tapi kosong

#### Task 2.6: Setup Protected Routes Middleware
- [ ] **Priority:** 🟠 HIGH
- **Pekerjaan:**
  - Create middleware untuk protect admin routes
  - Verify JWT token di setiap request admin
  - Redirect unauthenticated users ke login
  - Add role-based access control (jika diperlukan)
- **Files:** `middleware.ts` (buat baru)
- **Status:** ❌ Belum dimulai

---

### **PHASE 3: ADMIN PANEL - CONTENT MANAGEMENT** 📝
Implementasi admin panel untuk manage content

#### Task 3.1: Admin Dashboard Overview
- [ ] **Priority:** 🟠 HIGH
- [ ] **Files:** `app/[locale]/adminkelola/page.tsx`
- **Pekerjaan:**
  - Create dashboard layout dengan navigation
  - Display statistics: total projects, blogs, organizations
  - Add quick actions untuk create new content
  - Add recent activity log
- **Status:** ❌ File exists tapi kosong

#### Task 3.2: Projects Management
- [ ] **Priority:** 🟠 HIGH
- **Pekerjaan:**
  - **Create:** Form untuk tambah project baru
    - `app/[locale]/adminkelola/projects/create/page.tsx`
  - **Read:** List view semua projects dengan filter & search
    - `app/[locale]/adminkelola/projects/page.tsx`
  - **Update:** Edit form untuk update project
    - `app/[locale]/adminkelola/projects/[id]/edit/page.tsx`
  - **Delete:** Delete confirmation dengan soft delete (optional)
  - Manage project stacks/technologies
  - Upload project thumbnail/images
- **API Endpoints needed:**
  - `GET /api/projects` - List projects
  - `POST /api/projects` - Create project
  - `GET /api/projects/[id]` - Get single project
  - `PUT /api/projects/[id]` - Update project
  - `DELETE /api/projects/[id]` - Delete project
- **Status:** ❌ Belum dimulai

#### Task 3.3: Blog Management
- [ ] **Priority:** 🟠 HIGH
- **Pekerjaan:**
  - **Create:** Form untuk write/publish blog
    - Rich text editor integration (Markdown/WYSIWYG)
  - **Read:** List view blogs dengan filter by category
  - **Update:** Edit existing blog post
  - **Delete:** Delete blog post
  - Category management (CRUD categories)
  - Featured/pinned posts (optional)
  - SEO optimization fields (slug, excerpt, etc)
- **API Endpoints needed:**
  - `GET /api/blogs` - List blogs
  - `POST /api/blogs` - Create blog
  - `GET /api/blogs/[id]` - Get single blog
  - `PUT /api/blogs/[id]` - Update blog
  - `DELETE /api/blogs/[id]` - Delete blog
  - `/api/categories/*` - Category CRUD
- **Status:** ❌ Belum dimulai

#### Task 3.4: Organizations (Work Experience) Management
- [ ] **Priority:** 🟠 HIGH
- **Pekerjaan:**
  - Create form untuk tambah/edit organization
  - Manage period & role information
  - Add descriptions (short & full)
  - Gallery management (upload/delete images)
  - Impact/achievements tracking
- **API Endpoints needed:**
  - `GET /api/organizations` - List
  - `POST /api/organizations` - Create
  - `PUT /api/organizations/[id]` - Update
  - `DELETE /api/organizations/[id]` - Delete
  - `/api/organizations/[id]/gallery/*` - Gallery management
- **Status:** ❌ Belum dimulai

#### Task 3.5: Image Upload & Storage
- [ ] **Priority:** 🟠 HIGH
- **Pekerjaan:**
  - Setup Supabase Storage bucket
  - Create upload utility function
  - Implement image compression/optimization
  - Handle image validation (size, format, dimensions)
  - Create reusable upload component
- **Files:** `lib/supabase/storage.ts` (buat baru)
- **Status:** ❌ Belum dimulai

---

### **PHASE 4: PUBLIC PAGES - FRONTEND** 🎨
Lengkapi halaman public yang sudah ada

#### Task 4.1: Home/Hero Page
- [ ] **Priority:** 🟡 MEDIUM
- [ ] **Files:** `app/[locale]/(public)/page.tsx`
- **Pekerjaan:**
  - Review & improve HeroSection component
  - Add call-to-action buttons
  - Add social links/contact methods
  - Implement scroll animations
  - Mobile responsive optimization
- **Status:** ❓ Check current state

#### Task 4.2: Projects Page
- [ ] **Priority:** 🟡 MEDIUM
- [ ] **Files:** `app/[locale]/(public)/work/projects/page.tsx`
- **Pekerjaan:**
  - Fetch projects dari API menggunakan TanStack Query
  - Implement project grid/list layout
  - Add filters (by technology, complexity)
  - Add search functionality
  - Project card dengan preview & link ke detail page
  - Implement pagination/infinite scroll
- **Components needed:** `components/ProjectCard.tsx` (if not exists)
- **Status:** ❌ Belum dimulai

#### Task 4.3: Project Detail Page
- [ ] **Priority:** 🟡 MEDIUM
- [ ] **Files:** `app/[locale]/(public)/work/projects/[slug]/page.tsx`
- **Pekerjaan:**
  - Fetch project detail dari API
  - Display full project description
  - Show technologies/stack used
  - Add problem/solution section
  - Add lessons learned
  - Add project images/gallery
  - Add "View Live" & "GitHub" links
  - Related projects suggestion
- **Status:** ❌ Belum dimulai

#### Task 4.4: Blog Page
- [ ] **Priority:** 🟡 MEDIUM
- [ ] **Files:** `app/[locale]/(public)/blog/page.tsx`
- **Pekerjaan:**
  - Fetch blogs dari API
  - Implement blog grid/list with pagination
  - Add category filter
  - Add search functionality
  - Blog card preview (excerpt + reading time)
  - Sort options (newest/oldest/popular)
- **Components:**
  - Update/fix `BlogGrid.tsx`
- **Status:** ❓ Partially exists

#### Task 4.5: Blog Detail Page
- [ ] **Priority:** 🟡 MEDIUM
- [ ] **Files:** `app/[locale]/(public)/blog/[slug]/page.tsx`
- **Pekerjaan:**
  - Fetch blog content dari API
  - Render markdown/rich text content
  - Display author, date, reading time, categories
  - Add table of contents (optional)
  - Add related/suggested blog posts
  - Implement comments section (optional)
  - Add share buttons
- **Status:** ❌ Belum dimulai

#### Task 4.6: Work Experience Page
- [ ] **Priority:** 🟡 MEDIUM
- [ ] **Files:** `app/[locale]/(public)/work/page.tsx`
- **Pekerjaan:**
  - Fetch organizations dari API
  - Display timeline atau list view
  - Show role, period, description
  - Add gallery for each organization
  - Add achievements/impact section
  - Implement filters/sort by period
- **Components:** Review/update `Experience.tsx`
- **Status:** ❓ Partially exists

#### Task 4.7: About Page
- [ ] **Priority:** 🟡 MEDIUM
- [ ] **Files:** `app/[locale]/(public)/about/page.tsx`
- **Pekerjaan:**
  - Write about section content
  - Add skills/expertise list
  - Add educational background
  - Add certifications (optional)
  - Add download CV button
  - Add profile image/photo
- **Status:** ❓ Check current state

#### Task 4.8: Contact Page & Form
- [ ] **Priority:** 🟡 MEDIUM
- [ ] **Files:** `app/[locale]/(public)/contact/page.tsx`
- **Pekerjaan:**
  - Review & complete `formContact.tsx`
  - Add form validation
  - Add email notification system (SendGrid/Resend)
  - Store submissions di database (optional)
  - Add success/error messages
  - Add rate limiting untuk prevent spam
- **API Endpoint needed:** `POST /api/contact` atau `/api/emails/send`
- **Status:** ❓ Partially exists

#### Task 4.9: Lab/Experiments Page
- [ ] **Priority:** 🟢 LOW
- [ ] **Files:** `app/[locale]/(public)/lab/page.tsx`
- **Pekerjaan:**
  - Define apa yang akan ditampilkan di lab section
  - Create reusable component untuk experiments
  - Add interactive demos (optional)
  - Update `LabSection.tsx`
- **Status:** ❓ Check current state

---

### **PHASE 5: INTERNATIONALIZATION & NAVIGATION** 🌐
Setup multi-language support

#### Task 5.1: Verify i18n Configuration
- [ ] **Priority:** 🟡 MEDIUM
- **Files:** `i18n/*`, `messages/`
- **Pekerjaan:**
  - Check i18n routing setup (`navigation.ts`, `routing.ts`, `request.ts`)
  - Verify message files (`en.json`, `id.json`)
  - Test language switching
  - Check locale propagation di semua pages
- **Status:** ❓ Check current state

#### Task 5.2: Translate Content & UI Strings
- [ ] **Priority:** 🟡 MEDIUM
- **Pekerjaan:**
  - Add all UI strings ke message files
  - Translate untuk minimal 2 languages (ID & EN)
  - Add missing translations
  - Test language switching di semua pages
- **Files:** `messages/en.json`, `messages/id.json`
- **Status:** ❌ Probably incomplete

#### Task 5.3: Update Navigation Component
- [ ] **Priority:** 🟡 MEDIUM
- [ ] **Files:** `components/Navbar.tsx`, `components/admin/AdminNavigation.tsx`
- **Pekerjaan:**
  - Add language switcher dropdown
  - Fix navigation links untuk match route structure
  - Add active state highlighting
  - Mobile menu/hamburger implementation
  - Update breadcrumbs jika diperlukan
- **Status:** ❓ Check current state

---

### **PHASE 6: FEATURES & ENHANCEMENTS** ✨
Feature tambahan & optimasi

#### Task 6.1: Implement TanStack Query Hooks
- [ ] **Priority:** 🟡 MEDIUM
- **Pekerjaan:**
  - Create custom hooks untuk fetch:
    - `useProjects()` - Fetch all projects
    - `useProject(id)` - Fetch single project
    - `useBlogs()` - Fetch all blogs
    - `useBlog(id)` - Fetch single blog
    - `useOrganizations()` - Fetch all organizations
  - Add error handling & loading states
  - Implement refetch/invalidation logic
  - Setup query caching strategy
- **Files:** `hooks/queries.ts` (buat baru)
- **Status:** ❌ Belum dimulai

#### Task 6.2: Search & Filter Implementation
- [ ] **Priority:** 🟡 MEDIUM
- **Pekerjaan:**
  - Implement search functionality untuk Projects & Blogs
  - Add filter by category, tags, technology
  - Add sorting options
  - Implement URL query params untuk persistent filters
  - Add debouncing untuk search input
- **Status:** ❌ Belum dimulai

#### Task 6.3: SEO Optimization
- [ ] **Priority:** 🟡 MEDIUM
- **Pekerjaan:**
  - Add metadata untuk setiap page (`generateMetadata`)
  - Add open graph tags untuk social sharing
  - Create sitemap (`sitemap.xml`)
  - Add robots.txt
  - Optimize images dengan next/image
  - Add JSON-LD structured data
- **Status:** ❌ Belum dimulai

#### Task 6.4: Performance Optimization
- [ ] **Priority:** 🟡 MEDIUM
- **Pekerjaan:**
  - Implement image optimization dengan next/image
  - Add code splitting & lazy loading
  - Optimize bundle size
  - Add caching headers
  - Implement incremental static regeneration (ISR)
  - Monitor Core Web Vitals
- **Status:** ❌ Belum dimulai

#### Task 6.5: Dark Mode Support (Optional)
- [ ] **Priority:** 🟢 LOW
- **Pekerjaan:**
  - Add dark mode toggle
  - Persist theme preference
  - Update Tailwind CSS untuk dark mode
- **Status:** ❌ Belum dimulai

---

### **PHASE 7: DEPLOYMENT & DEVOPS** 🚀
Persiapan production

#### Task 7.1: Environment & Configuration
- [ ] **Priority:** 🟠 HIGH
- **Pekerjaan:**
  - Setup production database
  - Configure environment variables untuk production
  - Setup CI/CD pipeline (GitHub Actions/Vercel)
  - Configure logging & monitoring
- **Status:** ❌ Belum dimulai

#### Task 7.2: Build & Testing
- [ ] **Priority:** 🟠 HIGH
- **Pekerjaan:**
  - Run full build test (`npm run build`)
  - Setup unit tests (Jest/Vitest)
  - Setup integration tests
  - Fix any build errors/warnings
- **Status:** ❌ Belum dimulai

#### Task 7.3: Deployment
- [ ] **Priority:** 🟠 HIGH
- **Pekerjaan:**
  - Deploy ke Vercel/production server
  - Test semua functionality di production
  - Setup monitoring & error tracking (Sentry)
  - Setup analytics
  - Configure CDN for static assets
- **Status:** ❌ Belum dimulai

---

## 🎯 RECOMMENDED WORKFLOW

### ⏰ Week 1-2: Foundation
1. ✅ Task 1.1 - Fix Database & Prisma
2. ✅ Task 1.2 - Fix Password Security
3. ✅ Task 1.3 - Setup Environment Variables
4. ✅ Task 2.1-2.6 - Complete Auth System

### ⏰ Week 3-4: Admin Panel
5. ✅ Task 3.1 - Admin Dashboard
6. ✅ Task 3.2 - Projects Management
7. ✅ Task 3.3 - Blog Management
8. ✅ Task 3.4 - Organizations Management
9. ✅ Task 3.5 - Image Upload

### ⏰ Week 5-6: Public Pages
10. ✅ Task 4.1-4.9 - Complete Public Pages
11. ✅ Task 6.1 - Setup React Query Hooks

### ⏰ Week 7: I18n & Polish
12. ✅ Task 5.1-5.3 - i18n & Navigation
13. ✅ Task 6.2-6.5 - Features & Enhancements

### ⏰ Week 8: Deployment
14. ✅ Task 7.1-7.3 - Deployment & Production

---

## 📊 DEPENDENCY GRAPH

```
Phase 1 (Foundation)
    ↓
Phase 2 (Auth) + Phase 3 (Admin Panel)
    ↓
Phase 4 (Public Pages)
    ↓
Phase 5 (i18n) + Phase 6 (Features)
    ↓
Phase 7 (Deployment)
```

---

## 📝 QUICK CHECKLIST

- [ ] Database connection established
- [ ] JWT & password security implemented
- [ ] Admin login working
- [ ] Admin dashboard created
- [ ] CRUD operations for Projects, Blogs, Organizations
- [ ] All public pages populated with data
- [ ] i18n working across all pages
- [ ] Search & filter functionality
- [ ] SEO optimized
- [ ] Build passes without errors
- [ ] Deployed to production
- [ ] Monitoring & analytics active

---

## 🔗 USEFUL COMMANDS

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run lint            # Lint code

# Prisma
npx prisma migrate dev --name <name>  # Create migration
npx prisma studio      # Open Prisma Studio GUI
npx prisma db push     # Push schema to DB

# Database
mysql -u root -p <database_name>     # MySQL CLI
psql -U <user> -d <database_name>    # PostgreSQL CLI
```

---

## 📚 RESOURCES & REFERENCES

- Next.js Docs: https://nextjs.org/docs
- Prisma Docs: https://www.prisma.io/docs
- TanStack Query Docs: https://tanstack.com/query/latest
- Next-intl: https://next-intl-docs.vercel.app
- Tailwind CSS: https://tailwindcss.com/docs
- Supabase: https://supabase.com/docs
- JWT: https://jwt.io

---

**Last Checked:** 2026-05-01  
**By:** Code Analysis  
**Status:** Ready for Phase 1 Start ✅
