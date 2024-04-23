import { RenderCmdHistoryProp } from "./render-cmd-hist.interface"
import { CmdStatus } from "../CmdStatus"
import { CmdBaseInput } from "../CmdBaseInput"

export const RenderCmdHist = ({history}: RenderCmdHistoryProp) => {

    
  return (
    <div>
        {history.map((hist, index) => {
            return (
                <CmdBaseInput 
                    key={index}
                    Children={hist.Component} 
                    CmdStatus={<CmdStatus 
                    command={hist.cmd}
                    date={hist.date}/>}
                    cmdDetails={hist}/>
            )   
        })}
    </div>
  )
}
