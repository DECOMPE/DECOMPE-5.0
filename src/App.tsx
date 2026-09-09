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
			'#home': { title: 'DECOMPE X SKILL CLASS 5.0 | Smart Living, Sustainable Future', description: 'DECOMPE X SKILL CLASS 5.0: kompetisi dan skill class tentang smart living dan sustainable future.' },
			'#event-info': { title: 'Event Info | DECOMPE X SKILL CLASS 5.0', description: 'Temukan format lomba, mentor, juri, dan informasi teknis DECOMPE X SKILL CLASS 5.0.' },
			'#register': { title: 'Daftar Early Bird | DECOMPE X SKILL CLASS 5.0', description: 'Pilih paket pendaftaran Early Bird DECOMPE 5.0 untuk kategori Umum atau SMA/SMK.' },
			'#merch': { title: 'Official Merch | DECOMPE X SKILL CLASS 5.0', description: 'Pesan merchandise resmi DECOMPE X SKILL CLASS 5.0 melalui WhatsApp.' },
			'#faq': { title: 'FAQ | DECOMPE X SKILL CLASS 5.0', description: 'Jawaban pertanyaan umum tentang pendaftaran, kategori, pembayaran, dan Early Bird DECOMPE 5.0.' },
		};
		const current = metadata[route];
		document.title = current?.title ?? '404: Halaman tidak ditemukan | DECOMPE';
		const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
		if (description) description.content = current?.description ?? 'Halaman yang kamu cari tidak tersedia di DECOMPE X SKILL CLASS 5.0.';
		const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
		if (robots) robots.content = current ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' : 'noindex, follow';
	}, [route]);
	const view = route === '#event-info' ? <EventInfoView /> : route === '#register' ? <RegistrationView onRegister={() => setRegistrationOpen(true)} /> : route === '#merch' ? <MerchView /> : route === '#faq' ? <FaqView /> : route === '#home' || route === '' ? <HomeView onRegister={() => setRegistrationOpen(true)} /> : <NotFoundView />;
	return <><UrgencyTopBar /><Navbar onRegister={() => setRegistrationOpen(true)} /><main>{view}</main><Footer /><FloatingWhatsAppHelp />{registrationOpen && <RegistrationModal onClose={() => setRegistrationOpen(false)} />}</>;
}
