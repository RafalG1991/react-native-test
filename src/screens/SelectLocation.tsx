import {View, TextInput, StyleSheet, TouchableOpacity, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigation/Root";
import {COLORS} from "../themes/colors";
import {useState} from "react";

interface ListItem {
  title: string,
  value: string,
}

export const SelectLocation = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [value, setValue] = useState('');
  const [list, setList] = useState<ListItem[]>([]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Wpisz lokalizację"}
        placeholderTextColor={COLORS.text}
        selectionColor={COLORS.text}
        style={styles.input}
        onChangeText={setValue}
        value={value}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setList(prevState => [...prevState, {title: value, value: value}]);
          setValue('');
        }}
      >
        <Text style={styles.buttonText}>Dodaj</Text>
      </TouchableOpacity>
      <View style={styles.listContainer}>
      {list.map(item => (
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.title}</Text>
        </View>
      ))}
      </View>
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
  listContainer: {
    width: "100%",
    marginTop: 40,
  },
  item: {
    width: "100%",
    backgroundColor: COLORS.lightBlue,
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
  },
  itemText: {
    color: COLORS.text,
    fontSize: 16,
  },
});