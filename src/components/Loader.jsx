import { dotSpinner } from 'ldrs'
dotSpinner.register()

export const Loader = () => {
  return (
    <>
    <div className='container-loader'>
        <l-dot-spinner 
            size="50"
            speed="0.9" 
            color="black" 
        ></l-dot-spinner>
    </div>
    </>
  )
}



