import React, { useState } from 'react';
import { CheckCircle2, XCircle, AlertTriangle, Scale, MousePointerClick, FileAudio, Users, LucideIcon } from 'lucide-react';

interface ChoiceOption {
    id: string;
    title: string;
    subtitle: string;
    consequences: {
        good: string;
        bad: string;
    };
}

interface ChoiceData {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    options: [ChoiceOption, ChoiceOption];
    insight: string;
}

const choices: ChoiceData[] = [
    {
        id: 'deal',
        title: 'Choice A: The Deal',
        icon: Scale,
        description: 'Independent vs. Major Label. The single most defining choice of your career.',
        options: [
            {
                id: 'major',
                title: 'Major Label',
                subtitle: 'The "Bank" Model',
                consequences: {
                    good: 'Instant budget, global distribution, radio access, potential for massive fame.',
                    bad: 'The Recoupment Trap. Money is a loan payable only from your small royalty share.'
                }
            },
            {
                id: 'indie',
                title: 'Independent',
                subtitle: 'The "Small Business" Model',
                consequences: {
                    good: 'Keep 100% ownership. You earn ~$4k on 1M streams instead of $0 (unrecouped).',
                    bad: 'Exhaustion. You spend 50% of time on admin/marketing. Harder to break mainstream.'
                }
            }
        ],
        insight: 'Major labels are banks that also own the house you buy with the loan.'
    },
    {
        id: 'assets',
        title: 'Choice B: The Assets',
        icon: FileAudio,
        description: 'Masters vs. Publishing. What you own determines your long-term wealth.',
        options: [
            {
                id: 'masters',
                title: 'Masters',
                subtitle: 'The Recording (Sound File)',
                consequences: {
                    good: 'Pays approx 6x more from streaming than publishing. True generational wealth.',
                    bad: 'Labels typically demand ownership for life (or 20+ years) in exchange for funding.'
                }
            },
            {
                id: 'publishing',
                title: 'Publishing',
                subtitle: 'The Song (Lyrics/Melody)',
                consequences: {
                    good: 'Generates passive "mailbox money" from Sync (TV/Film) and Radio.',
                    bad: 'Pays "pennies" on streams. Selling this early limits lifetime earnings.'
                }
            }
        ],
        insight: 'Never sell your publishing catalog for a quick payout if you can avoid it.'
    },
    {
        id: 'team',
        title: 'Choice C: The Team',
        icon: Users,
        description: 'Who you hire defines your protection and your profit margin.',
        options: [
            {
                id: 'pro',
                title: 'Professional Team',
                subtitle: 'Experienced Manager & Lawyer',
                consequences: {
                    good: 'Access to gatekeepers, proper contract review, career strategy.',
                    bad: 'Costs 15-20% of Gross Income. Standard lawyers take 5%.'
                }
            },
            {
                id: 'friend',
                title: 'Homie Management',
                subtitle: 'Loyal Friend / No Experience',
                consequences: {
                    good: '100% Trust (usually). Low cost initially.',
                    bad: 'Blocked from opportunities due to lack of respect/network. High risk of bad deals.'
                }
            }
        ],
        insight: 'Beware of "Double Dipping" where managers take commission on Gross Revenue before expenses.'
    }
];

const ChoiceExplorer: React.FC = () => {
  const [activeChoiceId, setActiveChoiceId] = useState('deal');
  const activeChoice = choices.find(c => c.id === activeChoiceId) || choices[0];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        {/* Navigation */}
        <div className="flex border-b border-slate-200 overflow-x-auto">
            {choices.map(c => {
                const Icon = c.icon;
                return (
                    <button
                        key={c.id}
                        onClick={() => setActiveChoiceId(c.id)}
                        className={`px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors flex items-center gap-2 ${
                            activeChoiceId === c.id 
                            ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600' 
                            : 'text-slate-500 hover:bg-slate-50'
                        }`}
                    >
                        <Icon size={16} className={activeChoiceId === c.id ? 'text-indigo-600' : 'text-slate-400'} />
                        {c.title}
                    </button>
                );
            })}
        </div>

        <div className="p-6 md:p-8">
            <div className="mb-8 text-center max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{activeChoice.title}</h3>
                <p className="text-slate-600">{activeChoice.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeChoice.options.map((option, idx) => (
                    <div key={option.id} className="border border-slate-200 rounded-xl p-6 relative hover:shadow-md transition-shadow group">
                        <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-xl ${idx === 0 ? 'bg-indigo-500' : 'bg-emerald-500'}`}></div>
                        
                        <div className="mb-4">
                            <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                {option.title}
                            </h4>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">{option.subtitle}</span>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1">
                                    <CheckCircle2 size={16} />
                                    <span>The Upside</span>
                                </div>
                                <p className="text-sm text-slate-600 pl-6 leading-snug">{option.consequences.good}</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 text-red-600 font-bold text-sm mb-1">
                                    <XCircle size={16} />
                                    <span>The Downside</span>
                                </div>
                                <p className="text-sm text-slate-600 pl-6 leading-snug">{option.consequences.bad}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 bg-amber-50 p-4 rounded-lg border border-amber-100 flex items-start gap-3">
                <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                    <h4 className="font-bold text-amber-800 text-sm">Strategic Insight</h4>
                    <p className="text-sm text-amber-700 mt-1">{activeChoice.insight}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ChoiceExplorer;