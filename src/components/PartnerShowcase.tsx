import { partners } from '@/data/eventData';

export default function PartnerShowcase() {
	const mediaPartners = partners.filter((partner) => partner.type === 'Media partner');
	const sponsorPartners = partners.filter((partner) => partner.type === 'Sponsor');

	return <section aria-labelledby="partner-title" className="border-y-4 border-[#0F172A] bg-white px-5 py-10 lg:px-8">
		<div className="mx-auto max-w-7xl">
			<h2 id="partner-title" className="text-3xl font-black leading-[.98] tracking-tighter sm:text-4xl">Media partner</h2>
			<div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
				{mediaPartners.map((partner) => <figure key={partner.name} className="group grid min-h-24 place-items-center border-2 border-slate-200 bg-white p-4 text-center transition-transform hover:-translate-y-1 hover:border-[#FF5C00]">
					{partner.logo ? <img src={partner.logo} alt={partner.alt} loading="lazy" decoding="async" className="max-h-16 w-full object-contain transition duration-300 group-hover:scale-105" /> : <span className="text-sm font-black tracking-tight text-[#0F172A]">{partner.name}</span>}
					<figcaption className="sr-only">{partner.name}</figcaption>
				</figure>)}
			</div>

			<div className="mt-8 border-t-2 border-[#0F172A] pt-6">
				<p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#FF5C00]">Our Sponsors</p>
				<div className="mt-3 flex flex-wrap gap-3">
					{sponsorPartners.map((partner) => <div key={partner.name} className="grid h-16 min-w-28 place-items-center border-2 border-[#0F172A] bg-white px-3 py-2 shadow-[3px_3px_0px_0px_#0F172A]">
						{partner.logo ? <img src={partner.logo} alt={partner.alt} loading="lazy" decoding="async" className="max-h-11 w-full object-contain" /> : <span className="text-sm font-black">{partner.name}</span>}
					</div>)}
				</div>
			</div>
		</div>
	</section>;
}