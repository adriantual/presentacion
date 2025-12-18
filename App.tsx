import React, { useState, useEffect, useCallback } from 'react';
import { Layout } from './components/Layout';
import { 
  TitleSlide, 
  AgendaSlide, 
  IntroSlide, 
  ObjectivesSlide, 
  ToolSlide, 
  CaseStudySlide, 
  PracticesSlide, 
  BestPracticesSlide, 
  ProblemsSlide, 
  ConclusionSlide,
  EndSlide
} from './components/Slides';
import { SlideType } from './types';

// Map logical steps for the Practices Slide (Slide 7)
const PRACTICES_STEPS = 7; // 7 practices in the list
const PRACTICES_SLIDE_INDEX = 6; // 0-based index for the 7th slide

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [practiceStep, setPracticeStep] = useState(0);

  const slides = [
    <TitleSlide isActive={currentSlide === 0} />,
    <AgendaSlide isActive={currentSlide === 1} />,
    <IntroSlide isActive={currentSlide === 2} />,
    <ObjectivesSlide isActive={currentSlide === 3} />,
    <ToolSlide isActive={currentSlide === 4} />,
    <CaseStudySlide isActive={currentSlide === 5} />,
    // We pass the internal step to the practices slide
    <PracticesSlide isActive={currentSlide === 6} subStep={practiceStep} />,
    <BestPracticesSlide isActive={currentSlide === 7} />,
    <ProblemsSlide isActive={currentSlide === 8} />,
    <ConclusionSlide isActive={currentSlide === 9} />,
    <EndSlide isActive={currentSlide === 10} />
  ];

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    // Logic for the nested Practices Slide
    if (currentSlide === PRACTICES_SLIDE_INDEX) {
      if (practiceStep < PRACTICES_STEPS - 1) {
        setPracticeStep(prev => prev + 1);
        return;
      }
    }

    // Standard navigation
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
      // Reset practice step if we are leaving it, though mostly needed when going back
    }
  }, [currentSlide, practiceStep, totalSlides]);

  const prevSlide = useCallback(() => {
    // Logic for the nested Practices Slide
    if (currentSlide === PRACTICES_SLIDE_INDEX) {
      if (practiceStep > 0) {
        setPracticeStep(prev => prev - 1);
        return;
      }
    }

    // Standard navigation
    if (currentSlide > 0) {
      const newSlide = currentSlide - 1;
      setCurrentSlide(newSlide);
      // If we are moving BACK into the practices slide, set it to the last step? 
      // Or first? Typically first feels more natural when navigating back, 
      // but let's default to 0 to restart the explanation.
      if (newSlide === PRACTICES_SLIDE_INDEX) {
        setPracticeStep(0); 
      }
    }
  }, [currentSlide, practiceStep]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          nextSlide();
          break;
        case 'ArrowLeft':
          prevSlide();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <Layout 
      currentSlide={currentSlide} 
      totalSlides={totalSlides}
      onNext={nextSlide}
      onPrev={prevSlide}
    >
      <div className="w-full h-full flex items-center justify-center">
        {slides[currentSlide]}
      </div>
    </Layout>
  );
};

export default App;