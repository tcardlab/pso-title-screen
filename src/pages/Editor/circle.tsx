import factory from './factory'
import { Ref } from 'vue'
import { scale } from './scale'

let circleCB = ( label:string, O: {[Keys:string]: Ref} ) => (
  <circle 
    id={label}
    cx={scale(O.x.value)} cy={scale(O.y.value)} 
    r={scale(O.r.value)} stroke-width={scale(O.s.value)}
  />
)

let editorDefaults = {x: false, y:false, r:[0, 60], s:[0, 2]}

export default factory(circleCB, editorDefaults)
