
const Herosection = () => {

    return (
        <section id="home">
            <div className="grid grid-cols-1 relative">
                <div className="my-auto">
                    <div className="video-container relative">
                        <div className="lg:hidden">
                            <iframe
                                id="player"
                                type="text/html"
                                height="768"
                                src="https://www.youtube.com/embed/ZeKwsABnfcM?playlist=ZeKwsABnfcM&autoplay=1&loop=1&controls=0&mute=1"
                                frameBorder="0"
                                className="w-screen"
                            ></iframe>
                        </div>
                        <div className="hidden lg:block">
                            <iframe
                                id="player"
                                type="text/html"
                                height="810"
                                src="https://www.youtube.com/embed/nV28eDzTs10?playlist=nV28eDzTs10&autoplay=1&loop=1&controls=0&mute=1"
                                frameBorder="0"
                                className="w-screen"
                            ></iframe>
                        </div>
                    </div>
                    <div className="absolute inset-0 mx-4 flex items-center justify-start">
                        <div className='w-2/3 xl:w-3/6 space-y-4 xl:space-y-8 2xl:space-y-12'>
                            <h1 className="text-xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-white font-semibold font-sans text-left">
                                we are the solution for your <span className="text-xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-emerald-400 font-semibold font-sans text-left">interior and exterior garden</span>
                            </h1>
                            <p className="text-xs lg:text-sm xl:text-lg 2xl:text-xl text-white font-medium text-left">Kami menerima berbagai macam bentuk project jasa pembuatan aquascape, paludarium, marine, terrarium, garden, kolam dan lain lain.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herosection;
