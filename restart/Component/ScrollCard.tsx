import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScrollCard = () => {
  return (
    <View>
      <Text>ScrollCard</Text>

      <ScrollView horizontal={true}> 
     <View style={styles.card}>
         <Text>Card 1</Text>
     </View>
     <View style={styles.card}>
         <Text>Card 1</Text>
     </View>
     <View style={styles.card}>
         <Text>Card 1</Text>
     </View>
     <View style={styles.card}>
         <Text>Card 1</Text>
     </View>


      </ScrollView>
    </View>
  )
}

export default ScrollCard

const styles = StyleSheet.create({
card:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,

    backgroundColor: 'red',



    margin: 10,
   
}

})