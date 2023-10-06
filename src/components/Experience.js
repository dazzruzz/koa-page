import React, { useRef } from 'react';
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon';

const Details = ({position, time, address, work}) => {
	const ref = useRef(null);

	return (<li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
				<LiIcon reference={ref} />
				<motion.div
				initial={{y:50}}
				whileInView={{y:0}}
				transition={{duration: 0.5, type:"spring"}}
				>
					<h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;
					</h3>
					<span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
						{time} | {address}
					</span>
					<p className='font-medium w-full md:text-sm'>
						{work}
					</p>
				</motion.div>
			</li>
	);
};

const Experience = () => {
	const ref = useRef(null);
	const {scrollYProgress} = useScroll({
		target: ref,
		offset: ["start end", "center start"]
		
	})
		return (
			<div className='my-64'>
				<h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Erfahrungen</h2>


				<div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>


<motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>
			
					<ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
						<Details
						position="Eventprojekte"
						time="2022 - 2023"address="Wasinger Media House"
						work="Erfahrung als Kameramann bei Vielzahl von Events, darunter Messen, Produkt-Launches, 
						Firmenjuboiläen, Ferien und Iinvestorenkonferenzen. Bei der Videografie wurde ein Gimbal 
						eingesetzt, um visuelle Erfassungen unterschiedlicher Veranstaltungen und Anlässe zu unterstützen."
						/>
						<Details
						position="Kameramnn für Hochzeitsvideo"
						time="2023" address="für F.D."
						work="Kameramann bei einer Hochzeitsveranstaltung in Zusammenarbeit mit meinem Kollegen. 
						Erfassung von Filmaufnahmen, einschliesslich Drohnenaufnahmen. 
						"
						/>
						<Details
						position="Dokumentarfilm & Interview"
						time="2023" address="Eigenprojekt"
						work="In Zusammenarbeit mit einem Team wurde ein kleines Videoprojekt realisiert,  wobei eine Canon C300 Filmkamera und professionelle Beleuchtung zum Einsatz kamen."
						/>
						<Details
						position="Kameramann bei Kurzfilm - Don't walk away"
						time="2022" address="Projekt & Regie von T. Ratnasigamani"
						work="Verantwortlich für die Kameraführung, sowohl mit Gimbal als auch aus der Hand. Beitrag zur visuellen Gestaltung des Films und inspirierende Zusammenarbeit mit talentierten Teamkollegen."
						/>
						<Details
						position="Werbevideo"
						time="2022" address="Bubbletea Shop"
						work="Die Erstellung eines Werbevideos für ein Bubble Tea Geschäft hatte das Ziel, das Unternehmen auf eine ansprechende Art und Weise zu präsentieren. Für die Aufnahmen wurde eine Sony A7III in Verbindung mit einem Gimbal verwendet."
						/>

					</ul>
				</div>
			</div>
		)
}

export default Experience;