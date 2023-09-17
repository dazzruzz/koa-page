import React from 'react';
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) => {
	return (
		<motion.div className='flex items-center justify-center rounded-full font-semibold 
		bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light'
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
		<h2 className='font-bold text-8xl mt-64 w-full text-center'> Skills</h2>		
			<div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
				<motion.div className='flex items-center justify-center rounded-full font-semibold 
				bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light'
				whileHover={{scale:1.05}}>Web</motion.div>

				<Skill name="HTML" x="-33vw" y="-2vw"  />
				<Skill name="CSS" x="-5vw" y="-8vw"  />
				<Skill name="Java" x="-18vw" y="-13vw"  />
				<Skill name="React" x="25vw" y="8vw"  />
				<Skill name="DotNet" x="18vw" y="-12vw"  />
				<Skill name="SAP" x="-10vw" y="15vw"  />
				<Skill name="Pixelmator" x="3vw" y="-20vw"  />
				<Skill name="Graphics" x="12vw" y="10vw"  />
				<Skill name="Blender" x="-20vw" y="5vw"  />
				<Skill name="Tailwind" x="30vw" y="0vw"  />

			</div>
		</>
	);
}

export default Skills;