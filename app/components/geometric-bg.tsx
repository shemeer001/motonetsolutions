'use client';

export default function GeometricBg() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-[5%] right-[-2%] w-[120px] h-[120px] animate-float-slow opacity-50">
        <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,5 95,95 5,95" fill="rgba(0,188,212,0.15)" /></svg>
      </div>
      <div className="absolute top-[10%] right-[3%] w-[80px] h-[80px] animate-float opacity-40" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,5 95,95 5,95" fill="rgba(79,195,247,0.12)" /></svg>
      </div>
      <div className="absolute bottom-[15%] left-[-3%] w-[100px] h-[100px] animate-float-slow opacity-40" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,5 95,95 5,95" fill="rgba(79,195,247,0.1)" /></svg>
      </div>
      <div className="absolute top-[60%] left-[-2%] w-[90px] h-[90px] animate-float opacity-30" style={{ animationDelay: '3s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full"><polygon points="50,5 95,95 5,95" fill="rgba(0,188,212,0.1)" /></svg>
      </div>
    </div>
  );
}
