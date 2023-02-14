import type { PageLoad } from './$types';

export const load: PageLoad = (async ({ fetch }) => {
    const res = await fetch(`./src/lib/data/data.json`);
    return await res.json();
  }) satisfies PageLoad;