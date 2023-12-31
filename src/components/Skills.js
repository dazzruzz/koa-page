import React from 'react';
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) => {
	return (
		<motion.div className='flex items-center justify-center rounded-full font-semibold 
		bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 
		md:px-3 xs:bg-transparent xs:dark:bg-transparentxs:text-dark xs:text-dark xs:font-bold'
		whileHover={{scale:1.05}}
		initial={{x:0, y:0}}
		whileInView={{x:x, y:y, transition:{duration:1.5} }}
		viewport={{once: true}}
		>{name}</motion.div>		
	)
}

const Skills = () => {
	return (
		<>
		<h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'> Skills</h2>		
			<div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark 
			lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
			lg:bg-circularLightLg lg:dark:bg-circularDarkLg
			md:bg-circularLightMd md:dark:bg-circularDarkMd
			sm:bg-circularLightSm sm:dark:bg-circularDarkSm
			'>
				<motion.div className='flex items-center justify-center rounded-full font-semibold 
				bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
				whileHover={{scale:1.05}}>Video</motion.div>

				<Skill name="Premiere Pro" x="-33vw" y="-2vw"  />
				<Skill name="Final Cut Pro" x="-5vw" y="-8vw"  />
				<Skill name="Lightroom" x="-18vw" y="-13vw"  />
				<Skill name="Lumafusion" x="25vw" y="8vw"  />
				<Skill name="iMovie" x="18vw" y="-12vw"  />
				<Skill name="Capcut" x="-10vw" y="15vw"  />
				<Skill name="Premiere Rush" x="3vw" y="-20vw"  />
				<Skill name="Videoleap" x="12vw" y="10vw"  />
				<Skill name="Sony alpha" x="-20vw" y="5vw"  />
				<Skill name="Canon" x="30vw" y="0vw"  />

			</div>
		</>
	);
}

export default Skills;