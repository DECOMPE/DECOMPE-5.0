import { ArrowRight, Check } from 'lucide-react';
import { categories, formatRupiah } from '@/data/eventData';

export default function RegistrationView({ onRegister }: { onRegister: () => void }) {
	return <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
		<div className="max-w-2xl">
			<p className="font-mono text-xs font-bold uppercase text-[#E00105]">Registration / early bird</p>
			<h1 className="mt-3 text-5xl font-black tracking-[-.06em]">Pilih kategori pendaftaran.</h1>
			<p className="mt-5 leading-7 text-slate-600">Pilih kategori sesuai status peserta. Harga yang tercantum berlaku selama periode Early Bird.</p>
		</div>
		<div className="mt-12 grid gap-6 lg:grid-cols-2">
			{categories.map((category, index) => <article key={category.id} className={`border-3 border-[#0F172A] p-6 ${index === 0 ? 'bg-[#FF5C00]' : 'bg-white'} shadow-[6px_6px_0px_0px_#0F172A]`}>
				<p className="font-mono text-xs font-bold uppercase">{category.name}</p>
				<h2 className="mt-3 text-3xl font-black">{formatRupiah(category.price)}</h2>
				<p className="mt-1 text-sm font-bold uppercase">Early Bird / per tim</p>
				<ul className="my-8 space-y-3 border-y-2 border-[#0F172A] py-5">{category.features.map((feature) => <li key={feature} className="flex gap-2 text-sm font-medium"><Check size={18} />{feature}</li>)}</ul>
				<button onClick={onRegister} className="flex w-full items-center justify-between border-3 border-[#0F172A] bg-white px-4 py-3 font-black">Pilih paket ini <ArrowRight size={18} /></button>
			</article>)}
		</div>
	</div>;
}
