import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcard() {
  return (
    <View style={styles.Background}>
      <Text style={styles.headingText}>Flatcard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        color: 'red',
        fontSize: 30,
    },
    Background:{
        backgroundColor: 'white',
    }

})