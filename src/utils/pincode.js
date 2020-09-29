const request=require('request')
const pincodefunction=(pincode,callback)=>{
    const pinCodeUrl='https://api.postalpincode.in/pincode/'+pincode
    request({url:pinCodeUrl , json:true},(error,response)=>{
    if(error){
        callback("Unable to connect to app !!",undefined)
    }else if(!response.body[0].PostOffice){
        callback("No records found !!",undefined)
    }
    else{
        callback(undefined,{
            mainmessage:response.body[0].Message,
            list:"This is a good app"
            // list:response.body[0].PostOffice[0]
        })
    }
})
}
module.exports=pincodefunction