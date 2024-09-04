import {TouchableOpacity, View, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigation/Root";

export const SelectLocation = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View>
      <TouchableOpacity onPress={() => navigate('Dashboard')}>
        <Text>SelectLocation</Text>
      </TouchableOpacity>
    </View>
  )
}