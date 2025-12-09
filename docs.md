= Universal SvelteKit Modular Architecture Guide
:toc:
:toclevels: 4

== 1. Purpose

This document defines a universal, reusable, and scalable architecture pattern for SvelteKit applications.
It enforces:

- Fully modular page-based structure
- Strict TypeScript with zero `any`
- Clear separation between modules and shared logic
- Predictable naming conventions
- Maintainable and extensible project layout
- No circular dependencies

Each module corresponds to exactly *one page*.

== 2. Project Structure Overview

src/
lib/
modules/      ← independent modules (each = a page)
shared/       ← reusable logic across modules
routes/         ← page routing layer (imports module pages only)
static/           ← public assets

== 3. Module Structure Rules

A module represents one page and is placed under:

src/lib/modules/<kebab-case>/

=== 3.1 Mandatory Files in Every Module

<ModuleName>Page.svelte   ← main UI file for the module
store.ts                  ← typed writable store (module state)
service.ts                ← state manipulation only (UI cannot modify store)
types.ts                  ← UI-specific state types for the module
values.ts                 ← default state values
components/               ← components used only by this module

=== 3.2 Example Structure

modules/home/
HomePage.svelte
store.ts
service.ts
types.ts
values.ts
components/
FeatureCard.svelte

=== 3.3 Module Restrictions

