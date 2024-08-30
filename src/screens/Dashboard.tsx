import {StyleSheet, View, Text} from "react-native";
import Feather from '@expo/vector-icons/Feather';
import {COLORS} from "../themes/colors";

export const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>Warszawa</Text>
      <Text style={styles.temperature}>22° C</Text>
      <Feather name="sun" size={100} color={COLORS.sun} />
      <Text style={styles.weather}>Sunny</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  cityName: {
    fontSize: 30,
    color: COLORS.text,
  },
  temperature: {
    fontSize: 50,
    color: COLORS.text,
  },
  weather: {
    fontSize: 26,
    color: COLORS.text,
  },
});