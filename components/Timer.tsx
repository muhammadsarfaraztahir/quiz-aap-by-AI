import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
};

export const Timer: React.FC<Props> = ({ timeLeft, setTimeLeft }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [setTimeLeft]);

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>Time Left: {timeLeft}s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  timerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

