export default function AnimatedLogo({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
      role="img"
      aria-label="Dados & Bocados — Sabor, Juegos, Familia"
      className={`dyb-root ${className}`}
    >
      <defs>
        <style>{`
          .dyb-txt{font-family:'Bebas Neue','Oswald',Impact,'Arial Narrow',sans-serif;text-anchor:middle}
          .dyb-title{font-size:84px;letter-spacing:2px;fill:#FFF8EC}
          .dyb-tag{font-size:18px;letter-spacing:5px;fill:#E9B04A}

          .dyb-ring{stroke-dasharray:1;stroke-dashoffset:1;animation:dyb-draw 1.6s ease-out forwards}
          @keyframes dyb-draw{to{stroke-dashoffset:0}}

          .dyb-die{transform-box:fill-box;transform-origin:50% 100%;opacity:0;
                   animation:dyb-drop .9s cubic-bezier(.3,1.5,.5,1) .3s forwards, dyb-float 5s ease-in-out 1.8s infinite}
          .dyb-die--small{animation-delay:.55s,2.3s}
          @keyframes dyb-drop{from{opacity:0;transform:translateY(-60px)}to{opacity:1;transform:translateY(0)}}
          @keyframes dyb-float{0%,100%{transform:translateY(0) translateX(0)}50%{transform:translateY(-10px) translateX(2px)}}

          .dyb-pip{animation:dyb-twinkle 2.8s ease-in-out infinite}
          .dyb-pip:nth-child(3n){animation-delay:.9s}
          .dyb-pip:nth-child(3n+1){animation-delay:1.8s}
          @keyframes dyb-twinkle{0%,100%{opacity:1}50%{opacity:.45}}

          .dyb-card{transform-box:fill-box;transform-origin:50% 100%;transform:rotate(var(--r));
                    animation:dyb-fan .8s cubic-bezier(.2,1.4,.4,1) 1.1s both}
          @keyframes dyb-fan{from{opacity:0;transform:rotate(0deg)}to{opacity:1;transform:rotate(var(--r))}}
          .dyb-card-float{animation:dyb-card-float 5.5s ease-in-out infinite;animation-delay:var(--fd)}
          @keyframes dyb-card-float{0%,100%{transform:translateY(0) translateX(0)}50%{transform:translateY(-7px) translateX(1px)}}

          .dyb-rise{animation:dyb-rise .7s ease-out both}
          .dyb-d1{animation-delay:1.4s}.dyb-d2{animation-delay:1.6s}.dyb-d3{animation-delay:2.1s}
          @keyframes dyb-rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
          .dyb-divider{transform-box:fill-box;transform-origin:center;animation:dyb-grow .7s ease-out 1.9s both}
          @keyframes dyb-grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
          .dyb-shine{animation:dyb-shine 4s ease-in-out 2.6s infinite}
          @keyframes dyb-shine{0%{transform:translateX(0)}55%,100%{transform:translateX(820px)}}

          @media (prefers-reduced-motion:reduce){
            .dyb-root *{animation:none!important}
            .dyb-ring{stroke-dashoffset:0}
            .dyb-die{opacity:1}
          }
        `}</style>

        <filter id="dyb-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="dyb-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3D2617" />
          <stop offset="1" stopColor="#1A0F08" />
        </linearGradient>
        <linearGradient id="dyb-faceDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2B1A0F" />
          <stop offset="1" stopColor="#120A05" />
        </linearGradient>
        <radialGradient id="dyb-pipGrad" cx=".4" cy=".35" r=".7">
          <stop offset="0" stopColor="#FFF1B8" />
          <stop offset=".55" stopColor="#F2BE4E" />
          <stop offset="1" stopColor="#B9761E" />
        </radialGradient>
        <linearGradient id="dyb-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFE29A" />
          <stop offset=".5" stopColor="#E9A93A" />
          <stop offset="1" stopColor="#B5701C" />
        </linearGradient>
        <linearGradient id="dyb-shineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset=".5" stopColor="#FFE29A" stopOpacity=".9" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="dyb-titleClip">
          <text className="dyb-txt dyb-title" x="300" y="382">DADOS &amp;</text>
          <text className="dyb-txt dyb-title" x="300" y="458">BOCADOS</text>
        </clipPath>
      </defs>

      <circle
        className="dyb-ring"
        cx="300"
        cy="300"
        r="280"
        fill="none"
        stroke="url(#dyb-gold)"
        strokeWidth="5"
        pathLength="1"
        filter="url(#dyb-glow)"
      />

      <ellipse
        cx="318"
        cy="272"
        rx="170"
        ry="16"
        fill="none"
        stroke="#E9A93A"
        strokeWidth="3"
        opacity=".55"
        filter="url(#dyb-glow)"
      />

      <g className="dyb-die" filter="url(#dyb-glow)">
        <g stroke="url(#dyb-gold)" strokeWidth="4" strokeLinejoin="round">
          <polygon points="250,70 330,110 250,150 170,110" fill="url(#dyb-face)" />
          <polygon points="170,110 250,150 250,255 170,215" fill="url(#dyb-face)" />
          <polygon points="250,150 330,110 330,215 250,255" fill="url(#dyb-faceDark)" />
        </g>
        <g fill="url(#dyb-pipGrad)" transform="matrix(80,40,80,-40,170,110)">
          <circle className="dyb-pip" cx=".22" cy=".22" r=".08" />
          <circle className="dyb-pip" cx=".78" cy=".22" r=".08" />
          <circle className="dyb-pip" cx=".5" cy=".5" r=".08" />
          <circle className="dyb-pip" cx=".22" cy=".78" r=".08" />
          <circle className="dyb-pip" cx=".78" cy=".78" r=".08" />
        </g>
        <g fill="url(#dyb-pipGrad)" transform="matrix(80,40,0,105,170,110)">
          <circle className="dyb-pip" cx=".27" cy=".25" r=".08" />
          <circle className="dyb-pip" cx=".73" cy=".25" r=".08" />
          <circle className="dyb-pip" cx=".27" cy=".75" r=".08" />
          <circle className="dyb-pip" cx=".73" cy=".75" r=".08" />
        </g>
        <g fill="url(#dyb-pipGrad)" transform="matrix(80,-40,0,105,250,150)">
          <circle className="dyb-pip" cx=".28" cy=".28" r=".08" />
          <circle className="dyb-pip" cx=".72" cy=".72" r=".08" />
        </g>
      </g>

      <g className="dyb-die dyb-die--small" filter="url(#dyb-glow)">
        <g stroke="url(#dyb-gold)" strokeWidth="3" strokeLinejoin="round">
          <polygon points="420,165 468,189 420,213 372,189" fill="url(#dyb-face)" />
          <polygon points="372,189 420,213 420,276 372,252" fill="url(#dyb-face)" />
          <polygon points="420,213 468,189 468,252 420,276" fill="url(#dyb-faceDark)" />
        </g>
        <g fill="url(#dyb-pipGrad)" transform="matrix(48,24,48,-24,372,189)">
          <circle className="dyb-pip" cx=".22" cy=".22" r=".09" />
          <circle className="dyb-pip" cx=".78" cy=".22" r=".09" />
          <circle className="dyb-pip" cx=".5" cy=".5" r=".09" />
          <circle className="dyb-pip" cx=".22" cy=".78" r=".09" />
          <circle className="dyb-pip" cx=".78" cy=".78" r=".09" />
        </g>
        <g fill="url(#dyb-pipGrad)" transform="matrix(48,24,0,63,372,189)">
          <circle className="dyb-pip" cx=".25" cy=".22" r=".09" />
          <circle className="dyb-pip" cx=".5" cy=".5" r=".09" />
          <circle className="dyb-pip" cx=".75" cy=".78" r=".09" />
        </g>
        <g fill="url(#dyb-pipGrad)" transform="matrix(48,-24,0,63,420,213)">
          <circle className="dyb-pip" cx=".3" cy=".2" r=".09" />
          <circle className="dyb-pip" cx=".7" cy=".2" r=".09" />
          <circle className="dyb-pip" cx=".3" cy=".5" r=".09" />
          <circle className="dyb-pip" cx=".7" cy=".5" r=".09" />
          <circle className="dyb-pip" cx=".3" cy=".8" r=".09" />
          <circle className="dyb-pip" cx=".7" cy=".8" r=".09" />
        </g>
      </g>

      <g filter="url(#dyb-glow)" stroke="url(#dyb-gold)">
        <g className="dyb-card-float" style={{ '--fd': '1.9s' }}>
          <g className="dyb-card" style={{ '--r': '-24deg' }}>
            <rect x="307" y="228" width="46" height="68" rx="6" fill="#1E120A" strokeWidth="2.5" />
            <rect x="312" y="233" width="36" height="58" rx="4" fill="none" strokeWidth="1" opacity=".6" />
          </g>
        </g>
        <g className="dyb-card-float" style={{ '--fd': '2.15s' }}>
          <g className="dyb-card" style={{ '--r': '-10deg' }}>
            <rect x="307" y="228" width="46" height="68" rx="6" fill="#1E120A" strokeWidth="2.5" />
            <rect x="312" y="233" width="36" height="58" rx="4" fill="none" strokeWidth="1" opacity=".6" />
          </g>
        </g>
        <g className="dyb-card-float" style={{ '--fd': '2.4s' }}>
          <g className="dyb-card" style={{ '--r': '4deg' }}>
            <rect x="307" y="228" width="46" height="68" rx="6" fill="#1E120A" strokeWidth="2.5" />
            <rect x="312" y="233" width="36" height="58" rx="4" fill="none" strokeWidth="1" opacity=".6" />
          </g>
        </g>
        <g className="dyb-card-float" style={{ '--fd': '2.65s' }}>
          <g className="dyb-card" style={{ '--r': '18deg' }}>
            <rect x="307" y="228" width="46" height="68" rx="6" fill="#24160C" strokeWidth="2.5" />
            <ellipse
              cx="330"
              cy="262"
              rx="13"
              ry="22"
              transform="rotate(30 330 262)"
              fill="none"
              strokeWidth="2"
            />
            <path d="M330 252 L336 262 L330 272 L324 262 Z" fill="url(#dyb-pipGrad)" stroke="none" />
          </g>
        </g>
      </g>

      <text className="dyb-txt dyb-title dyb-rise dyb-d1" x="300" y="382">DADOS &amp;</text>
      <text className="dyb-txt dyb-title dyb-rise dyb-d2" x="300" y="458">BOCADOS</text>
      <g clipPath="url(#dyb-titleClip)">
        <rect className="dyb-shine" x="-220" y="300" width="140" height="180" fill="url(#dyb-shineGrad)" />
      </g>

      <g className="dyb-divider" stroke="#E9A93A" strokeWidth="1.5">
        <line x1="165" y1="487" x2="288" y2="487" />
        <line x1="312" y1="487" x2="435" y2="487" />
        <path d="M300 480 L307 487 L300 494 L293 487 Z" fill="#E9A93A" />
      </g>
      <text className="dyb-txt dyb-tag dyb-rise dyb-d3" x="300" y="522">SABOR · JUEGOS · FAMILIA</text>
    </svg>
  );
}
