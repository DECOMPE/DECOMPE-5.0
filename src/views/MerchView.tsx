import { ShoppingBag, Sparkles } from 'lucide-react';
import { formatRupiah, merchItems } from '@/data/eventData';

export default function MerchView() {
	return <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
		<div className="max-w-3xl">
			<p className="font-mono text-xs font-bold uppercase text-[#E00105]">Official merch / 5.0</p>
			<h1 className="mt-3 text-4xl font-black leading-tight tracking-[-.06em] sm:text-5xl">Merchandise resmi DECOMPE dengan rasa komunitas.</h1>
			<p className="mt-5 leading-7 text-slate-600">Pesan T-shirt, lanyard, atau sticker pack melalui WhatsApp panitia. Stok dan pengiriman dikonfirmasi langsung oleh panitia.</p>
		</div>

		<div className="mt-12 grid gap-6 md:grid-cols-3">
			{merchItems.map((item) => (
				<article key={item.id} className="border-3 border-[#0F172A] bg-white shadow-[5px_5px_0px_0px_#0F172A]">
					<div className="grid h-56 place-items-center border-b-3 border-[#0F172A] text-7xl" style={{ backgroundColor: item.color }}>
						{item.id === 'shirt' ? '👕' : item.id === 'lanyard' ? '🎟️' : '5.0'}
					</div>
					<div className="p-5">
						<h2 className="text-xl font-black">{item.name}</h2>
						<p className="mt-2 min-h-12 text-sm text-slate-600">{item.description}</p>
						<div className="mt-5 flex flex-wrap items-center justify-between gap-3">
							<span className="font-mono font-bold">{formatRupiah(item.price)}</span>
							<a href={`https://wa.me/628696767420?text=${encodeURIComponent(`Halo DECOMPE, saya ingin memesan ${item.name}.`)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-3 border-[#0F172A] bg-[#E00105] px-3 py-2 text-sm font-bold text-white"><ShoppingBag size={16} /> Pesan</a>
						</div>
					</div>
				</article>
			))}
		</div>

		<div className="mt-16 border-3 border-[#0F172A] bg-[#F8FAFC] p-6 md:p-8">
			<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div>
					<p className="font-mono text-xs font-bold uppercase text-[#E00105]">Community edition</p>
					<h2 className="mt-2 text-2xl font-black">Pakai edisi 5.0 di hari lomba dan setelahnya.</h2>
				</div>
				<div className="inline-flex items-center gap-2 border-3 border-[#0F172A] bg-[#FF5C00] px-4 py-3 font-bold uppercase"><Sparkles size={16} /> Ready to order</div>
			</div>
		</div>
	</div>;
}
