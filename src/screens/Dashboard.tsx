import {StyleSheet, View, Text} from "react-native";
import Feather from '@expo/vector-icons/Feather';
import {COLORS} from "../themes/colors";
import {FollowingWeatherType} from "../utils/types";
import {FollowingDays} from "../components/FollowingDays";

const FOLLOWING_DAYS: FollowingWeatherType[] = [
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
  {
    name: 'czwartek',
    value: 18,
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
      <View style={styles.followingDaysContainer}>
        {FOLLOWING_DAYS.map(item => (
          <FollowingDays item={item}/>
        ))}
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
    marginTop: 20,
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
  followingDaysContainer: {
    width: "90%",
    margin: 20,
    marginTop: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 10,
  },
});