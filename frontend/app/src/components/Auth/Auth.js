import React ,{useState}from 'react'
import {Avatar,Button,Paper,Grid,Typography,Container,} from '@material-ui/core'
import {GoogleLogin} from 'react-google-login'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './input'
import Icon from './icon'
import useStyle from './style'
import {signin,signup} from '../../actions/auth'

const initState ={firstname:'',lastname:'',email:'',password:'',confirmPassword:''}
const Auth = () =>{
    const [showPassword,setShowPAssword] = useState(false);
    const classes = useStyle();
    const dispatch = useDispatch();
    const history = useHistory();
    const handleShowPassword = () => setShowPAssword((prevShowPassWord)=>!prevShowPassWord)
    const [isSignUp,setIsSignUp] = useState(false);
    const [formData,setFormData] = useState(initState)
    const handleSubmit = (e) =>{
            e.preventDefault();
            if(isSignUp){
                if(formData.password === formData.confirmPassword){
                     dispatch(signup(formData,history))
                }else{
                      alert('НУуц үг таарахгүй байна')
            }
            }else{
                dispatch(signin(formData,history))
            }
            console.log(formData)
    }
    const handleChnage = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const swithcMode = () =>{
        setIsSignUp((prevIsSignUp)=>!prevIsSignUp);
        handleShowPassword(false);
    }
    const googleSuccess = (res) =>{
        const result = res?.profileObj;
        const token =  res?.tokenId;

        try {
            dispatch({type:'AUTH',data:{result,token}})
            history.push('/');
            console.log(initState.firstname)
        } catch (error) {
            console.log(error)
        }
    }
    const googleFailure = () =>{
        console.log('Google sign in  was unsuccessful.Try Again Later')
    }
    return(
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">{isSignUp ?'SignOut':'Signin'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                <Input name="firstname" label="First Name" handleChange={handleChnage}  half></Input>
                                <Input name="lastname" label="Last Name" handleChange={handleChnage} half></Input>
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChnage} type='email'></Input>
                        <Input name="password" label="Password" handleChange={handleChnage} type={showPassword?'text':'password'} handleShowPassword={handleShowPassword}></Input>
                        {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChnage} type="password"></Input>}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    {isSignUp ? 'Sign Up' : 'Sign in'}
                    </Button>
                    <GoogleLogin
                    clientId="16722487536-hseam9mtss0p2l8m2ccbfpj5h6h754t8.apps.googleusercontent.com"
                    render={(renderProps)=>(
                        <Button className={classes.googleButton} color="primary" onClick={renderProps.onClick} disabled ={renderProps.disabled} startIcon={<Icon/>} variant="contained">GoogleSignIn</Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy='single_host_origin'
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={swithcMode}>
                                {isSignUp ?'Already have an account ? Sign In':"Don't have account ? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}
export default Auth;