import React from 'react'
import { StyleSheet, View } from 'react-native'
import firebase from 'firebase'
import MemoList from '../components/MemoList'
import CircleButton from '../elements/CircleButton'


class MemoListScreen extends React.Component {
  state = {
    memoList: []
  }

  componentWillMount() {
    const { currentUser } = firebase.auth()
    const db = firebase.firestore()
    db.collection(`users/${currentUser.uid}/memos`)
      .onSnapshot((Snapshot) => {
        const memoList = []
        Snapshot.forEach((doc) => {
          memoList.push({ ...doc.data(), key: doc.id })
        })
        this.setState({ memoList })
      })
      /*
      .get()
      .then((Snapshot) => {
        const memoList = []
        Snapshot.forEach((doc) => {
          memoList.push({ ...doc.data(), key: doc.id })
        })
        this.setState({ memoList })
      })
      .catch((error) => {
        console.log(error)
      })
      */
  }

  handlePress() {
    const { params } = this.props.navigation.state
    this.props.navigation.navigate('MemoCreate')
  }

  render() {
    return (
      <View style={styles.container}>

        <MemoList memoList={this.state.memoList} navigation={this.props.navigation}/>

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
    width: '100%',
    backgroundColor: '#FFFDF6'
  }
})

export default MemoListScreen
