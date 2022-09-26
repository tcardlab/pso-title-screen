import factory from './factory'
import { Ref } from 'vue'

let circleCB = ( label:string, O: {[Keys:string]: Ref} ) => (
  <circle 
    id={label} 
    cx={O.x.value+'%'} cy={O.y.value+'%'} 
    r={O.r.value+'%'} stroke-width={O.s.value+'%'}
  />
)

let editorDefaults = {x: false, y:false, r:[0, 60], s:[0, 2]}

export default factory(circleCB, editorDefaults)
