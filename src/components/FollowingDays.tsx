import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {COLORS} from "../themes/colors";
import {FollowingWeatherType} from "../utils/types";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import {RootStackParamList} from "../navigation/Root";

type Props = {
  item: FollowingWeatherType,
  isLast: boolean,
}

const DAYS_OF_WEEK = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

export const FollowingDays = ({item, isLast}: Props) => {
  const {navigate} = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity onPress={() => navigate("DayDetails", {forecast: item})}>
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
    </TouchableOpacity>
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