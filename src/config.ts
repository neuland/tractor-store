// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Tractor Store 2.0 - TodoMVC for Micro Frontends";
export const SITE_DESCRIPTION = "a non-trivial micro frontends example project";
export const MY_NAME = "Michael Geers";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
