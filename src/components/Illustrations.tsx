export const Illustrations = {
  // Hero illustration - House with solar panels and battery
  HeroScene: () => (
    <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sky gradient */}
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f0fdf4" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="panelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#0f2744" />
        </linearGradient>
        <linearGradient id="batteryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="400" height="300" fill="url(#skyGradient)" rx="8" />
      
      {/* Sun */}
      <circle cx="320" cy="60" r="30" fill="#fbbf24" opacity="0.9" />
      <circle cx="320" cy="60" r="20" fill="#fcd34d" opacity="0.7" />
      
      {/* House */}
      <rect x="80" y="140" width="160" height="120" fill="#e2e8f0" rx="4" />
      <rect x="100" y="160" width="40" height="40" fill="#bfdbfe" rx="2" />
      <rect x="160" y="160" width="40" height="40" fill="#bfdbfe" rx="2" />
      <rect x="130" y="200" width="40" height="60" fill="#94a3b8" rx="2" />
      
      {/* Roof */}
      <path d="M70 140 L160 80 L250 140 Z" fill="#475569" />
      
      {/* Solar panels on roof */}
      <rect x="100" y="100" width="30" height="20" fill="url(#panelGradient)" rx="2" transform="rotate(-15 115 110)" />
      <rect x="140" y="95" width="30" height="20" fill="url(#panelGradient)" rx="2" transform="rotate(-15 155 105)" />
      <rect x="180" y="90" width="30" height="20" fill="url(#panelGradient)" rx="2" transform="rotate(-15 195 100)" />
      
      {/* Battery unit */}
      <rect x="260" y="180" width="60" height="80" fill="url(#batteryGradient)" rx="4" />
      <rect x="270" y="190" width="40" height="15" fill="white" opacity="0.3" rx="2" />
      <rect x="270" y="210" width="40" height="15" fill="white" opacity="0.3" rx="2" />
      <rect x="270" y="230" width="40" height="15" fill="white" opacity="0.3" rx="2" />
      
      {/* Battery indicator */}
      <circle cx="290" cy="255" r="8" fill="#22c55e" />
      
      {/* Connection lines */}
      <path d="M250 140 L260 140 L260 180" stroke="#10b981" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M160 80 L160 60 L320 60" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 2" />
      
      {/* Ground */}
      <rect x="0" y="260" width="400" height="40" fill="#dcfce7" rx="0" />
    </svg>
  ),

  // Battery diagram - how it works
  BatteryDiagram: () => (
    <svg viewBox="0 0 300 200" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="battGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      
      {/* Solar panel */}
      <rect x="20" y="40" width="60" height="40" fill="#1e3a5f" rx="4" />
      <line x1="30" y1="50" x2="70" y2="50" stroke="#3b82f6" strokeWidth="1" />
      <line x1="30" y1="60" x2="70" y2="60" stroke="#3b82f6" strokeWidth="1" />
      <line x1="30" y1="70" x2="70" y2="70" stroke="#3b82f6" strokeWidth="1" />
      
      {/* Arrow 1 */}
      <path d="M80 60 L110 60" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
      
      {/* Battery */}
      <rect x="110" y="30" width="80" height="60" fill="url(#battGrad)" rx="6" />
      <rect x="120" y="40" width="60" height="12" fill="white" opacity="0.4" rx="2" />
      <rect x="120" y="55" width="60" height="12" fill="white" opacity="0.4" rx="2" />
      <rect x="120" y="70" width="60" height="12" fill="white" opacity="0.4" rx="2" />
      <rect x="150" y="20" width="20" height="10" fill="#059669" rx="2" />
      
      {/* Arrow 2 */}
      <path d="M190 60 L220 60" stroke="#10b981" strokeWidth="2" />
      
      {/* House */}
      <rect x="220" y="40" width="60" height="50" fill="#e2e8f0" rx="4" />
      <path d="M215 40 L250 20 L285 40" fill="#475569" />
      <rect x="240" y="60" width="20" height="30" fill="#94a3b8" rx="2" />
      
      {/* Sun */}
      <circle cx="50" cy="20" r="15" fill="#fbbf24" />
      <path d="M50 0 L50 10" stroke="#fbbf24" strokeWidth="2" />
      <path d="M50 30 L50 40" stroke="#fbbf24" strokeWidth="2" />
      <path d="M30 20 L40 20" stroke="#fbbf24" strokeWidth="2" />
      <path d="M60 20 L70 20" stroke="#fbbf24" strokeWidth="2" />
    </svg>
  ),

  // Savings chart
  SavingsChart: () => (
    <svg viewBox="0 0 300 150" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grid lines */}
      <line x1="40" y1="20" x2="40" y2="130" stroke="#e5edf5" strokeWidth="1" />
      <line x1="40" y1="130" x2="280" y2="130" stroke="#e5edf5" strokeWidth="1" />
      
      {/* Y-axis labels */}
      <text x="35" y="25" fontSize="8" fill="#64748d" textAnchor="end">€1.800</text>
      <text x="35" y="75" fontSize="8" fill="#64748d" textAnchor="end">€900</text>
      <text x="35" y="125" fontSize="8" fill="#64748d" textAnchor="end">€0</text>
      
      {/* Bars */}
      <rect x="60" y="80" width="40" height="50" fill="#ef4444" rx="2" opacity="0.7" />
      <text x="80" y="145" fontSize="8" fill="#64748d" textAnchor="middle">Nu</text>
      
      <rect x="120" y="40" width="40" height="90" fill="#10b981" rx="2" />
      <text x="140" y="145" fontSize="8" fill="#64748d" textAnchor="middle">Met batterij</text>
      
      <rect x="180" y="100" width="40" height="30" fill="#ef4444" rx="2" opacity="0.7" />
      <text x="200" y="145" fontSize="8" fill="#64748d" textAnchor="middle">Zonder</text>
      
      {/* Legend */}
      <rect x="60" y="160" width="12" height="12" fill="#10b981" rx="2" />
      <text x="78" y="170" fontSize="8" fill="#64748d">Besparing</text>
      
      <rect x="140" y="160" width="12" height="12" fill="#ef4444" rx="2" opacity="0.7" />
      <text x="158" y="170" fontSize="8" fill="#64748d">Verlies</text>
    </svg>
  ),

  // Logo placeholder
  LogoPlaceholder: () => (
    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#10b981" />
      <path d="M10 20 L16 26 L30 14" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}
