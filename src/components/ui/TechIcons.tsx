import * as React from "react";

// Official brand colors for technologies and financial software

export function PythonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.813v.825H3.88s-3.88-.44-3.88 5.807c0 6.248 3.393 6.031 3.393 6.031h2.025v-2.838s-.11-3.393 3.338-3.393h5.725s3.23.052 3.23-3.125V3.125S18.237 0 11.914 0zm-3.23 1.83a1.042 1.042 0 1 1 0 2.083 1.042 1.042 0 0 1 0-2.083z"
        fill="#3776AB"
      />
      <path
        d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.75H11.98v-.825h8.139s3.88.44 3.88-5.807c0-6.248-3.393-6.031-3.393-6.031h-2.025v2.838s.11 3.393-3.338 3.393H9.52s-3.23-.052-3.23 3.125v5.594S5.763 24 12.086 24zm3.23-1.83a1.042 1.042 0 1 1 0-2.083 1.042 1.042 0 0 1 0 2.083z"
        fill="#FFD438"
      />
    </svg>
  );
}

export function SqlIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <ellipse cx="12" cy="5" rx="9" ry="3" fill="#00758F" />
      <path
        d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"
        stroke="#00758F"
        strokeWidth="2"
      />
      <path
        d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"
        stroke="#F29111"
        strokeWidth="2"
      />
      <ellipse cx="12" cy="12" rx="9" ry="3" fill="#00758F" fillOpacity="0.2" />
    </svg>
  );
}

export function SnowflakeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#29B5E8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
      <polyline points="10 4 12 2 14 4" />
      <polyline points="10 20 12 22 14 20" />
      <polyline points="4 10 2 12 4 14" />
      <polyline points="20 10 22 12 20 14" />
    </svg>
  );
}

export function PowerBiIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="11" width="4.5" height="10" rx="1.5" fill="#E6AD10" />
      <rect x="9.75" y="7" width="4.5" height="14" rx="1.5" fill="#F2C811" />
      <rect x="16.5" y="3" width="4.5" height="18" rx="1.5" fill="#F9DE69" />
    </svg>
  );
}

export function TableauIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      {/* Center cross */}
      <rect x="10.8" y="7.5" width="2.4" height="9" rx="0.5" fill="#E8762D" />
      <rect x="7.5" y="10.8" width="9" height="2.4" rx="0.5" fill="#E8762D" />
      {/* Top cross */}
      <rect x="11.2" y="1.5" width="1.6" height="5" rx="0.4" fill="#439798" />
      <rect x="9.5" y="3.2" width="5" height="1.6" rx="0.4" fill="#439798" />
      {/* Bottom cross */}
      <rect x="11.2" y="17.5" width="1.6" height="5" rx="0.4" fill="#726588" />
      <rect x="9.5" y="19.2" width="5" height="1.6" rx="0.4" fill="#726588" />
      {/* Left cross */}
      <rect x="3.2" y="9.5" width="1.6" height="5" rx="0.4" fill="#E55039" />
      <rect x="1.5" y="11.2" width="5" height="1.6" rx="0.4" fill="#E55039" />
      {/* Right cross */}
      <rect x="19.2" y="9.5" width="1.6" height="5" rx="0.4" fill="#6189A6" />
      <rect x="17.5" y="11.2" width="5" height="1.6" rx="0.4" fill="#6189A6" />
    </svg>
  );
}

export function RIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <ellipse cx="12" cy="12" rx="10" ry="7.5" fill="#C4C7CE" fillOpacity="0.4" stroke="#8D939F" strokeWidth="1.5" />
      <path
        d="M9 8h4.5a2.5 2.5 0 0 1 0 5H9V8z"
        fill="#276DC3"
        stroke="#165BAA"
        strokeWidth="1.5"
      />
      <path d="M12.5 13l4 5.5" stroke="#165BAA" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function ExcelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2" y="3" width="20" height="18" rx="3" fill="#107C41" />
      <path
        d="M7 8l4.5 4-4.5 4h2.2l3.4-3.2 3.4 3.2h2.2l-4.5-4 4.5-4h-2.2L12.5 11.2 9.2 8H7z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function BloombergIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2" y="3" width="20" height="15" rx="2.5" fill="#1D1D1D" stroke="#FB8C00" strokeWidth="1.5" />
      <line x1="8" y1="21" x2="16" y2="21" stroke="#FB8C00" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="18" x2="12" y2="21" stroke="#FB8C00" strokeWidth="2" />
      {/* Candlesticks in orange and amber */}
      <rect x="5.5" y="7.5" width="2" height="6" rx="0.5" fill="#FB8C00" />
      <line x1="6.5" y1="5.5" x2="6.5" y2="15.5" stroke="#FB8C00" strokeWidth="1" />
      <rect x="10" y="9.5" width="2" height="4" rx="0.5" fill="#FFA726" />
      <line x1="11" y1="7.5" x2="11" y2="15.5" stroke="#FFA726" strokeWidth="1" />
      <rect x="14.5" y="6" width="2" height="7" rx="0.5" fill="#4CAF50" />
      <line x1="15.5" y1="4.5" x2="15.5" y2="15" stroke="#4CAF50" strokeWidth="1" />
    </svg>
  );
}

export function StataIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2" y="3" width="20" height="18" rx="3" fill="#1A5F7A" />
      <path d="M5 19h14" stroke="#57C5B6" strokeWidth="1.5" />
      <path d="M6 16v3" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M10 12v7" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M14 8v11" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M18 5v14" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M6 16c3-6 5-8 8-9" stroke="#FFD93D" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function GoogleSuiteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="#E8F0FE" stroke="#4285F4" strokeWidth="1.5" />
      <path d="M14 2v6h6" fill="#AECBFA" />
      <line x1="8" y1="13" x2="16" y2="13" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="17" x2="14" y2="17" stroke="#34A853" strokeWidth="2" strokeLinecap="round" />
      <circle cx="9" cy="9" r="1.5" fill="#EA4335" />
    </svg>
  );
}
