import Ionicons from "@expo/vector-icons/Ionicons";
import {StyleSheet, TouchableOpacity} from "react-native";
import {COLORS} from "../themes/colors";

export const SelectLocationByCoordinates = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Ionicons name="locate" size={24} color={COLORS.text} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
});