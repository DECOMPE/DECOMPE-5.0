import { AtSign, MapPin, Phone, PlaySquare } from 'lucide-react';
import { eventInfo } from '@/data/eventData';

export default function Footer() {
	return <footer className="border-t-4 border-[#0F172A] bg-[#0F172A] px-5 py-12 text-white lg:px-8">
		<div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
			<div><p className="mb-3 text-2xl font-black">DECOMPE<span className="text-[#FF5C00]">.</span></p><p className="max-w-xs text-sm leading-6 text-slate-300">{eventInfo.tagline}. Kompetisi, mentoring, dan presentasi untuk peserta DECOMPE 5.0.</p></div>
			<div><p className="mb-4 font-bold uppercase text-[#FF5C00]">Kontak</p><p className="mb-2 flex gap-2 text-sm"><Phone size={17} /> {eventInfo.contactPerson}</p><p className="flex gap-2 text-sm"><MapPin size={17} /> {eventInfo.address}</p></div>
			<div><p className="mb-4 font-bold uppercase text-[#FF5C00]">Ikuti kami</p><div className="flex flex-wrap gap-4 text-sm"><a href="https://instagram.com/decompeofficial" className="flex gap-2 hover:text-[#FF5C00]"><AtSign size={17} /> {eventInfo.socials.instagram}</a><a href="https://youtube.com" className="flex gap-2 hover:text-[#FF5C00]"><PlaySquare size={17} /> {eventInfo.socials.youtube}</a></div></div>
		</div>
		<div className="mx-auto mt-10 max-w-7xl border-t border-slate-700 pt-5 text-xs text-slate-400">© 2026 DECOMPE. All rights reserved.</div>
	</footer>;
}
