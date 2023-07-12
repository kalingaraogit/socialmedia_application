// side bar 
const menuItem = document.querySelectorAll('.menu-item');

// remove active classList.......
const removeActive = () =>{
    menuItem.forEach(item=>{
        item.classList.remove('active')
    });
}

menuItem.forEach(item =>{
    item.addEventListener('click',()=>{
        removeActive();
        item.classList.add('active');

        if(item.id != 'notice'){
            document.querySelector('.notification').style.display = 'none';
        }
        else{
            document.querySelector('.notification').style.display = 'block';
            document.querySelector('#notice .count ').style.display = 'none';
        }
    })
})

//----------messages

const message = document.querySelector('#message');
const messageBox = document.querySelector('#message-box');

message.addEventListener('click',()=>{

    messageBox.classList.add('box-sh');
    message.querySelector('.count').style.display = 'none'
    setTimeout(()=>{
        messageBox.classList.remove('box-sh');
    },3000);
})

// THEME CUSTOMIZATION

const thememenu = document.querySelector('#thememenu');
const themeDx = document.querySelector('.theme');

thememenu.addEventListener('click',()=>{
    themeDx.style.display = 'grid'
})

// FRIEND REQUEST BUTTON
const addBtn = document.querySelectorAll('#add');
const delbtn = document.querySelectorAll('#del');

addBtn.forEach(element =>{
    element.addEventListener('click',()=>{
        element.parentElement.parentElement.style.display='none'
    })
});

delbtn.forEach(element =>{
    element.addEventListener('click',()=>{
        element.parentElement.parentElement.style.display='none'
    })
});

// WINDOW EVENT

window.addEventListener('scroll',()=>{
    themeDx.style.display = 'none'
    document.querySelector('.notification').style.display = 'none';
})