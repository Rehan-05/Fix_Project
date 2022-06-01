import { View, Text } from 'react-native'
import React from 'react'
import CheckedIcon from "./checkedTab"
import CurrentTabIcon from "./CurrentTabIcon"

export default function Slider({currentTab=0,done=false}) {
  return (
    <View style={{paddingHorizontal:20,marginVertical:30,flexDirection:"row",justifyContent:'space-between',}}>
      <View 
      style={{width:"78%",alignSelf:'center',left:50,height:0.5,backgroundColor:"#D3D3D3",position:"absolute",top:8,}}
      />
      <View style={{justifyContent:'center',alignItems:'center',width:70}}>
      {currentTab==0?<CurrentTabIcon />:currentTab>0&&<CheckedIcon />}
      <Text style={{
      fontFamily: 'Nunito-Regular',
      fontStyle: "normal",
      fontWeight: '600',
      fontSize: 10,
      lineHeight: 14,
      marginTop:3,
      textAlign: 'center',
      letterSpacing: -0.24,
      color: currentTab==0?'#F27415':"#1CC88A",
      }}>{currentTab==0?'Make Payment':'Place Order'}</Text>
      </View>
      <View style={{justifyContent:'center',alignItems:'center',width:70}}>
      {currentTab==1||currentTab==0?<CurrentTabIcon color={currentTab==1?"#F27415":"#D3D3D3"} />:currentTab>1&&<CheckedIcon />}
      <Text style={{
      fontFamily: 'Nunito-Regular',
      fontStyle: "normal",
      fontWeight: '600',
      fontSize: 10,
      lineHeight: 14,
      textAlign: 'center',
      marginTop:3,
      letterSpacing: -0.24,
      color: currentTab==1?"#F27415":"#CCCCCC",
      }}>{currentTab==1?'Place Order':'Place Order'}</Text>
      </View>
      <View style={{justifyContent:'center',alignItems:'center',width:70}}>
      {currentTab==2?<CurrentTabIcon color={currentTab==1?"#F27415":"#D3D3D3"} />:<CurrentTabIcon color="#D3D3D3" />}
      <Text style={{
      fontFamily: 'Nunito-Regular',
      fontStyle: "normal",
      fontWeight: '600',
      fontSize: 10,
      lineHeight: 14,
      marginTop:3,
      textAlign: 'center',
      letterSpacing: -0.24,
      color: currentTab==2?"#F27415":"#CCCCCC",
      }}>Success</Text>
      </View>
    </View>
  )
}