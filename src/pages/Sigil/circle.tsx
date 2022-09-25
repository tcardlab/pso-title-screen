import { reactive, defineComponent, useSlots } from "vue"
let $s = ()=> useSlots()?.default?.call(this)

interface Editor {
  [Keys:string]: false | [number, number]
}

interface Defaults {
  [Keys:string]: number
}

export default function (label:string, elOverrides={} , editorOverrides={}) {

  let defaults: Defaults = {x:0, y:0, r:10, s:2, ...elOverrides }
  let O = reactive<Defaults>({...defaults})

  let svgEl = () => <circle cx={O.x+'%'} cy={O.y+'%'} r={O.r+'%'} stroke-width={O.s+'%'}/>

  let editor: Editor = {x: false, y:false, r:[0, 60], s:[0, 2], ...editorOverrides}
  
  let inputEl = (key:string) => {
    if (editor[key]=== false ) return

    let [min, max] = editor[key] as Array<number>
    return <>
      <label>{key}: {O[key]}</label> <button onClick={()=>O[key]=defaults[key]}>reset</button> <br/>
      <input type="range"  min={min} max={max} step="0.005" v-model={O[key]}/>
      <br/>
    </>
  }
  
  let editorEl = ()=>(<>
    <details>
      <summary> {label} </summary>

      {inputEl('x')}
      {inputEl('y')}
      {inputEl('r')}
      {inputEl('s')}
      
      <div style="margin-left: 5px; opacity: 0.6">{$s()}</div>
    </details>
  </>)

  return [ svgEl, editorEl, O ] //as [()=>JSX.Element, {setup():()=>JSX.Element}, typeof O ]
}