import {StyleSheet, Text, View} from "react-native";
import {COLORS} from "../themes/colors";
import Feather from "@expo/vector-icons/Feather";
import {FollowingWeatherType} from "../utils/types";

type Props = {
  item: FollowingWeatherType,
}

export const FollowingDays = ({item}: Props) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.value}</Text>
      <Feather name={item.type} size={50} color={COLORS.sun} />
    </View>
  );
}

const styles = StyleSheet.create({});