import {makeStyles} from '@material-ui/core/styles'

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
    },
    [theme.breakpoints.down('sm')]:{
    mainContainer:{
        flexDirection:'column-reverse'
    }
}
}))