import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Picker,
} from "react-native";

const AddExpenses = () => {
  const [category, setCategory] = useState("Electronics");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [paymentMethod, setPaymentMethod] = useState("Physical Cash");
  const [date, setDate] = useState(new Date().toLocaleString());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expenses</Text>

      {/* Transaction Date */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Transaction</Text>
        <TextInput
          style={styles.input}
          value={date}
          editable={false}
        />
      </View>

      {/* Category Picker */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Category</Text>
        <Picker
          selectedValue={category}
          style={styles.picker}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          <Picker.Item label="Electronics" value="Electronics" />
          <Picker.Item label="Groceries" value="Groceries" />
          <Picker.Item label="Transport" value="Transport" />
          {/* Add more categories here */}
        </Picker>
      </View>

      {/* Amount */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter amount"
          value={amount}
          onChangeText={setAmount}
        />
      </View>

      {/* Currency Picker */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Currency</Text>
        <Picker
          selectedValue={currency}
          style={styles.picker}
          onValueChange={(itemValue) => setCurrency(itemValue)}
        >
          <Picker.Item label="INR (₹)" value="INR" />
          <Picker.Item label="USD ($)" value="USD" />
          <Picker.Item label="EUR (€)" value="EUR" />
        </Picker>
      </View>

      {/* Payment Method Picker */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Payment Method</Text>
        <Picker
          selectedValue={paymentMethod}
          style={styles.picker}
          onValueChange={(itemValue) => setPaymentMethod(itemValue)}
        >
          <Picker.Item label="Physical Cash" value="Physical Cash" />
          <Picker.Item label="Credit Card" value="Credit Card" />
          <Picker.Item label="Online Payment" value="Online Payment" />
        </Picker>
      </View>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Expense</Text>
      </TouchableOpacity>
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
    textAlign: "center",
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#bbb",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#2a2a3d",
    color: "#fff",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  picker: {
    backgroundColor: "#2a2a3d",
    color: "#fff",
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: "#6a5acd",
    borderRadius: 50,
    padding: 15,
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AddExpenses;
