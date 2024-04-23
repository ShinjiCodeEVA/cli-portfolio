import { Input } from "../../Elements/Input"
import { CmdBaseInput } from "../CmdBaseInput"
import { useState } from "react"
import { CmdInputProp } from "./"

export const CmdInput = ({addToCmdHist}: CmdInputProp) => {
    const [command, setCommand] = useState<string>('');
    
    const handleCommandChange = (value: string) => { 
        setCommand(value)
    } 

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => { 
        if (event.key === "Enter") {
            addToCmdHist(command);
            setCommand("");
        }  
    }

    return (
    <div >
        <CmdBaseInput Children={
            <Input 
                value={command}
                placeholder="try ls, skill, bio, contact, about..."
                handleInputChange={handleCommandChange}
                className='outline-none bg-transparent -translate-y-[25px] translate-x-9 w-full'
                onKeyDown={handleKeyDown}
            />
        }/>    
    </div>
  )
}
