let btnX1=document.getElementById("btnX1")
let btnX2=document.getElementById("btnX2")
let text=document.getElementById("text")
let text2=document.getElementById("text2")
let dooro=document.getElementById("dooro")

let back=document.getElementById("back")
let back2=document.getElementById("back2")
let next2=document.getElementById("next2")
let next=document.getElementById("next")

let go_back=document.getElementById("Go_back")

go_back.style.display="None"

back.style.display="none"
next.style.display="none"
back2.style.display="none"
next2.style.display="none"


const Somali=[
"1.Nin aan dhididin waxba ma dheefin",
"2 .Rag waa tol iyo xeero toban leh",
"3 .Far keliya fool ma dhaqdo",
"4 .Nin aan talin jirin, looma taliyo",
"5 .Nin gurran iyo geed gurran midna laguma gabboodo",
"6 .Gacal isma dhaafee godob ayaa la kala galaa",
"7 .Geel jirraban iyo geesi beena ah midna ma jabo",
"8 .Aqoon la’aani waa iftiin la’aan.",
"9 .Dab lama qabto dahabna lama qariyo.",
"10.Intaadan falin ka fiirso."  
];

const Enlish=[
    "1. Actions speak louder than words.",
    "2. Knowledge is power.",
    "3. Hard work pays off.",
    "4. The early bird catches the worm",
    "5. Practice makes perfect",
    "6. Better late than never ",
    "7. Time is money.",
    "8. Patience is a virtue.",
    "9. Don’t judge a book by its cover",
    "10. Honesty is the best policy."
]

// value somalia
let value=0
text.innerHTML=Somali[value]

text.style.display="none"

// value English
let value_Enlish=0
text2.innerHTML=Enlish[value_Enlish]
text2.style.display="none"


// Button koowaad
btnX1.addEventListener("click",()=>{
    btnX2.style.display="none"
    text.style.display="flex"
    dooro.style.display="none"
    btnX1.style.display="none"
    back.style.display="flex"
    next.style.display="flex"

})
// Button labaad
btnX2.addEventListener("click",()=>{
    btnX2.style.display="none"
    text.style.display="none"
    text2.style.display="flex"
    dooro.style.display="none"
    btnX1.style.display="none"
    back2.style.display="flex"
    next2.style.display="flex"

})
// next and back somalia

next.addEventListener("click",()=>{
    if(value<Somali.length-1){
    value++
    text.innerHTML=Somali[value] }
    if(value===9){
        go_back.style.display="flex"

    }
})

back.addEventListener("click",()=>{
    if(value>0){
    value--
    text.innerHTML=Somali[value] }
})
// eglish Next and back

next2.addEventListener("click",()=>{
   
 

    if(value_Enlish< Enlish.length-1){
        value_Enlish++
        text2.innerHTML=Enlish[value_Enlish] 
    
    }

  else if(value_Enlish === 9){
        go_back.style.display="flex"
      
    }
  
})

back2.addEventListener("click",()=>{
   
    if(value_Enlish > 0){
        value_Enlish--
        text2.innerHTML=Enlish[value_Enlish] 
    }
})

go_back.addEventListener("click",()=>{
    
    back2.style.display="none"
    next2.style.display="none"
    text2.style.display="none"
    dooro.style.display="flex"
    go_back.style.display="none"
    btnX1.style.display="inline"
    btnX2.style.display="inline"
    next.style.display="None"
    back.style.display="None"
    text.style.display="None"
       

})

// forms

let from =document.getElementById("From")
let Name=document.getElementById("Name")
let Email=document.getElementById("Email")
let Password=document.getElementById("password")
let Confrim=document.getElementById("Confirm-password")
let Span=document.getElementById("Span")
let Span2=document.getElementById("Span2")
let btn1=document.getElementById("btn")
let h1=document.getElementById("h1")


Span.style.display="None"
Span1.style.display="None"
Span2.style.display="None"


btn1.addEventListener("click",(events)=>{
    events.preventDefault()
    
if (Name.value === "" || Email.value ==="" || Password.value ==="" || Confrim.value ===""){
    alert("Fadlan Formka buuxi")
}

else if (Password.value.length < 8){
  Span.style.display="flex"

}
else if (Password.value.length != Confrim.value.length){
    Span.style.display="None"
    Span1.style.display="flex"
}
else if (Span2){
   from.style.display="None"
   h1.style.display="None"
   Span2.style.display="flex"
}  
})