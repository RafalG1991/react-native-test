import {StyleSheet, Text, View} from "react-native";
import {COLORS} from "../themes/colors";
import Feather from "@expo/vector-icons/Feather";
import {FollowingWeatherType} from "../utils/types";

type Props = {
  item: FollowingWeatherType,
}

export const FollowingDays = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{item.name}</Text>
      <Text style={[styles.content, styles.value]}>{item.value}</Text>
      <Feather style={[styles.content, styles.type]} name={item.type} size={50} />
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
});