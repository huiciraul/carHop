import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Publicar } from "../screens/Publicar/Publicar";
import { screen } from "../utils";
import { styles } from "./stacks.styles";

const Stack = createNativeStackNavigator(); 

export function PublicarStack(){
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown:false,
            headerStyle: styles.headerStyle, // Aplica el estilo del encabezado
            headerTintColor: styles.headerTintColor, // Aplica el color del icono/botón de retroceso
            headerTitleStyle: styles.headerTitleStyle, // Aplica el estilo del título
        }}
        >
            <Stack.Screen name={screen.publicar.publicar} component={Publicar} options={{title:"Publicar"}}/>
        </Stack.Navigator>
    )
}