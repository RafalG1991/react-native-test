import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Dashboard} from "../screens/Dashboard";
import {DayDetails} from "../screens/DayDetails";
import {FollowingWeatherType} from "../utils/types";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Dashboard: undefined;
  DayDetails: {
    forecast: FollowingWeatherType,
  }
}

export const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard}/>
      <Stack.Screen name="DayDetails" component={DayDetails} />
    </Stack.Navigator>
  )
}