import React, { useState } from 'react';
import { View } from 'react-native';
import { ListItem, Icon, Text } from '@rneui/base';
import { map } from 'lodash';
import { Modal } from '../../components/shared/Modal';
import { ChangeDisplayName } from './ChangeDisplayName';
import { ChangeEmailForm } from './ChangeEmailForm';
import { ChangePasswordForm } from "./ChangePassword";
import { Button } from '@rneui/base';


export function AccountOptions(props) {
  //destructuring para traer los valores del reload de userLoggedScreen
  const {onReload} = props;
  // Estado para controlar la visibilidad del modal
  const [showModal, setShowModal] = useState(false);
  // Estado para el componente a mostrar en el modal
  const [renderComponent, setRenderComponent] = useState(null);

  // Función para cerrar el modal de manera explícita
  const onCloseModal = () => setShowModal(false);

  // Función que configura el componente a mostrar en el modal
  const selectedComponent = key => {
    if (key === 'name') {
      // Configura el componente para cambiar el nombre
      setRenderComponent(<ChangeDisplayName onClose={onCloseModal} onReload={onReload} />);
    }
    // Si el componente es email
    if (key === 'email') {
      setRenderComponent(<ChangeEmailForm onClose={onCloseModal} onReload={onReload} />);
    }
    // Si el componente es contraseña
    if (key === 'password') {
      setRenderComponent(<ChangePasswordForm onClose={onCloseModal} onReload={onReload} />);
    }
  };

  // Obtiene las opciones del menú con sus propiedades
  const menuOptions = getMenuOptions(selectedComponent);

  return (
    <View >
      {map(menuOptions, (menu, index) => (
        <ListItem
          containerStyle={{backgroundColor:"black", flex:1}}
          key={index}
          bottomDivider
          // Configura el evento onPress para mostrar el modal
          onPress={() => {
            menu.onPress();
            setShowModal(true);
          }}
        >
          <Icon
            type={menu.iconType}
            name={menu.iconNameLeft}
            color={menu.iconColorLeft}
          />
          <ListItem.Content >
            <ListItem.Title style={{color:"white"}} >{menu.title}</ListItem.Title>
          </ListItem.Content>
          <Icon
            type={menu.iconType}
            name={menu.iconNameRight}
            color={menu.iconColorRight}
          />
        </ListItem>
      ))}
      {/* Componente Modal que muestra el contenido */}
      <Modal show={showModal} close={onCloseModal}>
        <View>{renderComponent}</View>
      </Modal>
    </View>
  );
}

// Función que devuelve las opciones del menú con sus propiedades
function getMenuOptions(selectedComponent) {
  return [
    {
      title: 'Modificar Nombre',
      iconType: 'material-community',
      iconNameLeft: 'account-outline',
      iconColorLeft: '#ccc',
      iconNameRight: 'chevron-right',
      iconColorRight: '#ccc',
      color:'black',
      backgroundColor:"black",
      // Configura la función onPress para seleccionar el componente 'name'
      onPress: () => selectedComponent('name'),
    },
    {
      title: 'Modificar email',
      iconType: 'material-community',
      iconNameLeft: 'at',
      iconColorLeft: '#ccc',
      iconNameRight: 'chevron-right',
      iconColorRight: '#ccc',
      // Configura la función onPress para seleccionar el componente 'email'
      onPress: () => selectedComponent('email'),
    },
    {
      type:"clear",
      title: 'Modificar contraseña',
      iconType: 'material-community',
      iconNameLeft: 'lock-reset',
      iconColorLeft: '#ccc',
      iconNameRight: 'chevron-right',
      iconColorRight: '#ccc',
      // Configura la función onPress para seleccionar el componente 'password'
      onPress: () => selectedComponent('password'),
    },
  ];
}
