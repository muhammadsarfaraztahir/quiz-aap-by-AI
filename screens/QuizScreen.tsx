import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { Button } from '../components/Button';
import { QuizQuestion } from '../components/QuizQuestion';
import { Timer } from '../components/Timer';

type QuizScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>;
type QuizScreenRouteProp = RouteProp<RootStackParamList, 'Quiz'>;

type Props = {
  navigation: QuizScreenNavigationProp;
  route: QuizScreenRouteProp;
};

// Mock questions (replace with actual API call in a real app)
const mockQuestions = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars',
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'],
    correctAnswer: 'Leonardo da Vinci',
  },
];

const QuizScreen: React.FC<Props> = ({ navigation, route }) => {
  const { category, difficulty } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timeLeft]);

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === mockQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < mockQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30);
    } else {
      navigation.navigate('Result', { score, totalQuestions: mockQuestions.length });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.categoryText}>{category} - {difficulty}</Text>
      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
      <QuizQuestion
        question={mockQuestions[currentQuestionIndex].question}
        options={mockQuestions[currentQuestionIndex].options}
        onAnswer={handleAnswer}
      />
      <Text style={styles.progressText}>
        Question {currentQuestionIndex + 1} of {mockQuestions.length}
      </Text>
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
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressText: {
    fontSize: 16,
    marginTop: 20,
  },
});

export default QuizScreen;