- Modules must not import other modules.
- Modules may import only:
    - their own files, or
    - src/lib/shared/*
- UI must never mutate the store directly:
    - do NOT use store.set()
    - do NOT use store.update()
    - reading via $store is allowed
    - mutation ONLY through service functions

== 4. Shared Folder Rules

The shared/ folder contains all reusable, cross-module logic.

src/lib/shared/
types/
utils/
constants/
components/
data/

=== 4.1 shared/types

Reusable domain types shared by multiple modules:

types/User.ts
types/Product.ts
types/Category.ts
types/Location.ts

Module-level state types remain inside their own module.

=== 4.2 shared/utils

General-purpose utility functions:

utils/slug.ts
utils/validator.ts
utils/format.ts

=== 4.3 shared/constants

constants/colors.ts
constants/config.ts
constants/options.ts

=== 4.4 shared/components

components/Footer.svelte
components/Navbar.svelte
components/Button.svelte
components/Modal.svelte

=== 4.5 shared/data

data/categories.json
data/sample.json

== 5. Route Rules

Each route page:

src/routes/<module>/+page.svelte

Must contain only:

<script>
  import ModulePage from "$lib/modules/<module>/<ModuleName>Page.svelte";
</script>

<ModulePage />

No logic is allowed inside route files.

== 6. TypeScript & ESLint Rules

=== 6.1 TypeScript Strict Mode

The following rules must be enforced:

"strict": true,
"noImplicitAny": true

=== 6.2 No any Allowed

- All props must be typed.
- All services must return typed values.
- All JSON must map to corresponding domain types.
- Implicit any is forbidden.

=== 6.3 Domain Types Must Live in shared/types

Correct:

import type { User } from "$lib/shared/types/User";

Incorrect:

interface User { ... }   // redefined in multiple modules — forbidden

== 7. Static Folder Rules

static/
images/
data/
geo/
*.json

Assets are loaded via:

fetch("/data/file.json")

== 8. Naming Conventions

Entity                      | Format                     | Example
--------------------------- | -------------------------- | -----------------------------------
Module folder              | kebab-case                 | user-profile
Module page                | PascalCase + Page          | UserProfilePage.svelte
Store factory              | camelCase                  | createUserProfileStore()
Store instance             | camelCase + use prefix     | useUserProfile
Module UI state            | PascalCase + State         | UserProfileState
Shared domain types        | PascalCase                 | User, Product, Category

== 9. Example Module Template

src/lib/modules/example/
ExamplePage.svelte
store.ts
service.ts
types.ts
values.ts
components/
ExampleCard.svelte

== 10. Architecture Principles

- One module corresponds to one page.
- Shared folder contains all cross-module logic.
- Module page files are UI-only.
- All store mutations must go through services.
- No circular imports allowed.
- No any.
- Predictable, reusable structure for multiple projects.
- Scales well for large applications.

== 11. Summary for AI Assistant

Use this summary when generating or reviewing code:

Universal SvelteKit Modular Rules:
- Every page is a module in src/lib/modules/<name>/.
- Each module includes: <Name>Page.svelte, store.ts, service.ts, types.ts, values.ts, and components/.
- UI cannot modify the store directly; services handle all updates.
- Routes only load the module page.
- Shared logic lives in src/lib/shared/.
- Modules must not import one another.
- Domain types go in shared/types.
- TypeScript strict mod




# UI Architecture & Styling Rules
# (for all SvelteKit modular projects)

This document defines universal UI guidelines to ensure consistent, modern, intuitive, and maintainable user interfaces across all modules and pages.

-------------------------------------------------------------------
## 1. UI Framework Requirements
-------------------------------------------------------------------

- Use **TailwindCSS** for all utility styles.
- Use **DaisyUI** for components, variants, and theming.
- Prefer DaisyUI theme tokens such as:
    - `bg-primary`, `bg-secondary`, `bg-accent`
    - `text-primary`, `text-base-content`
    - `btn-primary`, `btn-secondary`, etc.
- Avoid hard-coded colors unless absolutely necessary.
- Prefer semantic colors based on theme.

-------------------------------------------------------------------
## 2. Layout Guidelines
-------------------------------------------------------------------

- UI must follow **modern clean design principles**:
    - spacious sections
    - consistent vertical rhythm
    - predictable grids
    - clear hierarchy
    - minimal clutter
    - readable typography

- Each page should be split into clear **vertical sections**, e.g.:
    - Hero / Header
    - Feature area / Grid
    - Content body
    - Sidebar (optional)
    - Footer

- Always maintain consistent spacing rules:
    - outer container padding: `px-4 md:px-6 lg:px-10`
    - section spacing: `py-10 md:py-14`

- Avoid cramming components together.
- Use gaps:
    - `gap-4`, `gap-6`, or `gap-8`
- Avoid pixel-based custom values unless truly required.

-------------------------------------------------------------------
## 3. Responsive Design Rules
-------------------------------------------------------------------

- All pages must support:
    - mobile first layout
    - tablet layout
    - desktop & wide-screen layout

- Use recommended breakpoints:
    - `sm`, `md`, `lg`, `xl`, `2xl`

- Grid rules:
    - mobile: 1 column
    - tablet: 2 columns if appropriate
    - desktop: 3–4 columns

- Sidebar rules:
    - collapsible on mobile
    - inline on desktop

- Images:
    - must be responsive: `w-full h-auto`
    - never hard-coded width unless within a component container

-------------------------------------------------------------------
## 4. Section Componentization Rules
-------------------------------------------------------------------

- Each major visual section of a Page must be extracted into its own component located under:

  `src/lib/modules/<module>/components/`

- Section components should be named clearly:
    - HeroSection.svelte
    - ListSection.svelte
    - DetailSection.svelte
    - SidebarSection.svelte
    - FooterSection.svelte

- Each section component must:
    - be self-contained
    - receive only the props it needs
    - not import module stores directly unless required
    - include comments describing its role

-------------------------------------------------------------------
## 5. Component Structure & Code Rules
-------------------------------------------------------------------

### 5.1 Required component code structure:


- Always keep `<script>` at the top.
- Comment every logical block with **clear English descriptions**.

### 5.2 Tailwind usage rules:

- Utility-first, avoid custom CSS unless needed.
- Prefer these patterns:
    - spacing: `p-4`, `py-6`, `mt-10`
    - typography: `text-xl font-bold`
    - colors: `text-primary`, `bg-base-200`
    - buttons: `btn btn-primary`
    - cards: `card bg-base-100 shadow`

- Never mix inline styles except for dynamic values.

-------------------------------------------------------------------
## 6. DaisyUI Component Rules
-------------------------------------------------------------------

### Use DaisyUI for:
- Cards
- Buttons
- Alerts
- Inputs
- Modals
- Navbar
- Footer
- Badges
- Tabs

### Styling rules:
- Must use theme classes:
    - `btn-primary`, `btn-secondary`, `btn-accent`
- Avoid manually setting colors unless overriding for a special case.

-------------------------------------------------------------------
## 7. Page Layout Rules
-------------------------------------------------------------------

All Page components must:

1. Wrap content in a max-width container:
    - `max-w-5xl mx-auto px-4 md:px-6 lg:px-10`

2. Split content into sections:
    - hero section
    - content section
    - sidebar section (optional)
    - footer/block section

3. Use consistent typography:
    - Page title: `text-3xl md:text-4xl font-bold`
    - Section title: `text-xl md:text-2xl font-semibold`
    - Body text: `text-base leading-relaxed opacity-80`

4. Each section must be placed inside:
    - `<section class="py-10">`

-------------------------------------------------------------------
## 8. Code Readability & Comments
-------------------------------------------------------------------

- Every component must have **clear English comments**, such as:

  `<!-- Header section: displays the page title -->`

  `// Load game list from service on mount`

  `<!-- Grid listing all items -->`

- Use concise but clear variable names.
- Remove unused imports.
- Use readable reactive variables:
    - `$: filtered = ...`
    - `$: state = $useStore`
- Avoid deeply nested HTML.

-------------------------------------------------------------------
## 9. Accessibility Rules
-------------------------------------------------------------------

- Include alt text on all images.
- Buttons must have accessible labels.
- Use semantic HTML:
    - `<header>`
    - `<section>`
    - `<main>`
    - `<footer>`
- Maintain color contrast using DaisyUI theme.

-------------------------------------------------------------------
## 10. Animation & Interaction Rules
-------------------------------------------------------------------

- Keep animations subtle.
- Prefer Tailwind transitions:
    - `transition-all`, `duration-200`
- Cards:
    - Use `hover:shadow-lg`
- Buttons:
    - Use DaisyUI built-in active/hover states.

-------------------------------------------------------------------
## 11. Do & Don't Summary
-------------------------------------------------------------------

### DO:
- break UI into clean sections
- use theme colors
- follow responsive grid layout
- use DaisyUI for UI blocks
- maintain readable, commented code

### DON'T:
- write inline CSS
- hard-code colors
- mix layout styles randomly
- put too much logic inside Page
- make giant monolithic components

-------------------------------------------------------------------
## 12. Final Notes

These UI rules are mandatory for all modules, all pages, and all shared components across every SvelteKit project using the Modular Architecture Pattern.


