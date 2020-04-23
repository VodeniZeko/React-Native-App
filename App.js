import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./src/screens/SearchScreen";
import { NavigationContainer } from "@react-navigation/native";
import ModalScreen from "./src/screens/ModalScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import ReviewsScreen from "./src/screens/ReviewsScreen";
const MainStack = createBottomTabNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        options={{
          tabBarVisible: false
        }}
        component={SearchScreen}
      />
      {/* <MainStack.Screen name="Settings" component={SettingsScreen} /> */}
    </MainStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Business Search"
          component={MainStackScreen}
          options={{
            headerShown: true,
            headerTitleStyle: {
              color: "#006400",
              opacity: 0.8
            }
          }}
        />
        <RootStack.Screen
          name="Images"
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            headerTitleStyle: {
              color: "#006400",
              opacity: 0.8
            }
          }}
          component={ModalScreen}
        />
        <RootStack.Screen
          name="About"
          options={{
            headerBackTitleVisible: false,
            headerShown: true,
            headerTitleStyle: {
              color: "#006400",
              opacity: 0.8
            }
          }}
          component={DetailsScreen}
        />
        <RootStack.Screen
          name="Reviews"
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            headerTitleStyle: {
              color: "#006400",
              opacity: 0.8
            }
          }}
          component={ReviewsScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
