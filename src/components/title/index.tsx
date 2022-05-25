import {appWindow, LogicalPosition} from '@tauri-apps/api/window'
import './index.css'
import {useState} from "react";

const Title = () => {
  const [status,setStatus] = useState(false)
  const handleMouseEnter = (e: any) => {
    console.log('进入')
  }
  const handleMouseLeave = (e: any) => {
    console.log('推出')
    setStatus(false)

  }

  const handleMouseDown = (e: any) => {
    console.log('按下')
    setStatus(true)
  }
  const handleMouseUp = (e: any) => {
    console.log('抬起')
    setStatus(false)
  }
  const handleMouseMove = (e: any) => {

    if(status===true){
      console.log('移动')
      console.log(e.screenX)
      console.log(e.screenX)
      // appWindow.setPosition(new LogicalPosition(e.screenX-20, e.screenY-20))

    }
  }
  return <div id={'title'} className={'title'}

              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}

  >
    标题
  </div>
}

export default Title
