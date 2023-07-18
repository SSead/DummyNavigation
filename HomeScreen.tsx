import React, {FC} from 'react';
import {View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export const HomeScreen: FC = () => {
  const insets = useSafeAreaInsets();
  console.log(insets)

  return <View />
}