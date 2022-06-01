import * as React from "react";
import {View} from 'react-native';
import Svg, { Circle } from "react-native-svg"

function SvgComponent({color="#F27415"}) {
  return (
    <View
      style={{height: 15, width: 15, borderRadius: 15,borderWidth:5,borderColor:color, backgroundColor: "#fff"}}
      />
  )
}

export default SvgComponent


// net #F2F2F2
