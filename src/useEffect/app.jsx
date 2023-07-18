import { useEffect, useState } from "react"
import DemoUseEffect from "./demoUseEffect";

const App = ()=>{
    const [isplaying,setisplaying] = useState(false);
    const [text,setText] = useState('');
    return <>
    <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
    <button onClick={()=>{
        setisplaying(!isplaying);
    }}>{isplaying?'pause':'play'}</button>
    <DemoUseEffect src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" isplaying={isplaying}/>
    </>

}

export default App;