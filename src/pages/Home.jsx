import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";

const order = {
  title: "Food Delivery 1.0!",
  food: "1 - Pizza : R$ 35.00",
  drink: "2 - Refri : R$ 3.00",
};

export default function Home({ navigation }) {
  const handleAbout = () => {
    navigation.navigate("About");
  };

  const handleCheckout = () => {
    const params = {
      order,
    };

    navigation.navigate("DeliveryDetails", params);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> {order.title} </Text>
      <Text style={styles.text}> {order.food} </Text>
      <Text style={styles.text}> {order.drink} </Text>

      <Button title="Checkout Now!" onPress={handleCheckout} />
      <Button title="About" onPress={handleAbout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 18,
  },
});
