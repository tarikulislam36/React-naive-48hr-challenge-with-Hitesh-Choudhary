import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcard from './Component/Flatcard'
import ScrollCard from './Component/ScrollCard'

const App = () => {
  return (
    
    <SafeAreaView> 
      <ScrollView >

   <Flatcard />
   
   <ScrollCard />
    </ScrollView>
    </SafeAreaView>
  )
}


export default App