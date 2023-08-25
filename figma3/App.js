import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import SignUp from "./screens/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { Header, createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";
import Complaince from "./screens/Complaince";
import NewProject from "./screens/NewProject";
import UsePlatform from "./screens/UsePlatform";
import ApplicationProgress from "./screens/ApplicationProgress";
import Analytics from "./screens/Analytics";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={(headerTitle = false)}
        >
          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerTitle: "Dashboard" }}
          />
          <Stack.Screen
            name="Complaince"
            component={Complaince}
            options={{
              gestureEnabled: true,
              headerBackTitle: "Back",
              headerShadowVisible: "false",
            }}
          />
          <Stack.Screen name="NewProject" component={NewProject} />
          <Stack.Screen
            name="UsePlatform"
            component={UsePlatform}
            options={{
              headerTitle: "How to use this title",
            }}
          />
          <Stack.Screen
            name="progressApplication"
            component={ApplicationProgress}
          />

          <Stack.Screen
            name="Analytics"
            component={Analytics}
            options={{
              headerTitle: "             Analytics",
              headerBackTitle: "Back",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      {/* < Login  /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
