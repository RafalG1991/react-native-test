import { StatusBar } from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Dashboard} from "./src/screens/Dashboard";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <SafeAreaView>
        <Dashboard />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
