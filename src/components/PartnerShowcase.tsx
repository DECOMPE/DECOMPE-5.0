import { Handshake, Newspaper } from 'lucide-react';
import { partners } from '@/data/eventData';

const partnerGroups = [
	{ type: 'Sponsor' as const, label: 'Sponsor', icon: Handshake, description: 'Sponsor yang mendukung penyelenggaraan DECOMPE 5.0 dan pengalaman peserta.' },
	{ type: 'Media partner' as const, label: 'Media partner', icon: Newspaper, description: 'Media yang membantu memperluas jangkauan informasi dan cerita acara.' },
];

export default function PartnerShowcase() {
	return <section aria-labelledby="partner-title" className="border-y-4 border-[#0F172A] bg-white px-5 py-14 lg:px-8">
		<div className="mx-auto max-w-7xl">
			<div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
				<div>
					<p className="font-mono text-xs font-bold uppercase text-[#E00105]">Partners / 05</p>
					<h2 id="partner-title" className="mt-2 max-w-lg text-4xl font-black leading-[.98] tracking-tighter">DECOMPE 5.0 didukung oleh sponsor dan media partner.</h2>
					<p className="mt-4 max-w-md text-sm leading-6 text-slate-600">Sponsor mendukung pelaksanaan acara, sementara media partner membantu informasi DECOMPE menjangkau lebih banyak peserta.</p>
				</div>
				<div className="border-l-4 border-[#FF5C00] pl-5 text-sm font-medium leading-6 text-slate-700">Logo ditampilkan sesuai perannya dalam acara. Informasi kanal dan publikasi akan dibagikan melalui kanal resmi DECOMPE.</div>
			</div>

			<div className="mt-10 grid gap-8 md:grid-cols-2">
				{partnerGroups.map(({ type, label, icon: Icon, description }) => {
					const group = partners.filter((partner) => partner.type === type);
					return <div key={type} className="border-3 border-[#0F172A] bg-[#F8FAFC] p-5 shadow-[5px_5px_0px_0px_#FF5C00]">
						<div className="flex items-start justify-between gap-4">
							<div>
								<div className="flex items-center gap-2 text-[#E00105]"><Icon size={17} /><p className="font-mono text-xs font-bold uppercase">{label}</p></div>
								<p className="mt-2 max-w-sm text-xs leading-5 text-slate-600">{description}</p>
							</div>
							<span className="font-mono text-xs font-bold text-slate-400">0{group.length}</span>
						</div>
						<div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
							{group.map((partner) => <figure key={partner.name} className="group relative grid min-h-28 place-items-center overflow-hidden border-2 border-slate-200 bg-white p-4 text-center transition-transform hover:-translate-y-1">
								{partner.logo ? <img src={partner.logo} alt={partner.alt} loading="lazy" decoding="async" className="max-h-20 w-full object-contain transition duration-300 group-hover:scale-105" /> : <span className="text-2xl font-black tracking-tight text-[#0F172A]">{partner.name}</span>}
								<figcaption className="sr-only">{partner.name}</figcaption>
							</figure>)}
						</div>
					</div>;
				})}
			</div>
		</div>
	</section>;
}