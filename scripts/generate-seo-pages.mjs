import { mkdir, readFile, writeFile } from 'node:fs/promises';

const pageConfig = JSON.parse(await readFile(new URL('../src/data/seoPages.json', import.meta.url), 'utf8'));
const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const replaceAttribute = (html, tagName, attribute, value, targetAttribute, targetValue) => {
	const tagPattern = new RegExp(`<${tagName}(?=[^>]*\\b${attribute}="${value}")[^>]*>`);
	return html.replace(tagPattern, (tag) => {
		const escaped = escapeHtml(targetValue);
		const targetPattern = new RegExp(`\\b${targetAttribute}="[^"]*"`);
		return targetPattern.test(tag)
			? tag.replace(targetPattern, `${targetAttribute}="${escaped}"`)
			: tag.replace(/\/?>$/, ` ${targetAttribute}="${escaped}" />`);
	});
};

for (const page of pageConfig.pages) {
	if (page.path === '/') continue;

	const canonicalUrl = `${pageConfig.siteUrl}${page.path}`;
	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': `${pageConfig.siteUrl}/#organization`,
				name: 'DECOMPE',
				url: `${pageConfig.siteUrl}/`,
				sameAs: ['https://www.instagram.com/decompeofficial/', 'https://www.tiktok.com/@decompe', 'https://www.youtube.com/@decompe7823', 'https://www.linkedin.com/in/decompe'],
			},
			{
				'@type': 'WebSite',
				'@id': `${pageConfig.siteUrl}/#website`,
				name: 'DECOMPE',
				url: `${pageConfig.siteUrl}/`,
				publisher: { '@id': `${pageConfig.siteUrl}/#organization` },
			},
			{
				'@type': 'WebPage',
				'@id': `${canonicalUrl}#webpage`,
				name: page.title,
				description: page.description,
				url: canonicalUrl,
				isPartOf: { '@id': `${pageConfig.siteUrl}/#website` },
			},
		],
	};

	let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`);
	html = replaceAttribute(html, 'meta', 'name', 'description', 'content', page.description);
	html = replaceAttribute(html, 'link', 'rel', 'canonical', 'href', canonicalUrl);
	html = replaceAttribute(html, 'meta', 'property', 'og:url', 'content', canonicalUrl);
	html = replaceAttribute(html, 'meta', 'property', 'og:title', 'content', page.title);
	html = replaceAttribute(html, 'meta', 'property', 'og:description', 'content', page.description);
	html = replaceAttribute(html, 'meta', 'name', 'twitter:title', 'content', page.title);
	html = replaceAttribute(html, 'meta', 'name', 'twitter:description', 'content', page.description);
	html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`);

	const outputDirectory = new URL(`../dist${page.path}/`, import.meta.url);
	await mkdir(outputDirectory, { recursive: true });
	await writeFile(new URL('index.html', outputDirectory), html);
}
