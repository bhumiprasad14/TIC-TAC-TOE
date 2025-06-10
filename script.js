let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newGamebtn=document.querySelector("#newbtn");
let mssgcontainer=document.querySelector(".mssgcontainer");
let mssg=document.querySelector("#mssg");
let turnO=true;  //playerX,playerO
let count=0;//to track draw
//1D array
// let arr1=["apple","banana","litchi"];
// //2D array
// let arr2=[
//         ["apple","litchi"],
//         ["potato","tomato"],
//         ["shirts","trousers"]
//     ];

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame=()=>{
    turnO=true;
    count=0;
    enableboxes();
    mssgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        console.log("box clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
       box.disabled=true; //as soon as the button is clicked 
       // that specific button is disabled 
        // so that the value doesnot 
        // change on clicked again
        count++;

        let iswinner=checkwinner();
        if(count===9 && ! iswinner){
            gameDraw();
        }

    });
});
const gameDraw=()=>
{
    mssg.innerText='Game was a Draw';
    mssgcontainer.classList.remove("hide");
    disableboxes();
}
const disableboxes=()=>
{
    for( let box of boxes)
    {
        box.disabled=true;
    }
};
const enableboxes=()=>
{
    for(let box of boxes)
    {
            box.disabled=false;
            box.innerText="";
    }
    
};
const showwinner=(winner)=>
{   if(winner=='X')
{
    mssg.innerText='Congratulations,Winner is X';

}
else{
    mssg.innerText='Congratulations,Winner is O';
}
    
    mssgcontainer.classList.remove("hide");
    disableboxes();
    
};
const checkwinner=()=>{
    for(pattern of winpatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1!="" && val2!="" && val3!=""){
            if(val1==val2 && val2==val3){
                console.log("winner",val1);
                showwinner(val1);
                return true;
            }
        }
    }
};
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
