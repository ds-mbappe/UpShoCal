import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Screens/Home";
import Product from "./Screens/Product";
import Login from "./Screens/Login";
import Registration from "./Screens/Registration";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Root = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Root"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Drawer.Navigator screenOptions={{ drawerPosition: "right" }}>
    //     <Drawer.Screen
    //       name="Home"
    //       component={Root}
    //       options={{ headerShown: false }}
    //     />
    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
}
