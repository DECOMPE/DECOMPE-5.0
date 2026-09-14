import decompeWordmark from '@/assets/logo/DECOMPE.png';

export default function MainLogo() {
	return <span className="flex h-14 w-32 shrink-0 items-center sm:h-16 sm:w-36" role="img" aria-label="DECOMPE 5.0">
		<img src={decompeWordmark} alt="" aria-hidden="true" className="h-full w-full object-contain object-left" />
	</span>;
}
