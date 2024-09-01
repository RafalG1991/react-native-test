import {StyleSheet, View, Text} from "react-native";
import Feather from '@expo/vector-icons/Feather';
import {COLORS} from "../themes/colors";

const FOLLOWING_DAYS = [
  {
    name: 'dzisiaj',
    value: 20,
    type: 'sun',
  },
  {
    name: 'wtorek',
    value: 25,
    type: 'sun',
  },
  {
    name: 'środa',
    value: 23,
    type: 'sun',
  },
];

export const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>Warszawa</Text>
      <Text style={styles.temperature}>22° C</Text>
      <View style={styles.weatherContainer}>
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
  weatherContainer: {
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