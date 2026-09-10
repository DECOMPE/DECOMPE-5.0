import type { Category, EventInfo, FaqItem, Mentor, MerchItem, Partner, PrizePool, Timeline } from '@/types';

export const eventInfo: EventInfo = {
	name: 'DECOMPE X SKILL CLASS 5.0',
	tagline: '5 Years of Impact: Smart Living, Sustainable Future',
	contactPerson: 'Jane Doe (0869-6767-420)',
	address: 'Jl. TB Simatupang No. 6',
	socials: { instagram: '@decompeofficial', tiktok: '@decompe.5.0', youtube: 'DECOMPE' },
};

export const metrics = [
	{ value: '5+', label: 'Years of impact', detail: 'A trusted platform for youth innovation in Indonesia.' },
	{ value: '300+', label: 'Participants', detail: 'Creative minds from schools, campuses, and communities.' },
	{ value: '3', label: 'Main themes', detail: 'Smart living, green future, and creative problem solving.' },
];

export const challengeTracks = [
	{
		title: 'Smart Living',
		description: 'Bangun solusi yang membuat rumah, kota, dan aktivitas sehari-hari lebih efisien, sehat, dan nyaman.',
		outcomes: ['Smart home systems', 'Urban wellness', 'Citizen-friendly technology'],
	},
	{
		title: 'Sustainable Future',
		description: 'Tawarkan ide berbasis keberlanjutan untuk mengurangi limbah, menjaga lingkungan, dan mendorong perubahan sosial.',
		outcomes: ['Circular economy', 'Clean energy', 'Inclusive green innovation'],
	},
	{
		title: 'Creative Business',
		description: 'Kembangkan ide bisnis atau produk yang kuat secara strategi, visual, dan kebutuhan pasar modern.',
		outcomes: ['Brand storytelling', 'Pitch strategy', 'Prototype thinking'],
	},
];

export const programHighlights = [
	{
		title: 'Mentoring & feedback',
		description: 'Peserta mendapat arahan dari mentor dan juri untuk mengasah ide, struktur pitch, dan presentation skills.',
	},
	{
		title: 'Career-ready exposure',
		description: 'Kegiatan ini mendorong peserta berpikir seperti founder, problem-solver, dan creator dengan orientasi nyata.',
	},
	{
		title: 'National-level recognition',
		description: 'Kompetisi ini memberi ruang untuk membangun portofolio, kepercayaan diri, dan perhatian dari komunitas industri.',
	},
];

export const registrationSteps = [
	{ step: '01', title: 'Pilih kategori', description: 'Tentukan kategori Umum atau SMA/SMK sesuai kebutuhan tim kamu.' },
	{ step: '02', title: 'Isi form pendaftaran', description: 'Lengkapi data Ketua Tim, anggota, serta kebutuhan submission yang dibutuhkan.' },
	{ step: '03', title: 'Lakukan pembayaran', description: 'Ikuti instruksi pembayaran dan simpan bukti transfer untuk konfirmasi panitia.' },
	{ step: '04', title: 'Siapkan ide terbaik', description: 'Mulai tren, riset, dan pitching hingga ready mengikuti technical meeting.' },
];

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
	{ name: 'Mentor 01', role: 'Creative Strategist', specialty: 'Ideasi, storytelling, dan positioning brand.' },
	{ name: 'Mentor 02', role: 'Sustainability Expert', specialty: 'Solusi smart living dan green innovation.' },
	{ name: 'Mentor 03', role: 'Brand Designer', specialty: 'Visual thinking, prototyping, dan portofolio.' },
];

export const partners: Partner[] = [
	{ name: 'Partner pendukung 01', logo: '/image 26.png', type: 'Partner pendukung', alt: 'Logo partner pendukung DECOMPE' },
	{ name: 'Partner pendukung 02', logo: '/image 25.png', type: 'Partner pendukung', alt: 'Logo partner pendukung DECOMPE' },
	{ name: 'Ada Event', logo: '/Logo Adaevent 1.png', type: 'Media partner', alt: 'Logo Ada Event' },
	{ name: 'Katalog Event Indonesia', logo: '/Katalog Event - Logo 2 1.png', type: 'Media partner', alt: 'Logo Katalog Event Indonesia' },
];

export const merchItems: MerchItem[] = [
	{ id: 'shirt', name: 'DECOMPE T-Shirt', description: 'T-shirt resmi dengan grafis edisi 5.0 untuk peserta dan supporter.', price: 120000, color: '#FF5C00' },
	{ id: 'lanyard', name: 'Event Lanyard', description: 'Lanyard tebal untuk identitas peserta selama event berlangsung.', price: 35000, color: '#E00105' },
	{ id: 'sticker', name: 'Sticker Pack', description: 'Satu pack stiker bertema DECOMPE 5.0 untuk komunitas dan koleksi.', price: 25000, color: '#FACC15' },
];

export const faqs: FaqItem[] = [
	{ question: 'Bagaimana cara mendaftarkan tim?', answer: 'Pilih paket Early Bird, isi form pendaftaran dengan data ketua dan anggota tim, lalu ikuti prosedur pembayaran sesuai instruksi yang dikirim panitia.' },
	{ question: 'Apa perbedaan kategori SMA/SMK dan Umum?', answer: 'Kategori SMA/SMK ditujukan bagi pelajar aktif sekolah menengah. Kategori Umum terbuka untuk mahasiswa, alumni, pelaku usaha, dan peserta umum yang memenuhi syarat lomba.' },
	{ question: 'Apakah pembayaran bisa dilakukan oleh satu orang untuk satu tim?', answer: 'Bisa. Pembayaran dilaksanakan satu kali oleh ketua tim sesuai kategori yang dipilih, kemudian panitia akan mendata tim secara resmi.' },
	{ question: 'Apakah early bird masih tersedia?', answer: 'Ya, harga Early Bird berlaku selama periode 20 September sampai 01 November. Setelah itu, harga bisa berubah sesuai ketentuan panitia.' },
	{ question: 'Apakah peserta menerima mentoring sebelum final?', answer: 'Ya. Selain jadwal utama, peserta akan mendapatkan arahan serta feedback dari mentor yang relevan dengan ide dan presentasi masing-masing tim.' },
	{ question: 'Bagaimana jika saya ingin memesan merchandise?', answer: 'Peserta dan supporter dapat memesan melalui halaman Merch atau menghubungi panitia di WhatsApp untuk konfirmasi stok, harga, dan pengiriman.' },
];

export const formatRupiah = (amount: number) => `Rp ${amount.toLocaleString('id-ID')}`;
