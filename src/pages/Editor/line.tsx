import factory from './factory'
import { Ref } from 'vue'
import { scale } from './scale'

let lineCB = ( label:string, O: {[Keys:string]: Ref} ) => (
  <line 
    id={label}
    x1 = {scale(O.x1.value)}  y1 = {scale(O.y1.value)}
    x2 = {scale(O.x2.value)}  y2 = {scale(O.y2.value)}
    stroke-width = {scale(O.s.value)}
  />
)

let editorDefaults = {x1: [-50, 50], y1:[-5, 50], x2: [-50, 50], y2:[-5, 50], s:[0, 3]}

export default factory(lineCB, editorDefaults)
