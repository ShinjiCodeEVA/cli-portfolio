import { HelpCmd } from "../../../types";

export const Help = () => {

   const listOfHelpCommands: HelpCmd[] = [
		{ cmd: "bio", detail: "Show my bio information." },
		{ cmd: "skill", detail: "List all of my skills." },
		{ cmd: "contact", detail: "List all of the contacts." },
		{ cmd: "about", detail: "To see what is terminal portfolio." },
		{ cmd: "ctrl + l", detail: "To clear the history." },
	];

  return (
    <div className="max-w-[400px] pl-10">
        {
            listOfHelpCommands.map((help, index) => { 
                return (
                    <div className="flex items-center gap-20  mt-3" key={index}>
						<h1 className="text-yellow-200 w-12">{help.cmd}</h1>
						<p className="text-gray-300 ">{help.detail}</p>
					</div>
                )
            })
        }
    </div>
  )
}
