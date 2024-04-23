import { CmdBaseInputProp } from "./"
import { GiClover, GiOpenFolder } from "react-icons/gi";
import { GoTriangleRight } from "react-icons/go";


export const CmdBaseInput = ({Children, CmdStatus, cmdDetails}: CmdBaseInputProp) => {    
    
  return (
    <div>
        <div className="flex items-center text-sm">
            <div className="w-5 h-1 bg-blue-600"></div>
            <div className="bg-green-700 flex items-center gap-1 pl-2">
                <GiClover/>
                <span>harvie</span>
            </div>
            <div className="cmd-base-input-g"></div>
            
            <div className="bg-blue-400 flex items-center gap-1 pl-7 translate-x-[-20px] text-black">
                <GiOpenFolder/>
                <span>/portfolio</span>
            </div>
            <div className="cmd-base-input-b  translate-x-[-20px]"></div>
            {CmdStatus}
        </div>
        <div>
            <div className="flex ">
                <div className="w-1 h-10 bg-blue-600 -translate-y-3"></div>
                <div className="flex items-center mt-[11px] w-full">
                    <div className="w-5 h-1 bg-blue-600 "></div>
                    <GoTriangleRight className="text-3xl text-blue-600 -translate-x-3"/>
                    <div className="mt-1 -ml-4 flex items-center justify-between w-full pr-4 ">
                        <span>{cmdDetails?.cmd}</span>
                        <span className="text-sm">{cmdDetails?.date}</span>
                    </div>
                </div>
            </div>
            <div className="mb-4">

                    {Children}
            </div>
        </div>
    </div>
  )
}
