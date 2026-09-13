import { AtSign, Link2, MapPin, Phone, PlaySquare, Video } from 'lucide-react';
import { contactPersons, eventInfo, partners } from '@/data/eventData';
import decompeWordmark from '@/assets/Group 12.png';
import skillClassMark from '@/assets/SKILLCLASS.png';

const navLinks = [
	['#home', 'Home'],
	['#event-info', 'Event Info'],
	['#register', 'Register'],
	['#merch', 'Merch'],
	['#faq', 'FAQ'],
];

export default function Footer() {
	const footerSponsors = partners.filter((partner) => partner.type === 'Sponsor' && partner.name !== 'S Pay');

	return <footer className="border-t-4 border-[#0F172A] bg-[#0F172A] px-5 py-12 text-white lg:px-8">
		<div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_.8fr_.9fr]">
			<div>
				<div className="mb-4 inline-flex items-center gap-0 border-2 border-white/40 bg-slate-100 px-3 py-2 shadow-[4px_4px_0px_0px_#FF5C00]" aria-label="DECOMPE 5.0 Skill Class"><img src={decompeWordmark} alt="DECOMPE 5.0" className="h-14 w-24 object-contain sm:h-16 sm:w-28" /><img src={skillClassMark} alt="Skill Class" className="-ml-1 h-14 w-28 object-contain sm:h-16 sm:w-32" /></div>
				<p className="max-w-xs text-sm leading-6 text-slate-300">Kompetisi dan skill class untuk mengembangkan solusi bagi smart living dan sustainable future.</p>
			</div>

			<div>
				<p className="mb-4 font-bold uppercase text-[#FF5C00]">Kontak</p>
				<div className="space-y-2 text-sm">
					{contactPersons.map((contact) => <a key={contact.name} href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="flex gap-2 hover:text-[#FF5C00]"><Phone size={17} /> {contact.name} · {contact.phone}</a>)}
				</div>
				<p className="flex gap-2 text-sm"><MapPin size={17} /> {eventInfo.address}</p>
			</div>

			<div>
				<p className="mb-4 font-bold uppercase text-[#FF5C00]">Ikuti kami</p>
				<div className="mb-5 flex gap-3">
					<a href="https://www.instagram.com/decompeofficial/" target="_blank" rel="noreferrer" aria-label="Instagram DECOMPE" title="Instagram DECOMPE" className="grid h-10 w-10 place-items-center border-2 border-white/30 transition-colors hover:border-[#FF5C00] hover:text-[#FF5C00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5C00]"><AtSign size={18} aria-hidden="true" /></a>
					<a href="https://www.tiktok.com/@decompe" target="_blank" rel="noreferrer" aria-label="TikTok DECOMPE" title="TikTok DECOMPE" className="grid h-10 w-10 place-items-center border-2 border-white/30 transition-colors hover:border-[#FF5C00] hover:text-[#FF5C00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5C00]"><Video size={18} aria-hidden="true" /></a>
					<a href="https://www.youtube.com/@decompe7823" target="_blank" rel="noreferrer" aria-label="YouTube DECOMPE" title="YouTube DECOMPE" className="grid h-10 w-10 place-items-center border-2 border-white/30 transition-colors hover:border-[#FF5C00] hover:text-[#FF5C00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5C00]"><PlaySquare size={18} aria-hidden="true" /></a>
					<a href="https://www.linkedin.com/in/decompe" target="_blank" rel="noreferrer" aria-label="LinkedIn DECOMPE" title="LinkedIn DECOMPE" className="grid h-10 w-10 place-items-center border-2 border-white/30 transition-colors hover:border-[#FF5C00] hover:text-[#FF5C00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5C00]"><Link2 size={18} aria-hidden="true" /></a>
				</div>
				<nav className="flex flex-wrap gap-3 text-xs font-bold uppercase text-slate-300">
					{navLinks.map(([href, label]) => <a key={href} href={href} className="hover:text-[#FF5C00]">{label}</a>)}
				</nav>
			</div>
		</div>
		<div className="mx-auto mt-10 max-w-7xl border-t border-slate-700 pt-8">
			<div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
				<div>
					<p className="font-bold uppercase text-[#FF5C00]">Sponsor pendukung</p>
					<p className="mt-2 max-w-md text-sm leading-6 text-slate-300">Terima kasih kepada sponsor yang mendukung penyelenggaraan DECOMPE 5.0.</p>
				</div>
				<div className="grid grid-cols-3 gap-3">
					{footerSponsors.map((sponsor) => <figure key={sponsor.name} className="grid h-20 w-28 place-items-center p-3">
						{sponsor.logo && <img src={sponsor.logo} alt={sponsor.alt} loading="lazy" decoding="async" className="max-h-14 w-full object-contain" />}
					</figure>)}
				</div>
			</div>
		</div>
		<div className="mx-auto mt-10 max-w-7xl border-t border-slate-700 pt-5 text-xs text-slate-400">© 2026 DECOMPE. All rights reserved.</div>
	</footer>;
}
