"use client"
import React, { useEffect } from 'react';

const RedirectToAbout: React.FC = () => {
  useEffect(() => {
    window.location.replace('/about'); // Redireciona para /about e substitui a entrada no histórico
  }, []);

  return null; // Não renderiza nada
};

export default RedirectToAbout;
