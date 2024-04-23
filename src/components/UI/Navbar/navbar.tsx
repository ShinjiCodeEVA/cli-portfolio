import { VscTerminalBash } from "react-icons/vsc";

export const Navbar = () => {
  return (
    <header className="w-full sm:w-[800px] bg-cyan-blue p-3 rounded-t-md flex items-center fixed z-[99] top-12">
      <div className="flex gap-1 items-center">
        <div className="h-[8px] w-[8px] rounded bg-cyan-red"></div>
        <div className="h-[8px] w-[8px] rounded bg-cyan-yellow"></div>
        <div className="h-[8px] w-[8px] rounded bg-cyan-green"></div>
      </div>
      
      <div className="flex items-center gap-1 m-auto">
        <span><VscTerminalBash className="text-xl"/></span>
        <p>Harvie/terminal-portfolio</p>
      </div>
    </header>
  )
}
