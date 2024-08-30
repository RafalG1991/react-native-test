import {StyleSheet, View, Text} from "react-native";
import Feather from '@expo/vector-icons/Feather';

export const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>Warszawa</Text>
      <Text style={styles.temperature}>22° C</Text>
      <Feather name="sun" size={100} color="#fcd303" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  cityName: {
    fontSize: 30,
    color: "white",
  },
  temperature: {
    fontSize: 50,
    color: "white",
  },

});