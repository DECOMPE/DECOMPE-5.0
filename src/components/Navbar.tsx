import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import MainLogo from './MainLogo';

export default function Navbar({ onRegister }: { onRegister: () => void }) {
	const [open, setOpen] = useState(false);
	const links = [['#home', 'Home'], ['#register', 'Kategori Lomba'], ['#merch', 'Merch'],];

	return <header className="sticky top-0 z-40 border-b-3 border-[#0F172A] bg-white/95 backdrop-blur-sm">
		<div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-5 sm:py-4 lg:px-8">
			<a href="#home" aria-label="DECOMPE home"><MainLogo /></a>
			<nav className="hidden items-center gap-4 md:flex lg:gap-6">
				{links.map(([href, label]) => (
					<a key={href} href={href} className="text-sm font-bold uppercase transition-colors hover:text-[#FF5C00]">{label}</a>
				))}
				<button onClick={onRegister} className="border-3 border-[#0F172A] bg-[#FF5C00] px-4 py-2 text-sm font-bold text-[#0F172A] shadow-[4px_4px_0px_0px_#0F172A] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0">Daftar Lomba</button>
			</nav>
			<button className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</button>
		</div>
		{open && (
			<nav id="mobile-navigation" aria-label="Navigasi mobile" className="border-t-3 border-[#0F172A] bg-[#FF5C00] p-5 md:hidden">
				{links.map(([href, label]) => (
					<a onClick={() => setOpen(false)} key={href} href={href} className="block border-b-2 border-[#0F172A] py-3 font-bold uppercase">{label}</a>
				))}
				<button onClick={() => { setOpen(false); onRegister(); }} className="mt-4 w-full border-3 border-[#0F172A] bg-white px-4 py-3 font-bold">Daftar Lomba</button>
			</nav>
		)}
	</header>;
}
