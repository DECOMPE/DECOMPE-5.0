export default function MainLogo() {
	return <div className="flex items-center gap-2.5">
		<span className="grid h-10 w-10 shrink-0 place-items-center border-3 border-[#0F172A] bg-[#FF5C00]" aria-hidden="true">
			<svg viewBox="0 0 28 28" className="h-7 w-7" role="img" aria-label="D mark">
				<path fill="#0F172A" d="M5 4h7.5C18.9 4 23 7.1 23 14s-4.1 10-10.5 10H5V4Zm4.5 4.5v11h3c3.6 0 5.8-1.7 5.8-5.5s-2.2-5.5-5.8-5.5h-3Z" />
			</svg>
		</span>
		<span className="text-lg font-black tracking-[-0.06em]">DECOMPE<span className="text-[#E00105]">.</span></span>
	</div>;
}
