import { reactive, Ref, useSlots, computed } from "vue"
let $s = ()=> useSlots()?.default?.call(this)

interface Editor {
  [Keys:string]: false | [number, number]
}

interface Defaults {
  [Key:string]: Ref
}

interface Delta {
  [Keys:string]: number
}

const factory = (cb:(label:string, O:Defaults)=>{}, editorDefaults={}) => (label:string, elOverrides={} , editorOverrides={}) => {
  // Shared inits
  let editor: Editor = {...editorDefaults, ...editorOverrides}
  let keyArr = Object.keys(editorDefaults)

  let parseArg = (key:string) => {
    // @ts-ignore
    let v = elOverrides?.[key] 
    if (!v) return 0
    if (typeof v === 'string') return +v || 0
    if (typeof v === 'number') return v
    return +(v?.value || 0)
  }

  let delta: Delta = reactive(
    keyArr.reduce((a,c)=>({...a, [c]:0}),{})
  )

  let O:Defaults = keyArr.reduce(
      (a,c)=>({
        ...a, // @ts-ignore
        [c]: computed( ()=>+delta[c] + parseArg(c) )
      }), 
    {})

  // SVG code
  let svgEl = cb.bind(this, label, O)

  // Editor code
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

      {keyArr.map(k=>inputEl(k))}
      
      <div>{$s()}</div>{/* style="margin-left: 5px; opacity: 0.6" */}
    </details>
  </>)

  return $$([ svgEl, editorEl, O ]) as [Ref<()=>JSX.Element>, Ref<()=>JSX.Element>, any ] // Ref<typeof O>
}

export default factory