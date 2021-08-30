import React,{useState,useEffect} from 'react'
import {AppBar,Avatar,Button,Toolbar,Typography} from '@material-ui/core'
import {Link,useHistory,useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Form from '../Form/Form'
import useStyle from './style'
const Navbar =({currentId,setCurrentId})=>{
    const classes = useStyle();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const logout = ()=>{
        dispatch({type:'LOGOUT'});
        history.push('/');
        setUser(null);
    }
    const [user,setUser] =useState(JSON.parse(localStorage.getItem('user')));
    useEffect(()=>{
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('user')))
    },[location])
    console.log(user)
    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading}  variant="h2" align="center">Memories</Typography>
        </div>
        <Toolbar className={classes.toolbar}>
            {user?(
                <div className={classes.profile}>
                    <Avatar className={classes.puple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
            ):(
                <Button component={Link} to="/auth" variant="contained" color="primary">Signin</Button>
            )
        }
        </Toolbar>
    </AppBar>
    )
    }
export default Navbar;