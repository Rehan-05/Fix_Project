import * as React from "react"
import { TouchableOpacity, Text, StyleSheet,Image } from "react-native"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
      <TouchableOpacity onPress={props.onPress} style={[styles.wrapper,{borderRadius:50,height:40,width:40,},props.style]}>
         <Image source={require('./Back.png')} style={{height:40,width:40,borderRadius:50}} />
      </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    wrapper:{ 
      justifyContent:'center',
      alignItems:'center',
      // shadowColor: '#000',
      backgroundColor: '#fff',
      // shadowOffset: { width: 0, height: 4 },
      // elevation: 5,
      // shadowOpacity:'0.3',
      // transformY:[{translateX:"180deg"}],
      boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.25)"
}
})

export default SvgComponent;
