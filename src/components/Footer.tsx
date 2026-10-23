import { ArrowUpRight, AtSign, Link2, MapPin, Phone, PlaySquare, Video } from 'lucide-react';
import { contactPersons, eventInfo } from '@/data/eventData';
import combinedLogo from '@/assets/logo/decompe x skill class transparent cropped.png';
import cyberUniversityLogo from '@/assets/image 25.png';
import ukmCodingLogo from '@/assets/Logo UKM Coding vers Hitam (5) 1.svg';
import bemSmaLogo from '@/assets/BEM.png';

const navLinks = [
	['/', 'Home'],
	['/register', 'Kategori Lomba'],
	['/merch', 'Merch'],
];

const footerLogos = [
	{ name: 'Cyber University', logo: cyberUniversityLogo, alt: 'Logo Cyber University' },
	{ name: 'UKM Coding', logo: ukmCodingLogo, alt: 'Logo UKM Coding' },
	{ name: 'BEM SMA', logo: bemSmaLogo, alt: 'Logo BEM SMA' },
];

export default function Footer() {
	return <footer className="border-t-4 border-[#0F172A] bg-white px-5 py-12 text-[#0F172A] lg:px-8">
		<div className="mx-auto max-w-7xl">
			<div className="neo-corner mb-10 grid gap-6 border-2 border-[#0F172A] bg-[#FFF7F1] p-6 shadow-[6px_6px_0px_0px_#FF5C00] md:grid-cols-[1fr_auto] md:items-center md:p-8">
				<div>
					<h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">Bawa ide kamu untuk smart living dan sustainable future.</h2>
				</div>
				<a href="/register" className="inline-flex items-center justify-center gap-2 border-2 border-[#0F172A] bg-[#FF5C00] px-5 py-3 text-sm font-bold uppercase shadow-[4px_4px_0px_0px_#0F172A] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5C00]">Daftar sekarang <ArrowUpRight size={17} aria-hidden="true" /></a>
			</div>

			<div className="grid gap-10 md:grid-cols-[1.25fr_.75fr_.9fr]">
				<div>
					<div className="mb-4 h-36 w-72 bg-white" aria-label="DECOMPE 5.0 Skill Class"><img src={combinedLogo} alt="DECOMPE 5.0 Skill Class" className="h-full w-full object-contain" /></div>
					<p className="max-w-sm text-sm leading-6 text-slate-600">Kompetisi dan skill class untuk mengembangkan solusi berdampak bagi masyarakat, lingkungan, dan masa depan yang lebih berkelanjutan.</p>
					<p className="mt-4 inline-block border-l-4 border-[#FF5C00] pl-3 font-mono text-xs font-bold uppercase text-slate-700">{eventInfo.tagline}</p>
				</div>

				<div>
					<p className="mb-4 font-bold uppercase text-[#FF5C00]">Jelajahi</p>
					<nav className="grid gap-3 text-sm font-semibold text-slate-700">
						{navLinks.map(([href, label]) => <a key={href} href={href} className="w-fit transition-colors hover:text-[#FF5C00]">{label}</a>)}
					</nav>
				</div>

				<div>
					<p className="mb-4 font-bold uppercase text-[#FF5C00]">Kontak panitia</p>
					<div className="space-y-3 text-sm text-slate-700">
						{contactPersons.map((contact) => <a key={contact.name} href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 leading-6 transition-colors hover:text-[#FF5C00]"><Phone size={17} className="shrink-0 text-[#FF5C00]" /> <span>{contact.name} · {contact.phone}</span></a>)}
						<p className="flex items-start gap-3 leading-6"><MapPin size={17} className="mt-1 shrink-0 text-[#FF5C00]" /> <span>{eventInfo.address}</span></p>
					</div>
				</div>
			</div>

			<div className="mt-10 grid gap-8 border-t-2 border-[#0F172A] pt-8 sm:grid-cols-[.8fr_1.2fr] sm:items-end">
				<div>
					<p className="mb-4 font-bold uppercase text-[#FF5C00]">Ikuti kami</p>
					<div className="flex gap-3">
						<a href="https://www.instagram.com/decompeofficial/" target="_blank" rel="noreferrer" aria-label="Instagram DECOMPE" title="Instagram DECOMPE" className="grid h-10 w-10 place-items-center border-2 border-[#0F172A] transition-colors hover:border-[#FF5C00] hover:text-[#FF5C00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5C00]"><AtSign size={18} aria-hidden="true" /></a>
						<a href="https://www.tiktok.com/@decompe" target="_blank" rel="noreferrer" aria-label="TikTok DECOMPE" title="TikTok DECOMPE" className="grid h-10 w-10 place-items-center border-2 border-[#0F172A] transition-colors hover:border-[#FF5C00] hover:text-[#FF5C00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5C00]"><Video size={18} aria-hidden="true" /></a>
						<a href="https://www.youtube.com/@decompe7823" target="_blank" rel="noreferrer" aria-label="YouTube DECOMPE" title="YouTube DECOMPE" className="grid h-10 w-10 place-items-center border-2 border-[#0F172A] transition-colors hover:border-[#FF5C00] hover:text-[#FF5C00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5C00]"><PlaySquare size={18} aria-hidden="true" /></a>
						<a href="https://www.linkedin.com/in/decompe" target="_blank" rel="noreferrer" aria-label="LinkedIn DECOMPE" title="LinkedIn DECOMPE" className="grid h-10 w-10 place-items-center border-2 border-[#0F172A] transition-colors hover:border-[#FF5C00] hover:text-[#FF5C00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5C00]"><Link2 size={18} aria-hidden="true" /></a>
					</div>
				</div>
				<div>
					<p className="mb-4 text-right font-bold uppercase text-[#FF5C00] sm:text-left">Kolaborator</p>
					<div className="flex flex-wrap justify-end gap-3 sm:justify-start">
						{footerLogos.map((item) => <div key={item.name} className="grid h-16 w-32 place-items-center overflow-hidden border-2 border-slate-200 bg-white px-3 py-2">
							<img src={item.logo} alt={item.alt} loading="lazy" decoding="async" className="max-h-11 w-full object-contain" />
						</div>)}
					</div>
				</div>
			</div>

			<div className="mt-10 flex flex-col gap-2 border-t-2 border-[#0F172A] pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
				<p>© 2026 DECOMPE. All rights reserved.</p>
				<p className="font-mono uppercase tracking-wider">Made for ideas that matter.</p>
			</div>
		</div>
	</footer>;
}
