import Imgsection from "./Imgsection"

function Projectsection() {
  return (
    <section id="project">
      <div className="grid grid-cols-1 bg-gray-100 py-4 xl:py-36">
        <div className="my-auto ">
          <div className="px-10 lg:px-20 xl:px-20 2xl:px-32 ">
            <div className='w-full space-y-5 xl:space-y-24'>
              <h1 className="text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-left text-emerald-700 font-semibold  border-black border-b-2">
                " Our Projects "
              </h1>
              <div className="grid grid-cols-1 bg-gray-100 rounded-2xl">
                <Imgsection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projectsection
