import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcard() {
  return (
    <View style={styles.Background}>
      <Text style={styles.headingText}>Flatcard</Text>

<View style={styles.contaner}> 
      <View style={[styles.Card, styles.cardOne]}>
        <Text style={styles.TestColor}>red</Text>
        </View>
        <View style={[styles.Card, styles.cardTwo]}>
        <Text style={styles.TestColor}>blue</Text>
        </View>
        <View style={[styles.Card]}>
        <Text>blue</Text>
        </View>
  </View>
    </View>
  )
}






const styles = StyleSheet.create({
    headingText: {
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
    Background:{
        backgroundColor: 'transparent',
    },
    contaner:{
      flex: 1,
      flexDirection: 'row',
    },
    Card:{
      flex: 1,
      
      justifyContent: 'center',
      alignItems: 'center',

      margin: 10,
      height: 100,
      width: 100,
      backgroundColor: 'green',
      borderRadius: 30,
      
    },
    cardOne:{
backgroundColor: 'red',
    },
    cardTwo:{
      backgroundColor: 'blue',
    },

TestColor:{
  color: 'white',
}

    

})