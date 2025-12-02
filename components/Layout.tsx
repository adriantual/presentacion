import React from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev 
}) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col bg-dark-bg text-slate-100 overflow-hidden font-sans selection:bg-unrn-red selection:text-white">
      {/* Top Bar (Optional logo or info) */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-50 opacity-50 hover:opacity-100 transition-opacity">
        <div className="text-xs font-mono text-slate-400">Tesis: Vibe Coding</div>
        <button onClick={toggleFullScreen} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Maximize2 size={16} />
        </button>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow relative flex items-center justify-center p-8 md:p-16">
        {children}
      </main>

      {/* Bottom Control Bar */}
      <div className="h-16 w-full flex flex-col z-50">
        {/* Progress Line */}
        <div className="w-full h-1 bg-slate-800">
          <div 
            className="h-full bg-gradient-to-r from-unrn-red to-orange-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls */}
        <div className="flex-grow flex justify-between items-center px-6 bg-slate-900/50 backdrop-blur-sm border-t border-slate-800">
          <div className="text-sm font-mono text-slate-500">
            {currentSlide + 1} / {totalSlides}
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={onPrev}
              disabled={currentSlide === 0}
              className="p-2 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={onNext}
              disabled={currentSlide === totalSlides - 1}
              className="p-2 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};