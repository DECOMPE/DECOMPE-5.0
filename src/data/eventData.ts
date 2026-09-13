import type { Category, ContactPerson, EventInfo, FaqItem, Partner, RegistrationBatch, SkillClassSession, Speaker, Timeline } from '@/types';
import katalogEventLogo from '@/assets/Katalog Event - Logo 2 1.png';
import adaEventLogo from '@/assets/Logo Adaevent 1.png';
import lingkarEventLogo from '@/assets/MediaPartner.png';
import sponsorLogo from '@/assets/spnsor.png';
import generationGirlLogo from '@/assets/media partenrer.png';
import bfastLogo from '@/assets/LOGO BFAST (1).png';

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
	{ value: '5+', label: 'Years running', detail: 'Lima tahun menghadirkan ruang untuk menguji dan menyampaikan ide.' },
	{ value: '300+', label: 'Participants', detail: 'Peserta dari sekolah, kampus, dan komunitas.' },
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
		title: 'E-Sertifikat',
		description: 'Dapatkan e-sertifikat sebagai bukti partisipasi dan pengalaman mengikuti rangkaian DECOMPE 5.0.',
	},
	{
		title: 'Mentoring UI/UX',
		description: 'Pelajari cara menyusun pengalaman pengguna dan menyampaikan solusi dengan pendekatan UI/UX yang lebih terarah.',
	},
	{
		title: 'Peluang Beasiswa Kuliah',
		description: 'Peserta SMA/SMK sederajat berkesempatan mendapatkan beasiswa kuliah di Cyber University sesuai ketentuan yang berlaku.',
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
	{ id: 'sma', name: 'SMA/SMK Sederajat', label: 'SMA/SMK Sederajat · Batch 1', price: 60000, features: ['Tim 1-3 Orang', 'Sertifikat Tingkat Nasional', 'Mentoring Eksklusif', 'Akses Webinar', 'Peluang beasiswa kuliah di Cyber University sesuai ketentuan'] },
];

export const totalPrize = 5000000;

export const timeline: Timeline[] = [
	{ title: 'Pendaftaran Tahap 1', date: '20 Sept - 02 Okt', status: 'Active' },
	{ title: 'Pendaftaran Tahap 2', date: '03 Okt - 18 Okt', status: 'Upcoming' },
	{ title: 'Pendaftaran Tahap 3', date: '19 Okt - 01 Nov', status: 'Upcoming' },
	{ title: 'Penutupan Pendaftaran', date: '01 Nov', status: 'Upcoming' },
	{ title: 'Bootcamp', date: '02 Nov - 15 Nov', status: 'Upcoming' },
	{ title: 'Pengumpulan Karya', date: '02 Nov - 16 Nov', status: 'Upcoming' },
	{ title: 'Batas Pengumpulan Karya', date: '16 Nov', status: 'Upcoming' },
	{ title: 'Penjurian Tahap 1', date: '17 Nov - 21 Nov', status: 'Upcoming' },
	{ title: 'Pengumuman 5 Besar', date: '21 Nov', status: 'Upcoming' },
	{ title: 'Pengumpulan Pitch Deck', date: '22 Nov - 26 Nov', status: 'Upcoming' },
	{ title: 'Technical Meeting', date: '26 Nov', status: 'Upcoming' },
	{ title: 'Pelaksanaan Pitch Deck', date: '27 Nov', status: 'Upcoming' },
	{ title: 'Awarding & Webinar', date: '28 Nov', status: 'Upcoming' },
];

const timelineWindows = [
	['2026-09-20', '2026-10-02'],
	['2026-10-03', '2026-10-18'],
	['2026-10-19', '2026-11-01'],
	['2026-11-01', '2026-11-01'],
	['2026-11-02', '2026-11-15'],
	['2026-11-02', '2026-11-16'],
	['2026-11-16', '2026-11-16'],
	['2026-11-17', '2026-11-21'],
	['2026-11-21', '2026-11-21'],
	['2026-11-22', '2026-11-26'],
	['2026-11-26', '2026-11-26'],
	['2026-11-27', '2026-11-27'],
	['2026-11-28', '2026-11-28'],
] as const;

export const getTimeline = (now = new Date()): Timeline[] => {
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
	return timeline.map((item, index) => {
		const [startDate, endDate] = timelineWindows[index];
		const start = new Date(`${startDate}T00:00:00`).getTime();
		const end = new Date(`${endDate}T23:59:59`).getTime();
		const status = today < start ? 'Upcoming' : today > end ? 'Past' : 'Active';
		return { ...item, status };
	});
};

