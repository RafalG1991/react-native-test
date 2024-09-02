import {StyleSheet, View, Text, ScrollView} from "react-native";
import Feather from '@expo/vector-icons/Feather';
import {COLORS} from "../themes/colors";
import {FollowingWeatherType} from "../utils/types";
import {FollowingDays} from "../components/FollowingDays";
import {useEffect, useState} from "react";

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
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    fetch(`${process.env.EXPO_PUBLIC_API_URL}/current.json?key=${process.env.EXPO_PUBLIC_KEY}&q=Czestochowa`)
      .then(res => res.json())
      .then(res => setCurrent(res));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.cityName}>Warszawa</Text>
        <Text style={styles.temperature}>22° C</Text>
        <View style={styles.weatherContainer}>
          <Feather name="sun" size={100} color={COLORS.sun} />
          <Text style={styles.weather}>Sunny</Text>
        </View>
        <View style={styles.followingDaysContainer}>
          {FOLLOWING_DAYS.map((item, index) => (
            <FollowingDays isLast={index === FOLLOWING_DAYS.length-1} key={item.name} item={item}/>
          ))}
        </View>
      </View>
    </ScrollView>
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