import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import firebase from 'firebase'

import CircleButton from '../elements/CircleButton'

class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }

  handlePress() {
    const { params } = this.props.navigation.state
    console.log(params)
    const db = firebase.firestore()
    db.collection(`usrs/${params.currentUser.uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),
    })
    .then((docRef) => {
      console.log(docRef.id)
    })
    .catch((error) => {
      cosole.log(error)
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => {this.setState({ body: text})}}
          />

        <CircleButton onPress={this.handlePress.bind(this)}>
        +
        </CircleButton>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  memoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
})

export default MemoCreateScreen
