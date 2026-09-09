import { useEffect, useState } from 'react';
import { ArrowRight, Timer } from 'lucide-react';
export default function UrgencyTopBar() {
	const [days, setDays] = useState(0); const [hours, setHours] = useState(0); const [minutes, setMinutes] = useState(0); const [seconds, setSeconds] = useState(0);
	useEffect(() => { const tick = () => { const target = new Date('2026-11-01T23:59:59+07:00').getTime(); const diff = Math.max(0, target - Date.now()); setDays(Math.floor(diff / 86400000)); setHours(Math.floor(diff / 3600000) % 24); setMinutes(Math.floor(diff / 60000) % 60); setSeconds(Math.floor(diff / 1000) % 60); }; tick(); const id = window.setInterval(tick, 1000); return () => window.clearInterval(id); }, []);
	return <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-b-3 border-[#0F172A] bg-[#FF5C00] px-4 py-2 text-center text-xs font-bold uppercase tracking-wide"><Timer size={15} /><span>Early bird berakhir dalam</span><span className="font-mono">{String(days).padStart(2, '0')}H : {String(hours).padStart(2, '0')}J : {String(minutes).padStart(2, '0')}M : {String(seconds).padStart(2, '0')}D</span><a href="#register" className="inline-flex items-center gap-1 underline underline-offset-2">Daftar sekarang <ArrowRight size={14} /></a></div>;
}
