import { ArrowRight, BookOpen, BriefcaseBusiness, Handshake, Sparkles, Users } from 'lucide-react';
import { challengeTracks, mentors, programHighlights, timeline } from '@/data/eventData';

export default function EventInfoView() {
	const highlights = [
		{ icon: BookOpen, title: 'Teknis lomba', text: 'Tim berisi 1 sampai 3 orang menyusun ide dan mempresentasikan pitch deck sesuai arahan panitia.' },
		{ icon: Users, title: 'Juri dan mentor', text: 'Peserta mendapat masukan tentang ide, alur cerita, dan presentasi dari praktisi lintas bidang.' },
		{ icon: Handshake, title: 'Partner kegiatan', text: 'Sponsor dan media partner mendukung pelaksanaan kompetisi, mentoring, dan sesi presentasi.' },
	];

	const formatFlow = [
		{ title: '01 / Briefing challenge', description: 'Peserta memahami tema, kriteria penilaian, dan mekanisme presentasi.' },
		{ title: '02 / Ideation sprint', description: 'Tim menyusun solusi, riset kebutuhan, dan merancang konsep yang kuat secara logis.' },
		{ title: '03 / Pitch deck', description: 'Peserta menjelaskan visi, strategi, dan dampak sosial maupun bisnis dari solusi yang dibuat.' },
	];

	return <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
		<div className="max-w-3xl">
			<p className="font-mono text-xs font-bold uppercase text-[#E00105]">Event info / 5.0</p>
			<h1 className="mt-3 text-5xl font-black tracking-[-.06em]">Kompetisi dan skill class yang lebih dari sekadar lomba.</h1>
			<p className="mt-5 text-lg leading-8 text-slate-600">DECOMPE X SKILL CLASS 5.0 mengajak peserta mengembangkan gagasan tentang smart living dan sustainable future. Peserta menyusun solusi, menerima arahan mentor, lalu mempresentasikan ide dalam format pitch deck yang siap dibawa ke ekosistem nyata.</p>
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
				<h2 className="text-3xl font-black tracking-[-0.05em]">Pilar pengalaman peserta</h2>
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
			<h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">Dari ide awal hingga pitch final yang siap dipresentasikan.</h2>
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
				<h2 className="text-3xl font-black tracking-[-0.05em]">Focus challenge yang dibahas</h2>
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
			<h2 className="text-3xl font-black">Juri dan mentor</h2>
			<div className="mt-6 grid gap-4 md:grid-cols-3">
				{mentors.map((mentor, index) => (
					<div key={mentor.name} className="border-3 border-[#0F172A] bg-[#FACC15] p-5 shadow-[5px_5px_0px_0px_#0F172A]">
						<div className="mb-8 grid h-20 w-20 place-items-center border-3 border-[#0F172A] bg-white text-3xl font-black">0{index + 1}</div>
						<p className="font-mono text-xs uppercase text-slate-700">{mentor.role}</p>
						<h3 className="mt-1 text-xl font-black">{mentor.name}</h3>
						<p className="mt-2 text-sm leading-6 text-slate-700">{mentor.specialty}</p>
					</div>
				))}
			</div>
		</section>

		<section className="mt-16">
			<h2 className="text-3xl font-black">Timeline inti kegiatan</h2>
			<div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
				{timeline.map((event) => (
					<div key={event.title} className="border-3 border-[#0F172A] bg-white p-5">
						<p className="font-mono text-[10px] font-bold uppercase text-[#E00105]">{event.status}</p>
						<h3 className="mt-2 text-lg font-black">{event.title}</h3>
						<p className="mt-2 text-sm font-medium text-slate-600">{event.date}</p>
					</div>
				))}
			</div>
		</section>
	</div>;
}
