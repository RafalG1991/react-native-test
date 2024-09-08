import {StyleSheet, TouchableOpacity, Text, FlatList, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigation/Root";
import {COLORS} from "../themes/colors";
import {SearchingInput} from "../components/SearchingInput";
import {useLocationList} from "../../services/useLocationList";
import Ionicons from '@expo/vector-icons/Ionicons';
import {SelectLocationByCoordinates} from "../components/SelectLocationByCoordinates";

export const SelectLocation = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {list, addToList, removeFromList} = useLocationList();

  return (
    <FlatList
      ListHeaderComponent={
        <View style={{flexDirection: "row"}}>
          <SearchingInput onSearch={(value) => addToList({value, title: value})}/>
          <SelectLocationByCoordinates />
        </View>
      }
      ListHeaderComponentStyle={styles.header}
      contentContainerStyle={styles.container}
      data={list}
      renderItem={({item}) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigate('Dashboard', {location: item.value})}
        >
          <Text style={styles.itemText}>{item.title}</Text>
          <TouchableOpacity onPress={() => removeFromList(item)}>
            <Ionicons name="trash-outline" size={24} color={COLORS.error} />
          </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    color: COLORS.text,
    fontSize: 16,
  },
});