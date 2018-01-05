import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native'



class SignupScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          登録する
        </Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="password" />
        <TouchableHighlight style={styles.button} title="送信" onPress={() => {}} underlayColor="#C70F66">
          <Text style={styles.buttonItem}>
            送信する
          </Text>
        </TouchableHighlight>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff'
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 8
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#E31676',
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center'
  },
  buttonItem: {
    color: '#fff',
    fontSize:18
  }
})

export default SignupScreen
