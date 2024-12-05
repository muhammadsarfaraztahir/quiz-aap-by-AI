import React from 'react';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Quiz: { category: string; difficulty: string };
  Result: { score: number; totalQuestions: number };
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
// const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Quiz App' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;