export const registrationBatches: RegistrationBatch[] = [
	{ name: 'Batch 1', date: '20 Sept - 02 Okt', status: 'Open', prices: { umum: 100000, sma: 60000 } },
	{ name: 'Batch 2', date: '03 Okt - 18 Okt', status: 'Upcoming', prices: { umum: 120000, sma: 75000 } },
	{ name: 'Batch 3', date: '19 Okt - 01 Nov', status: 'Upcoming', prices: { umum: 150000, sma: 100000 } },
];

const registrationBatchWindows = [
	['2026-09-20', '2026-10-02'],
	['2026-10-03', '2026-10-18'],
	['2026-10-19', '2026-11-01'],
] as const;

export const getRegistrationBatches = (now = new Date()): RegistrationBatch[] => {
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
	return registrationBatches.map((batch, index) => {
		const [startDate, endDate] = registrationBatchWindows[index];
		const start = new Date(`${startDate}T00:00:00`).getTime();
		const end = new Date(`${endDate}T23:59:59`).getTime();
		const status = today < start ? 'Upcoming' : today > end ? 'Closed' : 'Open';
		return { ...batch, status };
	});
};

export const skillClassSessions: SkillClassSession[] = [
	{ name: 'Pertemuan 1', date: 'Sabtu, 07 November 2026' },
	{ name: 'Pertemuan 2', date: 'Minggu, 08 November 2026' },
	{ name: 'Pertemuan 3', date: 'Jumat, 13 November 2026' },
	{ name: 'Pertemuan 4', date: 'Sabtu, 14 November 2026' },
	{ name: 'Pertemuan 5', date: 'Minggu, 15 November 2026' },
];

export const speakers: Speaker[] = [
	{ name: 'Pemateri Skill Class', category: 'Skill Class', specialty: 'Membantu peserta mengembangkan ide, menyusun alur cerita, dan mempersiapkan pitch deck.' },
	{ name: 'Pemateri Webinar', category: 'Webinar', specialty: 'Membahas perspektif praktis tentang smart living dan sustainable future.' },
	{ name: 'Juri 01', category: 'Juri', specialty: 'Menilai ketajaman masalah, relevansi solusi, dan potensi dampak ide.' },
	{ name: 'Juri 02', category: 'Juri', specialty: 'Menilai kekuatan strategi, kelayakan implementasi, dan kualitas presentasi.' },
];

export const partners: Partner[] = [
	{ name: 'S Pay', logo: sponsorLogo, type: 'Sponsor', alt: 'Logo S Pay' },
	{ name: 'Ada Event', logo: adaEventLogo, type: 'Media partner', alt: 'Logo Ada Event' },
	{ name: 'Katalog Event Indonesia', logo: katalogEventLogo, type: 'Media partner', alt: 'Logo Katalog Event Indonesia' },
	{ name: 'Lingkar Event', logo: lingkarEventLogo, type: 'Media partner', alt: 'Logo Lingkar Event' },
	{ name: 'Generation Girl Bogor', logo: generationGirlLogo, type: 'Media partner', alt: 'Logo Generation Girl Bogor' },
	{ name: 'BFAST', logo: bfastLogo, type: 'Media partner', alt: 'Logo BFAST Media Partner' },
];

export const faqs: FaqItem[] = [
	{ question: 'Bagaimana cara mendaftarkan tim?', answer: 'Pilih kategori dan batch yang sedang dibuka, isi form pendaftaran dengan data ketua dan anggota tim, lalu ikuti prosedur pembayaran sesuai instruksi yang dikirim panitia.' },
	{ question: 'Apa perbedaan kategori SMA/SMK dan Umum?', answer: 'Kategori SMA/SMK ditujukan bagi pelajar aktif sekolah menengah. Kategori Umum terbuka untuk mahasiswa, alumni, pelaku usaha, dan peserta umum yang memenuhi syarat lomba.' },
	{ question: 'Apakah pembayaran bisa dilakukan oleh satu orang untuk satu tim?', answer: 'Bisa. Pembayaran dilaksanakan satu kali oleh ketua tim sesuai kategori yang dipilih, kemudian panitia akan mendata tim secara resmi.' },
	{ question: 'Kapan periode setiap batch pendaftaran?', answer: 'Batch 1 berlangsung pada 20 September sampai 2 Oktober, Batch 2 pada 3 sampai 18 Oktober, dan Batch 3 pada 19 Oktober sampai 1 November 2026.' },
	{ question: 'Apakah peserta menerima mentoring sebelum final?', answer: 'Ya. Selain jadwal utama, peserta akan mendapatkan arahan serta feedback dari mentor yang relevan dengan ide dan presentasi masing-masing tim.' },
	{ question: 'Kapan merchandise DECOMPE tersedia?', answer: 'Merchandise resmi DECOMPE 5.0 sedang disiapkan. Detail produk, harga, dan cara pemesanan akan diumumkan melalui kanal resmi DECOMPE.' },
];

export const formatRupiah = (amount: number) => `Rp ${amount.toLocaleString('id-ID')}`;
