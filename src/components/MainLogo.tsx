import decompeWordmark from '@/assets/Group 12.png';
import skillClassMark from '@/assets/Group 13.png';

export default function MainLogo() {
	return <span className="flex h-14 w-48 shrink-0 items-center gap-0 sm:h-16 sm:w-52" role="img" aria-label="DECOMPE 5.0 Skill Class">
		<img src={decompeWordmark} alt="" aria-hidden="true" className="h-full min-w-0 flex-[1.05] object-contain object-left" />
		<img src={skillClassMark} alt="" aria-hidden="true" className="h-full min-w-0 flex-[1.2] object-contain object-right" />
	</span>;
}
