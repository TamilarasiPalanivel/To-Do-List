import React from 'react'
const Home=()=>
{
    return (
        <div className='bg-gray-200 w-screen h-screen flex justify-center items-center'>
            <div className='flex flex-col gap-4 items-center'>
            <div>
                <h2 className=' font-bold text-2xl'>ToDo List</h2>
            </div>
        
        <div>
                <input type='text' placeholder='Enter your task' className='p-2 border rounded'/>
                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Add</button>

        </div>
        </div>
        </div>
        
    );
};
export default Home