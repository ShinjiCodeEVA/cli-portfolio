import image from '../../../assets/pfp.png'
import { HiMiniCheckBadge } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


export const Bio = () => {
  return (
    <div className='px-10'>
        <div 
        className='flex items-center gap-4 mt-4'>
            <img
                className='max-w-[200px] h-[120px] w-[120px] object-cover border-2 border-yellow-200 rounded-full' 
                src={image} 
                alt="profile" />
            
            <div>
                <div className='flex items-center gap-2'>
                    <h2>ShinjiCodeEVA</h2>
                    <HiMiniCheckBadge className='text-2xl text-blue-400'/>
                </div>
                <p>Join the world 19 years ago</p>
            </div>
        </div>

        <article>
            <p className='mt-3'> Hello there! I'm Harvie, a dedicated software enthusiast, driven by innovation and a commitment to making a positive impact. Let's embark on this journey of growth and discovery together!</p>
        </article>

        <div className='mt-3 grid grid-cols-2 gap-3'>
            <div className='flex items-center gap-2'>
                <FaGithub/>
                <span className='text-yellow-200'>Github</span>
                <span className='text-blue-300 underline'>@ShinjiCodeEVA</span>
            </div>

            <div className='flex items-center gap-2'>
                <FaStackOverflow/>
                <span className='text-yellow-200 '>StackOverflow</span>
                <span className='text-blue-300 underline'>@HarVie</span>
            </div>

            <div className='flex items-center gap-2 '>
                <BiLogoGmail/>
                <span className='text-yellow-200 '>Mail</span>
                <span className='text-blue-300 underline'>@solisharvie</span>
            </div>

           
        </div>
    </div>
  )
}
