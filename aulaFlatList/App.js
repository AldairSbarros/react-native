import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Pessoa from './src/Pessoas';


export default class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        feed: [
          {
            id: '1',
            nome: 'Matheus',
            idade: 50,
            email: 'matheus@email.com'
          },
          {
            id: '2',
            nome: 'Maria',
            idade: 50,
            email: 'maira@email.com'
          },
          {
            id: '3',
            nome: 'Paulo',
            idade: 50,
            email: 'paulo@email.com'
          },
          {
            id: '4',
            nome: 'Zeca',
            idade: 50,
            email: 'zeca@email.com'
          },
          {
            id: '5',
            nome: 'Philomeno',
            idade: 50,
            email: 'zeca@email.com'
          },
          {
            id: '6',
            nome: 'Juca',
            idade: 50,
            email: 'zeca@email.com'
          },
          {
            id: '7',
            nome: 'Antonio',
            idade: 50,
            email: 'zeca@email.com'
          },
          {
            id: '8',
            nome: 'Pedro',
            idade: 50,
            email: 'zeca@email.com'
          },
        
        ]
      }
    
  }
  render(){

    return (
      <View style={styles.container}>
      
      <FlatList
      data={this.state.feed}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Pessoa data={item}/>}
      />
      
      </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10
    
    
  },
    
});
