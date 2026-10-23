import { useEffect, useState } from 'react';
import UrgencyTopBar from '@/components/UrgencyTopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeView from '@/views/HomeView';
import RegistrationView from '@/views/RegistrationView';
import MerchView from '@/views/MerchView';
import FaqView from '@/views/FaqView';
import NotFoundView from '@/views/NotFoundView';
import PartnerShowcase from '@/components/PartnerShowcase';
import { registrationFormUrl } from '@/data/eventData';
import seoPages from '@/data/seoPages.json';
import vectorAccent from '@/assets/Vector.png';
import faviconLogo from '/favicon.png';

export default function App() {
	const getRoute = () => {
		const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
		if (pathname !== '/' || !window.location.hash) return pathname;
		const legacyRoute = window.location.hash.slice(1);
		return legacyRoute === 'home' ? '/' : `/${legacyRoute}`;
	};
	const [route, setRoute] = useState(getRoute);
	const openRegistrationForm = () => window.open(registrationFormUrl, '_blank', 'noopener,noreferrer');
	useEffect(() => {
		const onLocationChange = () => {
			const nextRoute = getRoute();
			if (window.location.pathname === '/' && window.location.hash) {
				window.history.replaceState(null, '', nextRoute);
			}
			setRoute(nextRoute);
		};
		window.addEventListener('popstate', onLocationChange);
		window.addEventListener('hashchange', onLocationChange);
		onLocationChange();
		return () => {
			window.removeEventListener('popstate', onLocationChange);
			window.removeEventListener('hashchange', onLocationChange);
		};
	}, []);
	useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [route]);
	useEffect(() => {
		const current = seoPages.pages.find((page) => page.path === route);
		const title = current?.title ?? '404: Halaman tidak ditemukan | DECOMPE';
		const description = current?.description ?? 'Halaman yang kamu cari tidak tersedia di DECOMPE 5.0 Skill Class.';
		const canonicalUrl = `${seoPages.siteUrl}${route}`;
		document.title = title;
		const descriptionElement = document.querySelector<HTMLMetaElement>('meta[name="description"]');
		if (descriptionElement) descriptionElement.content = description;
		const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
		if (robots) robots.content = current ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' : 'noindex, follow';
		const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
		if (canonical) {
			if (current) canonical.href = canonicalUrl;
			else canonical.removeAttribute('href');
		}
		const setMeta = (selector: string, value: string) => {
			const element = document.querySelector<HTMLMetaElement>(selector);
			if (element) element.content = value;
		};
		setMeta('meta[property="og:url"]', canonicalUrl);
		setMeta('meta[property="og:title"]', title);
		setMeta('meta[property="og:description"]', description);
		setMeta('meta[name="twitter:title"]', title);
		setMeta('meta[name="twitter:description"]', description);
		const structuredData = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
		if (structuredData && current) {
			structuredData.textContent = JSON.stringify({
				'@context': 'https://schema.org',
				'@graph': [
					{
						'@type': 'Organization',
						'@id': `${seoPages.siteUrl}/#organization`,
						name: 'DECOMPE',
						url: `${seoPages.siteUrl}/`,
						sameAs: ['https://www.instagram.com/decompeofficial/', 'https://www.tiktok.com/@decompe', 'https://www.youtube.com/@decompe7823', 'https://www.linkedin.com/in/decompe'],
					},
					{
						'@type': 'WebSite',
						'@id': `${seoPages.siteUrl}/#website`,
						name: 'DECOMPE',
						url: `${seoPages.siteUrl}/`,
						publisher: { '@id': `${seoPages.siteUrl}/#organization` },
					},
					{
						'@type': 'WebPage',
						'@id': `${canonicalUrl}#webpage`,
						name: title,
						description,
						url: canonicalUrl,
						isPartOf: { '@id': `${seoPages.siteUrl}/#website` },
					},
				],
			});
		}
		document.querySelectorAll<HTMLLinkElement>('link[rel="icon"], link[rel="apple-touch-icon"]').forEach((link) => { link.href = faviconLogo; });
	}, [route]);
	const isHome = route === '/';
	const view = route === '/register' ? <RegistrationView onRegister={openRegistrationForm} /> : route === '/merch' ? <MerchView /> : route === '/faq' ? <FaqView /> : isHome ? <HomeView onRegister={openRegistrationForm} /> : <NotFoundView />;
	const pageAccentClass = route.slice(1) || 'page';
	return <><UrgencyTopBar /><Navbar onRegister={openRegistrationForm} /><main>{isHome ? view : <div className={`page-accent-shell page-accent-${pageAccentClass}`}><img src={vectorAccent} alt="" aria-hidden="true" className="page-accent-vector" /><div className="page-accent-star page-accent-star-left pointer-events-none absolute -left-12 top-12 hidden h-40 w-40 neo-star-pulse lg:block" aria-hidden="true"><span className="neo-poster-star-back" /><span className="neo-poster-star-face" /></div><div className="page-accent-star page-accent-star-right pointer-events-none absolute -right-10 top-44 hidden h-44 w-44 neo-star-pulse lg:block" aria-hidden="true"><span className="neo-poster-star-back" /><span className="neo-poster-star-face" /></div><div className="page-accent-star page-accent-star-small pointer-events-none absolute bottom-24 right-[18%] hidden h-10 w-10 neo-poster-star-outline lg:block" aria-hidden="true"><span className="block h-full w-full neo-poster-star-face" /></div><div className="relative z-10">{view}</div></div>}</main>{isHome && <PartnerShowcase />}<Footer /></>;
}
