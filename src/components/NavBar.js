import Link from 'next/link';
import {React, useState} from 'react';
import Logo from './Logo';
import { TwitterIcon, TikTok, Youtube, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon } from './Icons';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';


//mr-4 = margin right 4, ml= margin left, mx
//h-[1px]: Diese Klasse legt die Höhe des Elements auf 1 Pixel fest. Das [1px] ist eine Tailwind-Erweiterung, die eine benutzerdefinierte Höhe in Pixeln ermöglicht.
//inline-block: Diese Klasse macht das Element zu einem inline-block-Element. Das Element wird in einer Zeile dargestellt, behält jedoch Blockelement-Eigenschaften wie Breite und Höhe bei.
//w-full: Diese Klasse weist dem Element eine Breite von 100% zu, so dass es die volle Breite des übergeordneten Elements einnimmt.
//bg-dark: Diese Klasse verwendet eine Hintergrundfarbe aus deinem Tailwind-Farbkonfigurationsschema mit dem Namen "dark". Dies kann eine benutzerdefinierte Farbe sein, die du in deinem Tailwind-Konfigurationsdatei definiert hast.
//absolute: Diese Klasse positioniert das Element absolut innerhalb des nächstgelegenen Elements, das eine nicht-static Positionierung hat.
//left-0: Diese Klasse positioniert das linke Ende des Elements an den linken Rand des übergeordneten Elements.
//group-hover: Timing funktion balken
//router.asPath === href ? 'w-full' : 'w-0' prüft in welchem pfad sich der user gerade befindet und markiert das wort als w-full falls der pfad mit dem des Users übereinstimmt
//statt className = ' ' wird nun der Inhalt h-[1px] usw. in die funktion übergeben ((h-[1px] inline-block w-0 bg-dark W-0: wird nicht mehr benötigt))

const CustomLink = ({href, title, className=""}) => {
	const router = useRouter();
	return (
		<Link href={href} className={`${className} relative group`}>
			{title}

			<span className={`
			h-[1px] inline-block bg-dark 
			absolute left-0 -bottom-0.5 
			group-hover:w-full transition-[width] ease duration-300
			${router.asPath === href ? 'w-full' : 'w-0'} 
			dark:bg-ligh `}>&nbsp;</span>
		</Link>
	);
};

const CustomMobileLink = ({href, title, className="", toggle}) => {
	const router = useRouter();

const handleClick = () => {
	toggle();
	router.push(href)

}

	return (
		<button href={href} className={`${className} relative group`} onClick={handleClick}>
			{title}

			<span className={`
			h-[1px] inline-block bg-dark 
			absolute left-0 -bottom-0.5 
			group-hover:w-full transition-[width] ease duration-300
			${router.asPath === href ? 'w-full' : 'w-0'} 
			dark:bg-ligh `}>&nbsp;</span>
		</button>
	);
};


const NavBar = () => {

	const [mode, setMode] = useThemeSwitcher();
	const [isOpen, setIsOpen] = useState(false);

	const handleClick= () => {
		setIsOpen(!isOpen)
	}

	return (
		<header className='w-full px-32 py-8 font-medium flex items-center justify-between 
			dark:text-light relative'>
				<button className='flex flex-col justify-center items-center hidden lg-flex' onClick={handleClick}>
					<span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
					<span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
					<span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm transalte-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
				</button>

			<div className='w-full flex justify-between items-center lg:hidden'></div>
			
			{
				isOpen ?
				<div className='min-w-[70vw] flex flex-col 
				justify-between z-30 
				items-center fixed top-1/2 left-1/2 
				-translate-x-1/2 -translate-y-1/2
				 bg-dark/90 dark:bg-light/75 
				rounded-lg backdrop-blur-md py-32'>
		
				<nav className="flex item-center flex-col justify-center">
					<CustomMobileLink href="/" title="Home" className='mr-4' toggle={handleClick}/> 
					<CustomMobileLink href="/about" title="About" className='mx-4'toggle={handleClick}/>
					<CustomMobileLink href="/projects" title="Projects" className='mx-4'toggle={handleClick}/>
					<CustomMobileLink href="/articles" title="Articles" className='ml-4'toggle={handleClick}/>
				</nav> 
	
				<nav className='flex items-center justify-center flex-wrap'>
					<motion.a href="https://www.youtube.com/@kwasialvarez" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mr-3 bg-light rounded-l-xl rounded-r-xl rounded-t-xl"> <Youtube /> </motion.a>
					<motion.a href="https://www.tiktok.com/@kwasi.alvarez" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3"><TikTok /></motion.a>
					<motion.a href="https://twitter.com" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3"><LinkedInIcon /></motion.a>
					<motion.a href="https://twitter.com" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 ml-3 bg-light rounded-full"><PinterestIcon /></motion.a>
	
				<button 
					onClick={() => setMode(mode === "light" ? "dark" : "light")} 
					className={`ml-3 felx items-center rounded-full p-1 
					${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"} 
					`}
				>
					{
						mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
					}
				</button>
	
				</nav>
				</div>

				: null
			}		

			<div className='absolute left-[50%] top-2 translate-x-[50%]'>
				<Logo/>
			</div>
		</header>
	);
};


export default NavBar;