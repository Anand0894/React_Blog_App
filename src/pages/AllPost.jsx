import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components'
import service from '../appwrite/config'

export default function AllPost() {
     const [posts , setPosts ] = useState([])
     useEffect(()=> {} , [])
     service.getPost([]).then((posts)=> {
        if(posts){
            setPosts(posts.document)
        }
     })
  return (
    <div className='w-full py-8'>
       <Container>
         <div className='flex flex-wrap'>
            {posts.map((post)=> {
                <div key={post.$id} className='p-2 w-1/4'><PostCard  {...post}/></div>
            })}
         </div>
       </Container>

    </div>
  )
}
