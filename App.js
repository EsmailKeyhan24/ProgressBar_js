const spans=document.querySelectorAll('.progress-bars>span')
spans.forEach((val)=>{
    let currentValue=val.getAttribute('data-width')
    val.style.width=currentValue
    val.innerHTML=currentValue      
})

// val.style.width=val.dataset.width;
//     val.innerHTML=val.dataset.width;
//     console.log(val.getAttribute('data-width'));
