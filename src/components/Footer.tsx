import { AtSign, Link2, MapPin, Phone, PlaySquare, Video } from 'lucide-react';
import { contactPersons, eventInfo } from '@/data/eventData';
import combinedLogo from '@/assets/logo/decompe x skill class transparent cropped.png';
import cyberUniversityLogo from '@/assets/image 25.png';
import ukmCodingLogo from '@/assets/Logo UKM Coding vers Hitam (5) 1.svg';
import bemSmaLogo from '@/assets/BEM.png';

const navLinks = [
	['#home', 'Home'],
	['#event-info', 'Event Info'],
	['#register', 'Register'],
	['#merch', 'Merch'],
	['#faq', 'FAQ'],
];

const footerLogos = [
	{ name: 'Cyber University', logo: cyberUniversityLogo, alt: 'Logo Cyber University' },
	{ name: 'UKM Coding', logo: ukmCodingLogo, alt: 'Logo UKM Coding' },
	{ name: 'BEM SMA', logo: bemSmaLogo, alt: 'Logo BEM SMA' },
];

export default function Footer() {
	return <footer className="border-t-4 border-[#0F172A] bg-[#0F172A] px-5 py-12 text-white lg:px-8">
		<div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_.8fr_.9fr]">
			<div>
				<div className="mb-4 h-24 w-48" aria-label="DECOMPE 5.0 Skill Class"><img src={combinedLogo} alt="DECOMPE 5.0 Skill Class" className="h-full w-full object-contain" /></div>
				<p className="max-w-xs text-sm leading-6 text-slate-300">Kompetisi dan skill class untuk mengembangkan solusi bagi smart living dan sustainable future.</p>
			</div>

			<div>
				<p className="mb-4 font-bold uppercase text-[#FF5C00]">Kontak</p>
				<div className="space-y-3 text-sm">
					{contactPersons.map((contact) => <a key={contact.name} href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 leading-6 hover:text-[#FF5C00]"><Phone size={17} className="shrink-0 text-[#FF5C00]" /> <span>{contact.name} · {contact.phone}</span></a>)}
				</div>
				<p className="mt-3 flex items-center gap-3 text-sm leading-6"><MapPin size={17} className="shrink-0 text-[#FF5C00]" /> <span>{eventInfo.address}</span></p>
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
		<div className="mx-auto mt-10 max-w-7xl border-t border-slate-700 pt-6">
			<p className="font-bold uppercase text-[#FF5C00]">Kolaborator</p>
			<div className="mt-3 flex flex-wrap items-center gap-3">
				{footerLogos.map((item) => <div key={item.name} className="grid h-16 w-32 place-items-center bg-transparent px-3 py-2">
					<img src={item.logo} alt={item.alt} loading="lazy" decoding="async" className="max-h-11 w-full object-contain" />
				</div>)}
			</div>
		</div>
		<div className="mx-auto mt-10 max-w-7xl border-t border-slate-700 pt-5 text-xs text-slate-400">© 2026 DECOMPE. All rights reserved.</div>
	</footer>;
}
