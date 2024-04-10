import fb from '../assets/images/Fb.png'

function Contactus() {
    return (
        <div className="p-10 bg-emerald-600 rounded-xl">
            <div className="">
                <div className="space-y-8">
                    <div>
                    <h1 className="text-2xl xl:text-4xl text-white font-extrabold text-left">Contact Us</h1>
                    </div>
                    <div className='flex space-x-4'>
                        <img className='w-8 h-8' src={fb} alt="" />
                        <h1 className='my-auto text-white'>Shinecompany</h1>
                    </div>
                    <div className='flex space-x-4'>
                        <img className='w-8 h-8' src={fb} alt="" />
                        <h1 className='my-auto text-white'>Shinecompany</h1>
                    </div>
                    <div className='flex space-x-4'>
                        <img className='w-8 h-8' src={fb} alt="" />
                        <h1 className='my-auto text-white'>Shinecompany</h1>
                    </div>
                    <div className='flex space-x-4'>
                        <img className='w-8 h-8' src={fb} alt="" />
                        <h1 className='my-auto text-white'>Shinecompany</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contactus
