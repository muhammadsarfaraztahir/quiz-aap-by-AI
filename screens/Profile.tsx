// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";

// const Profile = () => {
//   const [cardNumber, setCardNumber] = useState("");
//   const [cardholderName, setCardholderName] = useState("");

//   return (
//     <View style={styles.container}>
//       {/* Title */}
//       <Text style={styles.title}>Profile</Text>

//       {/* Card Display */}
//       <View style={styles.card}>
//         <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>
//         <Text style={styles.cardDate}>09/24</Text>
//         <Text style={styles.cardName}>PRABHJOT JASWAL</Text>
//       </View>

//       {/* Available Balance */}
//       <Text style={styles.balance}>₹112,908</Text>
//       <Text style={styles.balanceLabel}>Available Balance</Text>

//       {/* Add Card Section */}
//       <View style={styles.addCardSection}>
//         <Text style={styles.addCardTitle}>+ Add card</Text>
//         <Text style={styles.addCardLabel}>Add your credit / debit card</Text>

//         {/* Card Number Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Card Number"
//           placeholderTextColor="#bbb"
//           keyboardType="numeric"
//           value={cardNumber}
//           onChangeText={setCardNumber}
//         />

//         {/* Cardholder Name Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Cardholder name"
//           placeholderTextColor="#bbb"
//           value={cardholderName}
//           onChangeText={setCardholderName}
//         />

//         {/* Submit Button */}
//         <TouchableOpacity style={styles.addButton}>
//           <Text style={styles.addButtonText}>Add Card</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#1e1e2e",
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: "#6a5acd",
//     padding: 20,
//     borderRadius: 16,
//     marginBottom: 20,
//   },
//   cardNumber: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 10,
//   },
//   cardDate: {
//     fontSize: 14,
//     color: "#fff",
//     marginBottom: 10,
//   },
//   cardName: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   balance: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#fff",
//     textAlign: "center",
//   },
//   balanceLabel: {
//     fontSize: 16,
//     color: "#bbb",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   addCardSection: {
//     backgroundColor: "#2a2a3d",
//     padding: 20,
//     borderRadius: 16,
//   },
//   addCardTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 10,
//   },
//   addCardLabel: {
//     fontSize: 14,
//     color: "#bbb",
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: "#1e1e2e",
//     color: "#fff",
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 15,
//   },
//   addButton: {
//     backgroundColor: "#6a5acd",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   addButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default Profile;
