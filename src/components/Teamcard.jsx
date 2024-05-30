import momon from '../assets/images/momonceo.jpeg'
import naufal from '../assets/images/naufal.jpeg'
import bili from '../assets/images/bili.jpeg'
import restu from '../assets/images/restu.jpeg'
import bangjek from '../assets/images/bangjek.jpeg'
import ilham from '../assets/images/ilham.jpg'


function Teamcard() {



    return (
        <div className="p-7 xl:p-8 space-y-2">
                <div>
                    <img className="h-80 xl:h-96 w-auto p-2 mx-auto" src={momon} alt="" />
                    <h1 className="text-center font-bold">Devian Rizky Ananta</h1>
                    <h1 className="text-center font-light">Founder & Ceo</h1>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-2'>
                    <div>
                        <img className="h-80 xl:h-96 w-auto p-2 mx-auto" src={naufal} alt="" />
                        <h1 className="text-center font-bold">Farkhan Naufal Ma'arif</h1>
                        <h1 className="text-center font-light">Coordinator Aquatic</h1>
                    </div>
                    <div>
                        <img className="h-80 xl:h-96 w-auto p-2 mx-auto" src={bili} alt="" />
                        <h1 className="text-center font-bold">Billy Risma A</h1>
                        <h1 className="text-center font-light">Marketing & Advertising</h1>
                    </div>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-3'>
                    <div>
                        <img className="h-80 xl:h-96 w-auto p-2 mx-auto" src={restu} alt="" />
                        <h1 className="text-center font-bold">Restu</h1>
                        <h1 className="text-center font-light">Aquascaper's</h1>
                    </div>
                    <div>
                        <img className="h-80 xl:h-96 w-auto p-2 mx-auto" src={bangjek} alt="" />
                        <h1 className="text-center font-bold">Mat Jaidun</h1>
                        <h1 className="text-center font-light">Coordinator's</h1>
                    </div>
                    <div>
                        <img className="h-80 xl:h-96 w-auto p-2 mx-auto" src={ilham} alt="" />
                        <h1 className="text-center font-bold">Mat Jaidun</h1>
                        <h1 className="text-center font-light">Coordinator's</h1>
                    </div>
                </div>
        </div>
    )
}

export default Teamcard
