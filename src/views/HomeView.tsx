import { motion } from 'framer-motion';
import { ArrowRight, Award, CalendarDays, Download, Lightbulb, Sparkles, Star, Trophy } from 'lucide-react';
import { challengeTracks, eventInfo, formatRupiah, metrics, prizePools, programHighlights, timeline } from '@/data/eventData';

const btn = 'inline-flex items-center justify-center gap-2 border-3 border-[#0F172A] px-5 py-3 font-bold transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-0 active:translate-y-0';

export default function HomeView({ onRegister }: { onRegister: () => void }) {
	return <div className="bg-slate-50">
		<section className="grid-paper overflow-hidden border-b-4 border-[#0F172A]">
			<div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-24">
				<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
					<p className="mb-5 inline-flex items-center gap-2 border-2 border-[#0F172A] bg-white px-3 py-1 font-mono text-xs font-bold uppercase">Open registration · 5.0</p>
					<h1 className="max-w-3xl text-5xl font-black leading-[.95] tracking-[-.07em] sm:text-7xl">DECOMPE X<br /><span className="text-[#E00105]">SKILL CLASS</span></h1>
					<p className="mt-6 max-w-xl text-lg font-medium leading-7 text-slate-800">{eventInfo.tagline}</p>
					<p className="mt-4 max-w-lg text-sm leading-6 text-slate-600">Susun ide, bangun solusi, lalu presentasikan pitch deck yang membuktikan kontribusi nyata untuk smart living dan sustainable future.</p>
					<div className="mt-8 flex flex-wrap gap-4">
						<button onClick={onRegister} className={`${btn} bg-[#E00105] text-white shadow-[4px_4px_0px_0px_#0F172A]`}>Daftar Tim (Early Bird) <ArrowRight size={18} /></button>
						<a href="#event-info" className={`${btn} bg-white shadow-[4px_4px_0px_0px_#0F172A]`}>Lihat format lomba <Download size={18} /></a>
					</div>
					<div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
						{metrics.map((item) => (
							<div key={item.label} className="border-2 border-[#0F172A] bg-white p-4 shadow-[4px_4px_0px_0px_#FF5C00]">
								<div className="font-black text-[#E00105] text-2xl leading-none">{item.value}</div>
								<div className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-700">{item.label}</div>
								<div className="mt-2 text-xs leading-5 text-slate-600">{item.detail}</div>
							</div>
						))}
					</div>
				</motion.div>
				<motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} className="relative mx-auto w-full max-w-xl">
					<div className="relative aspect-[1.02] overflow-hidden border-4 border-[#0F172A] bg-[#FF5C00] shadow-[12px_12px_0px_0px_#0F172A]">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45),_transparent_45%)]" />
						<div className="absolute left-5 top-5 border-2 border-[#0F172A] bg-white px-2 py-1 font-mono text-[10px] font-bold uppercase">IDE / KARYA / PRESENTASI</div>
						<div className="absolute bottom-5 right-5 border-2 border-[#0F172A] bg-[#E00105] px-2 py-1 text-[10px] font-bold uppercase text-white">EST. 2021</div>
						<div className="absolute left-1/2 top-1/2 grid h-48 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center border-4 border-[#0F172A] bg-white text-7xl font-black shadow-[6px_6px_0px_0px_#0F172A]">5.0</div>
						<div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] border-4 border-[#0F172A] bg-white/90 p-4 backdrop-blur-sm">
							<div className="mb-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.12em] text-slate-600">
								<span>Challenge focus</span>
								<span className="flex items-center gap-1 text-[#E00105]"><Star size={12} fill="currentColor" /> Featured</span>
							</div>
							<div className="grid gap-3 sm:grid-cols-2">
								{challengeTracks.slice(0, 2).map((track) => (
									<div key={track.title} className="rounded-xl border-2 border-[#0F172A] bg-[#F8FAFC] p-3">
										<p className="font-black text-sm">{track.title}</p>
										<p className="mt-1 text-[11px] leading-5 text-slate-600">{track.outcomes[0]}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>

		<section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
			<div className="mb-8 flex items-end justify-between gap-4">
				<div>
					<p className="font-mono text-xs font-bold uppercase text-[#E00105]">01 / Challenge tracks</p>
					<h2 className="mt-2 text-4xl font-black tracking-[-0.05em]">Jelajahi fokus yang relevan dengan masa depan.</h2>
				</div>
				<Lightbulb className="hidden h-12 w-12 text-[#FF5C00] sm:block" />
			</div>
			<div className="grid gap-6 lg:grid-cols-3">
				{challengeTracks.map((track) => (
					<div key={track.title} className="border-3 border-[#0F172A] bg-white p-6 shadow-[6px_6px_0px_0px_#FF5C00]">
						<span className="inline-flex border-2 border-[#0F172A] bg-[#F8FAFC] px-2 py-1 font-mono text-[10px] font-bold uppercase">Focus track</span>
						<h3 className="mt-5 text-2xl font-black">{track.title}</h3>
						<p className="mt-3 text-sm leading-6 text-slate-600">{track.description}</p>
						<ul className="mt-5 space-y-2">
							{track.outcomes.map((item) => (
								<li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700"><Sparkles size={14} className="text-[#E00105]" />{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>

		<section className="border-y-4 border-[#0F172A] bg-[#0F172A] px-5 py-16 text-white lg:px-8">
			<div className="mx-auto max-w-7xl">
				<p className="font-mono text-xs font-bold uppercase text-[#FF5C00]">02 / Why join</p>
				<h2 className="mt-2 text-4xl font-black tracking-[-0.05em]">Belajar, bertumbuh, dan tampil dengan ide yang lebih kuat.</h2>
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
					<p className="font-mono text-xs font-bold uppercase text-[#E00105]">03 / Prize pool</p>
					<h2 className="mt-2 text-4xl font-black tracking-[-0.05em]">Buat ide. Bawa pulang hadiah.</h2>
				</div>
				<Trophy className="hidden h-12 w-12 text-[#FF5C00] sm:block" />
			</div>
			<div className="grid gap-6 lg:grid-cols-2">
				{prizePools.map((pool) => (
					<div key={pool.category} className="border-3 border-[#0F172A] bg-white p-5 shadow-[6px_6px_0px_0px_#FF5C00]">
						<div className="mb-5 flex items-center justify-between border-b-3 border-[#0F172A] pb-4">
							<h3 className="text-2xl font-black">{pool.category}</h3>
							<Award className="text-[#E00105]" />
						</div>
						{pool.prizes.map((prize, index) => (
							<div key={prize.rank} className="flex items-center justify-between border-b border-slate-200 py-3 last:border-0">
								<span className="flex items-center gap-3 font-bold">
									<span className="grid h-7 w-7 place-items-center bg-[#FF5C00] font-mono text-xs font-black text-[#0F172A]">{index + 1}</span>
									{prize.rank}
								</span>
								<span className="font-mono font-bold">{formatRupiah(prize.amount)}</span>
							</div>
						))}
					</div>
				))}
			</div>
		</section>

		<section className="border-y-4 border-[#0F172A] bg-[#FF5C00] px-5 py-16 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<p className="font-mono text-xs font-bold uppercase">04 / Roadmap</p>
				<h2 className="mt-2 text-4xl font-black tracking-[-0.05em]">Enam langkah menuju impact yang nyata.</h2>
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
						<h2 className="mt-2 text-3xl font-black">Daftarkan tim dan siapkan ide yang mengguncang pasar.</h2>
					</div>
					<button onClick={onRegister} className={`${btn} bg-[#FF5C00] text-[#0F172A] shadow-[4px_4px_0px_0px_#FFFFFF]`}>Daftar sekarang <ArrowRight size={18} /></button>
				</div>
			</div>
		</section>
	</div>;
}
