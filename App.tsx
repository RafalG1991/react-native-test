import { StatusBar } from 'expo-status-bar';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <SafeAreaView></SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
