import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calendar from './Screens/Calendar';
import Product from './Screens/Product';
import Home from './Screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ statusBarHidden: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
