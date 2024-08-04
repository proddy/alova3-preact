
# Test Alova3 with React and Preact

**Problem**: Alova version 3 does not work with Preact. Pages are not rendered after a successful `getRequest()` hook call. It did work with Alova version 2.

I use PreactJS (<https://preactjs.com/>) in my projects because its more lightweight and I run on small microcontrollers.

I looked into PreactJS but couldn't find what may be causing this. <https://preactjs.com/guide/v10/differences-to-react>

## To reproduce

Run with `yarn dev` and open the browser.

The `App.tsx` will make an immediate AlovaJS call to request some version data from Github, which is then rendered on the page.

It works with React, the version number is shown on the page.

But when switching to use Preact, by replacing `plugins: [react()]` in `vite.config.ts` with `plugins: [preact()]` it fails to re-render the page and stays on "Loading...". Only when another event is triggered, like a window resize() it will re-render the page.
