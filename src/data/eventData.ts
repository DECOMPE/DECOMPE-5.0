import type { Category, ContactPerson, EventInfo, FaqItem, MerchItem, Partner, RegistrationBatch, Speaker, Timeline } from '@/types';
import cyberUniversityLogo from '@/assets/image 25.png';
import katalogEventLogo from '@/assets/Katalog Event - Logo 2 1.png';
import adaEventLogo from '@/assets/Logo Adaevent 1.png';
import lingkarEventLogo from '@/assets/[MAIN] LOGO LINGKAREVENT 1.png';
import ukmCodingLogo from '@/assets/Logo UKM Coding vers Hitam (5) 1.svg';
import bemSmaLogo from '@/assets/image 26.png';
import sponsorLogo from '@/assets/spnsor.png';
import generationGirlLogo from '@/assets/media partenrer.png';

export const eventInfo: EventInfo = {
	name: 'DECOMPE 5.0 Skill Class',
	tagline: '5 Years Of Impact: Smart Living, Sustainable Future',
	theme: 'Smart Living & Sustainable Future',
	contactPerson: 'Aldino (0895-3868-91729) · Nayla (0877-7369-8839)',
	address: 'Jl. TB Simatupang No. 6',
	socials: { instagram: '@decompeofficial', tiktok: '@decompe', youtube: 'DECOMPE', linkedin: 'decompe' },
};

export const contactPersons: ContactPerson[] = [
	{ name: 'Aldino', phone: '0895-3868-91729', whatsapp: '62895386891729' },
	{ name: 'Nayla', phone: '0877-7369-8839', whatsapp: '6287773698839' },
];

export const metrics = [
	{ value: '5+', label: 'Years running', detail: 'A competition built around ideas for everyday life.' },
	{ value: '300+', label: 'Participants', detail: 'Teams from schools, campuses, and local communities.' },
	{ value: '3', label: 'SDG subthemes', detail: 'Tiga subtema SDG untuk mengarahkan ide dan solusi peserta.' },
];

export const challengeTracks = [
	{
		title: 'SDG 7',
	description: 'Energi Bersih dan Terjangkau. Kembangkan solusi yang membuat energi bersih lebih mudah diakses dan digunakan secara efisien.',
		outcomes: ['Energi terbarukan', 'Efisiensi energi', 'Akses energi yang terjangkau'],
	},
	{
		title: 'SDG 12',
		description: 'Konsumsi dan Produksi yang Bertanggung Jawab. Rancang cara baru untuk menggunakan sumber daya dengan lebih bijak dan mengurangi limbah.',
		outcomes: ['Ekonomi sirkular', 'Pengurangan limbah', 'Produksi berkelanjutan'],
	},
	{
		title: 'SDG 8',
		description: 'Pekerjaan Layak dan Pertumbuhan Ekonomi. Susun ide yang membuka peluang kerja, mendukung usaha, dan mendorong pertumbuhan yang inklusif.',
		outcomes: ['Kewirausahaan', 'Peluang kerja layak', 'Pertumbuhan ekonomi inklusif'],
	},
];

export const programHighlights = [
	{
		title: 'Bimbingan yang bisa dipakai',
		description: 'Mentor membantu tim merapikan masalah, alur cerita, dan cara menyampaikan ide di depan juri.',
	},
	{
		title: 'Proses yang masuk portofolio',
		description: 'Riset, konsep, pitch deck, dan presentasi memberi tim bahan kerja yang bisa mereka tunjukkan setelah lomba.',
	},
	{
		title: 'Panggung untuk karya',
		description: 'Tim mempresentasikan solusi mereka dan menerima penilaian dari juri dengan latar belakang yang relevan.',
	},
];

export const registrationSteps = [
	{ step: '01', title: 'Pilih kategori dan batch', description: 'Tentukan kategori Umum atau SMA/SMK, lalu pastikan kamu mendaftar pada batch yang sedang dibuka.' },
	{ step: '02', title: 'Isi form pendaftaran', description: 'Lengkapi data ketua tim dan anggota sebelum melanjutkan ke pembayaran.' },
	{ step: '03', title: 'Lakukan pembayaran', description: 'Ikuti instruksi pembayaran dan simpan bukti transfer untuk konfirmasi panitia.' },
	{ step: '04', title: 'Siapkan ide', description: 'Amati masalah, susun solusi, dan siapkan pitch deck sebelum technical meeting.' },
];

export const categories: Category[] = [
	{ id: 'umum', name: 'Umum', label: 'Umum · Batch 1', price: 100000, features: ['Tim 1-3 Orang', 'Sertifikat Tingkat Nasional', 'Akses Bootcamp & Mentoring', 'Review Portofolio'] },
	{ id: 'sma', name: 'SMA/SMK Sederajat', label: 'SMA/SMK Sederajat · Batch 1', price: 60000, features: ['Tim 1-3 Orang', 'Sertifikat Tingkat Nasional', 'Mentoring Eksklusif', 'Akses Webinar'] },
];

export const totalPrize = 5000000;

