import { useRef } from 'react';
import { ArrowDown, ArrowUpRight, Badge, KeyRound, Shirt, Sparkles } from 'lucide-react';

const products = [
	{
		name: 'T-shirt',
		status: 'Desain segera hadir',
		description: 'Kenakan semangat DECOMPE 5.0 di mana pun ide membawamu.',
		icon: Shirt,
		accent: 'bg-[#FF5C00]',
	},
	{
		name: 'Enamel pin',
		status: 'Coming soon',
		description: 'Aksen kecil untuk tas, jaket, atau koleksi favoritmu.',
		icon: Badge,
		accent: 'bg-white',
	},
	{
		name: 'Keychain',
		status: 'Info pre-order segera',
		description: 'Bawa identitas DECOMPE bersama kunci dan barang harianmu.',
		icon: KeyRound,
		accent: 'bg-[#FFF7F1]',
	},
	{
		name: 'Sticker',
		status: 'Info pre-order segera',
		description: 'Tambahkan sentuhan DECOMPE ke laptop, botol, dan banyak lagi.',
		icon: Sparkles,
		accent: 'bg-[#FF5C00]',
	},
];

const bundles = [
	{ name: 'Paket A', items: 'T-shirt, enamel pin, keychain, dan sticker', label: 'Paket lengkap' },
	{ name: 'Paket B', items: 'Enamel pin, keychain, dan sticker', label: 'Aksesori lengkap' },
	{ name: 'Paket C', items: 'T-shirt dan enamel pin', label: 'T-shirt + pin' },
	{ name: 'Paket D', items: 'Keychain dan sticker', label: 'Dua aksesori' },
];

const faqs = [
	{
		question: 'Kapan merchandise mulai bisa dipesan?',
		answer: 'Tanggal pemesanan belum diumumkan. Ikuti Instagram resmi DECOMPE untuk pengumuman pembukaan order.',
	},
	{
		question: 'Berapa harga setiap produk dan paket?',
		answer: 'Harga sedang dikonfirmasi dan akan diumumkan bersama informasi pemesanan resmi. Kami belum menampilkan harga agar informasinya tetap akurat.',
	},
	{
		question: 'Apakah t-shirt memiliki pilihan ukuran?',
		answer: 'Informasi ukuran dan panduan ukur t-shirt akan disampaikan saat detail produk dirilis.',
	},
	{
		question: 'Siapa yang bisa membeli merchandise ini?',
		answer: 'Merchandise ditujukan untuk mahasiswa dan dosen. Detail ketentuan pemesanan akan diumumkan bersamaan dengan informasi order.',
	},
];

