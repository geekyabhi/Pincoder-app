const request=require('request')
const locationfunction=(location,callback)=>{
    const cityNameUrl='https://api.postalpincode.in/postoffice/'+encodeURIComponent(location)
    console.log(location)
    request({url:cityNameUrl , json:true},(error,response)=>{
        // console.log("HEllo world")
        if(error){
            callback("Unable to connect to the app !",undefined)
        }else if(!response.body[0].PostOffice){
            callback("No records found !",undefined)
        }else{
            // console.log(response.body[0].Message)
            // console.log(response.body[0].PostOffice)
            callback(undefined,{
                mainmessage:response.body[0].Message,
                // list:"This is a good app"
                list:response.body[0].PostOffice
            })
        }
    })
}
module.exports=locationfunction