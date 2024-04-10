
const Herosection = () => {

    return (
        <section id="home">
            <div className="grid grid-cols-1 relative">
                <div className="my-auto">
                    <div className="video-container relative">
                        <div className="lg:hidden">
                            <iframe
                                title="YouTube Video"
                                src="https://www.youtube.com/embed/ZeKwsABnfcM?autoplay=1&loop=1&controls=0&mute=1"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                className="w-screen h-screen xl:scale-105 2xl:scale-110"
                            ></iframe>
                        </div>
                        <div className="hidden lg:block">
                            <iframe
                                title="YouTube Video"
                                src="https://www.youtube.com/embed/nV28eDzTs10?autoplay=1&loop=1&controls=0&mute=1"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                className="w-screen h-screen scale-105"
                            ></iframe>
                        </div>
                    </div>
                    <div className="absolute inset-0 px-10 flex items-center justify-start">
                        <div className='w-2/3 xl:w-3/6'>
                            <h1 className="text-xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-white font-semibold font-sans text-left">
                                We are the leaders in Interior Planning
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herosection;
