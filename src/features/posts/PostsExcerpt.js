
import { Link } from 'react-router-dom';

const PostsExcerpt = ({ post }) => {
    return (
        <article>
            
                <Link to={`post/${post.id}` } className='link'><h2>{post.title}</h2></Link>
            
        </article>
    )
}
export default PostsExcerpt