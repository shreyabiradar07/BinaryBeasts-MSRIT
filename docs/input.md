```jsx
import { useMemo } from "react"
import PoseNet from "react-posenet"

const input = useMemo(() => {
  const image = new Image()
  image.crossOrigin = ""
 
  return image
}, [])

;<PoseNet input={input} />
```
