'use client'
import { useAppContext } from '@/app/context';
import '@/app/scss/components/spinner.scss'

const Spinner = () => {
  const {loading} = useAppContext();

  return (
    <>
      {loading && (
        <div className='spinner_container'>
        <div className="sk-chase">
            
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    </div> )}
    </>
  )
}

export default Spinner