import factory from './factory'
import { Ref } from 'vue'

let pathLineCB = ( label:string, O: {[Keys:string]: Ref} ) => (
  <path 
    id={label}
    d={`M${O.x1.value * 10} ${O.y1.value * 10} ${O.x2.value * 10} ${O.y2.value * 10}`}
    stroke-width = {O.s.value+'%'}
  />
)

let editorDefaults = {x1: [-50, 50], y1:[-5, 50], x2: [-50, 50], y2:[-5, 50], s:[0, 3]}

export default factory(pathLineCB, editorDefaults)
