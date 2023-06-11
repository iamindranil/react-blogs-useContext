import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from '../components/Spinner'
const Blogs = () => {
  //consume appcontext using usecontext hook
  const{posts,loading}=useContext(AppContext)
  // console.log("line7")
  // console.log(posts)
  return (
    <div>
      {
        loading?(<Spinner/>):(
          posts.length===0?(
          <div>
            <p>No post found</p>
            </div>):(posts.map((post)=>(
              <div key={post.id}>
                <p className='title text-3xl'>{post.title}</p>
                <p>
                  By <span>{post.author}</span>on<span>{post.category}</span>
                </p>
                <p>Posted on {post.date}</p>
                <p>{post.content}</p>
                <div>
                  {Array.isArray(post.tags) && post.tags.map((tag,index)=>{
                      return <span key={index}>{`#${tag}`}</span>
                    })}
                </div>
              </div>
            )))
        )
      }
    </div>
  )
}

export default Blogs
