import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList  } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import CustomHeader from './src/components/CustomHeader';
import FeedbackScreen from './src/screens/FeedbackScreen';

// Create Stack Navigator
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Homescreen"
      options={{
        header: () => <CustomHeader />,
      }}
      component={HomeScreen}
    />
  </Stack.Navigator>
);

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ marginTop: 25, backgroundColor:"#b8a8a7" }} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

// Create Drawer Navigator
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
<Drawer.Navigator
drawerContent={(props) => <CustomDrawerContent {...props} />}
screenOptions={{
  drawerLabelStyle: {
    color: 'black',
    fontSize: 20,
   
       fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  drawerStyle: {
    backgroundColor: '#cad4d9',
  }
}}
>
<Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
        headerStyle: {
          backgroundColor: '#F0EEEE',
        },
        headerTitleStyle: {
          color: 'black',
          
        },
      }}
    />
    <Drawer.Screen name="About" component={AboutScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
    <Drawer.Screen name="Feedback" component={FeedbackScreen} />
  </Drawer.Navigator>
);

// Main App Component
const App = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);

export default App;
