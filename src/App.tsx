import { TerminalBox } from "./components/templates/TerminalBox"
import { Notice } from "./components/templates/Notice"
import image from '../public/logo.png'
import { CustomFavicon } from "./util/favicon/custom-favicon"

function App() {

  return (
    <>
      <CustomFavicon src={image}/>
     <div className="h-screen flex flex-col items-center justify-center">
       <Notice/>
       <TerminalBox />
     </div>
    </>
  )
}

export default App
