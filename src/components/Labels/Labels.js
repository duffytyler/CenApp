import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Labels = ({text}) => {
  return (
      <Text style={styles.text}>{text}</Text>
  )
}
const styles = StyleSheet.create({
    text:{
        alignSelf:'flex-start',
        marginLeft:45,
        paddingBottom:10,
        fontFamily:'MontserratM',
        fontSize:14,
        color:'white',
      }
})
export default Labels