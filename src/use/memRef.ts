import {Ref, ref, reactive} from 'vue'

/* interface MemRef extends Ref {
  reset: ()=>any
} */

/* const memRef = (value:any)=>{
  let rf = reactive({value, reset: ()=>{}})
  rf.reset = () => rf.value = value
  return rf //as MemRef
}  */
/* 
const memRef = (value:any)=>{
  let rf = ref(value) as MemRef
  rf.reset = () => rf.value = value
  return rf
}  */

const memRef = (value:any)=>{
  let rf = ref(value)
  return [rf, () => rf.value = value]
} 

export default memRef