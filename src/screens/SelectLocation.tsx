import {View, TextInput, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigation/Root";
import {COLORS} from "../themes/colors";

export const SelectLocation = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Wpisz lokalizację"}
        placeholderTextColor={COLORS.text}
        selectionColor={COLORS.text}
        style={styles.input}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
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
});