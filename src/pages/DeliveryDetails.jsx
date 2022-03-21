import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function DeliveryDetails({ route }) {
  //const order = route.params.order; (é a mesma coisa que a linha de baixo)
  const { order } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details - Process Data:</Text>
      <Text> {JSON.stringify(order)} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
  },
});
