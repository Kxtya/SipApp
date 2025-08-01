import React from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Launchpad from './components/Launchpad';
import Home from './components/Home';

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Home /> : <Launchpad />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App; 