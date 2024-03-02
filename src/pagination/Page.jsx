import React, {useEffect, useState, lazy, Suspense} from 'react'

const Page = () => {
    const [posts, setPosts] = useState([]);
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const Posts = lazy(()=>import('./Posts'));
    const Pagination = lazy(()=>import('./Pagination'));
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()).then(posts=>{
            setPosts(posts);
            const noOfPages = []
            for(let index=0;index<Math.ceil(posts.length/10);index++){
                noOfPages.push(index)
            }
            setPages(noOfPages)
        })
    }, [])

    const onPageChange = (value) => {
        setCurrentPage(value)
    }

  return (
    <div>
        <Suspense fallback={<p>loading...</p>} >
            <Posts posts={posts.slice(currentPage*10, (currentPage+1)*10)}/>
            <Pagination pages={pages} onPageChange={onPageChange}/>
        </Suspense>
    </div>
  )
}

export default Page