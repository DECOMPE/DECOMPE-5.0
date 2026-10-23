import { ArrowRight, Check } from 'lucide-react';
import { categories, formatRupiah, getRegistrationBatches, registrationSteps } from '@/data/eventData';

export default function RegistrationView({ onRegister }: { onRegister: () => void }) {
	const registrationBatches = getRegistrationBatches();
	const activeBatch = registrationBatches.find((batch) => batch.status === 'Open');
	const pricingBatch = activeBatch ?? registrationBatches.find((batch) => batch.status === 'Upcoming');
	return <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
		<div className="max-w-3xl">
			<h1 className="mt-3 text-4xl font-black leading-tight tracking-[-.06em] sm:text-5xl">Pilih kategori timmu.</h1>
			<p className="mt-5 leading-7 text-slate-600">Pilih paket Skill Class Only atau Skill Class + DECOMPE. Periode pendaftaran mengikuti batch yang sedang dibuka.</p>
		</div>

		<section className="mt-10 border-3 border-[#0F172A] bg-white p-5 shadow-[5px_5px_0px_0px_#FF5C00] sm:p-7">
			<div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-mono text-xs font-bold uppercase text-[#FF5C00]">Periode pendaftaran</p><h2 className="mt-1 text-2xl font-black">Pendaftaran mengikuti batch yang aktif.</h2></div><p className="text-sm text-slate-600">Pilih paket pada kartu di bawah.</p></div>
			<div className="mt-6 grid gap-4 md:grid-cols-3">
				{registrationBatches.map((batch) => <article key={batch.name} className={`border-2 border-[#0F172A] p-4 ${batch.status === 'Open' ? 'bg-[#FF5C00]' : 'bg-white'}`}><div className="flex items-center justify-between gap-2"><h3 className="font-black">{batch.name}</h3><span className="font-mono text-[10px] font-bold uppercase">{batch.status === 'Open' ? 'Dibuka' : batch.status === 'Closed' ? 'Selesai' : 'Segera'}</span></div><p className="mt-2 text-xs text-slate-700">{batch.date}</p></article>)}
			</div>
		</section>

		<div className="mt-12 grid gap-6 lg:grid-cols-2">
			{categories.map((category) => (
				<article key={category.id} className="flex h-full flex-col border-3 border-[#0F172A] bg-white p-6 shadow-[6px_6px_0px_0px_#0F172A]">
					<p className="font-mono text-xs font-bold uppercase">{category.name}</p>
					<h2 className="mt-3 text-3xl font-black">{pricingBatch ? formatRupiah(pricingBatch.prices[category.id]) : 'Pendaftaran ditutup'}</h2>
					{pricingBatch && <p className="mt-1 text-sm font-bold uppercase">{pricingBatch.name}{category.id === 'skillclass-decompe' ? ' · per tim' : ''}</p>}
					<ul className="my-8 flex-1 space-y-3 border-y-2 border-[#0F172A] py-5">
						{category.features.map((feature) => (
							<li key={feature} className="flex gap-2 text-sm font-medium"><Check size={18} className="mt-0.5 shrink-0" />{feature}</li>
						))}
					</ul>
					<button onClick={onRegister} className="mt-auto flex w-full items-center justify-between border-3 border-[#0F172A] bg-white px-4 py-3 font-black">Pilih paket ini <ArrowRight size={18} /></button>
				</article>
			))}
		</div>

		<section className="mt-16">
			<div className="mb-6 flex items-center justify-between gap-4">
				<h2 className="text-3xl font-black tracking-tighter">Cara pendaftaran</h2>
			</div>
			<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
				{registrationSteps.map((step) => (
					<div key={step.title} className="border-3 border-[#0F172A] bg-white p-5">
						<h3 className="text-lg font-black">{step.title}</h3>
						<p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
					</div>
				))}
			</div>
		</section>
	</div>;
}