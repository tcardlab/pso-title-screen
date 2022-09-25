import {Ref, ref, reactive} from 'vue'

interface MemRef extends Ref {
  reset: ()=>any
}

const memRef = (value:any)=>{
  let rf = reactive({value, reset: ()=>{}})
  rf.reset = () => rf.value = value
  return rf //as MemRef
} 

export default memRef