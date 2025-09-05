const FullScreenNav = () => {
  return (
    <div id='fullscreennav' className='h-screen text-white w-full absolute bg-black'>
        <div>
            <div className="flex w-full p-3 justify-between items-start">
            <div className="">
            <div className="w-32">
            <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>
        </div>
        </div>
        <div className="h-30 w-30 cursor-pointer">
            <div className="h-44 w-[2px] -rotate-45 origin-top absolute bg-[#d3fd50]"></div>
            <div className="h-44 w-[2px] right-0 rotate-45 origin-top absolute bg-[#d3fd50]"></div>
        </div>
        </div>


        <div id='all-links' className='cursor-pointer'>
            <div className='link relative border-t-1 border-white'>
                <h1 className='font-[font2] text-center leading-[1] pt-1 text-[7vw] uppercase'>
                  Projects
                </h1>

                {/* ✅ yaha sirf gap-4 add kiya */}
                <div className='moveLink absolute w-full h-full overflow-auto hide-scrollbar flex gap-4 text-black top-0 bg-[#d3fd50]'>
                    
                    {/* ✅ yaha se w-full hata diya */}
                    <div className='moveX flex hide-scrollbar items-center'>
                        <h2 className='whitespace-nowrap font-[font2] text-center leading-[1] pt-1 text-[5vw] uppercase'>
                          Pour Tout Voir
                        </h2>
                        <img className='h-20 rounded-full mx-4 shrink-0 w-56 object-cover' 
                          src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" 
                          alt="" 
                        />
                        <h2 className='whitespace-nowrap font-[font2] text-center leading-[1] pt-1 text-[5vw] uppercase'>
                          Pour Tout Voir
                        </h2>
                        <img className='h-20 rounded-full mx-4 shrink-0 w-56 object-cover' 
                          src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" 
                          alt="" 
                        />
                    </div>

                    {/* ✅ yaha se bhi w-full hata diya */}
                    <div className='moveX flex hide-scrollbar items-center'>
                        <h2 className='whitespace-nowrap font-[font2] text-center leading-[1] pt-1 text-[5vw] uppercase'>
                          Pour Tout Voir
                        </h2>
                        <img className='h-20 rounded-full mx-4 shrink-0 w-56 object-cover' 
                          src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" 
                          alt="" 
                        />
                        <h2 className='whitespace-nowrap font-[font2] text-center leading-[1] pt-1 text-[5vw] uppercase'>
                          Pour Tout Voir
                        </h2>
                        <img className='h-20 rounded-full mx-4 shrink-0 w-56 object-cover' 
                          src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" 
                          alt="" 
                        />
                    </div>

                </div>
            </div>






            <div className='link relative border-t-1 border-white'>
                <h1 className='font-[font2] text-center leading-[1] pt-1 text-[7vw] uppercase'>
                  Agence
                </h1>

                {/* ✅ yaha sirf gap-4 add kiya */}
                <div className='moveLink absolute w-full h-full overflow-auto hide-scrollbar flex gap-4 text-black top-0 bg-[#d3fd50]'>
                    
                    {/* ✅ yaha se w-full hata diya */}
                    <div className='moveX flex hide-scrollbar items-center'>
                        <h2 className='whitespace-nowrap font-[font2] text-center leading-[1] pt-1 text-[5vw] uppercase'>
                          Pour Tout Savoir
                        </h2>
                        <img className='h-20 rounded-full mx-4 shrink-0 w-56 object-cover' 
                          src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" 
                          alt="" 
                        />
                        <h2 className='whitespace-nowrap font-[font2] text-center leading-[1] pt-1 text-[5vw] uppercase'>
                          Pour Tout Savoir
                        </h2>
                        <img className='h-20 rounded-full mx-4 shrink-0 w-56 object-cover' 
                          src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" 
                          alt="" 
                        />
                    </div>

                    {/* ✅ yaha se bhi w-full hata diya */}
                    <div className='moveX flex hide-scrollbar items-center'>
                        <h2 className='whitespace-nowrap font-[font2] text-center leading-[1] pt-1 text-[5vw] uppercase'>
                          Pour Tout Savoir
                        </h2>
                        <img className='h-20 rounded-full mx-4 shrink-0 w-56 object-cover' 
                          src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" 
                          alt="" 
                        />
                        <h2 className='whitespace-nowrap font-[font2] text-center leading-[1] pt-1 text-[5vw] uppercase'>
                          Pour Tout Savoir
                        </h2>
                        <img className='h-20 rounded-full mx-4 shrink-0 w-56 object-cover' 
                          src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" 
                          alt="" 
                        />
                    </div>

                </div>
            </div>






            <div className='link relative border-t-1 border-white'>
                <h1 className='font-[font2] text-center leading-[1] pt-1 text-[7vw] uppercase'>
                  Contact
                </h1>

                {/* ✅ yaha sirf gap-4 add kiya */}
                <div className='moveLink absolute w-full h-full overflow-auto hide-scrollbar flex gap-4 text-black top-0 bg-[#d3fd50]'>
                    
                    {/* ✅ yaha se w-full hata diya */}
                    <div className='moveX flex hide-scrollbar items-center'>
                        <h2 className='whitespace-nowrap font-[font2] text-center leading-[1] pt-1 text-[5vw] uppercase'>
                          Pour Envoyer un fax
                        </h2>
                        <img className='h-20 rounded-full mx-4 shrink-0 w-56 object-cover' 
                          src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" 
                          alt="" 
                        />
                        <h2 className='whitespace-nowrap font-[font2] text-center leading-[1] pt-1 text-[5vw] uppercase'>
                          Pour Envoyer un fax
                        </h2>
                        <img className='h-20 rounded-full mx-4 shrink-0 w-56 object-cover' 
                          src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" 
                          alt="" 
                        />
                    </div>

                    {/* ✅ yaha se bhi w-full hata diya */}
                    <div className='moveX flex hide-scrollbar items-center'>
                        <h2 className='whitespace-nowrap font-[font2] text-center leading-[1] pt-1 text-[5vw] uppercase'>
                          Pour Envoyer un fax
                        </h2>
                        <img className='h-20 rounded-full mx-4 shrink-0 w-56 object-cover' 
                          src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" 
                          alt="" 
                        />
                        <h2 className='whitespace-nowrap font-[font2] text-center leading-[1] pt-1 text-[5vw] uppercase'>
                          Pour Envoyer un fax
                        </h2>
                        <img className='h-20 rounded-full mx-4 shrink-0 w-56 object-cover' 
                          src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" 
                          alt="" 
                        />
                    </div>

                </div>
            </div>









            <div className='link relative border-y-1 border-white'>
                <h1 className='font-[font2] text-center leading-[1] pt-1 text-[7vw] uppercase'>
                  Blogue
                </h1>

                {/* ✅ yaha sirf gap-4 add kiya */}
                <div className='moveLink absolute w-full h-full overflow-auto hide-scrollbar flex gap-4 text-black top-0 bg-[#d3fd50]'>
                    
                    {/* ✅ yaha se w-full hata diya */}
                    <div className='moveX flex hide-scrollbar items-center'>
                        <h2 className='whitespace-nowrap font-[font2] text-center leading-[1] pt-1 text-[5vw] uppercase'>
                          lire les articles
                        </h2>
                        <img className='h-20 rounded-full mx-4 shrink-0 w-56 object-cover' 
                          src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" 
                          alt="" 
                        />
                        <h2 className='whitespace-nowrap font-[font2] text-center leading-[1] pt-1 text-[5vw] uppercase'>
                          lire les articles
                        </h2>
                        <img className='h-20 rounded-full mx-4 shrink-0 w-56 object-cover' 
                          src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" 
                          alt="" 
                        />
                    </div>

                    {/* ✅ yaha se bhi w-full hata diya */}
                    <div className='moveX flex hide-scrollbar items-center'>
                        <h2 className='whitespace-nowrap font-[font2] text-center leading-[1] pt-1 text-[5vw] uppercase'>
                          lire les articles
                        </h2>
                        <img className='h-20 rounded-full mx-4 shrink-0 w-56 object-cover' 
                          src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" 
                          alt="" 
                        />
                        <h2 className='whitespace-nowrap font-[font2] text-center leading-[1] pt-1 text-[5vw] uppercase'>
                          lire les articles
                        </h2>
                        <img className='h-20 rounded-full mx-4 shrink-0 w-56 object-cover' 
                          src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" 
                          alt="" 
                        />
                    </div>

                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default FullScreenNav
