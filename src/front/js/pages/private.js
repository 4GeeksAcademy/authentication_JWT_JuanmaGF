import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';

export const Private = () => {
  const { actions } = useContext(Context);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      actions.logout();
    }
  }, [actions]);

  return (
    <div>
      <h1>Página Privada</h1>
      {/* Contenido de la página privada */}
    </div>
  );
};

