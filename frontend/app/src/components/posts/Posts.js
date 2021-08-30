import React from 'react'
import {useSelector} from 'react-redux'
import Post from './Post/post'
import useStyle from './style'
import {Grid,CircularProgress} from '@material-ui/core'
const Posts = ({setCurrentId})=>{
    const classes = useStyle();
    const posts =useSelector((state)=>state.posts)
    return(
        !posts.length ? <CircularProgress/>:(
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}> 
            {posts.map((post)=>(
                <Grid item key={post._id} xs={12} sm={4}>
                    <Post post={post} setCurrentId={setCurrentId}/>
                </Grid>
            ))

            }
            </Grid>
        )
        // <div>
        //     <h1 className={classes.something}>Posts</h1>
        //     <Post/>
        //     <Post/>
        // </div>
    );
}
export default Posts;