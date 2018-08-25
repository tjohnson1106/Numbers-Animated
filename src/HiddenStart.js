import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const numberRange = Array(10)
  .fill()
  .map((x, i) => i);

class HiddenStart extends Component {
  render() {
    return (
      <View>
        {numberRange.map(v => {
          return <Text>{v}</Text>;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 80,
    color: "#333"
  }
});

export default HiddenStart;
