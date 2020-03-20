let calculator = document.querySelector(".calculator")
let display = document.querySelector(".display")
let result = document.querySelector(".result")
let previous = document.querySelector(".previous")
let equal = document.querySelector(".equal")
let clear = document.querySelector(".clear")
let c = 0
let c1 = 0


const getInfo = (e) =>{
   
    if(e.target.classList.contains("item")){
       if(c1<c){
      previous.innerHTML = `Ans = ${result.innerHTML}`
      result.innerHTML = ""
      c1++
   }
       result.innerHTML += e.target.innerHTML
    }else if(e.target.classList.contains("symb")){
       if(c1<c){
      previous.innerHTML = `Ans = ${result.innerHTML}`
      result.innerHTML = ""
      c1++
   }
       result.innerHTML+= e.target.id
    }
}

const calculate = ()=>{
   previous.innerHTML = `${result.innerHTML}=`
   if(result.innerHTML.includes("/")){
      result.innerHTML = (eval(result.innerHTML)).toFixed(4)
   }else{
      result.innerHTML = BigInt(eval(result.innerHTML))
   }
   result.classList.add("active")
   previous.classList.add("move")
      setTimeout(()=>{
      previous.classList.remove("move")
   },500)
   setTimeout(()=>{
      result.classList.remove("active")
   },850)
   c++
   
}

const clearC = (e)=>{
   if(e.target.classList.contains("clear")){
      result.innerHTML = ""
      previous.innerHTML = ""
      c =0
      c1 = 0
   }
}


clear.addEventListener("click",clearC)
calculator.addEventListener("click",getInfo)
equal.addEventListener("click",calculate)