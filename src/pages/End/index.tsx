import { defineComponent } from 'vue'
import GoodbyeWorld from '@/components/GoodbyeWorld.vue'

const Bar = defineComponent({ render() { 
  return (
    <>
      <div>Test</div> 
      <GoodbyeWorld/>
    </>
  )
}})

export default Bar
