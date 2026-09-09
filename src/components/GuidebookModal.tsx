import { X } from 'lucide-react';

export default function GuidebookModal({ onClose }: { onClose: () => void }) {
	return <div className="fixed inset-0 z-50 grid place-items-center bg-[#0F172A]/70 p-4" onMouseDown={onClose}><div className="w-full max-w-lg border-4 border-[#0F172A] bg-white p-6 shadow-[8px_8px_0px_0px_#FF5C00]" onMouseDown={(event) => event.stopPropagation()}><div className="flex justify-between"><div><p className="font-mono text-xs font-bold uppercase text-[#E00105]">Guidebook / 5.0</p><h2 className="mt-2 text-3xl font-black">Panduan lomba</h2></div><button onClick={onClose} aria-label="Tutup"><X /></button></div><p className="mt-5 leading-7 text-slate-600">Dokumen ini memuat ketentuan peserta, format karya, kriteria penilaian, dan jadwal pengumpulan. Panitia akan membagikan file resmi melalui kanal pendaftaran.</p><button className="mt-6 w-full border-3 border-[#0F172A] bg-[#FF5C00] px-4 py-3 font-black">Unduh guidebook</button></div></div>;
}
