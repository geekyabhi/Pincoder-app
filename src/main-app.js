const express=require('express')
const app=express()
const path=require('path')
const hbs=require('hbs')
const locationfunction=require('./utils/location')
const pincodefunction=require('./utils/pincode')

const port=process.env.PORT || 3000
const publicPath=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../template/views')
const partialPath=path.join(__dirname,'../template/partials')

app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialPath)
app.use(express.static(publicPath))

app.get('/',(req,res)=>{
    res.render("index",{
        title:'Find Pincode or Location',
        name:'Abhinav Thakur',
        message:'This is static page'
    })
})

app.get('/about',(req,res)=>{
    res.render("about",{
        title:'About',
        name:'Abhinav Thakur',
        message:'This is about page'
    })
})

app.get('/help',(req,res)=>{
    res.render("help",{
        title:'Help',
        name:'Abhinav Thakur',
        message:'This is help page'
    })
})

app.get('/code',(req,res)=>{
    // if(!req.query.search){
    //     return  res.send({
    //         error:'Provide the search term'
    //     })
    // }
    // pincodefunction(req.query.search,(error,{message,list}={})=>{
    //     if(error){
    //         return {error:error}
    //     }else{
    //         return{
    //             message:message,
    //             list:list
    //         }
    //     }
    // })
    if(!req.query.location){
        return res.send({
            error:'Provide the location'
        })
    }
    locationfunction(req.query.location,(error,data)=>{
        if(error){
            return res.send({error:error})
        }else{
            return res.send(data)
        }
    })
})

app.get('/about/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Abhinav Thakur',
        errormessage:'Page not found'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Abhinav Thakur',
        errormessage:'Page not found'
    })
})


app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Abhinav Thakur',
        errormessage:'Page not found'
    })
})

app.listen(port,()=>{
    console.log("Starting host "+port)
})