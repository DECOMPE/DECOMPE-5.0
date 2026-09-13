import { contactPersons } from '@/data/eventData';

const merchandisePreview = [
	{ name: 'Apparel', detail: 'Preview apparel edisi 5.0' },
	{ name: 'Event kit', detail: 'Preview perlengkapan acara' },
	{ name: 'Collectibles', detail: 'Preview item koleksi' },
];

export default function MerchView() {
	const contact = contactPersons[0];
	const contactUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Halo, saya ingin mendapatkan informasi merchandise DECOMPE 5.0.')}`;

	return <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
		<div className="max-w-3xl">
			<h1 className="mt-3 text-4xl font-black leading-tight tracking-[-.06em] sm:text-5xl">Merchandise DECOMPE 5.0</h1>
			<p className="mt-5 max-w-2xl leading-7 text-slate-600">Koleksi resmi sedang disiapkan. Hubungi CP untuk mendapatkan informasi terbaru tentang rilisan dan pemesanan.</p>
		</div>

		<section className="mt-10 border-4 border-[#0F172A] bg-[#FF5C00] p-5 shadow-[8px_8px_0px_0px_#0F172A] sm:p-8" aria-labelledby="merch-preview-title">
			<div className="flex flex-col gap-4 border-b-2 border-[#0F172A] pb-5 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<p className="font-mono text-xs font-bold uppercase">Coming soon</p>
					<h2 id="merch-preview-title" className="mt-1 text-3xl font-black tracking-tighter sm:text-4xl">Preview koleksi</h2>
				</div>
				<p className="max-w-xs text-sm font-medium leading-6 text-[#0F172A]/75 sm:text-right">Detail produk dan harga menyusul melalui kanal resmi.</p>
			</div>

			<div className="mt-6 grid gap-4 md:grid-cols-3">
				{merchandisePreview.map((item) => <article key={item.name} className="border-3 border-[#0F172A] bg-white p-4">
					<div className="grid min-h-44 place-items-center border-2 border-dashed border-[#0F172A]/45 bg-white text-center">
						<span className="font-mono text-xs font-bold uppercase text-slate-500">Preview segera hadir</span>
					</div>
					<h3 className="mt-4 text-xl font-black">{item.name}</h3>
					<p className="mt-1 text-sm text-slate-600">{item.detail}</p>
				</article>)}
			</div>

			<div className="mt-6 flex flex-col gap-3 border-t-2 border-[#0F172A] pt-5 sm:flex-row sm:items-center sm:justify-between">
				<p className="text-sm font-medium text-[#0F172A]/75">CP merchandise: {contact.name}</p>
				<a href={contactUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center border-3 border-[#0F172A] bg-white px-5 py-3 font-bold shadow-[4px_4px_0px_0px_#0F172A] transition-transform hover:-translate-y-1">Hubungi CP</a>
			</div>
		</section>
	</div>;
}
