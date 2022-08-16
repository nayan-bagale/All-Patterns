var n = 5;
var string = '';

let pattern1 = (n) =>{
    for(let row = 1; row <= n; row++){
        for(let col = 1; col <= n; col++){
            string += '*'
        }
        string += '\n'
    }
    console.log(string)
}

let pattern2 = (n) =>{
    for(let row = 1; row <= n; row++){
        for(let col = 1; col <= row; col++){
            string += '* '
        }
        string += '\n'
    }
    console.log(string)
}

let pattern3 = (n) =>{
    for(let row = 1; row <= n; row++){
        for(let col = n; col >= row; col--){
            string += '* '
        }
        string += '\n'
    }
    console.log(string)
}

let pattern4 = (n) =>{
    for(let row = 1; row <= n; row++){
        for(let col = 1; col <= row; col++){
            string += col.toString() + ' '
        }
        string += '\n'
    }
    console.log(string)
}


let pattern5 = (n) =>{
    for(let row = 1; row <= (n*2)-1 ; row++){
        if( row <= n ){
            for(let col = 1; col <= row; col++){
                string += '*'
            }
        }else{
            for(let col = (n*2)-1; col >= row; col--){
                string += '*'
            }      
        }
        string += '\n'
    }
    console.log(string)
}

let pattern6 = (n) =>{
    for(let row = 1; row <= n; row++){ 
        let space = 1;
        for(space = 1; space <= n-row; space++ ){
            string += ' '
        }
        for(let col = space; col <= n; col++){
            string += '*'
        }
        string += '\n'
    }
    console.log(string)
}

let pattern7 = (n) =>{
    for(let row = 1; row <= n; row++){ 
        let space = 1;
        for(space = 1; space < row; space++ ){
            string += ' '
        }
        for(let col = 1; col <= n - row+1; col++){
            string += '*'
        }
        string += '\n'
    }
    console.log(string)
}

let pattern8 = (n) =>{
    for(let row = 1; row <= n; row++){ 
        let space;
        for(space = 1; space <= n-row; space++ ){
            string += ' '
        }
        for(let col = space; col <= n ; col++){
             string += '*'  
        }
        for(let ex = 1; ex <= (n-space); ex++){
            string += '*'
        }
        
        string += '\n'
    }
    console.log(string)
}

let pattern9 = (n) =>{
    for(let row = 1; row <= n; row++){ 
        let space;
        for(space = 1; space < row; space++ ){
            string += ' '
        }
        for(let col = space; col <= n; col++){
            string += '*'
        }
        for(let ex = n-1; ex >= row; ex--){
            string += '*'
        }
        
        string += '\n'
    }
    console.log(string)
}

let pattern10 = (n) =>{
    for(let row = 1; row <= n; row++){ 
        let space;
        for(space = n; space > row; space--){
            string += ' '
        }
        for(let col = 1; col <= row; col++){
            string += ' *'
        }
        string += '\n'
    }
    console.log(string)
}

let pattern11 = (n) =>{
    for(let row = 1; row <= n; row++){ 
        let space;
        for(space = 1; space < row; space++){
            string += ' '
        }
        for(let col = n; col >= row; col--){
            string += ' *'
        }
        string += '\n'
    }
    console.log(string)
}

let pattern12 = (n) => {
    for(let row = 1; row<=n*2; row++){
        if(row<=n){
            let space;
            for(space = 1; space < row; space++){
                string += ' '
            }
            for(let col = n; col >= row; col--){
                string += ' *'
            }
            string += '\n'

        }else{
            let space;
            for(space = n; space > row-n; space--){
                string += ' '
            }
            for(let col = 1; col <= row-n; col++){
                string += ' *'
            }
            string += '\n'
        }
    
    }
    console.log(string)
}

let pattern13 = (n) => {
    for(row = 1; row<=n; row++){
        for(let col = 1; col <= n*2-1; col++){
            if(row == 1 & col == n){
                string += '*'
                break
            }
            else if(row == n) string += '*'
            else if(col == n-row+1 || col == row+n-1) string += '*'  
            else string += ' '
        }
        string += '\n'
    }
    console.log(string)
}

let pattern14 = (n) => {
    for(row = 1; row<=n; row++){
        for(let col = 1; col <= n*2-1; col++){
            if(row == n & col == n){
                string += '*'
                break
            }
            else if(row == 1) string += '*'
            else if(col == row || col == (n*2-1)-row+1) string += '*'  
            else string += ' '
        }
        string += '\n'
    }
    console.log(string)
}

let pattern15 = (n) => {
    for(row = 1; row<=n*2-1; row++){
        if(row<n){
            for(let col = 1; col <= n*2-1; col++){
                if(row == 1 & col == n){
                    string += '*'
                    break
                }
                else if(col == n-row+1 || col == row+n-1) string += '*'  
                else string += ' '
            }
        }else{
            for(let col = 1; col <= n*2-1; col++){
                if(row == n*2-1 & col == n){
                    string += '*'
                    break
                }
                else if(col == (row-n+1) || col == (n*2-1)-row+n) string += '*'  
                else string += ' '
            }
        }
        string += '\n'
    }
    console.log(string)
}

pattern15(5)