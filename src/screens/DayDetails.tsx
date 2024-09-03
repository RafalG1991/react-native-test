import {ActivityIndicator, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {COLORS} from "../themes/colors";
import {RouteProp, useRoute} from "@react-navigation/native";
import {RootStackParamList} from "../navigation/Root";

export const DayDetails = () => {

  const { params: {forecast} } = useRoute<RouteProp<RootStackParamList, "DayDetails">>();

  if(!forecast) return <ActivityIndicator color={COLORS.sun} size="large" style={{height: '100%'}}/>

  const day = forecast.hour;

  return (
    <ScrollView>
        <View style={styles.followingDaysContainer}>
          <Text style={[styles.content, styles.title]}>Pogoda w dniu {forecast.date}</Text>
          {day.map((item, index) => (
            <View key={item.time} style={[styles.container, !(index === day.length-1) && styles.separator]}>
              <Text style={styles.content}>{item.time.split(' ')[1]}</Text>
              <Text style={[styles.content, styles.value]}>{item.temp_c}°C</Text>
              <Image
                style={styles.weatherIcon}
                source={{uri: `http:${item.condition.icon}`,}}
                resizeMode="contain"
                width={64}
                height={64}
              />
            </View>
          ))}
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
  },
  weatherIcon: {
    width: 64,
    height: 64,
  },
  followingDaysContainer: {
    width: "90%",
    margin: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 10,
  },
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: COLORS.background,
  },
  content: {
    flex: 1,
    color: COLORS.text,
  },
  value: {
    fontWeight: "600",
  },
  type: {
    textAlign: "right",
    color: COLORS.sun,
  },
});