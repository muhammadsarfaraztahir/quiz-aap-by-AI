import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Avatar, Card, Button, Icon } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <Avatar.Image
          size={40}
          source={{ uri: 'https://via.placeholder.com/150' }}
        />
      </View>

      {/* Balance Section */}
      <View style={styles.balanceContainer}>
        <View style={styles.balanceCircle}>
          <Text style={styles.balanceText}>₹112,908</Text>
          <Text style={styles.balanceSubText}>Available Balance</Text>
        </View>
      </View>

      {/* Tip of the Day */}
      <Card style={styles.tipCard}>
        <Card.Content>
          <Text style={styles.tipTitle}>Tip of the Day</Text>
          <Text style={styles.tipText}>Prepare a Budget and Abide by it</Text>
        </Card.Content>
      </Card>

      {/* Expenses Section */}
      <View style={styles.expensesHeader}>
        <Text style={styles.expensesTitle}>Expenses</Text>
        <Button compact onPress={() => {}}>
          See all
        </Button>
      </View>
      <View style={styles.expensesList}>
        {/* Expense Item 1 */}
        <View style={styles.expenseItem}>
          <FontAwesome name="apple" size={24} color="white" style={styles.icon} />
          <View>
            <Text style={styles.expenseName}>Nike Air Max 2090</Text>
            <Text style={styles.expenseDate}>09 Oct 2023</Text>
          </View>
          <Text style={styles.expenseAmount}>-₹16,999</Text>
        </View>

        {/* Expense Item 2 */}
        <View style={styles.expenseItem}>
          <FontAwesome name="apple" size={24} color="white" style={styles.icon} />
          <View>
            <Text style={styles.expenseName}>iPad Pro</Text>
            <Text style={styles.expenseDate}>10 Oct 2023</Text>
          </View>
          <Text style={styles.expenseAmount}>-₹79,999</Text>
        </View>

        {/* Expense Item 3 */}
        <View style={styles.expenseItem}>
          <FontAwesome name="car" size={24} color="white" style={styles.icon} />
          <View>
            <Text style={styles.expenseName}>Uber</Text>
            <Text style={styles.expenseDate}>05 Mar 2023</Text>
          </View>
          <Text style={styles.expenseAmount}>-₹50.00</Text>
        </View>
      </View>
    </ScrollView>
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
  balanceContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  balanceCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#29294d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  balanceSubText: {
    fontSize: 14,
    color: '#9fa1c0',
  },
  tipCard: {
    backgroundColor: '#29294d',
    borderRadius: 10,
    marginVertical: 16,
    padding: 10,
  },
  tipTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#9fa1c0',
  },
  expensesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  expensesTitle: {
    fontSize: 20,
    color: '#fff',
  },
  expensesList: {
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
    marginRight: 16,
  },
});

