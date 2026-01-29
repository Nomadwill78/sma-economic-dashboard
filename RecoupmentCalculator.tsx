import React, { useState } from 'react';
import { Calculator, DollarSign, Music, Info, ArrowRight } from 'lucide-react';

const RecoupmentCalculator: React.FC = () => {
  const [advance, setAdvance] = useState(200000);
  const [royaltyRate, setRoyaltyRate] = useState(15);
  
  const STREAM_RATE = 0.004;
  
  // Math
  const artistSharePerStream = STREAM_RATE * (royaltyRate / 100);
  const streamsNeeded = advance / artistSharePerStream;
  const grossRevenueGenerated = streamsNeeded * STREAM_RATE; 
  const labelShare = grossRevenueGenerated - advance; // Gross - Artist Payback
  
  // Formatter
  const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  const formatNumber = (val: number) => new Intl.NumberFormat('en-US', { notation: "compact", maximumFractionDigits: 1 }).format(val);

  return (
    <div className="bg-slate-900 text-white rounded-xl shadow-lg overflow-hidden border border-slate-700">
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
            <Calculator className="text-emerald-400" />
            <div>
                <h3 className="font-bold text-lg">The Recoupment Trap Calculator</h3>
                <p className="text-slate-400 text-xs">Visualize the "Bank" Model: How many streams does it take to earn $1?</p>
            </div>
        </div>
        
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Advance Amount (Loan)</label>
                    <div className="flex items-center gap-2 bg-slate-800 p-3 rounded-lg border border-slate-700 focus-within:ring-2 focus-within:ring-emerald-500">
                        <DollarSign size={16} className="text-emerald-500" />
                        <input 
                            type="number" 
                            value={advance}
                            onChange={(e) => setAdvance(Number(e.target.value))}
                            className="bg-transparent text-xl font-bold w-full outline-none text-white placeholder-slate-600"
                        />
                    </div>
                </div>
                
                <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Your Royalty Rate (%)</label>
                    <div className="flex items-center gap-4">
                        <input 
                            type="range" 
                            min="10" 
                            max="50" 
                            step="1"
                            value={royaltyRate}
                            onChange={(e) => setRoyaltyRate(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                        />
                        <span className="font-mono font-bold text-emerald-400 text-xl w-16 text-right">{royaltyRate}%</span>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-2 flex items-center gap-1">
                        <Info size={10} /> Standard major label deals are 12-18%. 
                    </p>
                </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 flex flex-col justify-center relative overflow-hidden">
                 {/* Decorative bg */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>

                 <div className="mb-6 relative z-10">
                    <div className="text-xs font-bold text-slate-400 uppercase mb-1">Streams to Break Even</div>
                    <div className="text-3xl font-bold text-white flex items-center gap-2">
                        <Music className="text-emerald-500" size={24} />
                        {formatNumber(streamsNeeded)}
                    </div>
                 </div>
                 
                 <div className="relative z-10">
                    <div className="text-xs font-bold text-slate-400 uppercase mb-1">Total Sales Required</div>
                    <div className="text-xl font-bold text-slate-300">
                        {formatCurrency(grossRevenueGenerated)}
                    </div>
                 </div>

                 <div className="mt-4 pt-4 border-t border-slate-700/50 text-xs text-slate-400 leading-relaxed relative z-10">
                    <strong className="text-red-400">The Reality:</strong> Your music must generate <strong>{formatCurrency(grossRevenueGenerated)}</strong> for you to pay back your <strong>{formatCurrency(advance)}</strong> loan. 
                    <br/><br/>
                    The label keeps the remaining <strong>{formatCurrency(grossRevenueGenerated - advance)}</strong> before you see a single dollar of profit.
                 </div>
            </div>
        </div>
    </div>
  );
};

export default RecoupmentCalculator;