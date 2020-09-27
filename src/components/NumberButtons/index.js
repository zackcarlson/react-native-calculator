import React, { Component } from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";
import { styles } from "./styles";

class NumberButtons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  _handleOnPress = value => {
    requestAnimationFrame(() => {
      this.props.onBtnPress(value);
    });
  };

  render() {
    //TODO: refactor to replace .map with FlatList
    return (
      <View style={styles.container}>
        {this.props.buttons.map((row, index) => (
          <View key={index} style={styles.contRow}>
            {row.map((col, index) => (
              <TouchableNativeFeedback
                key={index}
                onPress={() => this._handleOnPress(col)}
                background={TouchableNativeFeedback.SelectableBackground()}
              >
                <View style={styles.contButton}>
                  <Text style={styles.txtDefault}>{col}</Text>
                </View>
              </TouchableNativeFeedback>
            ))}
          </View>
        ))}
      </View>
    );
  }
}

export default NumberButtons;
