import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BuscarViajes } from "../screens/Buscar/BuscarViajes";
import { screen } from "../utils";
import { styles } from "./stacks.styles";
import { ViajesScreen } from "../components/Buscar/ViajeScreen/ViajesScreen";


const Stack = createNativeStackNavigator(); 

export function BuscarViajesStack(){
    return(
        <Stack.Navigator 
            screenOptions={{
                headerShown:false,
                headerStyle: styles.headerStyle, // Aplica el estilo del encabezado
                headerTintColor: styles.headerTintColor, // Aplica el color del icono/botón de retroceso
                headerTitleStyle: styles.headerTitleStyle, // Aplica el estilo del título
            }}
        > 
            <Stack.Screen name={screen.buscarviajes.buscarviajes} component={BuscarViajes} options={{title:"Buscar viaje"}} />
            <Stack.Screen name={screen.buscarviajes.viaje} component={ViajesScreen} options={{title:"Viaje info"}} />
        </Stack.Navigator>
    )
}
