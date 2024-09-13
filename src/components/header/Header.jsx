/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const Header = ({page}) => {
    return (
        <div className='w-full'>
          <div className='bg-gradient-to-tr  w-full'>
            <div className='w-[80%] m-auto flex py-5 px-2 h-[80px] justify-between'>
            <span className='flex text-4xl gap-x-4 cursor-pointer'>
              {/* <IoFastFoodOutline size={40} color='white' /> */}
              <span>Learn</span>
            </span>
            {/* <span className='text-center items-center'>
              <Command className='bg-white text-rose-600 rounded w-[300px]'>
                <CommandInput placeholder='Enter the shop or dish name' />
              </Command>
            </span> */}
            <span className='text-center items-center my-auto'>
              <Link to='/login'>
                <button className="text-lg">
                  SignIn
                </button>
              </Link>{' / '}
              <Link to='/sign-up'>
                <button className="text-lg">
                  Signup
                </button>
              </Link>
            </span>
            </div>
          </div>
    
          <div className='w-full'>
            <div className='w-[80%] m-auto'>
    
          <span className=''>
            <ul className='flex gap-x-1 items-center text-center text-lg'>
              <Link to=''>
                <button className={`text-md rounded-[5px] transition duration-300 p-3 ${page==='home'?"text-rose-500":""}`}>
                  Home
                </button>
              </Link>
              <Link to=''>
                <button className=' text-md rounded-[5px] transition duration-300 p-3'>
                  School
                </button>
              </Link>
              <Link to=''>
                <button className=' text-md rounded-[5px] transition duration-300 p-3'>
                  College
                </button>
              </Link>
              <Link to=''>
                <button className=' text-md rounded-[5px] transition duration-300 p-3'>
                  Roadmap
                </button>
              </Link>
              <Link to=''>
                <button className=' text-md rounded-[5px] transition duration-300 p-3'>
                  Contact Us
                </button>
              </Link>
            </ul>
          </span>
            </div>
          </div>
        </div>
      )
}

export default Header
