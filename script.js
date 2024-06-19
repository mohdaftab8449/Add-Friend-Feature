let image=document.querySelector("img")
let addFriend=document.querySelector("#add-friend")
let button=document.querySelector("button")
let isFriend="yes"
button.addEventListener("click",()=>{
    if(isFriend == "yes"){
        addFriend.innerHTML="Friends"
    addFriend.style.color="Green"
    button.innerHTML="Remove Friend"
    isFriend="no"
    }
    else 
    {
        addFriend.innerHTML="Stranger"
        addFriend.style.color="brown"
        button.innerHTML="Add Friend"
        isFriend="yes" 
    }
        
})