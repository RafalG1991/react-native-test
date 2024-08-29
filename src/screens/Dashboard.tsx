import {StyleSheet, View, Text} from "react-native";
import Feather from '@expo/vector-icons/Feather';

export const Dashboard = () => {
  return (
    <View>
      <Text>Warszawa</Text>
      <Text>22° C</Text>
      <Feather name="sun" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({});