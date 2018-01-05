import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

class CircleButton extends React.Component {
  render() {

    const { style, color, onPress } = this.props

    let bgColor = '#E31676'
    let textColor = '#fff'

    if (color === 'white') {
        bgColor = '#fff'
        textColor = '#E31676'
    }
    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleButton, { backgroundColor: bgColor}]}>
         <Text style={[styles.memoAddBottonTitle, {color: textColor }]}>
           +
         </Text>
        </View>
       </TouchableHighlight>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  memoAddBottonTitle: {
    lineHeight: 24,
    fontSize: 24,
    color: '#fff'
  }
})

export default CircleButton
