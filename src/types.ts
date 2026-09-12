export interface EventInfo {
	name: string; tagline: string; theme: string; contactPerson: string; address: string;
	socials: { instagram: string; tiktok: string; youtube: string; linkedin: string };
}
export interface ContactPerson { name: string; phone: string; whatsapp: string; }
export interface Category { id: string; name: string; label: string; price: number; features: string[]; }
export interface Timeline { title: string; date: string; status: 'Active' | 'Upcoming'; }
export interface RegistrationBatch { name: string; date: string; status: 'Open' | 'Upcoming'; }
export interface Speaker { name: string; category: 'Skill Class' | 'Webinar' | 'Juri'; specialty: string; }
export interface MerchItem { id: string; name: string; description: string; price: number; color: string; }
export interface FaqItem { question: string; answer: string; }
export interface Mentor { name: string; role: string; specialty: string; }
export interface Partner { name: string; logo?: string; type: 'Sponsor' | 'Media partner'; alt: string; }
