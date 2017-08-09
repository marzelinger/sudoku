var board = [[0,0,0,0],
             [0,0,0,0],
             [0,0,0,0],
             [0,0,0,0]]
var oboard =[[0,0,0,0],
             [0,0,0,0],
             [0,0,0,0],
             [0,0,0,0]]
createBoard()


function createBoard(){
    var save = -1
    for(var i = 0; i <4; i ++){
        
        for(var j = 0; j <4; j++){
            
            var value = Math.floor(Math.random()*4+1)
            // console.log(value)
            var check = checkValue(value,i,j)
            // console.log(value)
            var trys = 1
            while(check == false){
                // console.log(`${i+1}${j+1}`)
                // console.log(value)
                if(trys == 5){
                    console.log("try again")
                    value = save
                    save--
                //   board = oboard
                //   createBoard()
                }
                else if(value<4){
                    value++
                }
                else{
                    value = 1
                }
                check = checkValue(value,i,j)
                // console.log(check)
                trys++
            }
            // console.log(`${i+1}${j+1}`)
            // console.log(value)
            board[i][j] = value
            if(Math.floor(Math.random()*4+1)==2){
                var x = document.createElement("INPUT");
                x.setAttribute("type", "text");
                x.style.width = "30px"
                x.style.border = "none"
                x.style.backgroundColor = "#D8BFD8"
                x.style.margin = "0px"
                x.style.textAlign = "center"
                console.log(x)
                x.setAttribute("id", `tb${i}${j}`)
                var iv = `tb${i}${j}`
                 x.setAttribute("onchange", `checkUserVal(${iv})`)
                document.getElementById(`${i+1}${j+1}`).appendChild(x)
            }
            else{
                document.getElementById(`${i+1}${j+1}`).innerHTML = board[i][j]
            }
        }
    }
    console.log(board)
}

function checkValue(num, yloc,xloc){
    var currclass = document.getElementById(`${yloc+1}${xloc+1}`).getAttribute("class")
    var loc = currclass.split(" ")[2]
    var square = document.getElementsByClassName(loc)
    // console.log(square)
    //check square
    for(var k = 0; k < 4; k++){
        if(square[k].innerHTML == num){
            // console.log("no")
            return false
        }
        //check row
        else if(board[yloc][k] == num && k!=xloc){
            // console.log("bad")
            return false
        }
        //check col
        else if(board[k][xloc] == num && k!=yloc){
            // console.log("bad also")
            return false
        }
}
return true
    
}

function checkUserVal(idval){
    var val = idval.value
    var xl = Number(idval.getAttribute("id").split("")[3])
    var yl = Number(idval.getAttribute("id").split("")[2])
    console.log(!checkValue(val,yl,xl))
    if(val!=1 && val!=2 && val!=3 && val!=4 ){
        document.getElementById(idval.getAttribute("id")).style.backgroundColor = "red"
    }
    else if(!checkValue(val,yl,xl)){
        document.getElementById(idval.getAttribute("id")).style.backgroundColor = "red"
    }
    else{
        document.getElementById(idval.getAttribute("id")).style.backgroundColor = "#D8BFD8"
    }
    console.log(idval)
}