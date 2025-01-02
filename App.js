import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './src/HomeScreen';
import Interstellar from './src/Interstellar';
import Oppenheimer from './src/Oppenheimer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Beranda" 
            component={HomeScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Detail Interstellar" 
            component={Interstellar} 
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="Detail Oppenheimer" 
            component={Oppenheimer} 
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
