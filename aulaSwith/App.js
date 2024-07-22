import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: false
    };
  }
  render(){
  return (
    <View style={styles.container}>
      <Switch
        value={this.state.status}
        onValueChange={(valorSwitch)=> this.setState({status: valorSwitch})}
        thumbColor='blue'
      />

      <Text style={{textAlign: 'center', fontSize: 30}}>
        {(this.state.status) ? "Ativo" : "Inativo"}
      </Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    
  },
});
