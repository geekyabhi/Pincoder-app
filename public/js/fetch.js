const pincodeform=document.querySelector('#pincodeform')
const locationform=document.querySelector('#locationform')
const searchlocation=document.querySelector('#inputlocation')
const searchpincode=document.querySelector('#inputpincode')
const section2=document.querySelector('.section-2')
const postlist=document.querySelector('.post-list')
const postunorderlist=document.querySelector('.post-list ul')
const mainmessage=document.querySelector('.main-message')
const loader=document.querySelector('#loader-1')


loader.style.display='none'
pincodeform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const pincode=searchpincode.value
    mainmessage.textContent='Loading...'
    loader.style.display='block'
    if(pincode){
    fetch('https://api.postalpincode.in/pincode/'+pincode).then(response=>{
        loader.style.display="none"
        postlist.style.display="block";
        response.json().then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                console.log(data)
                mainmessage.textContent=data[0].Message
                const officelist=data[0].PostOffice
                
                postunorderlist.innerHTML=""
                officelist.forEach(element => {
                    var newListItem=document.createElement('li')
                    var newListItemText=document.createTextNode('Name : '+element.Name+'-----Branch Type : '+element.BranchType+'-----District : '+element.District+'-----Pincode : '+element.Pincode+'-----Region : '+element.Region+'-----State : '+element.State)    
                    newListItem.appendChild(newListItemText)
                    postunorderlist.appendChild(newListItem)
                });
            }
        })
    })
    }
})

locationform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=searchlocation.value
    section2.style.display="block"
    loader.style.display='block'
    mainmessage.textContent='Loading...'
    if(location){
    fetch('https://api.postalpincode.in/postoffice/'+location).then(response=>{
        loader.style.display="none"
        postlist.style.display="block";
        response.json().then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                console.log(data)
                mainmessage.textContent=data[0].Message
                const officelist=data[0].PostOffice
  
                postunorderlist.innerHTML=""
                officelist.forEach(element => {
                    var newListItem=document.createElement('li')
                    var newListItemText=document.createTextNode('Name : '+element.Name+'-----Branch Type : '+element.BranchType+'-----District : '+element.District+'-----Pincode : '+element.Pincode+'-----Region : '+element.Region+'-----State : '+element.State)    
                    newListItem.appendChild(newListItemText)
                    postunorderlist.appendChild(newListItem)
                });
            }
        })
    })
}
})