import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class CircleButton extends React.Component {
  render() {
    return (
      <View style={styles.memoAddBotton}>
       <Text style={styles.memoAddBottonTitle}> {this.props.children}</Text>
     </View>
    )
  }
}


const styles = StyleSheet.create({
  memoAddBotton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 10
  },
  memoAddBottonTitle: {
    lineHeight: 24,
    fontSize: 24,
    color: '#fff'
  }
})

export default CircleButton
