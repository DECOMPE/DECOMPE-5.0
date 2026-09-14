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
import faviconLogo from '/favicon.png';

export default function App() {
	const [route, setRoute] = useState(window.location.hash || '#home');
	const openRegistrationForm = () => window.open(registrationFormUrl, '_blank', 'noopener,noreferrer');
	useEffect(() => { const onHash = () => setRoute(window.location.hash || '#home'); window.addEventListener('hashchange', onHash); return () => window.removeEventListener('hashchange', onHash); }, []);
	useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [route]);
	useEffect(() => {
		const metadata: Record<string, { title: string; description: string }> = {
			'#home': { title: 'DECOMPE 5.0 | 5 Years Of Impact', description: 'DECOMPE 5.0 mengajak peserta mengembangkan solusi untuk Smart Living dan Sustainable Future melalui tiga subtema SDG.' },
			'#register': { title: 'Pendaftaran Batch 1 | DECOMPE 5.0', description: 'Pilih paket Skill Class Only atau Skill Class + DECOMPE untuk mendaftar pada Batch 1 DECOMPE 5.0.' },
			'#merch': { title: 'Merchandise | DECOMPE 5.0 Skill Class', description: 'Merchandise resmi DECOMPE 5.0 segera hadir.' },
			'#faq': { title: 'FAQ | DECOMPE 5.0 Skill Class', description: 'Jawaban pendaftaran, kategori, pembayaran, mentoring, jadwal, dan merchandise DECOMPE 5.0.' },
		};
		const current = metadata[route];
		document.title = current?.title ?? '404: Halaman tidak ditemukan | DECOMPE';
		const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
		if (description) description.content = current?.description ?? 'Halaman yang kamu cari tidak tersedia di DECOMPE 5.0 Skill Class.';
		const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
		if (robots) robots.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
		document.querySelectorAll<HTMLLinkElement>('link[rel="icon"], link[rel="apple-touch-icon"]').forEach((link) => { link.href = faviconLogo; });
	}, [route]);
	const isHome = route === '#home' || route === '';
	const view = route === '#register' ? <RegistrationView onRegister={openRegistrationForm} /> : route === '#merch' ? <MerchView /> : route === '#faq' ? <FaqView /> : isHome ? <HomeView onRegister={openRegistrationForm} /> : <NotFoundView />;
	return <><UrgencyTopBar /><Navbar onRegister={openRegistrationForm} /><main>{view}</main>{isHome && <PartnerShowcase />}<Footer /></>;
}
