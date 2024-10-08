import { Link } from 'react-router-dom'
import login from '/images/login.jpg'

const Login = () => {
    
  return (
    <div className="h-screen w-screen fixed top-0 left-0 flex items-center justify-center overflow-hidden ">
      <div className="bg-white w-11/12 md:h-1/2 md:w-4/5 grid grid-cols-1 md:grid-cols-2 shadow-2xl">

      {/* left side */}
      <div className='relative flex items-center justify-center bg-black'>
        <img src={login} alt='login' className='object-cover w-full h-full opacity-50 ' />
        <h1 className="absolute text-4xl font-bold text-white">Welcome Back</h1>
      </div>

      {/* right side */}
      <div className='flex flex-col items-center justify-center p-8 bg-white shadow-2xl'>
        <h2 className='text-3xl mb-6 font-semibold'>Login</h2>

        <form className='space-y-4 w-full max-w-xs'>
          <div>
            <label className='block mb-1 text-lg'>Email</label>
            <input type='email' placeholder='Enter your email' className='w-full px-4 py-2 border rounded-md focus:outline-none' />
          </div>
          <div>
            <label className='block mb-1 text-lg'>Password</label>
            <input type='password' placeholder='Enter your password' className='w-full px-4 py-2 border rounded-md focus:outline-none' />
          </div>
          <div className='mt-6'>
          <button className='w-full py-2 bg-blue text-white rounded-md'>Login</button>
          </div>
            <Link to='/sign-up' className='text-blue text-xs'>Create New One?</Link>
        </form>

      </div>
      </div>
    </div>
  )
}

export default Login;
