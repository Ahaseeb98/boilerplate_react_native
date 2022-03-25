import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Navigation from './src/Navigation';

import {Provider} from 'react-redux';
import {store, persistor} from './src/Redux';
import {PersistGate} from 'redux-persist/integration/react';


const App = () => {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
    },
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <MyStatusBar
        barStyle={'dark-content'}
        backgroundColor={
          "#fff"
        }
      />
      <View style={[styles.container]}>
        <PaperProvider theme={theme}>
          <Navigation />
        </PaperProvider>
      </View>
    </SafeAreaView>
  );
};

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  statusBar: {
    // height: 70,
  },
});

const AppContainer = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
export default AppContainer;
