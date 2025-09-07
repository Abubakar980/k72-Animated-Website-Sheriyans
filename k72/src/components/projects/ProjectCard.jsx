
const ProjectCard = (props) => {
  return (
    <>
            <div className='w-1/2 group transition-all relative rounded-none hover:rounded-[30px] overflow-hidden h-full '>
              <img className='h-full w-full object-cover' src={props.image1} alt="" />
              <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/20'>
                <h2 className='uppercase text-[4vw] font-[font2] border-4 pt-2 text-white px-6 border-white rounded-full'>vior le projet</h2>
              </div>
            </div>
            <div className='w-1/2 group transition-all relative rounded-none hover:rounded-[30px] overflow-hidden h-full '>
              <img className='h-full w-full object-cover' src={props.image2} alt="" />
              <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/20'>
                <h2 className='uppercase text-[4vw] font-[font2] border-4 pt-2 text-white px-6 border-white rounded-full'>vior le projet</h2>
              </div>
            </div>
    </>
  )
}

export default ProjectCard
