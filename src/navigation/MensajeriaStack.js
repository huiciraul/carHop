import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils";
import { MensajesScreen } from "../screens/Mensajes/MensajesScreen/MensajesScreen";
import { ChatScreen } from "../screens/Mensajes/ChatScreen/ChatScreen";

const Stack = createNativeStackNavigator();

export function MensajeriaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.mensajeria.mensajeria}
        component={MensajesScreen}
        options={{ title: "MENSAJES" }}
      />
      <Stack.Screen
        name={screen.mensajeria.chat}
        component={ChatScreen}
        options={({ route }) => ({
          title: route.params.userName,
        })}
      />
    </Stack.Navigator>
  );
}
