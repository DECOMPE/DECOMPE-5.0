import type { Category, ContactPerson, EventInfo, FaqItem, Partner, RegistrationBatch, SkillClassSession, Speaker, Timeline } from '@/types';
import katalogEventLogo from '@/assets/Katalog Event - Logo 2 1.png';
import adaEventLogo from '@/assets/Logo Adaevent 1.png';
import lingkarEventLogo from '@/assets/MediaPartner.png';
import sponsorLogo from '@/assets/spnsor.png';
import generationGirlLogo from '@/assets/media partenrer.png';
import bfastLogo from '@/assets/LOGO BFAST (1).png';

export const eventInfo: EventInfo = {
	name: 'DECOMPE 5.0 Skill Class',
	tagline: '5 Years Of Impact',
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
	{ value: '5+', label: 'Years in running', detail: 'Lima tahun menghadirkan wadah untuk menguji dan menyampaikan ide.' },
	{ value: '300+', label: 'Participants', detail: 'Peserta dari sekolah, kampus, dan komunitas.' },
	{ value: '3', label: 'SDG subthemes', detail: 'Tiga subtema SDG hadir untuk memantik ide dan solusi kreatif para peserta.' },
];

export const challengeTracks = [
	{
		title: 'SDG 7',
	description: 'Wujudkan energi bersih yang terjangkau, efisien, dan terbarukan. Ciptakan solusi inovatif yang membuat energi berkelanjutan lebih mudah diakses oleh siapa saja.',
		outcomes: ['Energi Terbarukan', 'Efisiensi Energi', 'Akses terjangkau'],
	},
	{
		title: 'SDG 12',
		description: 'Wujudkan konsumsi dan produksi energi yang bertanggung jawab. Rancang inovasi berbasis ekonomi sirkular untuk memanfaatkan sumber daya secara lebih bijak, sekaligus menekan emisi dan meminimalisir limbah.',
		outcomes: ['Ekonomi Sirkular', 'Efisiensi Sumber Daya', 'Bebas Emisi dan Limbah'],
	},
	{
		title: 'SDG 8',
		description: 'Wujudkan Pekerjaan Layak dan Pertumbuhan Ekonomi yang merata. Rancang solusi cerdas yang tidak hanya membuka peluang kerja yang luas, tetapi juga menyetarakan kesempatan dan menggerakkan roda ekonomi yang inklusif.',
		outcomes: ['Ekonomi Inklusif', 'Kesetaraan Peluang', 'Penciptaan Lapangan Kerja'],
	},
];

export const programHighlights = [
	{
		title: 'E-Sertifikat',
		description: 'Abadikan pencapaianmu! Dapatkan E-sertifikat resmi DECOMPE 5.0 bukti nyata kontribusimu dan rekam jejak berharga dari luar biasanya perjalananmu di DECOMPE 5.0.',
	},
	{
		title: 'Mentoring UI/UX',
		description: 'Tingkatkan keahlianmu lewat sesi Mentoring UI/UX! Pelajari rahasia merancang user experience yang menarik serta wujudkan solusi digital yang lebih sasaran.',
	},
	{
		title: 'Akses Skill Class',
		description: 'Dapatkan akses Skillclass sebagai ruang belajar terarah untuk mengembangkan ide, menyusun solusi nyata, dan mempersiapkan presentasimu dengan maksimal.',
	},
];

export const registrationSteps = [
	{ title: 'Pilih paket pendaftaran', description: 'Tentukan paket Skill Class Only atau Skill Class + DECOMPE yang paling sesuai dengan kebutuhanmu.' },
	{ title: 'Isi form pendaftaran', description: 'Lengkapi data ketua tim dan anggota melalui Google Form sebelum melanjutkan ke pembayaran.' },
	{ title: 'Lakukan pembayaran', description: 'Ikuti instruksi pembayaran dan simpan bukti transfer untuk konfirmasi panitia.' },
	{ title: 'Siapkan ide', description: 'Setelah terdaftar, amati masalah, susun solusi, dan siapkan pitch deck sesuai arahan panitia.' },
];

export const categories: Category[] = [
	{ id: 'skillclass-decompe', name: 'Skill Class + DECOMPE', label: 'Skill Class + DECOMPE · Batch 1', price: 100000, features: ['Akses Skill Class', 'Sertifikat Skill Class', 'Materi dan mentoring terarah', 'Akses kompetisi DECOMPE 5.0'] },
	{ id: 'skillclass-only', name: 'Skill Class Only', label: 'Skill Class Only', price: 50000, features: ['Akses Skill Class', 'Sertifikat Skill Class', 'Materi dan mentoring terarah'] },
];

export const registrationFormUrl = 'https://forms.gle/K6Xd3GrJ4mCryfZ19';

export const totalPrize = 5000000;

export const timeline: Timeline[] = [
	{ title: 'Pendaftaran Batch 1', date: '20 Sept - 02 Okt', status: 'Active' },
	{ title: 'Pendaftaran Batch 2', date: '03 Okt - 18 Okt', status: 'Upcoming' },
	{ title: 'Pendaftaran Batch 3', date: '19 Okt - 01 Nov', status: 'Upcoming' },
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
	{ name: 'Batch 1', date: '20 Sept - 02 Okt', status: 'Open' },
	{ name: 'Batch 2', date: '03 Okt - 18 Okt', status: 'Upcoming' },
	{ name: 'Batch 3', date: '19 Okt - 01 Nov', status: 'Upcoming' },
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
    { question: 'Bagaimana cara mendaftarkan tim?', answer: 'Pilih paket pendaftaran, isi formulir dengan data ketua dan anggota, lalu selesaikan pembayaran sesuai instruksi panitia. Anda akan masuk ke batch pendaftaran yang sedang aktif.' },
    { question: 'Apa perbedaan paket Skill Class Only dan Skill Class + DECOMPE?', answer: 'Skill Class Only hanya memberikan akses ke rangkaian sesi Skill Class. Sedangkan Skill Class + DECOMPE memberikan akses Skill Class sekaligus pendaftaran penuh ke kompetisi DECOMPE 5.0.'},
    { question: 'Apakah pembayaran bisa diwakilkan oleh satu orang untuk satu tim?', answer: 'Bisa. Pembayaran cukup dilakukan satu kali oleh perwakilan atau ketua tim sesuai paket yang dipilih.' },
    { question: 'Kapan periode pendaftaran untuk setiap batch berlangsung?', answer: 'Batch 1: 20 September – 2 Oktober 2026 | Batch 2: 3 – 18 Oktober 2026 | Batch 3: 19 Oktober – 1 November 2026.' },
    { question: 'Apakah peserta akan mendapatkan sesi mentoring sebelum tahap final?', answer: 'Ya. Peserta akan mendapatkan sesi mentoring khusus untuk menerima arahan dan feedback demi mematangkan ide dan persiapan presentasi tim.' },
    { question: 'Kapan merchandise resmi DECOMPE 5.0 bisa dibeli?', answer: 'Merchandise saat ini sedang disiapkan. Detail produk, harga, dan cara pemesanan akan segera diumumkan melalui kanal informasi resmi DECOMPE.' }
];

export const formatRupiah = (amount: number) => `Rp ${amount.toLocaleString('id-ID')}`;
