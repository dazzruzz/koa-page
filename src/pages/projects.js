import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import { Youtube, TikTok } from '@/components/Icons';
import Link from 'next/link';
import Image from 'next/image';
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import {motion} from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect';
import YouTubePlayer from '@/components/YouTubePlayer';


const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, link, videoId}) => {
	return (
		<article className='w-full flex justify-between items-center relative rounded-br-2xl rounded-3xl border border-solid bg-light shadow-2xl p-12 dark:bg-dark dark:border-light 
		lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl'>
		<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl 
		xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
			<Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
			<YouTubePlayer 
			videoId={videoId}
			/>
			</Link>

			<div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
				<span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
				<Link href={link} target="_blank" className='hover:underline underline-offset-2'>
					<h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
				</Link>
				<p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
			

			</div>

		</article>

	)
} 

const Project = ({title, type, link, videoId}) => {

	return (
		<article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'">
		<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
			<Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
			<YouTubePlayer className='w-full h-auto items-center' 
			videoId={videoId}
			sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>	
			</Link>

			<div className='w-full flex flex-col items-start justify-between mt-4'>
				<span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
				<Link href={link} target="_blank" className='hover:underline underline-offset-2'>
					<h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
				</Link>

				<div className='w-full mt-2 flex intems-center justify-between'>
				<Link href={link} target="_blank" className='text-lg font-semibold underline md:text-base'>Visit</Link>


				</div>

			</div>

		</article>
	);

};

const projects = () => {
		return (
			<>
			<Head>
				<title>Kwasi Visuals | Projekte</title>
				<meta name="description" content="Erkunden Sie inspirierende Videoprojekte und kreative Arbeiten von Kwasi Osei Alvarez auf der Projektseite von Kwasi Visuals." />			</Head>
			<TransitionEffect />

			<main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
				<Layout className='pt-16'>
					<AnimatedText text="Kreativität kennt keine Grenzen!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
					<div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
						<div className='col-span-12'> 
							<FeaturedProject 
								title="Mauritius"
								img={project1}
								summary="
								Das Erkunden von Mauritius und das Festhalten besonderer Momente waren eine unvergessliche Erfahrung. 
								Die Kamera hat uns geholfen, die Schönheit dieser Insel während unserer Zeit dort einzufangen"
								link="/"
								github="/"
								type="Inselabenteuer"
								videoId={"MrKzh95snAo"}
						/>
						 </div>
						
						<div className='col-span-12'>
							<FeaturedProject 
								title="Milano"
								img={project1}
								summary="
								In Milano hatte ich das Glück, diese wunderschöne Stadt mit meinem Smartphone zu erkunden und festzuhalten. 
								Dieses Video, obwohl es schon etwas älter ist, erinnert mich immer wieder an die schönen Momente in dieser faszinierenden Stadt. "
								link="/"
								github="/"
								type="Milano im Sommerglanz"
								videoId={"fv46Bo4a6FU"}
						/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject 
								title="Sörenberg - Schweiz"
								img={project1}
								summary="
								In Sörenberg verbrachte ich eine wundervolle Zeit und hielt die magischen Momente in der ruhigen Natur fest. 
								Die Aufnahmen zeigen, dass es nicht immer viel bedarf braucht, um die Schönheit und Stimmung dieser Landschaft einzufangen."
								link="/"
								github="/"
								type="Schweizer Alpenidylle"
								videoId={"Q5PYJZZH2hQ"}
						/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject 
								title="Bern - Schweiz"
								img={project1}
								summary="
								In der Altstadt von Bern habe ich wertvolle Momente mit statischen Aufnahmen eingefangen, 
								um die besondere Atmosphäre diesem historischen Ort festzuhalten."
								link=""
								github="/"
								type="Lichter und Atmosphäre"
								videoId={"SNlY1fH8BDE"}
						/>
						</div>

				</div>

				<div className='flex items-center lg:py-2'>
				</div>

				<div className='flex justify-center mt-14'>
				<div className='mt-0 mr-10 text-primary text-3xl dark:text-primaryDark'>Weitere Videos und Reels unter</div>
					<motion.a href="https://www.youtube.com/@kwasialvarez" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-10 mr-3 sm:mx-1 bg-light rounded-l-xl rounded-r-xl rounded-t-xl"> <Youtube /> </motion.a>
					<motion.a href="https://www.tiktok.com/@kwasi.alvarez" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-9 mx-3 sm:mx-1"><TikTok /></motion.a>
				</div>
				</Layout>
			</main>				
			</>
		)
}

export default projects;