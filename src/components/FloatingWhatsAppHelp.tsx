import { MessageCircle } from 'lucide-react';
import { contactPersons } from '@/data/eventData';

export default function FloatingWhatsAppHelp() {
	return <div className="fixed bottom-5 right-5 z-30 flex max-w-[calc(100vw-2rem)] flex-wrap justify-end gap-2">
		{contactPersons.map((contact) => <a key={contact.name} href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Halo, saya ingin bertanya tentang DECOMPE 5.0.')}`} target="_blank" rel="noreferrer" aria-label={`Chat WhatsApp ${contact.name}`} title={`Chat WhatsApp ${contact.name}`} className="inline-flex items-center gap-2 border-3 border-[#0F172A] bg-[#25D366] px-3 py-3 font-bold shadow-[4px_4px_0px_0px_#0F172A] transition-all hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A]"><MessageCircle size={19} aria-hidden="true" /><span>{contact.name}</span></a>)}
	</div>;
}
