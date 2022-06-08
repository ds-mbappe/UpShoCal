import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calendar from './Screens/Calendar';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
