const jwt = require('jsonwebtoken')

const auth = async(req,res,next)=>{
    try {
        console.log(req.headers.Authorization)
        const token = req.headers.Authorization.split('')[1];
        console.log(token)
        const isCustomAuth = token.length<500;
        console.log(toisCustomAuthken)

        let decodedData;

        if(token && isCustomAuth){
            decodedData = jwt.verify(token,'test');
            req.userId = decodedData?.id;
        }else{
            decodedData = jwt.decode(token)

            req.userId= decodedData?.sub;
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = auth