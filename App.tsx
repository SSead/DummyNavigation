import React, {FC} from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from "./HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export const App: FC = () => {


  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator safeAreaInsets={{bottom: 10}}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}