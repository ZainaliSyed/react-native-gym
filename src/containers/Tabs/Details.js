import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Details extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const {} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.txtStyle}>Welcome To Clients</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202332',
  },
  txtStyle: {
    color: 'white',
  },
});
