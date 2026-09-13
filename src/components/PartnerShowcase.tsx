import { Newspaper } from 'lucide-react';
import { partners } from '@/data/eventData';

const partnerGroups = [
	{ type: 'Media partner' as const, label: 'Media partner', icon: Newspaper, description: 'Media yang membantu memperluas jangkauan informasi dan cerita acara.' },
];

export default function PartnerShowcase() {
	const sponsorPartners = partners.filter((partner) => partner.type === 'Sponsor');

	return <section aria-labelledby="partner-title" className="border-y-4 border-[#0F172A] bg-white px-5 py-10 lg:px-8">
		<div className="mx-auto max-w-7xl">
			<div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
				<div>
					<h2 id="partner-title" className="max-w-lg text-3xl font-black leading-[.98] tracking-tighter sm:text-4xl">Partner DECOMPE 5.0</h2>
					<p className="mt-3 max-w-md text-sm leading-6 text-slate-600">Media partner membantu memperluas jangkauan informasi dan cerita DECOMPE kepada lebih banyak peserta.</p>
				</div>
				<div className="border-l-4 border-[#FF5C00] pl-5 text-sm font-medium leading-6 text-slate-700">Logo ditampilkan sesuai peran masing-masing. Informasi publikasi tersedia melalui kanal resmi DECOMPE.</div>
			</div>

			<div className="mt-7">
				{partnerGroups.map(({ type, label, icon: Icon, description }) => {
					const group = partners.filter((partner) => partner.type === type);
					return <div key={type} className="border-3 border-[#0F172A] bg-white p-4 shadow-[5px_5px_0px_0px_#FF5C00]">
						<div>
							<div className="flex items-center gap-2 text-[#FF5C00]"><Icon size={17} /><p className="font-mono text-xs font-bold uppercase">{label}</p></div>
							<p className="mt-1 max-w-sm text-xs leading-5 text-slate-600">{description}</p>
						</div>
						<div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
							{group.map((partner) => <figure key={partner.name} className="group relative grid min-h-24 place-items-center overflow-hidden border-2 border-slate-200 bg-transparent p-3 text-center transition-transform hover:-translate-y-1">
								{partner.logo ? <img src={partner.logo} alt={partner.alt} loading="lazy" decoding="async" className="max-h-20 w-full object-contain transition duration-300 group-hover:scale-105" /> : <span className="text-2xl font-black tracking-tight text-[#0F172A]">{partner.name}</span>}
								<figcaption className="sr-only">{partner.name}</figcaption>
							</figure>)}
						</div>
					</div>;
				})}
			</div>

			<div className="mt-5 border-t-2 border-[#0F172A] pt-4">
				<p className="inline-flex border-2 border-[#0F172A] bg-[#FF5C00] px-3 py-1 font-mono text-xs font-bold uppercase shadow-[3px_3px_0px_0px_#0F172A]">Sponsor</p>
				<div className="mt-3 flex flex-wrap gap-2">
					{sponsorPartners.map((partner) => <div key={partner.name} className="grid h-16 min-w-28 place-items-center border-2 border-[#0F172A] bg-white px-3 py-2 shadow-[3px_3px_0px_0px_#0F172A]">
						{partner.logo ? <img src={partner.logo} alt={partner.alt} loading="lazy" decoding="async" className="max-h-11 w-full object-contain" /> : <span className="text-sm font-black">{partner.name}</span>}
					</div>)}
				</div>
			</div>
		</div>
	</section>;
}