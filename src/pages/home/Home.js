import React from 'react'
import RecipeLIst from '../../components/RecipeLIst'
import {useFetch} from '../../hook/useFetch'

function Home() {
  const {data, isPending, error} = useFetch('http://localhost:3000/recipes')

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'> Loading </p>}
      {data && <RecipeLIst recipes={data} />}
    </div>  
  )
}

export default Home