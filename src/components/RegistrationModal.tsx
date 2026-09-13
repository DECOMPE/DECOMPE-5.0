import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { categories, contactPersons, formatRupiah, getRegistrationBatches } from '@/data/eventData';

export default function RegistrationModal({ onClose }: { onClose: () => void }) {
	const registrationBatches = getRegistrationBatches();
	const [selected, setSelected] = useState(categories[0].id);
	const [selectedBatch, setSelectedBatch] = useState(registrationBatches[0].name);
	const category = categories.find((item) => item.id === selected)!;
	const batch = registrationBatches.find((item) => item.name === selectedBatch) ?? registrationBatches[0];
	const price = selected === 'sma' ? batch.prices.sma : batch.prices.umum;

	return <div className="fixed inset-0 z-50 grid place-items-center bg-[#0F172A]/70 p-4" onMouseDown={onClose}>
		<div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto border-4 border-[#0F172A] bg-white p-6 shadow-[8px_8px_0px_0px_#FF5C00]" onMouseDown={(event) => event.stopPropagation()}>
			<div className="mb-6 flex items-start justify-between">
				<div><p className="font-mono text-xs font-bold uppercase text-[#FF5C00]">Step 01 / 02</p><h2 className="mt-1 text-3xl font-black">Pilih batch dan kategori</h2></div>
				<button onClick={onClose} aria-label="Tutup"><X /></button>
			</div>
			<div className="mb-5 grid gap-3 sm:grid-cols-3">
				{registrationBatches.map((item) => <button key={item.name} disabled={item.status === 'Closed'} onClick={() => setSelectedBatch(item.name)} className={`border-3 border-[#0F172A] p-3 text-left disabled:cursor-not-allowed disabled:opacity-50 ${selectedBatch === item.name ? 'bg-[#FF5C00] shadow-[3px_3px_0px_0px_#0F172A]' : 'bg-white hover:bg-[#FF5C00]/20'}`}><div className="flex items-center justify-between gap-2"><span className="font-black">{item.name}</span><span className="text-[9px] font-bold uppercase">{item.status === 'Open' ? 'Aktif' : item.status === 'Closed' ? 'Selesai' : 'Segera'}</span></div><p className="mt-2 text-xs text-slate-700">{item.date}</p></button>)}
			</div>
			<div className="grid gap-4 md:grid-cols-2">
				{categories.map((item) => <button key={item.id} onClick={() => setSelected(item.id)} className={`border-3 border-[#0F172A] p-4 text-left transition-all ${selected === item.id ? 'bg-[#FF5C00] shadow-[4px_4px_0px_0px_#0F172A]' : 'bg-white hover:bg-[#FF5C00]/20'}`}>
					<div className="flex justify-between gap-2"><span className="font-black">{item.name}</span>{selected === item.id && <Check size={20} />}</div>
					<p className="mt-3 text-2xl font-black">{formatRupiah(selected === item.id ? price : item.id === 'sma' ? batch.prices.sma : batch.prices.umum)}</p>
					<p className="mt-1 text-xs font-bold uppercase">{selectedBatch} / per tim</p>
				</button>)}
			</div>
			<div className="mt-6 border-3 border-[#0F172A] bg-white p-4"><p className="font-bold">Yang kamu dapat</p><ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">{category.features.map((feature) => <li key={feature} className="flex gap-2"><Check className="shrink-0 text-[#FF5C00]" size={17} />{feature}</li>)}</ul></div>
			<a href={`https://wa.me/${contactPersons[0].whatsapp}?text=${encodeURIComponent(`Halo ${contactPersons[0].name}, saya ingin mendaftar kategori ${category.name} ${selectedBatch} dengan biaya ${formatRupiah(price)}.`)}`} target="_blank" rel="noreferrer" className="mt-6 block border-3 border-[#0F172A] bg-[#FF5C00] px-5 py-3 text-center font-black text-[#0F172A] shadow-[4px_4px_0px_0px_#0F172A]">Lanjut ke WhatsApp {contactPersons[0].name}</a>
		</div>
	</div>;
}
