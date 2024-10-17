import { avery, logo } from './FetchImages'

function Home() {
  return (
    <div className='flex flex-col md:flex-row w-full min-h-screen gap-[5%] items-center md:items-stretch md:justify-evenly bg-reviot-blue'>
        <div className='flex flex-col gap-5 w-[90%] md:w-[45%] sm:mt-[5%] m-2 h-[45vh] sm:h-[30vh] md:h-[90vh]'>
            <div className='size-20 md:size-32'>
                <img src={logo} alt='home' className='w-auto h-auto object-cover rounded-3xl' />
            </div>
            <h2 className='font-seasons text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center md:text-left'> REVIOT DYNAMICS</h2>
            <h3 className='font-garet text-reviot-cyan text-4xl  md:text-xl6xl lg:text-7xl mt-4 text-center md:text-left'>Smart Living, Automated Connectivity.</h3>
        </div>
        <div className='flex w-[90%] md:w-[45%] items-center justify-center h-[50vh] sm-[60vh] md:h-[90vh] rounded-3xl'>
            <div className='flex size-5/6 '>
                <img src={avery} alt='home' className='w-full h-full object-cover rounded-3xl' />
            </div>
        </div>    
    </div>
  )
}

export default Home
