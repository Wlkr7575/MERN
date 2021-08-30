import React,{useState,useEffect} from 'react'
import{Container,Grow} from '@material-ui/core'
import{useDispatch} from 'react-redux'
import{} from 'react-dom';
import{getPosts} from '../../actions/post'
import Post from '../posts/Posts'
const Home=()=>{
    const [currentId,setCurrentId] = useState(null);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts());
        console.log(currentId)
    },[currentId,dispatch]);

    return(
        <Container maxWidth="lg">
            <Grow in>
                <Container>
                    <Post setCurrentId={setCurrentId}/>
                </Container>
            </Grow>
        </Container>
    );
}

export default Home;