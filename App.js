import React, { useState } from "react";
import { StyleSheet} from "react-native";
import { AppLoading } from "expo";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { Provider } from "react-redux";
import store from './src/store'
import { onLoad } from "./src/onLoad";

export default function App() {
  const [isReady, setReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={onLoad}
        onFinish={() => setReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

