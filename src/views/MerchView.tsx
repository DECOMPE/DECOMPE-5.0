import { useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import allMerch from '@/assets/merch/ALL.png';
import tShirt from '@/assets/merch/T-SHIRT.png';
import enamelPin from '@/assets/merch/ENAMEL.png';
import keychain from '@/assets/merch/KEYCHAIN.png';
import sticker from '@/assets/merch/STICKERS.png';
import bundleA from '@/assets/merch/BUNDLE A cropped.png';
import bundleB from '@/assets/merch/BUNDLE B.png';
import bundleC from '@/assets/merch/BUNDLE C.png';
import bundleD from '@/assets/merch/BUNDLE D.png';

const products = [
	{
		name: 'T-Shirt',
		description: 'Kaos resmi DECOMPE 5.0 dengan desain yang siap dipakai setiap hari dan saat acara.',
		image: tShirt,
	},
	{
		name: 'Enamel Pin',
		description: 'Aksesoris kecil yang cocok untuk tas, jacket, atau koleksi pribadi dengan karakter DECOMPE.',
		image: enamelPin,
	},
	{
		name: 'Keychain',
		description: 'Bawa identitas DECOMPE ke aktivitas harianmu dengan accessory yang ringan dan mudah dipakai.',
		image: keychain,
	},
	{
		name: 'Sticker',
		description: 'Tambahkan sentuhan visual DECOMPE pada laptop, buku, bottle, atau alat sehari-hari.',
		image: sticker,
	},
];

const bundles = [
	{ name: 'Bundle A', image: bundleA, items: ['T-Shirt', 'Enamel Pin', 'Keychain', 'Sticker'], featured: true },
	{ name: 'Bundle B', image: bundleB, items: ['Enamel Pin', 'Keychain', 'Sticker'] },
	{ name: 'Bundle C', image: bundleC, items: ['T-Shirt', 'Enamel Pin'] },
	{ name: 'Bundle D', image: bundleD, items: ['Keychain', 'Sticker'] },
];

const highlights = [
	{
		title: 'Desain yang konsisten',
		description: 'Setiap item dibuat dengan identitas visual yang jelas dan mudah dikenali sebagai merchandise resmi DECOMPE 5.0.',
	},
	{
		title: 'Cocok untuk personal use',
		description: 'Didesain untuk dipakai sehari-hari, dibawa ke kegiatan kampus, komunitas, dan momen penting lainnya.',
	},
	{
		title: 'Pilihan bundle yang lebih lengkap',
		description: 'Kombinasi paket dibuat agar lebih fleksibel, lebih menyenangkan, dan lebih bernilai untuk koleksi.',
	},
];

const faqs = [
	{
		question: 'Kapan merchandise resmi DECOMPE bisa dipesan?',
		answer: 'Pengumuman pembukaan order akan dibagikan melalui kanal resmi DECOMPE. Pastikan kamu mengikuti akun Instagram resmi agar tidak ketinggalan update.',
	},
	{
		question: 'Apakah semua item tersedia dalam bundle?',
		answer: 'Ya. Setiap bundle menggabungkan kombinasi item yang berbeda untuk memberi fleksibilitas pilihan sesuai kebutuhan dan preferensi.',
	},
	{
		question: 'Apakah detail ukuran dan harga akan diumumkan?',
		answer: 'Detail ukuran, harga, dan tata cara pemesanan akan diinformasikan saat periode order resmi dibuka.',
	},
	{
		question: 'Siapa yang bisa membeli merchandise ini?',
		answer: 'Merchandise ini ditujukan untuk peserta, komunitas, dan siapa pun yang ingin mendukung program DECOMPE 5.0.',
	},
];

export default function MerchView() {
	const bundlesRef = useRef<HTMLElement | null>(null);

	return (
		<div className="bg-[#fffaf5] text-[#0F172A]">
			<section className="relative overflow-hidden border-b-[3px] border-[#0F172A] bg-[radial-gradient(circle_at_top_left,rgba(255,92,0,0.12),transparent_30%),linear-gradient(180deg,#fffaf5_0%,#fff3eb_100%)]">
				<div className="pointer-events-none absolute -right-14 top-8 h-52 w-52 rounded-full border-28 border-[#FF5C00]/10 sm:h-72 sm:w-72" aria-hidden="true" />
				<div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
					<div className="max-w-2xl">
						<p className="inline-flex items-center border-2 border-[#0F172A] bg-white px-3 py-2 font-mono text-[10px] font-black uppercase tracking-[0.18em] shadow-[3px_3px_0px_0px_#FF5C00]">
							Official merch DECOMPE 5.0
						</p>
						<h1 className="mt-6 text-5xl font-black leading-[0.92] tracking-[-0.08em] sm:text-6xl xl:text-7xl">
							Bring the energy <span className="text-[#FF5C00]">home.</span>
						</h1>
						<p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
							Merchandise resmi DECOMPE 5.0 hadir untuk kamu yang ingin membawa semangat komunitas, kreativitas, dan ide-ide besar ke dalam aktivitas sehari-hari.
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<a href="https://www.instagram.com/decompeofficial/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border-[3px] border-[#0F172A] bg-[#FF5C00] px-5 py-3 font-bold text-[#0F172A] shadow-[4px_4px_0px_0px_#0F172A] transition-transform hover:-translate-y-0.5">
								Follow latest update <ArrowUpRight size={18} aria-hidden="true" />
							</a>
							<button type="button" onClick={() => bundlesRef.current?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center gap-2 border-[3px] border-[#0F172A] bg-white px-5 py-3 font-bold shadow-[4px_4px_0px_0px_#0F172A] transition-transform hover:-translate-y-0.5">
								See bundles <ArrowDown size={18} aria-hidden="true" />
							</button>
						</div>
					</div>

					<div className="relative mx-auto w-full max-w-xl">
						<div className="rounded-4xl border-[3px] border-[#0F172A] bg-[#111827] p-5 shadow-[12px_12px_0px_0px_#FF5C00] sm:p-6">
							<div className="flex items-center justify-between border-b border-white/15 pb-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
								<span>DECOMPE 5.0</span>
								<span>Merch collection</span>
							</div>
							<div className="mt-4 overflow-hidden rounded-3xl border-2 border-white/10 bg-[#1d2433] p-3">
								<img src={allMerch} alt="Koleksi merchandise DECOMPE 5.0" className="h-full w-full object-contain" />
							</div>
							<div className="mt-4 grid grid-cols-2 gap-3">
								<div className="overflow-hidden rounded-[1.2rem] border-2 border-white/10 bg-[#1d2433] p-2">
									<img src={tShirt} alt="T-Shirt DECOMPE" className="h-28 w-full object-contain" />
								</div>
								<div className="overflow-hidden rounded-[1.2rem] border-2 border-white/10 bg-[#1d2433] p-2">
									<img src={enamelPin} alt="Enamel Pin DECOMPE" className="h-28 w-full object-contain" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
				<div className="max-w-2xl">
					<p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#FF5C00]">Merch lineup</p>
					<h2 className="mt-3 text-3xl font-black tracking-[-0.06em] sm:text-5xl">Everything you need to represent DECOMPE.</h2>
				</div>
				<div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
					{products.map((product) => (
						<article key={product.name} className="overflow-hidden border-[3px] border-[#0F172A] bg-white shadow-[5px_5px_0px_0px_#0F172A] transition-transform hover:-translate-y-1">
							<div className="border-b-[3px] border-[#0F172A] bg-[#FFF7F1] p-4">
								<img src={product.image} alt={product.name} className="mx-auto h-52 w-full object-contain" />
							</div>
							<div className="p-5">
								<h3 className="text-2xl font-black tracking-tighter">{product.name}</h3>
								<p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
							</div>
						</article>
					))}
				</div>
			</section>

			<section ref={bundlesRef} className="border-y-[3px] border-[#0F172A] bg-[#FFF7F1] px-5 py-16 lg:px-8 lg:py-20">
				<div className="mx-auto max-w-7xl">
					<div className="max-w-2xl">
						<p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#FF5C00]">Bundle options</p>
						<h2 className="mt-3 text-3xl font-black tracking-[-0.06em] sm:text-5xl">Curated packages for every kind of supporter.</h2>
					</div>
					<div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
						{bundles.map((bundle) => {
							const isFeatured = bundle.featured;
							return (
								<article
									key={bundle.name}
									className={`overflow-hidden border-[3px] border-[#0F172A] ${isFeatured ? 'bg-[#FF5C00] text-[#0F172A] shadow-[5px_5px_0px_0px_#0F172A]' : 'bg-white text-[#0F172A] shadow-[5px_5px_0px_0px_#FF5C00]'}`}
								>
									<div className={`flex h-64 items-center justify-center border-b-[3px] border-[#0F172A] px-4 py-3 ${isFeatured ? 'bg-[#ff8a3d]' : 'bg-[#fffaf5]'}`}>
										<img src={bundle.image} alt={bundle.name} className="block h-full w-full object-contain object-center" />
									</div>
									<div className="p-5">
										<h3 className="text-2xl font-black tracking-tighter">{bundle.name}</h3>
										<ul className={`mt-3 space-y-2 text-sm ${isFeatured ? 'text-[#0F172A]' : 'text-slate-600'}`}>
											{bundle.items.map((item) => (
												<li key={item} className="flex items-center gap-2">
													<span className="inline-block h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
													{item}
												</li>
											))}
										</ul>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
				<div className="max-w-2xl">
					<p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#FF5C00]">Why it matters</p>
					<h2 className="mt-3 text-3xl font-black tracking-[-0.06em] sm:text-5xl">Designed to feel premium without being noisy.</h2>
				</div>
				<div className="mt-9 grid gap-5 md:grid-cols-3">
					{highlights.map((item) => (
						<article key={item.title} className="border-[3px] border-[#0F172A] bg-white p-6 shadow-[5px_5px_0px_0px_#FF5C00]">
							<h3 className="text-xl font-black tracking-[-0.04em]">{item.title}</h3>
							<p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
						</article>
					))}
				</div>
			</section>

			<section className="mx-auto max-w-4xl px-5 pb-16 lg:px-8 lg:pb-20" aria-labelledby="merch-faq">
				<p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#FF5C00]">FAQ</p>
				<h2 id="merch-faq" className="mt-3 text-3xl font-black tracking-[-0.06em] sm:text-4xl">A few things before the drop opens.</h2>
				<div className="mt-7 space-y-4">
					{faqs.map((faq) => (
						<article key={faq.question} className="border-[3px] border-[#0F172A] bg-white p-5 shadow-[4px_4px_0px_0px_#FF5C00]">
							<h3 className="text-lg font-black">{faq.question}</h3>
							<p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
						</article>
					))}
				</div>
				<div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border-[3px] border-[#0F172A] bg-[#FF5C00] p-5 shadow-[5px_5px_0px_0px_#0F172A] sm:flex-row sm:items-center sm:p-6">
					<div>
						<h3 className="text-2xl font-black tracking-tighter">Stay updated for the official release.</h3>
						<p className="mt-1 text-sm text-[#0F172A]/80">Follow DECOMPE on Instagram to get the latest details on pricing, bundle availability, and order windows.</p>
					</div>
					<a href="https://www.instagram.com/decompeofficial/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-2 border-[#0F172A] bg-white px-4 py-3 font-black shadow-[3px_3px_0px_0px_#0F172A]">
						Instagram DECOMPE <ArrowUpRight size={17} aria-hidden="true" />
					</a>
				</div>
			</section>
		</div>
	);
}
