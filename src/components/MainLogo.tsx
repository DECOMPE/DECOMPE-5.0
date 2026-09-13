import decompeWordmark from '@/assets/Group 12.png';
import skillClassMark from '@/assets/SKILLCLASS.png';

export default function MainLogo() {
	return <span className="flex h-14 w-auto shrink-0 items-center gap-0 sm:h-16" role="img" aria-label="DECOMPE 5.0 Skill Class">
		<img src={decompeWordmark} alt="" aria-hidden="true" className="h-full w-24 object-contain object-left sm:w-28" />
		<img src={skillClassMark} alt="" aria-hidden="true" className="-ml-1 h-full w-28 object-contain object-left sm:w-32" />
	</span>;
}
