import {View, Text, StyleSheet,TextInput,TouchableOpacity,TouchableHighlight} from 'react-native'
import React from 'react'
import Headers from './Header'
import Slider from './Slider'
import Row from './Row'
import ImagePicker from 'react-native-image-crop-picker'
import SuccessIcon from './Success'

export default function Success({navigation}) {
  return (
    <View style={styles.container}>
        <SuccessIcon />
        <Text style={styles.dscHeaderText}>Thank You</Text>
        <View style={styles.divider} />
        <Text style={styles.Description}>
        Your order is currently pending until your payment {'\n'}is confirmed. You will be notified as soon as we {'\n'}are done reviewing your payment
        </Text>

        <TouchableOpacity style={styles.BtnContainer}>
        <Text style={styles.btnText}>View Order</Text>
        </TouchableOpacity>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffFFF',
    justifyContent:'center',
    alignItems:'center'
  },
   dscHeaderText:{
    fontFamily: 'Nunito-Bold',
    marginTop:15,
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 30,
    /* or 50% */
    
    textAlign: "center",
    
    color: "#343434"
   },
  Description:{
    fontFamily: 'Nunito-Regular',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: -0.24,
    color: "#343434",
    marginTop: 20,
    marginBottom:30,
    marginHorizontal:40,
},
input:{
    marginHorizontal:20,
    marginVertical:10,
    fontSize:15,
    padding:10
    ,borderBottomColor:'#C4C4C4',
    borderBottomWidth:0.5
},
BtnContainer:{
    width:150,
    marginHorizontal:20,
    marginTop:26,
    borderRadius:10,
    backgroundColor:"#ffffff",
    borderWidth:1,
    borderColor:"#F1F1F1",
    borderStyle:'solid',
   height:48,
   alignSelf:'center' ,
   justifyContent:'center',
  //  shadowColor: "#000",
// shadowOffset: {
// 	width: 0,
// 	height: 12,
// },
// shadowOpacity: 0.58,
// shadowRadius: 16.00,

// elevation: 24,
      
},
btnText:{
    fontFamily: 'Nunito-Regular',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 22,
    /* identical to box height, or 129% */
    
    textAlign: "center",
    letterSpacing: -0.408,
    color:"#808080"
},
divider:{height:0,borderWidth:0.3,borderColor:"#F2F2F2",width:"90%",alignSelf:"center",marginTop:30}
})