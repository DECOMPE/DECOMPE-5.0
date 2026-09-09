import type { Category, EventInfo, FaqItem, Mentor, MerchItem, PrizePool, Timeline } from '@/types';

export const eventInfo: EventInfo = {
	name: 'DECOMPE X SKILL CLASS 5.0',
	tagline: '5 Years Of Impact : Smart Living, Sustainable Future',
	contactPerson: 'Jane Doe (0869-6767-420)', address: 'Jl. TB Simatupang No. 6',
	socials: { instagram: '@decompeofficial', tiktok: '@decompe.5.0', youtube: 'DECOMPE' },
};
export const categories: Category[] = [
	{ id: 'umum', name: 'Umum', label: 'Umum (Early Bird)', price: 100000, features: ['Tim 1-3 Orang', 'Sertifikat Tingkat Nasional', 'Akses Bootcamp & Mentoring', 'Review Portofolio'] },
	{ id: 'sma', name: 'SMA/SMK Sederajat', label: 'SMA/SMK Sederajat (Early Bird)', price: 60000, features: ['Tim 1-3 Orang', 'Sertifikat Tingkat Nasional', 'Mentoring Eksklusif', 'Akses Webinar'] },
];
export const prizePools: PrizePool[] = [
	{ category: 'Umum', prizes: [{ rank: 'Juara I', amount: 1200000 }, { rank: 'Juara II', amount: 1000000 }, { rank: 'Juara III', amount: 800000 }] },
	{ category: 'SMA/SMK', prizes: [{ rank: 'Juara I', amount: 750000 }, { rank: 'Juara II', amount: 550000 }, { rank: 'Juara III', amount: 400000 }, { rank: 'Juara Favorit', amount: 200000 }] },
];
export const timeline: Timeline[] = [
	{ title: 'Pendaftaran (Early Bird)', date: '20 Sept - 01 Nov', status: 'Active' },
	{ title: 'Pengumpulan Karya', date: '02 Nov - 18 Nov', status: 'Upcoming' },
	{ title: 'Penjurian Karya', date: '02 Nov - 25 Nov', status: 'Upcoming' },
	{ title: 'Technical Meeting', date: '26 Nov', status: 'Upcoming' },
	{ title: 'Pelaksanaan Pitch Deck', date: '27 Nov', status: 'Upcoming' },
	{ title: 'Awarding & Webinar', date: '28 Nov', status: 'Upcoming' },
];
export const mentors: Mentor[] = [
	{ name: 'Mentor 01', role: 'Creative Strategist', specialty: 'Ideasi & storytelling' },
	{ name: 'Mentor 02', role: 'Sustainability Expert', specialty: 'Smart living' },
	{ name: 'Mentor 03', role: 'Brand Designer', specialty: 'Visual & portfolio' },
];
export const merchItems: MerchItem[] = [
	{ id: 'shirt', name: 'DECOMPE T-Shirt', description: 'T-shirt resmi dengan grafis edisi 5.0.', price: 120000, color: '#FF5C00' },
	{ id: 'lanyard', name: 'Event Lanyard', description: 'Lanyard tebal untuk identitas peserta.', price: 35000, color: '#E00105' },
	{ id: 'sticker', name: 'Sticker Pack', description: 'Satu pack stiker penuh energi DECOMPE.', price: 25000, color: '#FACC15' },
];
export const faqs: FaqItem[] = [
	{ question: 'Bagaimana cara mendaftarkan tim?', answer: 'Pilih paket Early Bird, isi data ketua dan anggota tim, lalu lanjutkan pembayaran melalui instruksi yang dikirim panitia.' },
	{ question: 'Apa perbedaan kategori SMA/SMK dan Umum?', answer: 'Kategori SMA/SMK ditujukan bagi pelajar aktif SMA/SMK sederajat. Kategori Umum terbuka untuk mahasiswa, profesional, dan peserta umum.' },
	{ question: 'Apakah pembayaran bisa dilakukan oleh satu orang untuk satu tim?', answer: 'Bisa. Pembayaran dilakukan satu kali oleh ketua tim sesuai kategori yang dipilih.' },
	{ question: 'Apakah early bird masih tersedia?', answer: 'Ya, harga early bird berlaku selama periode 20 September sampai 01 November.' },
];
export const formatRupiah = (amount: number) => `Rp ${amount.toLocaleString('id-ID')}`;
