import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Dashboard} from "../screens/Dashboard";
import {DayDetails} from "../screens/DayDetails";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Dashboard: undefined;
  DayDetails: undefined;
}

export const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard}/>
      <Stack.Screen name="DayDetails" component={DayDetails}/>
    </Stack.Navigator>
  )
}