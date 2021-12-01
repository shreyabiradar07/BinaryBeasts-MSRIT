
```jsx
import { useState } from "react"
import PoseNet from "react-posenet"

const [posesString, setPosesString] = useState([])

;<>
  <PoseNet
    
    onEstimate={poses => {
      setPosesString(JSON.stringify(poses))
    }}
  />
  <p>{posesString}</p>
</>
```
