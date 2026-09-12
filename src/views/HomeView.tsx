import { motion } from 'framer-motion';
import { ArrowRight, Award, CalendarDays, Download, Lightbulb, Trophy } from 'lucide-react';
import { challengeTracks, eventInfo, formatRupiah, metrics, programHighlights, timeline, totalPrize } from '@/data/eventData';
import PartnerShowcase from '@/components/PartnerShowcase';
import decompeWordmark from '@/assets/Group 12.png';
import skillClassMark from '@/assets/Group 13.png';

const btn = 'inline-flex items-center justify-center gap-2 border-3 border-[#0F172A] px-5 py-3 font-bold transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-0 active:translate-y-0';

export default function HomeView({ onRegister }: { onRegister: () => void }) {
	return <div className="bg-slate-50">
		<section className="grid-paper overflow-hidden border-b-4 border-[#0F172A]">
			<div className="mx-auto flex max-w-4xl items-center justify-center px-5 py-16 lg:px-8 lg:py-24">
				<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="w-full text-center">
					<h1 className="sr-only">DECOMPE 5.0 Skill Class</h1>
					<div className="mx-auto flex w-full max-w-120 items-center gap-2" aria-label="DECOMPE 5.0 Skill Class">
						<img src={decompeWordmark} alt="DECOMPE 5.0" className="h-auto min-w-0 flex-[1.05] object-contain object-left" />
						<img src={skillClassMark} alt="Skill Class" className="h-auto min-w-0 flex-[1.2] object-contain object-right" />
					</div>
					<p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#E00105]">Tema utama</p>
					<h2 className="mx-auto mt-2 max-w-2xl text-3xl font-black leading-tight tracking-tighter sm:text-5xl">{eventInfo.theme}</h2>
					<p className="mx-auto mt-6 max-w-xl text-lg font-medium leading-7 text-slate-800">{eventInfo.tagline}</p>
					<p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-600">Kembangkan solusi untuk tantangan nyata melalui tiga subtema SDG, lalu sampaikan idemu dalam pitch deck yang terarah.</p>
					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<button onClick={onRegister} className={`${btn} bg-[#E00105] text-white shadow-[4px_4px_0px_0px_#0F172A]`}>Daftar Batch 1 <ArrowRight size={18} /></button>
						<a href="#event-info" className={`${btn} bg-white shadow-[4px_4px_0px_0px_#0F172A]`}>Lihat format lomba <Download size={18} /></a>
					</div>
					<div className="mx-auto mt-10 grid max-w-xl gap-4 text-left sm:grid-cols-3">
						{metrics.map((item) => (
							<div key={item.label} className="border-2 border-[#0F172A] bg-white p-4 shadow-[4px_4px_0px_0px_#FF5C00]">
								<div className="font-black text-[#E00105] text-2xl leading-none">{item.value}</div>
								<div className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-700">{item.label}</div>
								<div className="mt-2 text-xs leading-5 text-slate-600">{item.detail}</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>

		<PartnerShowcase />

		<section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
			<div className="mb-8 flex items-end justify-between gap-4">
				<div>
					<p className="font-mono text-xs font-bold uppercase text-[#E00105]">01 / Tema dan subtema</p>
					<h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">Tiga subtema untuk mengembangkan solusi.</h2>
				</div>
				<Lightbulb className="hidden h-12 w-12 text-[#FF5C00] sm:block" />
			</div>
			<div className="grid gap-6 lg:grid-cols-3">
				{challengeTracks.map((track) => (
					<div key={track.title} className="border-3 border-[#0F172A] bg-white p-6 shadow-[6px_6px_0px_0px_#FF5C00]">
						<span className="inline-flex border-2 border-[#0F172A] bg-[#F8FAFC] px-2 py-1 font-mono text-[10px] font-bold uppercase">Subtema</span>
						<h3 className="mt-5 text-2xl font-black">{track.title}</h3>
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

		<section className="border-y-4 border-[#0F172A] bg-[#0F172A] px-5 py-16 text-white lg:px-8">
			<div className="mx-auto max-w-7xl">
				<p className="font-mono text-xs font-bold uppercase text-[#FF5C00]">02 / Why join</p>
				<h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">Bawa ide dari catatan ke pitch.</h2>
				<div className="mt-8 grid gap-6 md:grid-cols-3">
					{programHighlights.map((item) => (
						<div key={item.title} className="border-3 border-white/15 bg-white/5 p-6 backdrop-blur-sm">
							<p className="font-mono text-xs font-bold uppercase text-[#FF5C00]">0{programHighlights.indexOf(item) + 1}</p>
							<h3 className="mt-3 text-xl font-black">{item.title}</h3>
							<p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>

		<section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
			<div className="mb-8 flex items-end justify-between gap-4">
				<div>
					<p className="font-mono text-xs font-bold uppercase text-[#E00105]">03 / Total hadiah</p>
					<h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">Total hadiah untuk ide terbaik.</h2>
				</div>
				<Trophy className="hidden h-12 w-12 text-[#FF5C00] sm:block" />
			</div>
			<div className="border-3 border-[#0F172A] bg-white p-8 shadow-[8px_8px_0px_0px_#FF5C00] sm:p-10">
				<div className="flex flex-wrap items-center justify-between gap-6">
					<div><p className="font-mono text-xs font-bold uppercase text-slate-500">Prize pool mulai dari</p><p className="mt-2 text-5xl font-black tracking-tighter text-[#E00105] sm:text-7xl">{formatRupiah(totalPrize)}+</p></div>
					<Award className="h-14 w-14 text-[#FF5C00]" />
				</div>
				<p className="mt-6 max-w-2xl text-sm leading-6 text-slate-600">Prize pool dimulai dari Rp5.000.000 dan dapat bertambah mengikuti dukungan serta ketentuan akhir panitia. Rincian pembagian hadiah akan diumumkan melalui kanal resmi DECOMPE.</p>
			</div>
		</section>

		<section className="border-y-4 border-[#0F172A] bg-[#FF5C00] px-5 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<p className="font-mono text-xs font-bold uppercase">04 / Roadmap</p>
				<h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">Enam langkah dari daftar sampai awarding.</h2>
				<div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{timeline.map((item, i) => (
						<div key={item.title} className="border-3 border-[#0F172A] bg-white p-5 shadow-[4px_4px_0px_0px_#0F172A]">
							<div className="mb-8 flex justify-between">
								<span className="font-mono text-xs font-bold">0{i + 1}</span>
								<span className={`border-2 border-[#0F172A] px-2 py-1 text-[10px] font-bold uppercase ${item.status === 'Active' ? 'bg-[#E00105] text-white' : 'bg-slate-100'}`}>{item.status}</span>
							</div>
							<h3 className="text-lg font-black">{item.title}</h3>
							<p className="mt-2 flex items-center gap-2 font-mono text-sm"><CalendarDays size={16} />{item.date}</p>
						</div>
					))}
				</div>
			</div>
		</section>

		<section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
			<div className="border-3 border-[#0F172A] bg-[#0F172A] p-8 text-white md:p-12">
				<div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
					<div>
						<p className="font-mono text-xs font-bold uppercase text-[#FF5C00]">Pendaftaran dibuka</p>
						<h2 className="mt-2 text-3xl font-black">Daftarkan tim, lalu mulai dari masalah yang kamu kenal.</h2>
					</div>
					<button onClick={onRegister} className={`${btn} bg-[#FF5C00] text-[#0F172A] shadow-[4px_4px_0px_0px_#FFFFFF]`}>Daftar sekarang <ArrowRight size={18} /></button>
				</div>
			</div>
		</section>
	</div>;
}
