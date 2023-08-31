import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Account } from "../screens/Perfil/Account";
import { LoginScreen } from "../screens/Perfil/LoginScreen/LoginScreen";
import { InfPersonal } from "../screens/Perfil/InfPersonal";
import { RegisterScreen } from "../screens/Perfil/RegisterScreen/RegisterScreen"
import { screen } from "../utils";
import { styles } from "./stacks.styles";


const Stack = createNativeStackNavigator();

export function AccountsStack() {
    return(
       <Stack.Navigator
       screenOptions={{
         headerStyle: styles.headerStyle, // Aplica el estilo del encabezado
         headerTintColor: styles.headerTintColor, // Aplica el color del icono/botón de retroceso
         headerTitleStyle: styles.headerTitleStyle, // Aplica el estilo del título
     }}
     >
         <Stack.Screen  name={screen.account.account}
          component={Account} 
          options={{title: "Cuenta"}}
          />         
         <Stack.Screen  name={screen.account.InfPersonal} 
          component={InfPersonal}
          options={{title: "Informacion personal"}}
          />
          <Stack.Screen  name={screen.account.login}
          component={LoginScreen} 
          options={{title: "Iniciar sesion"}}
          />
          <Stack.Screen  name={screen.account.register}
          component={RegisterScreen} 
          options={{title: "Registrate"}}
          /> 
       </Stack.Navigator>
    );
};