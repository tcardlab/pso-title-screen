import factory from './factory'
import { Ref } from 'vue'

let circlePathCB = ( label:string, O: {[Keys:string]: Ref} ) => {
  let [cx, cy] = [O.x.value, O.y.value]
  let r = O.r.value
  let path = `
    M ${cx} ${cy}
    m -${r}, 0
    a ${r},${r} 0 1,1 ${r * 2},0
    a ${r},${r} 0 1,1 -${r * 2},0
  `.replace(/\n/g,' ').replace(/\s+/g, ' ')
  return (
    <path
      id={label+'_path'}
      stroke-width={O.s.value+'%'}
      d={path}
    />
  )
}

let editorDefaults = {x: false, y:false, r:[0, 550], s:[0, 2]}

export default factory(circlePathCB, editorDefaults)