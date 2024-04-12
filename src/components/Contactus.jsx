import ig from '../assets/images/instagram.png'
import wa from '../assets/images/whatsapp.png'
import fb from '../assets/images/facebook.png'
import gmail from '../assets/images/email.png'

function Contactus() {
    return (
        <div className="p-4 xl:p-8">
            <div className="">
                <div className="space-y-8 xl:space-y-16">
                    <div className="">
                        <h1 className="text-xl lg:text-2xl xl:text-4xl 2xl:text-7xl text-left text-emerald-700 font-semibold">
                            Contact Us
                        </h1>
                    </div>
                    <div className='space-y-8 text-left'>
                        <div className='flex space-x-4'>
                            <img className='w-5 h-5 xl:w-8 xl:h-8 2xl:h-10 2xl:w-10' src={ig} alt="" />
                            <h1 className='my-auto text-sm xl:text-lg 2xl:text-xl text-black'>shinecompany29</h1>
                        </div>
                        <div className='flex space-x-4'>
                            <img className='w-5 h-5 xl:w-8 xl:h-8 2xl:h-10 2xl:w-10' src={fb} alt="" />
                            <h1 className='my-auto text-sm xl:text-lg 2xl:text-xl text-black'>Shinecompany</h1>
                        </div>
                        <div className='flex space-x-4'>
                            <img className='w-5 h-5 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10' src={wa} alt="" />
                            <h1 className='my-auto text-sm xl:text-lg 2xl:text-xl text-black'>Shinecompany</h1>
                        </div>
                        <div className='flex space-x-4'>
                            <img className='w-5 h-5 xl:w-8 xl:h-8 2xl:h-10 2xl:w-10' src={gmail} alt="" />
                            <h1 className='my-auto text-sm xl:text-lg 2xl:text-xl text-black'>Shinecompany</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus
