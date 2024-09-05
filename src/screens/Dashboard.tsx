import {StyleSheet, View, Text, ScrollView, ActivityIndicator, Image} from "react-native";
import {COLORS} from "../themes/colors";
import {FollowingDays} from "../components/FollowingDays";
import {useWeatherApiCurrent} from "../../services/useWeatherApiCurrent";
import {useWeatherApiForecast} from "../../services/useWeatherApiForecast";
import {RouteProp, useRoute} from "@react-navigation/native";
import {RootStackParamList} from "../navigation/Root";

export const Dashboard = () => {
  const {params: {location}} = useRoute<RouteProp<RootStackParamList, 'Dashboard'>>();

  const current = useWeatherApiCurrent(location);
  const forecast = useWeatherApiForecast(location);

  if(!current || !forecast || 'error' in current || 'error' in forecast) return (
    <ActivityIndicator color={COLORS.sun} size="large" style={{height: '100%'}}/>
  )

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
          {forecast.map((item, index) => (
            <FollowingDays isLast={index === forecast.length-1} key={item.date} item={item}/>
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
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  cityName: {
    fontSize: 30,
    color: COLORS.text,
  },
  temperature: {
    fontSize: 72,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: 10,
  },
  weather: {
    fontSize: 26,
    color: COLORS.text,
  },
  followingDaysContainer: {
    width: "90%",
    margin: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 10,
  },
});