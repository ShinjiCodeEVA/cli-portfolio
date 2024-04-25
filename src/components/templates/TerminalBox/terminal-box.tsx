import { Navbar } from "../../UI/Navbar"
import { CmdInput } from "../../UI/CmdInput"
import { RenderCmdHist } from "../../UI/RenderCmdHist"
import { useAddToCmdHist } from "../../../hooks/useAddToCmdHist"
import { useRef, useEffect } from "react"
import { getDateNow } from "../../../util"

export const TerminalBox = () => {
  
  const {cmdHist, addToHist} = useAddToCmdHist();
  const dummyRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
		dummyRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [cmdHist]);

  return (
    <main className="bg-black bg-opacity-75 w-full max-w-[800px]  h-[600px] max-h-[600px] font-josefin text-white rounded-md main-container overflow-scroll">
        <Navbar/>
        <div className="p-2 mt-5">
          <p className="mb-2">Today is, {getDateNow()}</p>
          {<RenderCmdHist history={cmdHist}/>}
          <CmdInput addToCmdHist={addToHist}/> 
        </div>    
        <div ref={dummyRef}></div>
    </main>
  )
}
