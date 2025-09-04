import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Expertise from '../components/agents/Expertise'
import Para1 from '../components/agents/Para1'
import List from '../components/agents/List'
import Para2 from '../components/agents/Para2'
import EmptyDiv from '../components/agents/EmptyDiv'
import Para3 from '../components/agents/Para3'

const Agents = () => {

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        markers:true,
        start:'top 21%',
        end:'top -160%',
        scrub:true,
        pin:true,
        onUpdate:(elem)=>{
          let imageIndex;
          if(elem.progress<1){
            imageIndex = Math.floor(elem.progress * imageArray.length)
          }else{
            imageIndex = imageArray.length - 1
          }

          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div>
      <div className='section1'>
      <div ref={imageDivRef} className='absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw] top-38 left-[30vw]'>
        <img ref={imageRef} className='h-full object-cover w-full ' src="https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg" alt="" />
      </div>
      <div className=' relative font-[font2]'>
      <div className='mt-[55vh]'>
        <h1 className='text-[20vw] text-center uppercase leading-[17vw]'>
          Soixan7e <br /> Douze
        </h1>
      </div>
      <div className='pl-[40%] mt-20'>
        <p className='text-6xl'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
        </p>
      </div>
      </div>
    </div>
    <div className='section2 flex justify-center h-screen'>
      <div className='flex justify-center mt-44 h-[300px] w-[80vw]  gap-16'>
        <div className='sec2.1  flex  flex-col justify-between'>
          <Expertise/>
          <Para1/>
        </div>
        <div className='sec2.2  flex flex-col justify-between'>
          <List/>
          <Para2/>
        </div>
        <div className='sec2.3 bg-white flex flex-col justify-between'>
          <EmptyDiv/>
          <Para3/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Agents
