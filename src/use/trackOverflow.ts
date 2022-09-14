import {onBeforeMount, onMounted, onUpdated, onBeforeUnmount, Ref} from 'vue'
import {debounce} from '@/use/helpers'

let checkOverflow = (el:HTMLElement) => el && ( el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth )

export default (trackedEL:HTMLElement|null, isOverflow:boolean) => {
  if (trackedEL) {
    const assign = () => isOverflow = checkOverflow(trackedEL)
    const resizeUpdate = debounce(assign, 500)
    onMounted(assign)  // check content size on init
    onUpdated(assign)  // in update shrinks inner content size
    onBeforeMount(()=> window.addEventListener("resize", resizeUpdate) )  // catch container size changes
    onBeforeUnmount(()=> window.removeEventListener("resize", resizeUpdate) )
  }
}