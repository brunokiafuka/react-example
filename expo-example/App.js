import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       nome: ''
    }
  }
  displayName = () =>{
    alert(`working 🚀 ${this.state.nome}`)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'blue', fontSize: 30, marginBottom: 10 }}>Olá mundo 🙉</Text>
        <TouchableOpacity
          style={{ backgroundColor: '#000', padding: 5, width: 300, }}
          onPress={this.displayName()}
        >
          <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>Clicar</Text>
        </TouchableOpacity>

        <TextInput 
            style={{borderBottomWidth: 1, width: 300, marginTop: 10}}
            onChngeText = {(nome) => this.setState({nome: nome})}
        />
       <Text>  {this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
