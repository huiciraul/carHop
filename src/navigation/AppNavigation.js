// AppNavigation.js

import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import { styles } from "./stacks.styles"; // Importa tus estilos personalizados
import { AccountsStack } from "./AccountStack";
import { BuscarViajesStack } from "./BuscarViajesStack";
import { MensajesStack } from "./MensajesStack";
import { PublicarStack } from "./PublicarStack";
import { ViajesStack } from "./ViajesStack";
import { screen } from "../utils";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (  
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "black", borderBlockColor:"black", },
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: styles.tabBarInactiveTintColor,
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    //   tabBarOptions={{
    //     style: {backgroundColor: "black",}
    //   }}
    >
      <Tab.Screen
        name={screen.buscarviajes.tab}
        component={BuscarViajesStack}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name={screen.publicar.tab}
        component={PublicarStack}
        options={{ title: "Publicar" }}
      />
      <Tab.Screen
        name={screen.tusViajes.tab}
        component={ViajesStack}
        options={{ title: "Viajes" }}
      />
      <Tab.Screen
        name={screen.mensajes.tab}
        component={MensajesStack}
        options={{ title: "Mensajes" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountsStack}
        options={{ title: "Perfil" }}
      />
    </Tab.Navigator>
  );
}

// Resto del código...

function screenOptions(route, color, size) {
  let iconName;

  if (route.name === screen.tusViajes.tab) {
    iconName = "car-outline";
  }
  if (route.name === screen.buscarviajes.tab) {
    iconName = "magnify";
  }
  if (route.name === screen.account.tab) {
    iconName = "account-outline";
  }
  if (route.name === screen.mensajes.tab) {
    iconName = "chat-outline";
  }
  if (route.name === screen.publicar.tab) {
    iconName = "plus";
  }
  return (
    <Icon
      type="material-community"
      name={iconName}
      color={color}
      size={size}
    />
  );
}
