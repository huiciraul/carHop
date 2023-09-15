import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Mensajes } from "../screens/Mensajes";
import { screen } from "../utils";
import { styles } from "./stacks.styles";
import { Chat } from "../components/Mensajes";

const Stack = createNativeStackNavigator(); 

export function MensajesStack(){
    return(
        <Stack.Navigator
        screenOptions={{
            headerStyle: styles.headerStyle, // Aplica el estilo del encabezado
            headerTintColor: styles.headerTintColor, // Aplica el color del icono/botón de retroceso
            headerTitleStyle: styles.headerTitleStyle, // Aplica el estilo del título
        }}
        >
        <Stack.Screen name={screen.mensajes.mensajes} component={Mensajes} options={{title:"Mensajes"}}/>
        <Stack.Screen name={screen.mensajes.chat} component={Chat} options={{title: "Chat"}}/>
        </Stack.Navigator>
    )
}