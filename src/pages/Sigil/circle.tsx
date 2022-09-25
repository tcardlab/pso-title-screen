import { reactive, defineComponent, useSlots, computed } from "vue"
let $s = ()=> useSlots()?.default?.call(this)

interface Editor {
  [Keys:string]: false | [number, number]
}

interface Defaults {
  [Keys:string]: number
}

export default function (label:string, elOverrides={} , editorOverrides={}) {
  // Shared inits
  let keyArr = ['x', 'y', 'r', 's']

  let parseArg = (key:string) => {
    let v = elOverrides?.[key]
    if (!v) return 0
    if (typeof v === 'string') return +v || 0
    if (typeof v === 'number') return v
    return +(v?.value || 0)
  }

  let delta: Defaults = reactive(
    keyArr.reduce((a,c)=>({...a, [c]:0}),{})
  )


  let O:Defaults = keyArr.reduce(
      (a,c)=>({
        ...a, // @ts-ignore
        [c]: computed( ()=>+delta[c] + parseArg(c) )
      }), 
    {})

  // SVG code
  let svgEl = () => <circle id={label} cx={O.x.value+'%'} cy={O.y.value+'%'} r={O.r.value+'%'} stroke-width={O.s.value+'%'}/>


  // Editor code
  let editor: Editor = {x: false, y:false, r:[0, 60], s:[0, 2], ...editorOverrides}
  
  let inputEl = (key:string) => {
    if (editor[key] === false ) return
    let [min, max] = editor[key] as Array<number>
    let v = parseArg(key)
    return <>
      <label>{key}: {Math.round(100*O[key].value)/100}</label> <button onClick={()=>delta[key]=0}>reset</button> <br/>
      <input type="range" min={min - v} max={max - v} step="0.005" v-model={delta[key]}/>
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

  return $$([ svgEl, editorEl, O ]) // as [()=>JSX.Element, ()=>JSX.Element, typeof O ]
}