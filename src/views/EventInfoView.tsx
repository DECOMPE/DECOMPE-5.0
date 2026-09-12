import { ArrowRight, BookOpen, BriefcaseBusiness, Handshake, Sparkles, Users } from 'lucide-react';
import { challengeTracks, formatRupiah, programHighlights, registrationBatches, skillClassSessions, speakers, timeline } from '@/data/eventData';

export default function EventInfoView() {
	const highlights = [
		{ icon: BookOpen, title: 'Teknis lomba', text: 'Tim berisi 1 sampai 3 orang menyusun ide dan mempresentasikan pitch deck sesuai arahan panitia.' },
		{ icon: Users, title: 'Pemateri dan juri', text: 'Satu pemateri Skill Class, satu pemateri Webinar, dan dua juri mendampingi serta menilai proses peserta.' },
		{ icon: Handshake, title: 'Sponsor dan media partner', text: 'Sponsor mendukung acara, sementara media partner membantu menyebarkan informasi kepada peserta.' },
	];

	const formatFlow = [
		{ title: '01 / Briefing challenge', description: 'Peserta memahami tema, kriteria penilaian, dan mekanisme presentasi.' },
		{ title: '02 / Ideation sprint', description: 'Tim meriset kebutuhan, memilih arah solusi, dan menguji apakah idenya masuk akal.' },
		{ title: '03 / Pitch deck', description: 'Peserta menyusun masalah, solusi, rencana, dan dampak yang ingin dicapai.' },
	];

	return <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
		<div className="max-w-3xl">
			<p className="font-mono text-xs font-bold uppercase text-[#E00105]">Event info / 5.0</p>
			<h1 className="mt-3 text-4xl font-black leading-tight tracking-[-.06em] sm:text-5xl">Lomba untuk tim yang ingin menguji idenya.</h1>
			<p className="mt-5 text-lg leading-8 text-slate-600">DECOMPE 5.0 mengajak tim mengembangkan solusi berdasarkan tema dan subtema SDG, menerima masukan, lalu mempresentasikan idenya dalam format pitch deck.</p>
		</div>

		<div className="mt-12 grid gap-6 md:grid-cols-3">
			{highlights.map(({ icon: Icon, title, text }) => (
				<div key={title} className="border-3 border-[#0F172A] bg-white p-6 shadow-[5px_5px_0px_0px_#FF5C00]">
					<Icon className="mb-8 text-[#E00105]" size={30} />
					<h2 className="text-xl font-black">{title}</h2>
					<p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
				</div>
			))}
		</div>

		<section className="mt-16">
			<div className="mb-6 flex items-center justify-between gap-4">
				<h2 className="text-3xl font-black tracking-tighter">Pilar pengalaman peserta</h2>
				<BriefcaseBusiness className="text-[#FF5C00]" />
			</div>
			<div className="grid gap-5 md:grid-cols-3">
				{programHighlights.map((item) => (
					<div key={item.title} className="border-3 border-[#0F172A] bg-[#F8FAFC] p-5">
						<p className="font-mono text-xs font-bold uppercase text-[#E00105]">{item.title}</p>
						<p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
					</div>
				))}
			</div>
		</section>

		<section className="mt-16 border-3 border-[#0F172A] bg-[#FF5C00] p-6 shadow-[8px_8px_0px_0px_#0F172A] md:p-8">
			<p className="font-mono text-xs font-bold uppercase">Format kompetisi</p>
				<h2 className="mt-2 text-2xl font-black tracking-tighter sm:text-3xl">Alur lombanya jelas dari awal.</h2>
			<div className="mt-8 grid gap-4 md:grid-cols-3">
				{formatFlow.map((item) => (
					<div key={item.title} className="border-2 border-[#0F172A] bg-white p-5">
						<h3 className="text-lg font-black">{item.title}</h3>
						<p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
					</div>
				))}
			</div>
		</section>

		<section className="mt-16">
			<div className="mb-6 flex items-center justify-between gap-4">
					<h2 className="text-3xl font-black tracking-tighter">Tema dan subtema SDG</h2>
				<Sparkles className="text-[#E00105]" />
			</div>
			<div className="grid gap-5 md:grid-cols-3">
				{challengeTracks.map((track) => (
					<div key={track.title} className="border-3 border-[#0F172A] bg-white p-5 shadow-[5px_5px_0px_0px_#FACC15]">
						<h3 className="text-xl font-black">{track.title}</h3>
						<p className="mt-3 text-sm leading-6 text-slate-600">{track.description}</p>
						<ul className="mt-5 space-y-2">
							{track.outcomes.map((outcome) => (
								<li key={outcome} className="flex items-center gap-2 text-sm text-slate-700"><ArrowRight size={14} className="text-[#E00105]" />{outcome}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>

		<section className="mt-16">
			<h2 className="text-3xl font-black">Pemateri dan juri</h2>
			<div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
				{speakers.map((speaker, index) => (
					<div key={speaker.name} className="border-3 border-[#0F172A] bg-[#FACC15] p-5 shadow-[5px_5px_0px_0px_#0F172A]">
						<div className="mb-8 grid h-20 w-20 place-items-center border-3 border-[#0F172A] bg-white text-3xl font-black">0{index + 1}</div>
						<p className="font-mono text-xs uppercase text-slate-700">{speaker.category}</p>
						<h3 className="mt-1 text-xl font-black">{speaker.name}</h3>
						<p className="mt-2 text-sm leading-6 text-slate-700">{speaker.specialty}</p>
					</div>
				))}
			</div>
		</section>

		<section className="mt-16">
			<p className="text-center font-mono text-xs font-bold uppercase text-[#E00105]">Milestone acara</p>
			<h2 className="mt-2 text-center text-3xl font-black">Timeline inti kegiatan</h2>
			<div className="mt-6 grid gap-4 md:grid-cols-3">
				{registrationBatches.map((batch) => <div key={batch.name} className={`border-3 border-[#0F172A] p-5 ${batch.status === 'Open' ? 'bg-[#FF5C00] shadow-[5px_5px_0px_0px_#0F172A] ring-2 ring-[#E00105]' : 'bg-white'}`}><div className="flex items-center justify-between gap-3"><h3 className="text-xl font-black">{batch.name}</h3><span className="border-2 border-[#0F172A] bg-white px-2 py-1 text-[10px] font-bold uppercase">{batch.status === 'Open' ? 'Sedang dibuka' : 'Segera'}</span></div><p className="mt-3 text-sm font-medium text-slate-700">{batch.date}</p><div className="mt-4 space-y-1 border-t border-[#0F172A]/20 pt-3 text-sm"><p>Umum: <strong>{formatRupiah(batch.prices.umum)}</strong></p><p>SMA/SMK: <strong>{formatRupiah(batch.prices.sma)}</strong></p></div></div>)}
			</div>
			<div className="mt-8 border-3 border-[#0F172A] bg-[#FF5C00] p-6 shadow-[6px_6px_0px_0px_#0F172A]">
				<div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-xs font-bold uppercase">Jadwal Skill Class</p><h3 className="mt-2 text-2xl font-black">Lima pertemuan untuk mengembangkan ide.</h3></div><p className="text-sm font-bold">November 2026</p></div>
				<div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
					{skillClassSessions.map((session, index) => <div key={session.name} className="border-2 border-[#0F172A] bg-white p-4"><p className="font-mono text-xs font-bold text-[#E00105]">0{index + 1}</p><h4 className="mt-3 font-black">{session.name}</h4><p className="mt-2 text-xs leading-5 text-slate-600">{session.date}</p></div>)}
				</div>
			</div>
			<div className="relative mx-auto mt-8 max-w-3xl">
				<div className="absolute bottom-5 left-6 top-5 w-1 bg-[#FF5C00] md:hidden" aria-hidden="true" />
				<div className="space-y-5">
					{timeline.map((event, index) => (
						<div key={event.title} className="relative flex gap-4 md:block">
							<div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center border-3 border-[#0F172A] bg-[#FF5C00] font-mono text-sm font-black shadow-[3px_3px_0px_0px_#0F172A]">0{index + 1}</div>
							<div className={`flex-1 border-3 border-[#0F172A] p-5 md:mt-4 ${event.status === 'Active' ? 'bg-[#E00105] text-white shadow-[5px_5px_0px_0px_#0F172A]' : 'bg-white'}`}>
								<div className="flex items-start justify-between gap-3"><div><h3 className="text-lg font-black">{event.title}</h3>{event.status === 'Active' && <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-white/80">Sedang berjalan</p>}</div><span className={`shrink-0 border-2 border-[#0F172A] px-2 py-1 text-[10px] font-bold uppercase ${event.status === 'Active' ? 'bg-white text-[#E00105]' : 'bg-slate-100'}`}>{event.status === 'Active' ? 'Aktif' : 'Akan datang'}</span></div>
								<p className={`mt-3 font-mono text-sm font-medium ${event.status === 'Active' ? 'text-white/90' : 'text-slate-600'}`}>{event.date}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	</div>;
}
