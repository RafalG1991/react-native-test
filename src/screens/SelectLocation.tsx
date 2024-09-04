import {View, TextInput, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigation/Root";
import {COLORS} from "../themes/colors";

export const SelectLocation = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View>
      <TextInput style={styles.input}/>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    backgroundColor: COLORS.lightBlue,
  },
});