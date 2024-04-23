import { TerminalBox } from "./components/templates/TerminalBox"
import { Notice } from "./components/templates/Notice"

function App() {

  return (
    <>
     <div className="h-screen flex flex-col items-center justify-center">
       <Notice/>
       <TerminalBox />
     </div>
    </>
  )
}

export default App
