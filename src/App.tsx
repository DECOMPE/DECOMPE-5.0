import { useEffect, useState } from 'react';
import UrgencyTopBar from '@/components/UrgencyTopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RegistrationModal from '@/components/RegistrationModal';
import HomeView from '@/views/HomeView';
import EventInfoView from '@/views/EventInfoView';
import RegistrationView from '@/views/RegistrationView';
import MerchView from '@/views/MerchView';
import FaqView from '@/views/FaqView';
import NotFoundView from '@/views/NotFoundView';
import PartnerShowcase from '@/components/PartnerShowcase';
import faviconLogo from '/favicon.png';

export default function App() {
	const [route, setRoute] = useState(window.location.hash || '#home');
	const [registrationOpen, setRegistrationOpen] = useState(false);
	useEffect(() => { const onHash = () => setRoute(window.location.hash || '#home'); window.addEventListener('hashchange', onHash); return () => window.removeEventListener('hashchange', onHash); }, []);
	useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [route]);
	useEffect(() => {
		const metadata: Record<string, { title: string; description: string }> = {
			'#home': { title: 'DECOMPE 5.0 | 5 Years Of Impact', description: 'DECOMPE 5.0 mengajak peserta mengembangkan solusi untuk Smart Living dan Sustainable Future melalui tiga subtema SDG.' },
			'#event-info': { title: 'Informasi Acara | DECOMPE 5.0', description: 'Lihat tema, subtema SDG, alur lomba, pemateri, media partner, dan jadwal DECOMPE 5.0.' },
			'#register': { title: 'Pendaftaran Batch 1 | DECOMPE 5.0', description: 'Pilih kategori Umum atau SMA/SMK untuk mendaftar pada Batch 1 DECOMPE 5.0.' },
			'#merch': { title: 'Merchandise | DECOMPE 5.0 Skill Class', description: 'Lihat preview merchandise DECOMPE 5.0 dan hubungi CP untuk informasi rilisan serta pemesanan.' },
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
	const view = route === '#event-info' ? <EventInfoView /> : route === '#register' ? <RegistrationView onRegister={() => setRegistrationOpen(true)} /> : route === '#merch' ? <MerchView /> : route === '#faq' ? <FaqView /> : isHome ? <HomeView onRegister={() => setRegistrationOpen(true)} /> : <NotFoundView />;
	return <><UrgencyTopBar /><Navbar onRegister={() => setRegistrationOpen(true)} /><main>{view}</main>{isHome && <PartnerShowcase />}<Footer />{registrationOpen && <RegistrationModal onClose={() => setRegistrationOpen(false)} />}</>;
}
