import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={15}
      height={15}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G
        clipPath="url(#clip0_4037_5789)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#1CC88A"
      >
        <Path d="M6.545 3.872a.417.417 0 010 .59L4.88 6.127a.417.417 0 01-.59 0l-.833-.833a.417.417 0 11.59-.59l.538.54 1.372-1.373a.417.417 0 01.59 0z" />
        <Path d="M5 1.667a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zM.835 5a4.167 4.167 0 118.333 0A4.167 4.167 0 01.834 5z" />
      </G>
      <Defs>
        <ClipPath id="clip0_4037_5789">
          <Path fill="#fff" d="M0 0H10V10H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent

