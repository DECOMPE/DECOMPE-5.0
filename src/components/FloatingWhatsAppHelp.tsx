import { MessageCircle } from 'lucide-react';
import { contactPersons } from '@/data/eventData';

export default function FloatingWhatsAppHelp() {
	return <div className="fixed bottom-4 right-4 z-30 flex max-w-[calc(100vw-2rem)] flex-wrap justify-end gap-2 sm:bottom-5 sm:right-5">
		{contactPersons.map((contact) => <a key={contact.name} href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Halo, saya ingin bertanya tentang DECOMPE 5.0.')}`} target="_blank" rel="noreferrer" aria-label={`Chat WhatsApp ${contact.name}`} title={`Chat WhatsApp ${contact.name}`} className="inline-flex min-h-11 items-center gap-2 border-3 border-[#0F172A] bg-[#25D366] px-2.5 py-2.5 text-sm font-bold shadow-[3px_3px_0px_0px_#0F172A] transition-all hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A] sm:px-3 sm:py-3 sm:text-base sm:shadow-[4px_4px_0px_0px_#0F172A]"><MessageCircle size={18} aria-hidden="true" /><span>{contact.name}</span></a>)}
	</div>;
}
