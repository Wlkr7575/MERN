import React,{useState,useEffect} from 'react'
import {TextField,IconButton,Button,Typography,Dialog, Tooltip} from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FileBase from 'react-file-base64'
import {useDispatch,useSelector} from 'react-redux'
import useStyle from './style'
import { createPost,updatePost } from '../../actions/post'
const Form = ({currentId,setCurrentId})=>{
    const[postData,setPostData] = useState({
        creator:'',title:'',message:'',tags:'',selectedFile:''
    })
    const classes = useStyle();
    const post = useSelector((state)=> currentId ? state.posts.find((p)=>p._id === currentId):null)
    const dispatch = useDispatch();
    useEffect(()=>{
        if(post){ 
            setPostData(post) ;
            handleClickOpen()
        };
    },[post])
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(currentId){
            dispatch(updatePost(currentId,postData))
            alert('Memories updated')
        }else{
            dispatch(createPost(postData))
            alert('Created Memories')
        }
        clear()
        handleClose()
    }
    const clear = () =>{
        setCurrentId(null);
        setPostData({creator:'',title:'',message:'',tags:'',selectedFile:''})
    }
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return(
        <div>
            <Tooltip title="Шинэ пост оруулах" aria-label="add">
        <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
          <AddCircleOutlineIcon/>
        </IconButton>
        </Tooltip>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <h1 className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} style={{ backgroundColor: 'white',}}>
                <Typography variant="h6">
                    {currentId? 'Editing':'Creating'} a Memory
                </Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})}></TextField>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}></TextField>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})}></TextField>
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value.split(',')})}></TextField>
                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})}>
                    </FileBase>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </h1>
        </Dialog>
        </div>
    )
}
export default Form;