import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'


import ReactionButtons from "./ReactionButtons";

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {   deletePost } from './postsSlice'
import { useNavigate } from 'react-router-dom'
//import EditPostForm from './EditPostForm';



const SinglePostPage = () => {
    const { postId } = useParams()
    const navigate = useNavigate()

    const post = useSelector((state) => selectPostById(state, Number(postId)))

    const [,setTitle] = useState(post?.title)
    const  [,setContent] = useState(post?.body)
    const [, setUserId] = useState(post?.userId)
    const [, setRequestStatus] = useState('idle')

    const dispatch = useDispatch()

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }
    

    const onDeletePostClicked = () => {
        try {
            setRequestStatus('pending')
            dispatch(deletePost({ id: post.id })).unwrap()

            setTitle('')
            setContent('')
            setUserId('')
            navigate('/')
        } catch (err) {
            console.error('Failed to delete the post', err)
        } finally {
            setRequestStatus('idle')
        }
    }

    return (
        <article>
            <Link to="/">Back To Index</Link>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p className="postCredit">
                
                <button ><ReactionButtons post={post} /></button>
                <button type='button' className='editbutton'><Link to={`/post/edit/${post.id}`} className='link'>Edit Post</Link></button>

                <button className="deleteButton"
                    type="button"
                    onClick={onDeletePostClicked}
                >
                    Delete Post
                </button>
                
            </p>
        </article>
    )
}

export default SinglePostPage
