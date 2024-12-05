import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Avatar, Card, Button } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

const expenses = [
  {
    id: '1',
    icon: 'amazon',
    name: 'Amazon',
    date: 'Sept 08, 2023',
    amount: '-₹895.54',
  },
  {
    id: '2',
    icon: 'cutlery',
    name: 'McDonald’s',
    date: 'Sept 10, 2023',
    amount: '-₹202.67',
  },
  {
    id: '3',
    icon: 'apple',
    name: 'iPad Pro',
    date: 'Oct 13, 2023',
    amount: '-₹79,999',
  },
  {
    id: '4',
    icon: 'coffee',
    name: 'Starbucks',
    date: 'Sept 24, 2023',
    amount: '-₹1864',
  },
  {
    id: '5',
    icon: 'credit-card',
    name: 'Mastercard',
    date: 'Oct 01, 2023',
    amount: '-₹1034.54',
  },
];

export default function ExpensesScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Expenses</Text>
        <Avatar.Image
          size={40}
          source={{ uri: 'https://via.placeholder.com/150' }}
        />
      </View>

      {/* Balance Card */}
      <Card style={styles.balanceCard}>
        <Card.Content>
          <Text style={styles.balanceTitle}>My Balance</Text>
          <Text style={styles.balanceText}>₹112,908</Text>
        </Card.Content>
      </Card>

      {/* Expenses List */}
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <FontAwesome name={item.icon} size={24} color="white" style={styles.icon} />
            <View style={styles.expenseDetails}>
              <Text style={styles.expenseName}>{item.name}</Text>
              <Text style={styles.expenseDate}>{item.date}</Text>
            </View>
            <Text style={styles.expenseAmount}>{item.amount}</Text>
          </View>
        )}
        contentContainerStyle={styles.expenseList}
      />

      {/* Bottom Navigation Placeholder */}
      <View style={styles.bottomNav}>
        <FontAwesome name="home" size={24} color="#fff" />
        <FontAwesome name="plus-circle" size={40} color="#fff" />
        <FontAwesome name="user" size={24} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2d',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  balanceCard: {
    backgroundColor: '#6a51ae',
    borderRadius: 10,
    marginVertical: 16,
    padding: 10,
  },
  balanceTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  balanceText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  expenseList: {
    marginTop: 10,
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#29294d',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  expenseDetails: {
    flex: 1,
    marginHorizontal: 10,
  },
  expenseName: {
    fontSize: 16,
    color: '#fff',
  },
  expenseDate: {
    fontSize: 12,
    color: '#9fa1c0',
  },
  expenseAmount: {
    fontSize: 16,
    color: '#ff5959',
  },
  icon: {
    marginRight: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#29294d',
    borderRadius: 10,
    padding: 10,
  },
});
