export function PhoneMockup() {
  return (
    <div className="relative w-[260px] sm:w-[290px] mx-auto">
      {/* Phone frame */}
      <div className="relative bg-ink rounded-[2.2rem] p-2.5 shadow-2xl shadow-ink/30">
        {/* Notch */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-15 md:w-20 h-5 bg-ink rounded-full z-10" />

        {/* Screen */}
        <div className="relative bg-[#fdfaf6] rounded-[1.7rem] overflow-hidden h-[540px]">
          {/* Restaurant header */}
          <div className="px-4 pt-7 pb-3 border-b border-[#e8ddd0] flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-tandoor flex items-center justify-center text-white text-sm font-bold shrink-0">
              S
            </div>
            <div>
              <p className="font-display font-semibold text-[13px] text-[#1a1208] leading-tight">
                The Spice Garden
              </p>
              <p className="text-[10px] text-[#8b7355]">North Indian · Bengaluru</p>
            </div>
          </div>

          {/* Banner */}
          <div className="relative h-[88px] bg-gradient-to-br from-tandoor to-tandoor-dark flex items-end p-3">
            <div>
              <p className="text-[8px] text-white/70 uppercase tracking-wide">Featured</p>
              <p className="text-white font-display font-bold text-[13px] leading-tight">Butter Chicken</p>
              <span className="inline-block mt-1 bg-white text-tandoor text-[10px] font-bold px-2 py-0.5 rounded-full">
                ₹380
              </span>
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex gap-1 px-3 pt-2.5 pb-2 border-b border-[#e8ddd0] overflow-hidden">
            {['Starters', 'Mains', 'Breads'].map((c, i) => (
              <span
                key={c}
                className={`text-[10px] font-medium px-2.5 py-1 rounded-t-md whitespace-nowrap ${
                  i === 1 ? 'text-tandoor border-b-2 border-tandoor' : 'text-[#8b7355]'
                }`}
              >
                {c}
              </span>
            ))}
          </div>

          {/* Items */}
          <div className="px-3 pt-3 space-y-2.5">
            {[
              { name: 'Butter Chicken', price: '₹200–380', time: '25 min', tag: '⭐ Bestseller',e: "🍛"},
              { name: 'Dal Makhani',     price: '₹260',     time: '20 min', tag: '🌱 Vegetarian', e: "🍚" },
              { name: 'Palak Paneer',    price: '₹290',     time: '20 min', tag: '🌱 Vegetarian', e: "🥗" },
            ].map(item => (
              <div key={item.name} className="flex gap-2.5 p-2.5 bg-white rounded-xl border border-[#e8ddd0]">
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[8px] font-medium px-1.5 py-0.5 rounded-full bg-[#fdf3e7] text-tandoor mb-1">
                    {item.tag}
                  </span>
                  <p className="text-[11px] font-semibold text-[#1a1208] leading-tight">{item.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[11px] font-bold text-tandoor">{item.price}</span>
                    <span className="text-[9px] text-[#8b7355]">⏱ {item.time}</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-[#f0e6d8] rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                    {item.e}
                  </div>
                </div>  
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
