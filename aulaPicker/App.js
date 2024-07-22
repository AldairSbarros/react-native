import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Picker } from '@react-native-picker/picker';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      pizza: 0,
      sabores: [
        {key: 1, nome: "Calabresa", valor: 55.90},
        {key: 2, nome: "Atum", valor: 63.90},
        {key: 3, nome: "4 Queijos", valor: 50.90},
        {key: 4, nome: "Filé", valor: 85.90},
        {key: 5, nome: "Tropical", valor: 60.90},
        {key: 6, nome: "Carne de Sol", valor: 67.90},
      ]

    }
  }
  render() {

    let saboresItem = this.state.sabores.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    })

    return (
      <View style={styles.container}>
      <Text style={styles.logo}>Menu Pizza</Text>

      <Picker
      selectedValue={this.state.pizza}
      onValueChange={(itemValue, itemIndex)=> this.setState({pizza: itemValue})}
      >
        {saboresItem}

      </Picker>



      <Text style={styles.pizzas}>Você escolheu: {this.state.sabores[this.state.pizza].nome}</Text>
      <Text style={styles.pizzas}>R$ {this.state.sabores[this.state.pizza].valor.toFixed(2)}</Text>
      
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  logo:{
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 30

  },
  pizzas:{
    marginTop: 15,
    fontSize: 28,
    textAlign: 'center'
  }
});
