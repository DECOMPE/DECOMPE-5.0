import { motion } from 'framer-motion';
import { ArrowRight, Award, CalendarDays, Download, Lightbulb, Sparkles, Star, Trophy } from 'lucide-react';
import { challengeTracks, eventInfo, formatRupiah, metrics, prizePools, programHighlights, timeline } from '@/data/eventData';
import PartnerShowcase from '@/components/PartnerShowcase';
import mascot from '@/assets/NEW MASCOT 1.png';
import decompeWordmark from '@/assets/Group 12.png';
import skillClassMark from '@/assets/Group 13.png';

const btn = 'inline-flex items-center justify-center gap-2 border-3 border-[#0F172A] px-5 py-3 font-bold transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-0 active:translate-y-0';

export default function HomeView({ onRegister }: { onRegister: () => void }) {
	return <div className="bg-slate-50">
		<section className="grid-paper overflow-hidden border-b-4 border-[#0F172A]">
			<div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-24">
				<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
					<p className="mb-5 inline-flex items-center gap-2 border-2 border-[#0F172A] bg-white px-3 py-1 font-mono text-xs font-bold uppercase">Open registration · 5.0</p>
					<h1 className="sr-only">DECOMPE 5.0 Skill Class</h1>
					<div className="flex w-full max-w-[30rem] items-center gap-2" aria-label="DECOMPE 5.0 Skill Class">
						<img src={decompeWordmark} alt="DECOMPE 5.0" className="h-auto min-w-0 flex-[1.05] object-contain object-left" />
						<img src={skillClassMark} alt="Skill Class" className="h-auto min-w-0 flex-[1.2] object-contain object-right" />
					</div>
					<p className="mt-6 max-w-xl text-lg font-medium leading-7 text-slate-800">{eventInfo.tagline}</p>
					<p className="mt-4 max-w-lg text-sm leading-6 text-slate-600">Pilih masalah yang ingin kamu pecahkan, kembangkan solusinya, lalu bawa ke panggung dalam bentuk pitch deck.</p>
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
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_45%)]" />
						<div className="absolute left-3 top-3 hidden border-2 border-[#0F172A] bg-white px-2 py-1 font-mono text-[10px] font-bold uppercase sm:left-5 sm:top-5 sm:block">IDE / KARYA / PRESENTASI</div>
						<div className="absolute bottom-3 right-3 hidden border-2 border-[#0F172A] bg-[#E00105] px-2 py-1 text-[10px] font-bold uppercase text-white sm:bottom-5 sm:right-5 sm:block">EST. 2021</div>
						<img src={mascot} alt="Maskot robot DECOMPE 5.0" className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[8px_8px_0px_#0F172A]" fetchPriority="high" />
						<div className="absolute inset-x-3 bottom-3 rounded-3xl border-4 border-[#0F172A] bg-white/90 p-3 backdrop-blur-sm sm:inset-x-8 sm:bottom-8 sm:p-4">
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

		<PartnerShowcase />

		<section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
			<div className="mb-8 flex items-end justify-between gap-4">
				<div>
					<p className="font-mono text-xs font-bold uppercase text-[#E00105]">01 / Challenge tracks</p>
					<h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">Pilih masalah yang ingin kamu kerjakan.</h2>
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
					<p className="font-mono text-xs font-bold uppercase text-[#E00105]">03 / Prize pool</p>
					<h2 className="mt-2 text-3xl font-black tracking-tighter sm:text-4xl">Kerjakan idenya. Kejar hadiahnya.</h2>
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
