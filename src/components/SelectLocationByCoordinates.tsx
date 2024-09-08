import {Alert, StyleSheet, TouchableOpacity} from "react-native";
import {COLORS} from "../themes/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as location from "expo-location";
import {ListItem} from "../../services/useLocationList";
import {ApiError, CurrentWeatherType} from "../utils/types";

interface SelectLocationByCoordinatesProps {
  onLocationFound: (item: Omit<ListItem, 'id'>) => void;

}

export const SelectLocationByCoordinates = ({onLocationFound}: SelectLocationByCoordinatesProps) => {
  const onButtonPress = async () => {
    const { status } = await location.requestForegroundPermissionsAsync();

    if (status === location.PermissionStatus.DENIED) {
      Alert.alert('Brak uprawnień!', 'Funkcja wymaga przyznania uprawnień do wykrywania lokalizacji, przejdź do ustawień!');
    }

    if (status === location.PermissionStatus.GRANTED) {
      const loc = await location.getCurrentPositionAsync();
      const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/current.json?key=${process.env.EXPO_PUBLIC_KEY}&q=${loc.coords.latitude},${loc.coords.longitude}&lang=PL`);
      const cityData: CurrentWeatherType | ApiError  = await res.json();
      console.log(cityData);
      onLocationFound({
        value: `${loc.coords.latitude},${loc.coords.longitude}`,
        title: 'location' in cityData ? cityData.location.name : `${loc.coords.latitude},${loc.coords.longitude}`,
      })
    }

  }

  return (
    <TouchableOpacity style={styles.button} onPress={onButtonPress}>
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