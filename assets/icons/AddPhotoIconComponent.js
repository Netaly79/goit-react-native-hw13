import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const AddPhotoComponent = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none">
    <Circle cx={119.5} cy={93.5} r={12} fill="#fff" stroke="#FF6C00" />
    <Path
      fill="#FF6C00"
      fillRule="evenodd"
      d="M20.5 13.5H19.5V19.5H13.5V20.5H19.5V26.5H20.5V20.5H26.5V19.5H20.5V13.5Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default AddPhotoComponent
