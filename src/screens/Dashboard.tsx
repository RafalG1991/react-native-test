import {StyleSheet, View, Text, ScrollView, ActivityIndicator, Image} from "react-native";
import {COLORS} from "../themes/colors";
import {FollowingWeatherType} from "../utils/types";
import {FollowingDays} from "../components/FollowingDays";
import {useWeatherApiCurrent} from "../../services/useWeatherApiCurrent";
import {useWeatherApiForecast} from "../../services/useWeatherApiForecast";

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
  const current = useWeatherApiCurrent();
  const forecast = useWeatherApiForecast();
  console.log(forecast);

  if(!current) return <ActivityIndicator color={COLORS.sun} size="large" style={{height: '100%'}}/>
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.cityName}>{current.location.name}</Text>
        <Text style={styles.temperature}>{current.current.temp_c}°C</Text>
        <View style={styles.weatherContainer}>
          <Image
            style={styles.weatherIcon}
            source={{uri: `http:${current.current.condition.icon}`,}}
            resizeMode="contain"
            width={128}
            height={128}
          />
          <Text style={styles.weather}>{current.current.condition.text}</Text>
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
  weatherIcon: {
    width: 128,
    height: 128,
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