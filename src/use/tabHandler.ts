/*
  Tracks whether a user is using tab-key-navigation
*/
export let isTabbed = $ref(false)

function catchClick() {
  isTabbed = false
}

function catchTab() {
  isTabbed = true
}

export function handleTab() {
  // event listeners (put on #app, no need to remove as long as you mount ur app multiple times)
  addEventListener('click', catchClick)
  addEventListener('keydown', (e)=>{e.key === 'Tab' && catchTab()})
}
