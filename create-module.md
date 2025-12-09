# Create Module Script Documentation

This document explains how to use the `create-module.ts` generator script.  
The script automatically generates a complete SvelteKit module and its associated route, following the Modular Architecture Pattern.

---

## 1. Basic Usage

Run:

    bun run create-module.ts <module-name>

Example:

    bun run create-module.ts home

This creates:

- Module folder: src/lib/modules/home/
- Page component: HomePage.svelte
- Store, service, types, values
- Components folder
- Route: src/routes/home/+page.svelte

Default route = module name.

---

## 2. Custom Route

Use the `--route` flag to specify a custom route path.

    bun run create-module.ts <module-name> --route <route-path>

Example:

    bun run create-module.ts game-list --route games

This generates:

- Module: src/lib/modules/game-list/
- Route: /games
- File: src/routes/games/+page.svelte

---

## 3. Nested Routes

The script can generate nested paths, including subfolders.

Example:

    bun run create-module.ts report --route admin/reports

Creates:

    src/routes/admin/reports/+page.svelte

---

## 4. Dynamic Parameters (e.g. [id])

You can generate dynamic routes using bracket syntax.

Example:

    nbun run create-module.ts game-detail --route games/[id]

Creates:

    src/routes/games/[id]/+page.svelte
    src/lib/modules/game-detail/GameDetailPage.svelte

---

## 5. Generated Module Structure

Every module follows this pattern:

    src/lib/modules/<module-name>/
      <Pascal>Page.svelte
      store.ts
      service.ts
      types.ts
      values.ts
      components/

Example for `game-list`:

    src/lib/modules/game-list/
      GameListPage.svelte
      store.ts
      service.ts
      types.ts
      values.ts
      components/

---

## 6. Generated Route Structure

Depending on the route:

### Default
    src/routes/<module-name>/+page.svelte

### Custom Route
    src/routes/<route>/+page.svelte

### Nested Route
    src/routes/<path>/<to>/<route>/+page.svelte

### Dynamic Route
    src/routes/<path>/[id]/+page.svelte

Route file always contains:

