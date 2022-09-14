import { App } from "vue";

function directiveClickOff (app: App) {
  app.directive('click-off', {
    // checks if bound element is in click target path, if so executes given function
    beforeMount (el, binding) {
      // if (el?.eventOnClick) window.removeEventListener('click', el.eventOnClick)
      el.eventOnClick = (event: Event) => {
        if (binding.value instanceof Function && ( !(el == event.target || el.contains(event.target)) ) ) { 
          //binding.value instanceof Function && !document.elementsFromPoint(event.clientX, event.clientY).includes(el)) {
          binding.value(event)
        }
      };
      document.addEventListener('click', el.eventOnClick)
    },
    unmounted (el) {
      document.removeEventListener('click', el.eventOnClick)
    },
  })
}

const useClickOff = (exceptionClass:string, callback:()=>void) => (clickEvent:Event) => {
  let hitException = clickEvent.composedPath().some(target => {
    let el = target as Element
    return el.classList && el.classList.contains(exceptionClass)
  })
  if (!hitException) callback() // clicked off element and was not an exception
}

export default {
  directive: directiveClickOff,
  use: useClickOff
}