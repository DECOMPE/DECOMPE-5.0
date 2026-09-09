import { X } from 'lucide-react';

export default function HallOfFameModal({ onClose }: { onClose: () => void }) {
	return <div className="fixed inset-0 z-50 grid place-items-center bg-[#0F172A]/70 p-4" onMouseDown={onClose}><div className="w-full max-w-lg border-4 border-[#0F172A] bg-[#FACC15] p-6 shadow-[8px_8px_0px_0px_#0F172A]" onMouseDown={(event) => event.stopPropagation()}><div className="flex justify-between"><div><p className="font-mono text-xs font-bold uppercase">Hall of fame</p><h2 className="mt-2 text-3xl font-black">Mereka yang berdampak</h2></div><button onClick={onClose} aria-label="Tutup"><X /></button></div><p className="mt-5 leading-7">Ruang ini akan menampilkan tim dan karya terbaik yang berhasil membawa gagasan mereka ke tahap berikutnya.</p></div></div>;
}
