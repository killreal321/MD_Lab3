import React from 'react';
import Slide_Navigator from './components/com/io8325/md_lab11/Slide_Navigator'
import { LogBox } from "react-native";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './bd/store';
LogBox.ignoreLogs([""]);
export default function App() {
  return (
      <Slide_Navigator />
  );
}
