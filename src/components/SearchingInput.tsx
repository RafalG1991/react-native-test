import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {COLORS} from "../themes/colors";
import {useState} from "react";
import {SelectLocationByCoordinates} from "./SelectLocationByCoordinates";

interface SearchingInputProp {
  onSearch: (value: string) => void;
}

export const SearchingInput = ({onSearch}: SearchingInputProp) => {
  const [value, setValue] = useState('');

  const onSearchPress = () => {
    onSearch(value);
    setValue('');
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row"}}>
        <TextInput
          placeholder={"Wpisz lokalizację"}
          placeholderTextColor={COLORS.text}
          selectionColor={COLORS.text}
          style={styles.input}
          onChangeText={setValue}
          value={value}
        />
        <SelectLocationByCoordinates />
      </View>
      <TouchableOpacity
      style={styles.button}
      onPress={onSearchPress}>
        <Text style={styles.buttonText}>Dodaj</Text>
      </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: COLORS.link,
    padding: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: COLORS.text,
    borderRadius: 10,
  },
  button: {
    width: "100%",
    backgroundColor: COLORS.link,
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: COLORS.text,
    fontSize: 16,
  },
});