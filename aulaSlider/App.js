import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      valor: 0
    }
  }
  render(){
    return (
    <View style={styles.container}>
    
      <Slider
        minimumValue={0}
        maximumValue={100}
        onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado}) }
        value={this.state.valor}
        minimumTrackTintColor='blue'
        maximumTrackTintColor='red'
      />
      <Text style={{textAlign: 'center'}}>
        {this.state.valor.toFixed(0)}

      </Text>
      
    </View>
);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
});
