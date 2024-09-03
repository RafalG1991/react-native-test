import { StatusBar } from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {COLORS} from "./src/themes/colors";
import {NavigationContainer, DefaultTheme, Theme} from "@react-navigation/native";
import {Root} from "./src/navigation/Root";

const myTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.background,
    card: COLORS.background,
  }
}

export default function App() {
  return (
    <NavigationContainer theme={myTheme}>
      <SafeAreaProvider>
        <StatusBar style={"light"}/>
        <SafeAreaView style={styles.container}>
          <Root />
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
