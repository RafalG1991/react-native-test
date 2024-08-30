import {StyleSheet, View, Text} from "react-native";
import Feather from '@expo/vector-icons/Feather';
import {COLORS} from "../themes/colors";

export const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>Warszawa</Text>
      <Text style={styles.temperature}>22° C</Text>
      <View>
        <Feather name="sun" size={100} color={COLORS.sun} />
        <Text style={styles.weather}>Sunny</Text>
      </View>
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
    marginTop: 20,
  },
  temperature: {
    fontSize: 72,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: 20,
  },
  weather: {
    fontSize: 26,
    color: COLORS.text,
  },
});