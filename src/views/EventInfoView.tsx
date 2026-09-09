import { BookOpen, Handshake, Users } from 'lucide-react';
import { mentors } from '@/data/eventData';

export default function EventInfoView() {
	const highlights = [
		{ icon: BookOpen, title: 'Teknis lomba', text: 'Tim berisi 1 sampai 3 orang menyusun ide dan mempresentasikan pitch deck sesuai arahan panitia.' },
		{ icon: Users, title: 'Juri dan mentor', text: 'Peserta mendapat masukan tentang ide, alur cerita, dan presentasi dari praktisi lintas bidang.' },
		{ icon: Handshake, title: 'Partner kegiatan', text: 'Sponsor dan media partner mendukung pelaksanaan kompetisi, mentoring, dan sesi presentasi.' },
	];
	return <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="max-w-3xl"><p className="font-mono text-xs font-bold uppercase text-[#E00105]">Event info / 5.0</p><h1 className="mt-3 text-5xl font-black tracking-[-.06em]">Kompetisi dan skill class.</h1><p className="mt-5 text-lg leading-8 text-slate-600">DECOMPE X SKILL CLASS 5.0 mengajak peserta mengembangkan gagasan tentang smart living dan sustainable future. Peserta menyusun solusi, menerima arahan mentor, lalu mempresentasikan ide dalam format pitch deck.</p></div><div className="mt-12 grid gap-6 md:grid-cols-3">{highlights.map(({ icon: Icon, title, text }) => <div key={title} className="border-3 border-[#0F172A] bg-white p-6 shadow-[5px_5px_0px_0px_#FF5C00]"><Icon className="mb-8 text-[#E00105]" size={30} /><h2 className="text-xl font-black">{title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></div>)}</div><section className="mt-16"><h2 className="text-3xl font-black">Juri dan mentor</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{mentors.map((mentor, index) => <div key={mentor.name} className="border-3 border-[#0F172A] bg-[#FACC15] p-5"><div className="mb-8 grid h-20 w-20 place-items-center border-3 border-[#0F172A] bg-white text-3xl font-black">0{index + 1}</div><p className="font-mono text-xs uppercase">{mentor.role}</p><h3 className="mt-1 text-xl font-black">{mentor.name}</h3><p className="mt-2 text-sm">{mentor.specialty}</p></div>)}</div></section></div>;
}
