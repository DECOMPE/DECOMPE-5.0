import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '@/data/eventData';

export default function FaqView() {
	const [active, setActive] = useState<number | null>(0);
	return <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
		<div className="max-w-3xl">
			<p className="font-mono text-xs font-bold uppercase text-[#E00105]">FAQ / help desk</p>
			<h1 className="mt-3 text-4xl font-black leading-tight tracking-[-.06em] sm:text-5xl">Jawaban sebelum kamu mendaftar.</h1>
			<p className="mt-5 leading-7 text-slate-600">Cek kategori, pembayaran, mentoring, jadwal, dan cara memesan merchandise di sini.</p>
		</div>

		<div className="mt-10 space-y-4">
			{faqs.map((faq, index) => (
				<div key={faq.question} className="border-3 border-[#0F172A] bg-white shadow-[4px_4px_0px_0px_#FF5C00]">
					<button className="flex w-full items-center justify-between gap-4 p-5 text-left font-black" onClick={() => setActive(active === index ? null : index)}>
						<span className="flex items-center gap-3"><HelpCircle size={18} className="text-[#E00105]" />{faq.question}</span>
						<ChevronDown className={`shrink-0 transition-transform ${active === index ? 'rotate-180' : ''}`} />
					</button>
					{active === index && <div className="border-t-2 border-[#0F172A] p-5 text-sm leading-7 text-slate-600">{faq.answer}</div>}
				</div>
			))}
		</div>
	</div>;
}
