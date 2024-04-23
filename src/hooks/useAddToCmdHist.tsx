import { CmdHistory } from "../types"
import { ReactNode, useState } from "react"
import { Help } from "../components/templates/Help";
import { Bio } from "../components/templates/Bio";
import { Skill } from "../components/templates/Skill";
import { Contact } from "../components/templates/Contact";
import { About } from "../components/templates/About";
import { Welcome } from "../components/templates/Welcome";
import { NotFound } from "../components/templates/NotFound";
import { useEffect } from "react";

function getComponent(cmd: string): ReactNode {
    switch(cmd) {
        case 'ls':
            return <Help />;
        case 'bio':
            return <Bio />
        case 'skill':
            return <Skill />
        case 'contact':
            return <Contact />    
        case 'about':
            return <About />  
        default: 
            return <NotFound />  
    }
}

export const useAddToCmdHist = () => { 
    const [cmdHist, setCmdHist] = useState<CmdHistory[]>([
        {
            cmd: "",
            Component: <Welcome/>,
            date: new Date().toLocaleTimeString()
        },
        {
            cmd: "help",
            Component: <Help/>,
            date: new Date().toLocaleTimeString()
        },
          
    ]);


    const addToHist = (cmd: string): void =>  {
        cmd = cmd.toLowerCase();        
        setCmdHist(prevHist => [...prevHist, {cmd, Component: getComponent(cmd), date: new Date().toLocaleTimeString()}])
    }

    useEffect(() => {
        document.body.addEventListener('keydown', handleKeyEvent);
    }, [])

    const handleKeyEvent = (e: KeyboardEvent) => { 
        if (e.ctrlKey && e.key.toLocaleLowerCase() === "l") { 
            setCmdHist([]);
        }
    }

    return {cmdHist, addToHist};
}