export const timeline: Timeline[] = [
	{ title: 'Pendaftaran', date: '20 Sept - 01 Nov', status: 'Active' },
	{ title: 'Bootcamp', date: '02 Nov - 15 Nov', status: 'Upcoming' },
	{ title: 'Pengumpulan Pitch Deck', date: '22 Nov - 26 Nov', status: 'Upcoming' },
	{ title: 'Penjurian', date: '02 Nov - 26 Nov', status: 'Upcoming' },
	{ title: 'Technical Meeting', date: '26 Nov', status: 'Upcoming' },
	{ title: 'Pelaksanaan Pitch Deck', date: '27 Nov', status: 'Upcoming' },
	{ title: 'Awarding & Webinar', date: '27 Nov', status: 'Upcoming' },
];

export const registrationBatches: RegistrationBatch[] = [
	{ name: 'Batch 1', date: '20 Sept - 01 Nov', status: 'Open' },
	{ name: 'Batch 2', date: 'Jadwal menyusul', status: 'Upcoming' },
	{ name: 'Batch 3', date: 'Jadwal menyusul', status: 'Upcoming' },
];

export const speakers: Speaker[] = [
	{ name: 'Pemateri Skill Class', category: 'Skill Class', specialty: 'Membantu peserta mengembangkan ide, menyusun alur cerita, dan mempersiapkan pitch deck.' },
	{ name: 'Pemateri Webinar', category: 'Webinar', specialty: 'Membahas perspektif praktis tentang smart living dan sustainable future.' },
	{ name: 'Juri 01', category: 'Juri', specialty: 'Menilai ketajaman masalah, relevansi solusi, dan potensi dampak ide.' },
	{ name: 'Juri 02', category: 'Juri', specialty: 'Menilai kekuatan strategi, kelayakan implementasi, dan kualitas presentasi.' },
];

export const partners: Partner[] = [
	{ name: 'Cyber University', logo: cyberUniversityLogo, type: 'Sponsor', alt: 'Logo Cyber University' },
	{ name: 'UKM Coding', logo: ukmCodingLogo, type: 'Sponsor', alt: 'Logo UKM Coding' },
	{ name: 'BEM SMA', logo: bemSmaLogo, type: 'Sponsor', alt: 'Logo BEM SMA' },
	{ name: 'S Pay', logo: sponsorLogo, type: 'Sponsor', alt: 'Logo S Pay' },
	{ name: 'Ada Event', logo: adaEventLogo, type: 'Media partner', alt: 'Logo Ada Event' },
	{ name: 'Katalog Event Indonesia', logo: katalogEventLogo, type: 'Media partner', alt: 'Logo Katalog Event Indonesia' },
	{ name: 'Lingkar Event', logo: lingkarEventLogo, type: 'Media partner', alt: 'Logo Lingkar Event' },
	{ name: 'Generation Girl Bogor', logo: generationGirlLogo, type: 'Media partner', alt: 'Logo Generation Girl Bogor' },
];

export const merchItems: MerchItem[] = [
	{ id: 'shirt', name: 'DECOMPE T-Shirt', description: 'T-shirt resmi dengan grafis edisi 5.0 untuk peserta dan supporter.', price: 120000, color: '#FF5C00' },
	{ id: 'lanyard', name: 'Event Lanyard', description: 'Lanyard tebal untuk identitas peserta selama event berlangsung.', price: 35000, color: '#E00105' },
	{ id: 'sticker', name: 'Sticker Pack', description: 'Satu pack stiker bertema DECOMPE 5.0 untuk komunitas dan koleksi.', price: 25000, color: '#FACC15' },
];

export const faqs: FaqItem[] = [
	{ question: 'Bagaimana cara mendaftarkan tim?', answer: 'Pilih kategori dan batch yang sedang dibuka, isi form pendaftaran dengan data ketua dan anggota tim, lalu ikuti prosedur pembayaran sesuai instruksi yang dikirim panitia.' },
	{ question: 'Apa perbedaan kategori SMA/SMK dan Umum?', answer: 'Kategori SMA/SMK ditujukan bagi pelajar aktif sekolah menengah. Kategori Umum terbuka untuk mahasiswa, alumni, pelaku usaha, dan peserta umum yang memenuhi syarat lomba.' },
	{ question: 'Apakah pembayaran bisa dilakukan oleh satu orang untuk satu tim?', answer: 'Bisa. Pembayaran dilaksanakan satu kali oleh ketua tim sesuai kategori yang dipilih, kemudian panitia akan mendata tim secara resmi.' },
	{ question: 'Sampai kapan Batch 1 dibuka?', answer: 'Pendaftaran Batch 1 berlangsung dari 20 September sampai 01 November. Setelah periode tersebut berakhir, pendaftaran akan mengikuti jadwal dan harga batch berikutnya sesuai ketentuan panitia.' },
	{ question: 'Apakah peserta menerima mentoring sebelum final?', answer: 'Ya. Selain jadwal utama, peserta akan mendapatkan arahan serta feedback dari mentor yang relevan dengan ide dan presentasi masing-masing tim.' },
	{ question: 'Bagaimana jika saya ingin memesan merchandise?', answer: 'Peserta dan supporter dapat memesan melalui halaman Merch atau menghubungi panitia di WhatsApp untuk konfirmasi stok, harga, dan pengiriman.' },
];

export const formatRupiah = (amount: number) => `Rp ${amount.toLocaleString('id-ID')}`;
