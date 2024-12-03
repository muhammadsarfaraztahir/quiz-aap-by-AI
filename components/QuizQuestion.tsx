import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from './Button';

type Props = {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
};

export const QuizQuestion: React.FC<Props> = ({ question, options, onAnswer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {options.map((option, index) => (
        <Button
          key={index}
          title={option}
          onPress={() => onAnswer(option)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

