import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { Button } from '../components/Button';
import { Picker } from '../components/Picker';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const categories = ['General Knowledge', 'Science', 'History', 'Sports'];
const difficulties = ['Easy', 'Medium', 'Hard'];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [category, setCategory] = useState(categories[0]);
  const [difficulty, setDifficulty] = useState(difficulties[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Quiz App!</Text>
      <Picker
        label="Select Category"
        items={categories}
        selectedValue={category}
        onValueChange={(value) => setCategory(value)}
      />
      <Picker
        label="Select Difficulty"
        items={difficulties}
        selectedValue={difficulty}
        onValueChange={(value) => setDifficulty(value)}
      />
      <Button
        title="Start Quiz"
        onPress={() => navigation.navigate('Quiz', { category, difficulty })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;

