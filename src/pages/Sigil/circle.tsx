import { reactive } from "vue"

export default function (label:string, defaults={x:0, y:0, r:10, s:2}) {

  let {x, y, r, s} = $( $$( reactive(defaults) ) )

  let svgEl = () => <circle x={x} y={y} r={r} stroke-width={s}/>

  let editorEl = () => (<>
    <details>
      <summary> {label} </summary>

      <label>s:  {x}</label> <button onClick={()=>x=defaults.x}>reset</button> <br/>
      <input type="range"  min="0" max="2" step="0.005" v-model={x}/>
      <br/>

      <label>s:  {y}</label> <button onClick={()=>y=defaults.y}>reset</button> <br/>
      <input type="range"  min="0" max="2" step="0.005" v-model={y}/>
      <br/>
  
      <label>r:  {r}</label> <button onClick={()=>r=defaults.r}>reset</button> <br/>
      <input type="range"  min="0" max="15" step="0.005" v-model={r} />
      <br/>
  
      <label>s:  {s}</label> <button onClick={()=>s=defaults.s}>reset</button> <br/>
      <input type="range"  min="0" max="2" step="0.005" v-model={s}/>
      <br/>
    </details>
  </>)

  return [ svgEl, editorEl ]
}