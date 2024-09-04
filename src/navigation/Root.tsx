import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Dashboard} from "../screens/Dashboard";
import {DayDetails} from "../screens/DayDetails";
import {FollowingWeatherType} from "../utils/types";
import {COLORS} from "../themes/colors";
import {SelectLocation} from "../screens/SelectLocation";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Dashboard: undefined;
  DayDetails: {
    forecast: FollowingWeatherType,
  };
  SelectLocation: undefined;
}

export const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        title: "",
        headerBackTitle: "",
        headerShadowVisible: false,
        headerTintColor: COLORS.text,
      }}>
      <Stack.Screen name="SelectLocation" component={SelectLocation} />
      <Stack.Screen name="Dashboard" component={Dashboard}/>
      <Stack.Screen name="DayDetails" component={DayDetails} />
    </Stack.Navigator>
  )
}