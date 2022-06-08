import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calendar from './Screens/Calendar';
import Product from './Screens/Product';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Calendar}
          options={{ title: 'Calendar' }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{ title: 'Product' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
