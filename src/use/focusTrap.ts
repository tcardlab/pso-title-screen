/***   FocusTrap   ***/
import { reactive, onMounted, onBeforeMount, onBeforeUnmount, onUpdated } from 'vue';
// might be easier to just watch document.activeElement on tab events and if it leaves modal, 
// set to first or last depending if shift is pressed

export function useFocusTrap(refEl:Element) {
  let focusable = reactive<HTMLElement[]>([])  // Arr of focusable elements in trap
  let firstFocusable:HTMLElement = $computed(() => focusable[0])
  let lastFocusable:HTMLElement = $computed(() => focusable[focusable.length - 1])

  // Trap
  let cycleTabPress = (e:KeyboardEvent) => {
    /* If (shift+)tabbed while focusTrapped on first or last element, cycle to top or bottom */
    if (e.key === 'Tab') {
      var active = document.activeElement;
      
      if (firstFocusable == active && e.shiftKey) {
        e.preventDefault()
        lastFocusable?.focus()
      } else
      if (lastFocusable == active && !e.shiftKey){
        e.preventDefault()
        firstFocusable?.focus()
      }
    }
  }

  // Update focus trap arr if on mounting and content change
  onMounted(() => {
    Object.assign(
      focusable, refEl.querySelectorAll( 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])' )
    )
    firstFocusable?.focus()
  })
  onUpdated(() => {  // this might be aggressive
    Object.assign(  
      focusable, refEl.querySelectorAll( 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])' )
    )
  })

  // Handle Key events
  let handelPress = (e:KeyboardEvent) => cycleTabPress(e)

  onBeforeMount(()=>{
    window.addEventListener('keydown', handelPress, false)
  })

  onBeforeUnmount(()=>{
    window.removeEventListener('keydown', handelPress, false)
  })
}