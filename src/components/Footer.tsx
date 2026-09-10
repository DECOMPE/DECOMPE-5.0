import { AtSign, MapPin, Phone, PlaySquare, Video } from 'lucide-react';
import { eventInfo } from '@/data/eventData';
import decompeWordmark from '@/assets/Group 12.png';
import skillClassMark from '@/assets/Group 13.png';

const navLinks = [
	['#home', 'Home'],
	['#event-info', 'Event Info'],
	['#register', 'Register'],
	['#merch', 'Merch'],
	['#faq', 'FAQ'],
];

export default function Footer() {
	return <footer className="border-t-4 border-[#0F172A] bg-[#0F172A] px-5 py-12 text-white lg:px-8">
		<div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_.8fr_.9fr]">
			<div>
				<div className="mb-4 flex w-full max-w-60 items-center gap-1 bg-white p-2" aria-label="DECOMPE 5.0 Skill Class"><img src={decompeWordmark} alt="DECOMPE 5.0" className="h-auto min-w-0 flex-[1.05] object-contain" /><img src={skillClassMark} alt="Skill Class" className="h-auto min-w-0 flex-[1.2] object-contain" /></div>
				<p className="max-w-xs text-sm leading-6 text-slate-300">Kompetisi dan skill class untuk tim yang ingin mengembangkan ide, menerima feedback, dan berlatih pitching.</p>
			</div>

			<div>
				<p className="mb-4 font-bold uppercase text-[#FF5C00]">Kontak</p>
				<p className="mb-2 flex gap-2 text-sm"><Phone size={17} /> {eventInfo.contactPerson}</p>
				<p className="flex gap-2 text-sm"><MapPin size={17} /> {eventInfo.address}</p>
			</div>

			<div>
				<p className="mb-4 font-bold uppercase text-[#FF5C00]">Ikuti kami</p>
				<div className="mb-5 flex flex-wrap gap-4 text-sm">
					<a href="https://instagram.com/decompeofficial" target="_blank" rel="noreferrer" className="flex gap-2 hover:text-[#FF5C00]"><AtSign size={17} /> {eventInfo.socials.instagram}</a>
					<a href="https://www.tiktok.com/@decompe.5.0" target="_blank" rel="noreferrer" className="flex gap-2 hover:text-[#FF5C00]"><Video size={17} /> {eventInfo.socials.tiktok}</a>
					<a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex gap-2 hover:text-[#FF5C00]"><PlaySquare size={17} /> {eventInfo.socials.youtube}</a>
				</div>
				<nav className="flex flex-wrap gap-3 text-xs font-bold uppercase text-slate-300">
					{navLinks.map(([href, label]) => <a key={href} href={href} className="hover:text-[#FF5C00]">{label}</a>)}
				</nav>
			</div>
		</div>
		<div className="mx-auto mt-10 max-w-7xl border-t border-slate-700 pt-5 text-xs text-slate-400">© 2026 DECOMPE. All rights reserved.</div>
	</footer>;
}
