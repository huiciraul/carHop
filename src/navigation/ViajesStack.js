import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Viajes } from "../screens/Viajes";
import { screen } from "../utils";
import { styles } from "./stacks.styles";

const Stack = createNativeStackNavigator(); 

export function ViajesStack(){
    return(
        <Stack.Navigator
        screenOptions={{
            headerStyle: styles.headerStyle, // Aplica el estilo del encabezado
            headerTintColor: styles.headerTintColor, // Aplica el color del icono/botón de retroceso
            headerTitleStyle: styles.headerTitleStyle, // Aplica el estilo del título
        }}
        >
            <Stack.Screen name={screen.tusViajes.tusViajes} component={Viajes} options={{title:"Mis viajes"}}/>
        </Stack.Navigator>
    )
}