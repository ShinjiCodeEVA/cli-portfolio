import { CmdStatusProp } from "./cmd-status.interface"
import { BiGitBranch } from "react-icons/bi";

export const CmdStatus = ({command, date}: CmdStatusProp) => {

  return (      
        command.length !== 0 && 
        <>
            <div className="bg-yellow-200 flex items-center gap-1  pl-6 pr-1 translate-x-[-40px] text-black">
                  <BiGitBranch/>
                  <span>{command}</span>
            </div>
            <div className="cmd-base-input-y translate-x-[-40.5px]"></div>

            {/* <div className="flex justify-between items-center w-full">
              <p>ls</p>
              <p>{date}</p>
            </div> */}
        </>
  )
}
