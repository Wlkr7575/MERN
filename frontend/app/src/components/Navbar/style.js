import { makeStyles } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme)=>({
    appBar:{
        borderRadius:15,
        margin:'30px 0',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:'10px',
        paddingRight:'10px'
    },
    heading:{
        color:'rgba(0,183,255,1)',
        TextDecoration:'none',
    },
    image:{
        marginLeft:'15px'
    },
    toolbar:{
        display:'flex',
        justifyContent:'flex-end',
        width:'400px'
    },
    profile:{
        display:"flex",
        justifyContent:'space-between',
        flexWrap:'wrap',
        width:'400px'
    },
    userName:{
        display:'flex',
        alignItems:'center'
    },
    brandContainer:{
        display:'flex',
        alignItems:'center'
    },
    puple:{
        color:theme.palette.getContrastText(deepPurple[500]),
        backgroundColor:deepPurple[500]
    }
}))