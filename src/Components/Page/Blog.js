import { Link } from "react-router-dom"
import BlogForm from "../Partials/BlogForm"

export default function Blog(props) {
    const blogPosts = props.posts.map((post, i)=>{
        return(
            <Link to={`/blog/${post.id}`}>
                {post.title}
            </Link>
        )
    })
    return(
        <>
            <h2>Blog</h2>
            {blogPosts}
        </>
    )
}