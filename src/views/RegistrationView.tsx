import { ArrowRight, Check, ClipboardList, Wallet } from 'lucide-react';
import { categories, formatRupiah, registrationSteps } from '@/data/eventData';

export default function RegistrationView({ onRegister }: { onRegister: () => void }) {
	return <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
		<div className="max-w-3xl">
			<p className="font-mono text-xs font-bold uppercase text-[#E00105]">Registration / Batch 1</p>
			<h1 className="mt-3 text-4xl font-black leading-tight tracking-[-.06em] sm:text-5xl">Pilih kategori timmu.</h1>
			<p className="mt-5 leading-7 text-slate-600">Batch 1 tersedia untuk kategori Umum dan SMA/SMK. Pilih kategori untuk melihat fasilitas dan biaya pendaftaran per tim.</p>
		</div>

		<div className="mt-12 grid gap-6 lg:grid-cols-2">
			{categories.map((category, index) => (
				<article key={category.id} className={`border-3 border-[#0F172A] p-6 ${index === 0 ? 'bg-[#FF5C00]' : 'bg-white'} shadow-[6px_6px_0px_0px_#0F172A]`}>
					<p className="font-mono text-xs font-bold uppercase">{category.name}</p>
					<h2 className="mt-3 text-3xl font-black">{formatRupiah(category.price)}</h2>
					<p className="mt-1 text-sm font-bold uppercase">Batch 1 / per tim</p>
					<ul className="my-8 space-y-3 border-y-2 border-[#0F172A] py-5">
						{category.features.map((feature) => (
							<li key={feature} className="flex gap-2 text-sm font-medium"><Check size={18} className="mt-0.5 shrink-0" />{feature}</li>
						))}
					</ul>
					<button onClick={onRegister} className="flex w-full items-center justify-between border-3 border-[#0F172A] bg-white px-4 py-3 font-black">Pilih paket ini <ArrowRight size={18} /></button>
				</article>
			))}
		</div>

		<section className="mt-16">
			<div className="mb-6 flex items-center justify-between gap-4">
				<h2 className="text-3xl font-black tracking-tighter">Cara pendaftaran</h2>
				<ClipboardList className="text-[#E00105]" />
			</div>
			<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
				{registrationSteps.map((step) => (
					<div key={step.step} className="border-3 border-[#0F172A] bg-[#F8FAFC] p-5">
						<p className="font-mono text-xs font-bold uppercase text-[#E00105]">{step.step}</p>
						<h3 className="mt-3 text-lg font-black">{step.title}</h3>
						<p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
					</div>
				))}
			</div>
		</section>

		<section className="mt-16 border-3 border-[#0F172A] bg-[#0F172A] p-6 text-white md:p-8">
			<div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
				<div>
					<p className="font-mono text-xs font-bold uppercase text-[#FF5C00]">Need help?</p>
					<h3 className="mt-2 text-2xl font-black">Ada yang perlu dikonfirmasi?</h3>
				</div>
				<div className="inline-flex items-center gap-2 border-2 border-white/20 bg-white/5 px-4 py-3 text-sm font-bold uppercase"><Wallet size={16} /> Chat panitia</div>
			</div>
		</section>
	</div>;
}
