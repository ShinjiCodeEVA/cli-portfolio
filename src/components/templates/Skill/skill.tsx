import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiBun } from "react-icons/si";
import { useState, useEffect } from "react";
import { SkillType } from "../../../types";

export const Skill = () => {

  const [skills, setSkills] = useState<SkillType[]>([
        { icon: FaReact, label: 'React', percentage: 0, max: 50 },
        { icon: SiTailwindcss, label: 'Tailwind', percentage: 0, max: 40 },
        { icon: SiTypescript, label: 'Typescript', percentage: 0, max: 25 },
        { icon: SiExpress, label: 'Express Js', percentage: 0, max: 30 },
        { icon: SiBun, label: 'Elysia Js', percentage: 0, max: 20 }
  ]);


  useEffect(() => { 

    const animateSkills = () => {
        const interval =  setInterval(() => { 
            setSkills(skills.map((skill) => { 
                if (skill.percentage <= skill.max)
                    skill.percentage += 1
                
                return skill;
            }));
        }, 100)
        return () => clearInterval(interval)
    }


    animateSkills();
  }, [])

  return (
    <div className="mt-3 flex flex-col gap-4 px-10">
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex items-center gap-2">
            {<skill.icon className="text-2xl" />}
            <span>{skill.label}</span>
          </div>
          <div className="mt-2 w-full bg-gray-700 relative rounded-full">
            <div className="bg-blue-400 rounded-full h-2 text-right pr-8 transition-all" style={{ width: `${skill.percentage}%` }}>
              <span className="-translate-y-7 absolute">{skill.percentage}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
