import { X } from 'lucide-react';

export default function MediaKitModal({ onClose }: { onClose: () => void }) {
	return <div className="fixed inset-0 z-50 grid place-items-center bg-[#0F172A]/70 p-4" onMouseDown={onClose}><div className="w-full max-w-lg border-4 border-[#0F172A] bg-white p-6 shadow-[8px_8px_0px_0px_#E00105]" onMouseDown={(event) => event.stopPropagation()}><div className="flex justify-between"><div><p className="font-mono text-xs font-bold uppercase text-[#E00105]">Media kit</p><h2 className="mt-2 text-3xl font-black">Bawa ceritanya</h2></div><button onClick={onClose} aria-label="Tutup"><X /></button></div><p className="mt-5 leading-7 text-slate-600">Media kit berisi logo, ringkasan acara, dan informasi publikasi untuk membantu partner menyampaikan cerita DECOMPE secara konsisten.</p><button className="mt-6 w-full border-3 border-[#0F172A] bg-[#E00105] px-4 py-3 font-black text-white">Unduh media kit</button></div></div>;
}
