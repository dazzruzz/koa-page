import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from "../../public/images/profile/group.jpg"
import outsidePic from "../../public/images/profile/outsidejump.jpg"
import { useInView, useMotionValue,  useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({value}) => {
	const ref = useRef(null);

	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, {duration: 3000});
	const isInView = useInView(ref, {once: true});

	useEffect(() => {
		if (isInView){
			motionValue.set(value);
		}
	}, [isInView, value, motionValue])

	useEffect(() => {
		springValue.on("change", (latest) => {
			if (ref.current && latest.toFixed(0) <= value){
				ref.current.textContent = latest.toFixed(0);
			}
		})
	}, [ springValue, value])
	
	return <span ref={ref}></span>
}

const about = () => {
	return (
		<>
			<Head>
				<title>Kwasi Visuals | About Page</title>
				<meta name="description" content="Willkommen bei Kwasi Visuals, dem Zuhause für visuelle Geschichten und atemberaubende Videografie von Kwasi Osei Alvarez. Entdecken Sie einzigartige visuelle Erlebnisse und kreative Innovationen." />
			</Head>
			<TransitionEffect />

		<main className='flex w-full flex-col items-center justify-center dark:text-light'>
			<Layout className='pt-16'>
			<AnimatedText text="Leidenschaft ist der Schlüssel zum Erfolg!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
			<div className='grid w-full grid-cols-6 gap-16 sm:gap-8'>
				<div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
					<h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>

					<p className='font-medium'> Willkommen in meiner Welt der Videografie!

					Ich bin Kwasi Osei Alvarez, ein begeisterter Videograf, der mit seiner Sony A7III die Welt erkundet, um einzigartige Momente in Natur und Stadt festzuhalten. 
					Lass mich dir kurz erzählen, wie meine Reise in die Welt der Videografie begann.
					Ursprünglich habe ich eine Lehre als Logistiker absolviert und einige Jahre in diesem Beruf gearbeitet. 
					Doch schon bald wurde mir bewusst, dass meine wahre Leidenschaft in der Welt der Bilder und vor allem der Videos liegt. 
					Deshalb wagte ich den Schritt und begann ein Praktikum als Videograf und Fotograf, wo ich im vergangenen Jahr wertvolle Erfahrungen sammeln konnte.
					Besonders fasziniert mich die Spontanität des Lebens. </p>

					<p className='my-4 font-medium'> Ich liebe es, unerwartete Augenblicke einzufangen, sei es bei einem Spaziergang durch eine belebte Stadt oder in der stillen Schönheit der Natur. 
					Die Kunst, diese verschiedenen Momente festzuhalten, begeistert mich immer wieder aufs Neue.
					Kreativität spielt in meinem Leben eine zentrale Rolle. Beim Schneiden und Bearbeiten meiner Videos nehme ich mir gerne die Zeit, um aus dem Rohmaterial das Beste herauszuholen. 
					Dabei geht es nicht nur um technische Perfektion, sondern auch darum, Emotionen und Geschichten in jeder Aufnahme lebendig werden zu lassen.
					Während meines Praktikums als Videograf und Fotograf hatte ich die Gelegenheit, spannende Erfahrungen zu sammeln.  </p>

					<p className='font-medium'> Ich habe aktiv an verschiedenen Projekten mitgewirkt, die Kameraführung bei Live-Stream-Produktionen übernommen und in der Studiofotografie beeindruckende Porträts erstellt. Die einfühlsame Begleitung von Kunden bei Fotoshootings war mir dabei besonders wichtig. 
					Ich bin gespannt auf die weitere Reise und freue mich darauf, weiterhin einzigartige und inspirierende Videos zu erstellen. 
					Wenn du eine Idee für ein Projekt hast oder einfach über die Welt der Videografie sprechen möchtest, zögere nicht, mich zu kontaktieren. Gemeinsam können wir Großartiges schaffen!</p>

					<p className='my-4 
					font-medium'>
					Vielen Dank, dass du meine Seite besuchst und einen Einblick in meine Welt als kreativer Videograf gewonnen hast. Ich hoffe, du geniesst die Videos und Geschichten genauso sehr wie ich es liebe, sie zu erstellen. 
					Willkommen in meiner visuellen Welt!</p>
				</div>

					<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
						<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
						<Image src={outsidePic} alt="Kwasi Visuals" className='w-full h-auto rounded-2xl' 
							   priority
                  		       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw">
						</Image>
					</div>
					
					<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
						<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
						<Image src={profilePic} alt="Kwasi Visuals" className='w-full h-auto rounded-2xl' 
							   priority
                  		       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw">
						</Image>
					</div>
					

			</div>
			<Skills />
			<Experience />
			<Education />

			</Layout>
		</main>			
		</>
	)
}

export default about;

