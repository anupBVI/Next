import { useState } from 'react';

const useLoginModal = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return {
    showLogin,
    handleLogin,
    handleCloseLogin,
  };
};

export default useLoginModal;






