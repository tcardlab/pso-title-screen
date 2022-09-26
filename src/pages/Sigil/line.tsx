import factory from './factory'
import { Ref } from 'vue'

let lineCB = ( label:string, O: {[Keys:string]: Ref} ) => (
  <line 
    id={label}
    x1 = {O.x1.value+'%'}  y1 = {O.y1.value+'%'}
    x2 = {O.x2.value+'%'}  y2 = {O.y2.value+'%'}
    stroke-width = {O.s.value+'%'}
  />
)

let editorDefaults = {x1: [-50, 50], y1:[-5, 50], x2: [-50, 50], y2:[-5, 50], s:[0, 3]}

export default factory(lineCB, editorDefaults)
