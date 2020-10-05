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
    fetch('/code?pin='+pincode).then(response=>{
        loader.style.display="none"
        postlist.style.display="block";
        response.json().then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                console.log(data)
                mainmessage.textContent=data.mainmessage
                const officelist=data.list
                
                postunorderlist.innerHTML=""
                officelist.forEach(element => {
                    var newListItem=document.createElement('li')
                    var  newDiv=document.createElement('div')
                    newDiv.className='list-card'
                    
                    var name=document.createElement('h3')
                    name.textContent='Name : '+element.Name

                    var branch=document.createElement('p')
                    branch.textContent='Branch Type : '+element.BranchType

                    var district=document.createElement('p')
                    district.textContent='District : '+element.District

                    var pincode=document.createElement('p')
                    pincode.textContent='Pincode : '+element.Pincode

                    var region=document.createElement('p')
                    region.textContent='Branch Type : '+element.BranchType

                    var state=document.createElement('p')
                    state.textContent='Branch Type : '+element.State

                    newDiv.appendChild(name)
                    newDiv.appendChild(branch)
                    newDiv.appendChild(district)
                    newDiv.appendChild(pincode)
                    newDiv.appendChild(region)
                    newDiv.appendChild(state)
                    newListItem.appendChild(newDiv)
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
    fetch('/code?location='+location).then(response=>{
        loader.style.display="none"
        postlist.style.display="block";
        response.json().then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                console.log(data)
                mainmessage.textContent=data.mainmessage
                const officelist=data.list
  
                postunorderlist.innerHTML=""
                officelist.forEach(element => {
                    var newListItem=document.createElement('li')
                    var  newDiv=document.createElement('div')
                    newDiv.className='list-card'
                    
                    var name=document.createElement('h3')
                    name.textContent='Name : '+element.Name

                    var branch=document.createElement('p')
                    branch.textContent='Branch Type : '+element.BranchType

                    var district=document.createElement('p')
                    district.textContent='District : '+element.District

                    var pincode=document.createElement('p')
                    pincode.textContent='Pincode : '+element.Pincode

                    var region=document.createElement('p')
                    region.textContent='Branch Type : '+element.BranchType

                    var state=document.createElement('p')
                    state.textContent='Branch Type : '+element.State

                    newDiv.appendChild(name)
                    newDiv.appendChild(branch)
                    newDiv.appendChild(district)
                    newDiv.appendChild(pincode)
                    newDiv.appendChild(region)
                    newDiv.appendChild(state)
                    newListItem.appendChild(newDiv)
                    postunorderlist.appendChild(newListItem)
                });
            }
        })
    })
}
})