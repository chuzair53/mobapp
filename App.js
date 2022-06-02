import React, {useState, useRef} from 'react';
import { Button, Text, View, ActivityIndicator, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { WebView } from 'react-native-webview';




function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ route }) {

  const [canGoBack, setCanGoBack] = useState(false);
const [canGoForward, setCanGoForward] = useState(false);
const [currentUrl, setCurrentUrl] = useState('');
const webviewRef = useRef(null);

  return (
    <SafeAreaView style={styles.flexContainer}>
   
      <WebView
        source={{ uri: "https://www.amforus.com/" }}
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
        style={{ marginTop: 0 }}
        ref={webviewRef}
        onNavigationStateChange={navState => {
          setCanGoBack(navState.canGoBack);
          setCanGoForward(navState.canGoForward);
          setCurrentUrl(navState.url);
        }}


      />
      </SafeAreaView>
      
  );

}




function SettingsScreen({ route }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}



const Tab = createBottomTabNavigator();



function LoadingIndicatorView() {
  return (
    <ActivityIndicator
      color="#009b88"
      size="large"
      style={styles.ActivityIndicatorStyle}
    />
  );
}




export default function App() {


  return (
  <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'list-outline' : 'ios-list';
            }else if (route.name == 'Logout'){
              iconName = focused ? 'log-out-outline' : 'log-out-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3c7ff2',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
   
       
      </Tab.Navigator>

    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexContainer: {
    flex: 1
  },
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: "center",
  }
});
