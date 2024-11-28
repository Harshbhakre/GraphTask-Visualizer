let inp1=document.getElementById("inp1")
let inp2=document.getElementById("inp2")
let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let Main=document.getElementById("main")
let Main2=document.getElementById("main2")
let Frag = document.createDocumentFragment()
let Arr = []


btn1.addEventListener("click", ()=>{
    btn1.style.backgroundColor="white"
    btn1.style.color="black"
    CreateArr()
    CreateBars() 

})
btn1.addEventListener("mouseout",()=>{
    btn1.style.backgroundColor="black"
    btn1.style.color="white"
})
btn2.addEventListener("click", ()=>{
    btn2.style.backgroundColor="white"
    btn2.style.color="black"
    PopItems()
})
btn2.addEventListener("mouseout",()=>{
    btn2.style.backgroundColor="black"
    btn2.style.color="white"
})

function CreateArr(){
  for(let i = inp1.value; i > 0  ; i--){
    Arr.push(i)
  }
Arr.sort()
}

function CreateBars() {
    for (let i of Arr) {
        if (i != null){
            let CP = document.createElement("div"); // Create a new element for each iteration
            CP.className = "height";
            CP.style.height=`${i * 20}px`
            CP.innerHTML = i; 
            Main.appendChild(CP);
        }
        else{
           continue
        }
    }
}


function PopItems(){
    delete Arr[inp2.value -1]
    console.log(Arr)
    let child = Main.lastElementChild;
        while (child) {
            Main.removeChild(child);
            child = Main.lastElementChild;
        }
    CreateBars()
    let CP = document.createElement("div"); // Create a new element for each iteration
    CP.className = "height";
    CP.style.height=`${inp2.value * 20}px`
    CP.innerHTML = inp2.value; 
    Main2.appendChild(CP);
}







































// function HashRemover(){
//     arr=inp2.value.split('#').filter(Boolean).map(Number)
//     console.log(arr)
//     let countleft=0
//     let Currentheightleft=0
//     for(let i=0;i<arr.length;i++){
//         if (arr[i]>Currentheightleft){
//             Currentheightleft=arr[i]
//             countleft+=1
//             // console.log(arr[i])
//         }
        
//     }
//     p1.innerText= "visible walls from left is "+countleft
//     console.log(countleft)
//     let countright=0
//     let Currentheightright=0
//     for(let i = arr.length-1;i>=0;i--){
//         if(arr[i]>Currentheightright){
//             Currentheightright=arr[i]
//             countright+=1
//             // console.log(arr[i])
           
//         }
//     }
//     p2.innerText= "visible walls from right is "+countright
//     console.log(countright)
// }
// function CreationOfWall(){
//     Main.innerHTML=''
//     arr.forEach((height)=>{
//         var newdiv=document.createElement("div")
//             newdiv.className="height"
//             newdiv.style.height= `${height * 20}px`
//             newdiv.innerText=height
//             Main.appendChild(newdiv)
//     })
// }