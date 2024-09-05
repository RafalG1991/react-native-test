import {View, TextInput, StyleSheet, TouchableOpacity, Text, FlatList} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigation/Root";
import {COLORS} from "../themes/colors";
import {useState} from "react";
import {SearchingInput} from "../components/SearchingInput";

interface ListItem {
  title: string,
  value: string,
}

export const SelectLocation = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [list, setList] = useState<ListItem[]>([]);

  return (
    <FlatList
      ListHeaderComponent={<SearchingInput onSearch={(value) => setList(prevState => [...prevState, {title: value, value}])}/>}
      ListHeaderComponentStyle={styles.header}
      contentContainerStyle={styles.container}
      data={list}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigate('Dashboard', {location: item.value})}
        >
          <Text style={styles.itemText}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {
    marginBottom: 40,
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