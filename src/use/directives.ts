import { App, DirectiveBinding } from 'vue'

export function vCall(app: App) {
   // Adds both 'click' and 'enter' event listeners to given el
   // <button v-call="()=>function()"> or <button v-call="function">, does not eval expressions like @event="variable++"

  interface vCallEl extends HTMLElement {
    eventOnClick?: ()=>void,
    eventOnEnter?: (e:KeyboardEvent)=>void
  }

  function updateListeners(el:vCallEl, binding:DirectiveBinding) {
    if(typeof binding.value !== 'function') return console.log('v-call received non-function –', binding.value)
    el.eventOnClick = binding.value
    el.eventOnEnter = (event:KeyboardEvent) => { if (event.key === 'Enter') binding.value(event) }
  }

  app.directive('call', {
    // Adds both 'click' and 'enter' event listeners to given el
    beforeMount (el, binding) {
      updateListeners(el, binding)
  
      // Grab current event and call 
      // (just passing func makes them static i think)
      el.addEventListener('click', (e:Event)=>el.eventOnClick(e))
      el.addEventListener("keydown",(e:KeyboardEvent)=>el.eventOnEnter(e))
      el.tabIndex = 0
    },
    beforeUpdate (el, binding) {
      // Never add listeners on update (unless also removing),
      // as it generates a memory leak
      updateListeners(el, binding)
    },
    beforeUnmount (el) {
      el.removeEventListener('click', el.eventOnClick)
      el.removeEventListener("keydown", el.eventOnEnter);
    }
  })
}




