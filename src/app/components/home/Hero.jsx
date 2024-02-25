import Image from 'next/image'
import '../../scss/pages/home/hero.scss'

const Hero = () => {
  return (
    <div className='hero_container'>
        <Image src="/home/water2.png" alt="ozonos_water_hero_image" objectPosition='right' width={5000} height={2200} />
    </div>
  )
}

export default Hero