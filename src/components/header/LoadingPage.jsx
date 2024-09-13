import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';

function LoadingPage({ onLoadingComplete }) {
  const counterRef = useRef(null);
  const loadingRef = useRef(null);

  useEffect(() => {
    const counter = counterRef.current;
    const loading = loadingRef.current;

    gsap.to(counter, {
      innerHTML: 100,
      duration: 2,
      ease: 'power1.inOut',
      onUpdate: () => {
        counter.innerHTML = Math.round(counter.innerHTML);
      },
      onComplete: () => {
        gsap.to(loading, {
          opacity: 0,
          duration: 0.5,
          onComplete: onLoadingComplete
        });
      }
    });
  }, [onLoadingComplete]);

  return (
    <div ref={loadingRef} className="fixed inset-0 bg-blue-500 flex items-center justify-center z-50">
      <div className="text-white text-4xl font-bold">
        Loading: <span ref={counterRef}>0</span>%
      </div>
    </div>
  );
}

LoadingPage.propTypes = {
  onLoadingComplete: PropTypes.func.isRequired,
};

export default LoadingPage;