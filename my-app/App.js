import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';


import ProductsScreen from "./Components/productsScreen"
import Cart from "./Component/cartScreen";
import ElectronicScreen from "./Component/ElectronicScreen";
import JewelleryScreen from "./Component/JewelleryScreen";
import LocationsScreen from "./Component/LocationsScreen";
import dressScreen from "./Component/dressScreen";
import BlogScreen from "./Component/BlogScreen";
import StoreScreen from "./Component/StoreScreen";
import Productdetail from "./Component/ProductdetailScreen";


const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <>
      
        <Stack.Screen
          options={{ headerShown: false }}
          name="Products"
          component={ProductsScreen}
          
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Cart"
          component={Cart}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Dress"
          component={dressScreen}
          
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Electronic"
          component={ElectronicScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Jewellery"
          component={JewelleryScreen}
          
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Locations"
          component={LocationsScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Blog"
          component={BlogScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Store"
          component={StoreScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Productdetail"
          component={Productdetail}
        />
      </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;