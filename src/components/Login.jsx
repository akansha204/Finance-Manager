import React,{useState} from 'react'

function Login(props) {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);

    }


    return (
        <>
          <div className=" h-[75vh] w-screen bg-[#d9d9d9]  rounded-t-3xl">
           <form 
              onSubmit={handleSubmit} 
              className='flex flex-col justify-center'
           >
            <div className="p-8 ">
              <label htmlFor="email" className="block text-lg font-medium text-black-700 mt-7">
              Username Or Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 bg-[rgba(164,52,238,0.11)] border border-gray-300 rounded-lg"
                placeholder="Example@gmail.com"
                required
              />
            </div>

            <div className="pt-1  p-8">
              <label htmlFor="password" className="block text-lg font-medium text-black-700">
              Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 bg-[rgba(164,52,238,0.11)] border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="• • • • • • • •"
                required
              />
            </div>
            <div className="flex justify-center items-center flex-col">
               <button
                  type="submit"
                  className=" bg-[#A434EE] text-[#093030] font-bold py-2 px-16 rounded-3xl hover:bg-[#9e5bcb] hover:text-white"
                >
                Log In
                </button>
                <button
                  type="submit"
                  className=" bg-[rgba(164,52,238,0.11)] text-[#093030] font-bold py-2 px-14 rounded-3xl mt-5"
                >
                Sign Up
                </button>
                <div className="text-center  text-sm text-gray-400 mt-9">ADMIN</div>

            </div>
            
           </form>
      
          </div>
        </>
    )
}

export default Login