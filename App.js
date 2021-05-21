import React from 'react';
import RootNavigator from './components/com/io8325/md_lab11/RootNavigator'
import { LogBox } from "react-native";

LogBox.ignoreLogs([""]);
export default function App() {
  return (
      <RootNavigator />
  );
}
