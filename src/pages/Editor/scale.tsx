import {Ref, ref} from 'vue'
import memRef from '@/use/memRef'
 
let canvasSize = ref(1000) 
let _canvasSize;

let useCanvasSize = (n:number) => {
  [canvasSize, _canvasSize] = memRef(n) 
  return [canvasSize, _canvasSize]
}

let scaleV = (n:number) => 1000*n/canvasSize.value
let scale = (n:number) => 1000*n/canvasSize.value + '%'

export {
  useCanvasSize,
  scaleV,
  scale
}