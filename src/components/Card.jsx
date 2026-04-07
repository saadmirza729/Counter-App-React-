import React from 'react'

const Card = () => {
  return (
    <div className='mt-3 w-[300px] shadow-lg p-6 bg-white text-black rounded-2xl flex flex-col content-center items-center'>
        <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJ7P7hmRUI8mmTPRwaRWsmIwDln4oB8nQOoXpmvYArI2EpaTG5Kf6r-c&s" alt="" />
        <h3 className='font-bold text-2xl'>
            Heading
        </h3>
        <p className='text-sm  text-justify mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laboriosam voluptatibus nihil dolores facilis enim eligendi eum! Officiis dolores praesentium deleniti ea ratione! Provident inventore amet, id incidunt harum enim.
        </p>
    </div>
  )
}

export default Card