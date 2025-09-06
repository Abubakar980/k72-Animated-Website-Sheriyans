import ProjectCard from '../components/projects/ProjectCard'

const Projects = () => {

  const projects = [
    {
      image1:'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
      image2:'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
    },
    {
      image1:'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
      image2:'https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg',
    },
    {
      image1:'https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg',
      image2:'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    },
    {
      image1:'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg',
      image2:'https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg',
    },
  ]

  return (
    <div className='p-4'>
        <div className=' pt-[45vh]'>
            <h2 className='font-[font2] text-[9.5vw] uppercase'>Projets</h2>
        </div>
        <div className='-mt-16'>
          {projects.map(function (elem){
            return <ProjectCard image1={elem.image1} image2={elem.image2}/>
          })}
          
        </div>
    </div>
  )
}

export default Projects



