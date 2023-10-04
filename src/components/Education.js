import React, { useRef } from 'react';
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon';

const Details = ({type, time,  place, info}) => {
	const ref = useRef(null);

	return (<li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
				<LiIcon reference={ref} />
				<motion.div
				initial={{y:50}}
				whileInView={{y:0}}
				transition={{duration: 0.5, type:"spring"}}
				>
					<h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}
					
					</h3>
					<span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
						{time} | {place}
					</span>
					<p className='font-medium w-full md:text-sm'>
						{info}
					</p>
				</motion.div>
			</li>
	);
};

const Education = () => {
	const ref = useRef(null);
	const {scrollYProgress} = useScroll({
		target: ref,
		offset: ["start end", "center start"]
		
	})
		return (
			<div className='my-64'>
				<h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Ausbildung & Kurse</h2>


				<div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>


<motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
			
					<ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
						<Details
						type="Praktikum Video und Fotografie bei Wasinger Media House" 
						time="Oktober 2022 - Oktober 2023 "
						place="Schlieren, Zürich"
						info="• Bildbearbeitung mit Lightroom
						• Videobearbetung mit Permiere Pro 
						• Aufbau und Kameraführung für Liveproduktionen 
						• Erstellung von Businessportaits 
						• Content Creation für Social Media"
						/>

						<Details
						type="Videobearbeitungskurs mit Fokus auf Adobe After Effects" 
						time="Juni 2021"
						place="Wallisellen, Zürich"
						info="• Sequenzverwaltung
						• Ebenenbearbeitung und Compositing
						• Animation und Keyframe-Erstellung
						• Effekte und Masken
						• Texterstellung und -animation
						• Zeitlupeneffekte (Retiming)
						• Arbeiten in 3D
						• Rendering und Export
						• Erweiterte Funktionen wie Adjustment Layer, Null-Objekt und Expressions
						• Bildstabilisierung
						• Chroma-Keying (Green- oder Bluescreen)
						• Bildverfolgung in 2D, 2,5D und 3D"
						/>

						<Details
						type="Logistiker EFZ" 
						time="2015-2019"
						place="Mueller AG, Langenthal"
						info="• Warneingang / Warenausgang / Warenkontrolle 
						• Ein- / Auslagerung im Handlager und Hochregallager
						• Kommissionieren, Verpacken für den Versand • Rüsten mit dem Hallenkran
						• Bedienen diverser Flurförderfahrzeuge und Hochregalstapler
						• Datenverarbeitung mit ERP / Fehr-WMS"
						/>
					</ul>
				</div>
			</div>
		)
}

export default Education;