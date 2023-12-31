import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserGuestScreen } from '../Perfil/UserGuestScreen/UserGuestScreen';
import { BuscarViajesLogged } from './BuscarViajesLogged/BuscarViajesLogged';
import { LoadingModal } from '../../components';



export function BuscarViajes() {
  const [hasLogged, setHasLogged] = useState(null)

  useEffect(() =>{
   const auth = getAuth();
  onAuthStateChanged(auth, (user)=>{
     setHasLogged(user ? true : false);
   });
  }, []);

  if (hasLogged === null) {
    return <LoadingModal show text="Cargando"/>;
  }
return hasLogged ? <BuscarViajesLogged/> : <UserGuestScreen/>
}