import { useEffect, useState } from 'react';
import UrgencyTopBar from '@/components/UrgencyTopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsAppHelp from '@/components/FloatingWhatsAppHelp';
import RegistrationModal from '@/components/RegistrationModal';
import HomeView from '@/views/HomeView';
import EventInfoView from '@/views/EventInfoView';
import RegistrationView from '@/views/RegistrationView';
import MerchView from '@/views/MerchView';
import FaqView from '@/views/FaqView';
import NotFoundView from '@/views/NotFoundView';

export default function App() {
	const [route, setRoute] = useState(window.location.hash || '#home');
	const [registrationOpen, setRegistrationOpen] = useState(false);
	useEffect(() => { const onHash = () => setRoute(window.location.hash || '#home'); window.addEventListener('hashchange', onHash); return () => window.removeEventListener('hashchange', onHash); }, []);
	useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [route]);
	useEffect(() => {
		const metadata: Record<string, { title: string; description: string }> = {
			'#home': { title: 'DECOMPE 5.0 Skill Class | Smart Living, Sustainable Future', description: 'DECOMPE 5.0 Skill Class: kompetisi ide dan pitch deck tentang smart living, sustainable future, dan creative business.' },
			'#event-info': { title: 'Event Info | DECOMPE 5.0 Skill Class', description: 'Lihat track, alur lomba, mentor, juri, dan jadwal DECOMPE 5.0 Skill Class.' },
			'#register': { title: 'Daftar Early Bird | DECOMPE 5.0 Skill Class', description: 'Pilih kategori Umum atau SMA/SMK untuk mendaftar DECOMPE 5.0 Skill Class.' },
			'#merch': { title: 'Official Merch | DECOMPE 5.0 Skill Class', description: 'Pesan merchandise resmi DECOMPE 5.0 melalui WhatsApp panitia.' },
			'#faq': { title: 'FAQ | DECOMPE 5.0 Skill Class', description: 'Jawaban pendaftaran, kategori, pembayaran, mentoring, jadwal, dan merchandise DECOMPE 5.0.' },
		};
		const current = metadata[route];
		document.title = current?.title ?? '404: Halaman tidak ditemukan | DECOMPE';
		const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
		if (description) description.content = current?.description ?? 'Halaman yang kamu cari tidak tersedia di DECOMPE 5.0 Skill Class.';
		const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
		if (robots) robots.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
		document.querySelectorAll<HTMLLinkElement>('link[rel="icon"], link[rel="apple-touch-icon"]').forEach((link) => { link.href = '/favicon.svg'; });
	}, [route]);
	const view = route === '#event-info' ? <EventInfoView /> : route === '#register' ? <RegistrationView onRegister={() => setRegistrationOpen(true)} /> : route === '#merch' ? <MerchView /> : route === '#faq' ? <FaqView /> : route === '#home' || route === '' ? <HomeView onRegister={() => setRegistrationOpen(true)} /> : <NotFoundView />;
	return <><UrgencyTopBar /><Navbar onRegister={() => setRegistrationOpen(true)} /><main>{view}</main><Footer /><FloatingWhatsAppHelp />{registrationOpen && <RegistrationModal onClose={() => setRegistrationOpen(false)} />}</>;
}
