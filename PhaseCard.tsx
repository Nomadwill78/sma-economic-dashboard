import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PhaseCardProps {
  number: number;
  title: string;
  description: string;
  reality: string;
  icon: LucideIcon;
}

const PhaseCard: React.FC<PhaseCardProps> = ({ number, title, description, reality, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden group hover:shadow-md transition-all">
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-slate-900">
        <Icon size={120} />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-md">
            {number}
          </div>
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        </div>
        <p className="text-slate-600 mb-6 min-h-[3rem] text-sm leading-relaxed">{description}</p>
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide block mb-1">The Reality</span>
            <p className="text-sm text-slate-700 font-medium italic">"{reality}"</p>
        </div>
      </div>
    </div>
  );
};

export default PhaseCard;