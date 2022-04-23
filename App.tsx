import React from 'react';
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";

import {store} from "./store/store";
import { ScrollView } from "react-native";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ScrollView>

        </ScrollView>
      </NavigationContainer>
    </Provider>
  )
};

export default App;
