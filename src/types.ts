export interface EventInfo {
	name: string; tagline: string; contactPerson: string; address: string;
	socials: { instagram: string; tiktok: string; youtube: string };
}
export interface Category { id: string; name: string; label: string; price: number; features: string[]; }
export interface Timeline { title: string; date: string; status: 'Active' | 'Upcoming'; }
export interface PrizePool { category: string; prizes: { rank: string; amount: number }[]; }
export interface MerchItem { id: string; name: string; description: string; price: number; color: string; }
export interface FaqItem { question: string; answer: string; }
export interface Mentor { name: string; role: string; specialty: string; }
export interface Partner { name: string; logo: string; type: 'Partner pendukung' | 'Media partner'; alt: string; }
