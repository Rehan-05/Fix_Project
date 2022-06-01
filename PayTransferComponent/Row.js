import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Row({title="Title", value="value",mH=20,mt=20,valueBold=false}) {
  return (
    <View style={{marginHorizontal:mH,marginTop:mt}}><View style={{justifyContent:'space-between',flexDirection:'row',alignItems:"baseline",marginHorizontal:mH==0?20:0}}>
      <Text style={styles.text}>{title}</Text>
      <Text style={[styles.valueStyle,{fontWeight:valueBold?"bold":'normal',fontFamily:valueBold?"Nunito-bold":"Nunito-Regular"}]}>{value}</Text>
    </View>
    <View  style={{height:0,borderWidth:0.3,borderColor:"#C4C4C4",width:"100%",marginTop:5}}/></View>
  )
}
const styles = StyleSheet.create({
    text:{
        fontFamily: 'Nunito-Regular',
fontStyle: "normal",
fontWeight: "400",
fontSize: 15,
 
/* or 208% */
textAlign:"left",
letterSpacing: .24,

color: "#33383F",
    },
    valueStyle: {
        fontFamily: 'Nunito-Regular',
        fontStyle: 'normal',
        fontWeight: "600",
        fontSize: 15,
        lineHeight: 31,
        /* or 208% */
    
       
        letterSpacing: 0.24,
    
        color: '#33383F',
      },
      
})