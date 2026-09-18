import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, ChevronDown, Download, HelpCircle } from 'lucide-react';
import { challengeTracks, eventInfo, faqs, formatRupiah, getTimeline, metrics, programHighlights, totalPrize } from '@/data/eventData';
import combinedLogo from '@/assets/logo/decompe x skill class transparent cropped.png';
import vectorAccent from '@/assets/Vector.png';
import { useState } from 'react';

const btn = 'inline-flex items-center justify-center gap-2 border-3 border-[#0F172A] px-5 py-3 font-bold transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-0 active:translate-y-0';

export default function HomeView({ onRegister }: { onRegister: () => void }) {
	const [activeFaq, setActiveFaq] = useState<number | null>(0);
	const timeline = getTimeline();
	return <div className="bg-white">
		<section className="relative overflow-hidden border-b-4 border-[#0F172A]">
			<img src={vectorAccent} alt="" aria-hidden="true" className="pointer-events-none absolute -right-2 top-1/2 hidden h-[78%] w-[34%] -translate-y-1/2 object-contain object-right opacity-35 mix-blend-multiply lg:block" />
			<div className="pointer-events-none absolute -left-12 top-12 hidden h-40 w-40 neo-poster-star neo-star-pulse lg:block" aria-hidden="true"><span className="neo-poster-star-back" /><span className="neo-poster-star-face" /></div>
			<div className="pointer-events-none absolute -right-10 top-44 hidden h-44 w-44 neo-poster-star neo-star-pulse lg:block" aria-hidden="true"><span className="neo-poster-star-back" /><span className="neo-poster-star-face" /></div>
			<div className="pointer-events-none absolute bottom-24 right-[18%] hidden h-10 w-10 bg-[#0F172A] neo-poster-star-outline lg:block" aria-hidden="true"><span className="block h-full w-full neo-poster-star-face" /></div>
			<div className="mx-auto flex max-w-4xl items-center justify-center px-5 py-16 lg:px-8 lg:py-24">
				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="w-full text-center">
					<h1 className="sr-only">DECOMPE 5.0 Skill Class</h1>
					<div className="mx-auto w-full max-w-2xl" aria-label="DECOMPE 5.0 Skill Class">
						<img src={combinedLogo} alt="DECOMPE 5.0 Skill Class" className="h-auto w-full object-contain" />
					</div>
					<h2 className="mx-auto mt-2 max-w-3xl text-3xl font-black leading-tight tracking-tighter sm:text-5xl"><span className="block">{eventInfo.tagline}</span><span className="mt-2 block">{eventInfo.theme}</span></h2>
					<p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-600">Pilih masalah nyata, kembangkan solusinya melalui tiga subtema SDG, lalu susun pitch deck yang meyakinkan.</p>
					<div className="neo-corner neo-lift mx-auto mt-8 max-w-md border-4 border-[#0F172A] bg-[#FF5C00] p-5 text-left shadow-[7px_7px_0px_0px_#0F172A] sm:p-6">
						<p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#0F172A]/75">Total hadiah</p>
						<p className="mt-2 text-5xl font-black leading-none tracking-[-.07em] text-[#0F172A] sm:text-6xl">{formatRupiah(totalPrize)}+</p>
					</div>
					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<button onClick={onRegister} className={`${btn} bg-[#FF5C00] text-[#0F172A] shadow-[4px_4px_0px_0px_#0F172A]`}>Daftar Batch 1 <ArrowRight size={18} /></button>
						<a href="#register" className={`${btn} bg-white shadow-[4px_4px_0px_0px_#0F172A]`}>Download Guidebook <Download size={18} /></a>
					</div>
					<div className="mx-auto mt-10 grid max-w-xl gap-4 text-left sm:grid-cols-3">
						{metrics.map((item) => (
							<div key={item.label} className="neo-lift border-2 border-[#0F172A] bg-white p-4 shadow-[4px_4px_0px_0px_#FF5C00]">
								<div className="font-black text-[#FF5C00] text-2xl leading-none">{item.value}</div>
								<div className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-700">{item.label}</div>
								<div className="mt-2 text-xs leading-5 text-slate-600">{item.detail}</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>

		<section className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
			<div className="mb-8 flex items-end justify-between gap-4">
				<div>
					<h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">Tiga subtema untuk mengembangkan solusi.</h2>
				</div>
			</div>
			<div className="grid gap-6 lg:grid-cols-3">
				{challengeTracks.map((track) => (
					<div key={track.title} className="neo-corner neo-lift border-3 border-[#0F172A] bg-white p-6 shadow-[6px_6px_0px_0px_#FF5C00]">
						<h3 className="text-2xl font-black">{track.title}</h3>
						<p className="mt-3 text-sm leading-6 text-slate-600">{track.description}</p>
						<ul className="mt-5 space-y-2">
							{track.outcomes.map((item) => (
								<li key={item} className="text-sm font-medium text-slate-700">{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>

		<section className="relative overflow-hidden border-y-4 border-black bg-black px-5 py-16 text-white lg:px-8">
			<div className="mx-auto max-w-7xl">
				<h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">Benefit yang kamu dapatkan di DECOMPE 5.0.</h2>
				<div className="mt-8 grid gap-6 md:grid-cols-3">
					{programHighlights.map((item) => (
						<div key={item.title} className="neo-lift border-3 border-white/30 bg-[#111111] p-6">
							<h3 className="text-xl font-black">{item.title}</h3>
							<p className="mt-3 text-sm leading-6 text-white/75">{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>

		<section className="relative border-y-4 border-[#0F172A] bg-white px-5 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<h2 className="text-center text-4xl font-black tracking-tighter sm:text-5xl">Timeline</h2>

				<div className="relative mx-auto mt-10 max-w-3xl">
					<div className="absolute bottom-6 left-6 top-6 w-1 bg-[#0F172A]" aria-hidden="true" />
					<div className="space-y-6">
						{timeline.map((item, i) => <div key={item.title} className="relative flex gap-5"><div className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center border-3 border-[#0F172A] font-mono text-sm font-black shadow-[3px_3px_0px_0px_#0F172A] ${item.status === 'Active' ? 'bg-[#FF5C00] text-[#0F172A] ring-4 ring-[#FF5C00]/50' : 'bg-white text-[#0F172A]'}`}>0{i + 1}</div><div className={`min-w-0 flex-1 border-3 border-[#0F172A] p-5 shadow-[4px_4px_0px_0px_#0F172A] ${item.status === 'Active' ? 'bg-[#FF5C00] text-[#0F172A]' : 'bg-white text-[#0F172A]'}`}><div className="flex flex-wrap items-start justify-between gap-3"><div><h3 className="text-lg font-black">{item.title}</h3>{item.status === 'Active' && <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#0F172A]/70">Sedang berjalan</p>}</div><span className="border-2 border-[#0F172A] bg-white px-2 py-1 text-[10px] font-bold uppercase">{item.status === 'Active' ? 'Aktif' : item.status === 'Past' ? 'Selesai' : 'Akan datang'}</span></div><p className={`mt-3 flex items-center gap-2 font-mono text-sm ${item.status === 'Active' ? 'text-[#0F172A]/80' : 'text-slate-600'}`}><CalendarDays size={16} />{item.date}</p></div></div>)}
					</div>
				</div>
			</div>
		</section>

		<section id="faq" className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
			<h2 className="text-3xl font-black tracking-tighter sm:text-4xl">FAQ</h2>
			<div className="mt-8 space-y-3">
				{faqs.map((faq, index) => <div key={faq.question} className="border-3 border-[#0F172A] bg-white shadow-[4px_4px_0px_0px_#FF5C00]">
					<button className="flex w-full items-center justify-between gap-4 p-5 text-left font-black" onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
						<span className="flex items-center gap-3"><HelpCircle size={18} className="text-[#FF5C00]" />{faq.question}</span>
						<ChevronDown className={`shrink-0 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
					</button>
					{activeFaq === index && <div className="border-t-2 border-[#0F172A] p-5 text-sm leading-7 text-slate-600">{faq.answer}</div>}
				</div>)}
			</div>
		</section>

	</div>;
}
