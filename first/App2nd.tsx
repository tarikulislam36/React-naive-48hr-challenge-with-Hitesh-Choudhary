import React from 'react'
import {
  View, 
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme
} from 'react-native'
// i have used jsx

function App2nd(): JSX.Element{
    const isDarkMode = useColorScheme() 
    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                Hello Tarikul
            </Text>

        </View>


    )
    

}
const styles =StyleSheet.create({
container:{
    flex:1,
    //alignItems:'flex-end',
    //alignItems:'flex-start',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#39db7f', 

},
whiteText:{
    color:'#FFFFFF',
    fontSize:30
},
darkText:{
    color:'#000000'
}
})

export default App2nd;

