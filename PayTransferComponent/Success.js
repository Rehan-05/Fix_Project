import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SuccessIcon(props) {
  return (
    <Svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={40} cy={40} r={39.5} fill="#fff" stroke="#1CC88A" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62.002 30.552L36.066 55.54a3.435 3.435 0 01-4.766 0L18.997 43.686c-1.33-1.28-1.33-3.31 0-4.591a3.435 3.435 0 014.767 0l9.92 9.557L57.237 25.96a3.435 3.435 0 014.765 0c1.33 1.281 1.33 3.31 0 4.591z"
        fill="#1CC88A"
      />
    </Svg>
  )
}

export default SuccessIcon