import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../quiz-aap-by-AI/screens/Home'; // HomeScreen ko import karein

export type RootStackParamList = {
  Home: undefined;
  Quiz: { category: string; difficulty: string };
  Result: { score: number; totalQuestions: number };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
