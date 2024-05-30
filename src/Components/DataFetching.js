import axios from 'axios'
import React ,{useState,useEffect} from 'react'

function DataFetching() {
    const [post,setPosts]=useState([])
  useEffect(()=>{
    axios.get('')
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
  })
    return (
    <div>
      <ul>
       {
        posts.map(post=>( <li key={post.id}>{post.title}</li>
    )
       )} 
      </ul>
    </div>
  )
}

export default DataFetching
