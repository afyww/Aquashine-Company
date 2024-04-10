import fb from '../assets/images/Fb.png'

function Contactus() {
    return (
        <div className="p-4 xl:p-8 bg-emerald-600 rounded-xl">
            <div className="">
                <div className="space-y-16">
                    <div>
                        <h1 className="text-2xl xl:text-4xl text-white font-semibold text-left">Contact Us</h1>
                    </div>
                    <div className='space-y-4'>
                        <div className='flex space-x-4'>
                            <img className='w-12 h-10' src={fb} alt="" />
                            <h1 className='my-auto text-white'>Shinecompany</h1>
                        </div>
                        <div className='flex space-x-4'>
                            <img className='w-12 h-10' src={fb} alt="" />
                            <h1 className='my-auto text-white'>Shinecompany</h1>
                        </div>
                        <div className='flex space-x-4'>
                            <img className='w-12 h-10' src={fb} alt="" />
                            <h1 className='my-auto text-white'>Shinecompany</h1>
                        </div>
                        <div className='flex space-x-4'>
                            <img className='w-12 h-10' src={fb} alt="" />
                            <h1 className='my-auto text-white'>Shinecompany</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus
