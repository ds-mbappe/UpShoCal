import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Screens/Home";
import Search from "./Screens/Search";
import Product from "./Screens/Product";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Root = () => {
  return function Root() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Product"
            component={Product}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
