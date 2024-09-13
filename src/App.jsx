import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingPage from './components/header/LoadingPage';
import HomePage from './pages/publicPages/HomePage';
import MathSixThGradePage from './pages/publicPages/MathSixThGradePage'; // Add this import

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingPage onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/enginnering/programming" element={<MathSixThGradePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
