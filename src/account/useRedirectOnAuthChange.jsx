import React, { useEffect, useState } from 'react';

export function useRedirectOnAuthChange(user, loading) {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!user && !loading) {
      // Si el usuario no está autenticado y la carga ha terminado, establece un retraso de 2 segundos antes de redirigir
      const timeout = setTimeout(() => {
        setRedirect(true);
      }, 1000);

      // Limpia el timeout cuando el componente se desmonta
      return () => clearTimeout(timeout);
    }
  }, [user, loading]);

  return redirect;
}