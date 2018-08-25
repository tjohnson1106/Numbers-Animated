import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const numberRange = Array(10)
  .fill()
  .map((x, i) => i);

class HiddenStart extends Component {
  state = {
    measured: false,
    height: 0
  };
  handleLayout = e => {
    this.setState({
      measured: true,
      height: e.nativeEvent.layout.height
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.hidden,
            {
              height: this.state.height
            }
          ]}
        >
          {numberRange.map(v => {
            return (
              <Text key={v} style={styles.text}>
                {v}
              </Text>
            );
          })}
        </View>
        <Text
          style={[styles.text, styles.measure]}
          onLayout={this.handleLayout}
        >
          0
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 80,
    color: "#333"
  },
  hidden: {
    overflow: "hidden"
  },
  measure: {
    opacity: 0
  }
});

export default HiddenStart;
