import {Image, StyleSheet, Text, View} from "react-native";
import {COLORS} from "../themes/colors";
import {FollowingWeatherType} from "../utils/types";

type Props = {
  item: FollowingWeatherType,
  isLast: boolean,
}

const DAYS_OF_WEEK = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

export const FollowingDays = ({item, isLast}: Props) => {
  return (
    <View style={[styles.container, !isLast && styles.separator]}>
      <Text style={styles.content}>{DAYS_OF_WEEK[new Date(item.date).getDay()]}</Text>
      <Text style={[styles.content, styles.value]}>{item.day.avgtemp_c}</Text>
      <Image
        style={styles.weatherIcon}
        source={{uri: `http:${item.day.condition.icon}`,}}
        resizeMode="contain"
        width={64}
        height={64}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
    textAlign: "center",
    fontWeight: "600",
  },
  type: {
    textAlign: "right",
    color: COLORS.sun,
  },
  weatherIcon: {
    width: 60,
    height: 60,
  },
});