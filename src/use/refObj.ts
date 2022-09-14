/*  
Curry Template Ref Assignment 

USE:
  assignRef = refObjAssignment(someObj/Arr to store refs)  –> assignRef(i)(el)  // obj is assigned
  <elTag  ref="assignRef(indexOrKey)"  />  –>  ref="(el) => assignRef(i)(el)"  // obj, i, and el are assigned
  // ^ the element is passed by default to ref's execution. 
*/

let refObjAssignment = (obj:HTMLElement[] | {[key:string|number]: HTMLElement}) => (i:string|number) => (el:HTMLElement) => {
  if( Array.isArray(obj) && typeof i === 'string') {
    console.warn("Array index must be int")
    i = obj.length + 1
  }
  // @ts-ignore
  if (el) obj[i] = el
}

export default refObjAssignment
