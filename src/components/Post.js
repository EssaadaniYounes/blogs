import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Post.module.css'
function Post({ post }) {
    return (
        <div>
            <Link to={'/posts/' + post.id} className={classes.post}>
                <div className={classes.imgContainer}>
                    <img src={post.thumbnail} alt={post.title} className={classes.img} />
                </div>
                <h4 className={classes.title}>
                    {post.title}
                </h4>
            </Link>
            <p className={classes.tags}>
                {post.tags.splice(0, 3).map(tag => <span className="tag" key={tag}> #{tag}</span>)}
            </p>
        </div>
    )
}

export default Post