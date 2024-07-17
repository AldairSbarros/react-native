import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: ''
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto){
    if(texto.length > 0){
      this.setState({name: 'Bem Vindo ' + texto});

    }else {
      this.setState({name: ''})
    }
  }
  render(){
    return(
      <View style={styles.container}>

        <TextInput
        style={styles.input}
        placeholder="Digite seu nome aqui !"
        underlineColorAndroid="transparent"
        onChangeText={this.pegaNome}

        />
        <Text style={styles.texto}> {this.state.name}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 15,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25
  }

});