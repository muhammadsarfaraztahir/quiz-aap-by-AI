import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const Statistics = () => {
  const recentTransactions = [
    { id: "1", title: "Netflix", date: "21 Sept - 15:04", amount: "₹19.00" },
    { id: "2", title: "Shopping", date: "20 Sept - 13:40", amount: "₹65.59" },
    // Add more transactions here
  ];

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Statistics</Text>

      {/* Graph Section */}
      <View>
        <LineChart
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
              {
                data: [500, 1200, 1800, 2800, 3500, 4000],
              },
            ],
          }}
          width={Dimensions.get("window").width - 40} // Graph width
          height={220}
          yAxisSuffix="₹"
          chartConfig={{
            backgroundColor: "#1e1e2e",
            backgroundGradientFrom: "#1e1e2e",
            backgroundGradientTo: "#2a2a3d",
            color: (opacity = 1) => `rgba(173, 92, 232, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "5",
              strokeWidth: "2",
              stroke: "#6a5acd",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>

      {/* Total Spendings and Due Date */}
      <View style={styles.summary}>
        <View>
          <Text style={styles.summaryText}>Total Spendings</Text>
          <Text style={styles.summaryAmount}>₹5,001.86</Text>
        </View>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay Early</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Transactions */}
      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      <FlatList
        data={recentTransactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text style={styles.transactionTitle}>{item.title}</Text>
            <Text style={styles.transactionDate}>{item.date}</Text>
            <Text style={styles.transactionAmount}>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2e",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2a2a3d",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  summaryText: {
    color: "#bbb",
    fontSize: 16,
  },
  summaryAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  payButton: {
    backgroundColor: "#6a5acd",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  payButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2a2a3d",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  transactionTitle: {
    color: "#fff",
    fontSize: 16,
  },
  transactionDate: {
    color: "#bbb",
    fontSize: 14,
  },
  transactionAmount: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Statistics;
