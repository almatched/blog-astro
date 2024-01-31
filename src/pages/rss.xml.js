import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Blog made with Astro',
        description: 'Blogging my journey of learning Web Dev',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: '<language>en-us</language>',
    });
}