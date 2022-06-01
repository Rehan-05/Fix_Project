import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import BackIcon from './backIcon'

export default function Headers({onPress,title="Pay Bank Transfer"}) {
  return (
    <View style={styles.header}>
        <BackIcon onPress={onPress} style={{position:"absolute",left:10,top:10}}  />
        <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:'#fff',
        paddingTop:20,
        marginTop:15,
        hight:80,
        justifyContent:"center",
      
    },
    headerText:{
        fontSize:16,
        fontWeight:'500',
        color:"#000000",
        alignSelf:'center',
        fontFamily:'Nunito-Regular',
        
        

    }
    
})