export default function MerchView() {
	const bundlesRef = useRef<HTMLElement>(null);

	return <div className="bg-white">
		<section className="relative overflow-hidden border-b-4 border-[#0F172A]">
			<div className="pointer-events-none absolute -right-28 -top-24 h-80 w-80 rounded-full border-[40px] border-[#FF5C00]/10 sm:h-[28rem] sm:w-[28rem]" aria-hidden="true" />
			<div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-24">
				<div className="max-w-2xl">
					<p className="inline-flex items-center gap-2 border-2 border-[#0F172A] bg-[#FFF7F1] px-3 py-2 font-mono text-xs font-bold uppercase tracking-[.14em] shadow-[3px_3px_0px_0px_#FF5C00]">
						<span className="h-2.5 w-2.5 rounded-full bg-[#FF5C00]" aria-hidden="true" />
						DECOMPE 5.0 merch drop
					</p>
					<h1 className="mt-7 text-5xl font-black leading-[.95] tracking-[-.07em] sm:text-7xl lg:text-8xl">
						Bawa DECOMPE <span className="text-[#FF5C00]">ke luar layar.</span>
					</h1>
					<p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
						Merchandise resmi DECOMPE 5.0 sedang disiapkan: t-shirt, enamel pin, keychain, dan sticker. Detail produk dan pemesanan akan segera diumumkan.
					</p>
					<div className="mt-8 flex flex-col gap-3 sm:flex-row">
						<a href="https://www.instagram.com/decompeofficial/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border-3 border-[#0F172A] bg-[#FF5C00] px-5 py-3 font-bold text-[#0F172A] shadow-[4px_4px_0px_0px_#0F172A] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5C00]">
							Ikuti pengumumannya <ArrowUpRight size={18} aria-hidden="true" />
						</a>
						<button onClick={() => bundlesRef.current?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center gap-2 border-3 border-[#0F172A] bg-white px-5 py-3 font-bold shadow-[4px_4px_0px_0px_#0F172A] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5C00]">
							Lihat paket <ArrowDown size={18} aria-hidden="true" />
						</button>
					</div>
					<p className="mt-5 text-xs font-medium leading-5 text-slate-500">Harga, ukuran, dan jadwal order akan dibagikan melalui kanal resmi DECOMPE.</p>
				</div>

				<div className="relative mx-auto w-full max-w-lg">
					<div className="absolute -right-3 -top-3 z-10 rotate-6 border-3 border-[#0F172A] bg-[#FF5C00] px-4 py-2 font-mono text-sm font-black uppercase shadow-[4px_4px_0px_0px_#0F172A] sm:-right-5">
						Coming soon
					</div>
					<div className="border-4 border-[#0F172A] bg-[#171717] p-5 shadow-[10px_10px_0px_0px_#FF5C00] sm:p-8">
						<div className="flex items-center justify-between border-b border-white/20 pb-4 font-mono text-[10px] font-bold uppercase tracking-[.18em] text-white/60">
							<span>DECOMPE 5.0</span>							<span>Merchandise resmi</span>
						</div>
						<div className="grid min-h-72 place-items-center py-8 sm:min-h-80">
							<div className="relative grid h-56 w-64 place-items-center bg-[#202020] sm:h-64 sm:w-72" aria-label="Pratinjau grafis merchandise DECOMPE 5.0">
								<div className="absolute inset-0 opacity-25 neo-dots-light" aria-hidden="true" />
								<div className="relative rotate-[-4deg] text-center">
									<p className="font-mono text-xs font-bold uppercase tracking-[.35em] text-[#FF5C00]">Ideas in motion</p>
									<p className="mt-2 text-5xl font-black leading-none tracking-[-.08em] text-white sm:text-6xl">DECOMPE</p>
									<p className="mt-2 inline-block bg-[#FF5C00] px-2 py-1 font-mono text-xs font-black text-[#0F172A]">5.0</p>
								</div>
								<span className="absolute left-5 top-5 text-2xl text-[#FF5C00]" aria-hidden="true">✳</span>
								<span className="absolute bottom-5 right-5 text-2xl text-[#FF5C00]" aria-hidden="true">✳</span>
							</div>
						</div>
						<div className="flex items-center justify-between gap-3 border-t border-white/20 pt-4">
							<p className="text-xs font-bold uppercase tracking-[.12em] text-white">Made for ideas that matter.</p>
							<span className="border border-[#FF5C00] px-2 py-1 font-mono text-[10px] font-bold uppercase text-[#FF5C00]">Sedang disiapkan</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20" aria-labelledby="merch-lineup">
			<div className="max-w-2xl">
				<p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#FF5C00]">Koleksi</p>
				<h2 id="merch-lineup" className="mt-3 text-3xl font-black tracking-[-.05em] sm:text-5xl">Empat cara menunjukkan dukunganmu.</h2>
				<p className="mt-4 leading-7 text-slate-600">Dirancang untuk mahasiswa dan dosen. Simpan dulu yang paling kamu suka—detail finalnya segera menyusul.</p>
			</div>
			<div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
				{products.map((product, index) => {
					const Icon = product.icon;
					return <article key={product.name} className="neo-lift flex min-h-64 flex-col border-3 border-[#0F172A] bg-white p-5 shadow-[5px_5px_0px_0px_#0F172A]">
						<div className={`grid h-14 w-14 place-items-center border-2 border-[#0F172A] ${product.accent}`}>
							<Icon size={28} strokeWidth={2.3} aria-hidden="true" />
						</div>
						<p className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[.16em] text-slate-500">0{index + 1} / 04 · {product.status}</p>
						<h3 className="mt-2 text-2xl font-black tracking-tight">{product.name}</h3>
						<p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
					</article>;
				})}
			</div>
		</section>

		<section ref={bundlesRef} className="border-y-4 border-[#0F172A] bg-[#FFF7F1] px-5 py-16 lg:px-8 lg:py-20" aria-labelledby="merch-bundles">
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
					<div className="max-w-2xl">
						<p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#FF5C00]">Pilih paket</p>
						<h2 id="merch-bundles" className="mt-3 text-3xl font-black tracking-[-.05em] sm:text-5xl">Empat paket. Satu identitas.</h2>
					</div>
					<p className="max-w-sm text-sm leading-6 text-slate-600">Komposisi paket sudah disiapkan. Harga final dan detail tiap paket akan diumumkan setelah dikonfirmasi.</p>
				</div>
				<div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{bundles.map((bundle, index) => <article key={bundle.name} className="border-3 border-[#0F172A] bg-white p-5 shadow-[5px_5px_0px_0px_#FF5C00]">
						<div className="flex items-center justify-between gap-3">
							<span className="font-mono text-xs font-bold uppercase tracking-[.12em] text-slate-500">0{index + 1}</span>
							<span className="border border-[#0F172A] px-2 py-1 font-mono text-[9px] font-bold uppercase">{bundle.label}</span>
						</div>
						<h3 className="mt-5 text-2xl font-black">{bundle.name}</h3>
						<p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{bundle.items}</p>
						<p className="mt-5 border-t-2 border-dashed border-slate-300 pt-4 font-mono text-[10px] font-bold uppercase tracking-[.12em] text-[#FF5C00]">Harga segera diumumkan</p>
					</article>)}
				</div>
			</div>
		</section>

		<section className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20" aria-labelledby="merch-faq">
			<p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#FF5C00]">Info penting</p>
			<h2 id="merch-faq" className="mt-3 text-3xl font-black tracking-[-.05em] sm:text-4xl">Sebelum drop-nya tiba.</h2>
			<div className="mt-7 divide-y-2 divide-[#0F172A] border-y-2 border-[#0F172A]">
				{faqs.map((faq) => <article key={faq.question} className="py-5">
					<h3 className="font-bold">{faq.question}</h3>
					<p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
				</article>)}
			</div>
			<div className="mt-8 flex flex-col items-start justify-between gap-4 border-3 border-[#0F172A] bg-[#FF5C00] p-5 shadow-[5px_5px_0px_0px_#0F172A] sm:flex-row sm:items-center sm:p-6">
				<div>
					<h3 className="text-xl font-black">Jangan sampai ketinggalan drop-nya.</h3>
					<p className="mt-1 text-sm text-[#0F172A]/75">Pantau kanal resmi untuk harga dan jadwal order yang sudah dikonfirmasi.</p>
				</div>
				<a href="https://www.instagram.com/decompeofficial/" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 border-2 border-[#0F172A] bg-white px-4 py-3 text-sm font-bold shadow-[3px_3px_0px_0px_#0F172A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
					Instagram DECOMPE <ArrowUpRight size={17} aria-hidden="true" />
				</a>
			</div>
		</section>
	</div>;
}
