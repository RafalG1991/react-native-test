import { StatusBar } from 'expo-status-bar';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <StatusBar style="auto" />
      <Pressable onPress={() => alert('Pressed on pressable component!')}>
        <Text>Hi! Press me!</Text>
      </Pressable>
      <TextInput
        style={{
          flex: 1,
        }}
        onChangeText={() => null}
        value='0'
        placeholder="useless placeholder"
        inputMode="numeric"
      />
    </View>
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
