import Head from 'next/head'
import Layout from '@/components/Layout'
import profileArt from "../../public/images/profile/colorartkoawbg.png"
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>

        <title>Willkommen bei Kwasi Visuals | Kreative Videografie</title>
        <meta name="description" content="Entdecken Sie bei Kwasi Visuals fesselnde visuelle Geschichten, beeindruckende Videografie und kreative Innovationen von Kwasi Osei Alvarez." />
        <script async src="https://stats.mcathome.ch/script.js" data-website-id="e3d26fca-0d91-4473-b80a-bba02131b9d2"></script>
      </Head>
      <TransitionEffect />

        <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
          <Layout className='pt-0 md:pt-16 sm:pt-8'>
            <div className="flex items-center justify-between w-full lg:flex-col">
              <div className='w-1/2 md:w-full'>
                <Image src={ profileArt } alt="Kwasi Visuals" className='w-full h-auto lg:hidden md:inline-block md:w-full' 
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
              </div>
              
              <div className='w-1/2 felx felx-col items-center self-center lg:w-full lg:text-center'>
                
                <AnimatedText text="Mit meiner Kamera erzähle ich Ihre Geschichte." className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl'/>
                <p className='my-4 text-base font-medium md:text_sm sm:text-xs'>
                Mit jedem Klick auf den Auslöser fange ich nicht nur Bilder ein, sondern erschaffe 
                Momente, die Sie immer wider erleben können. Tauchen Sie ein in meine visuelle Reise, wo Ihre 
                Erinnerungen zum Leben erweckt werden und die Zeit stillzustehen scheint.
                </p>

                <div className='flex items-center self-start mt-2 lg:self-center'>
                  
                  <Link href="mailto:kwasi.alvarez@hotmail.com" target={"_blank"}
                  className='ml-1 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                  >Contact</Link>
                </div>
              </div>
            </div>
          </Layout> 
          <HireMe />
         </main>
    </>
  )
}
