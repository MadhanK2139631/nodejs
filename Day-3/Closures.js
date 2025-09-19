 function outer(){
    let count=0;
    let inner=()=>{
        count++;
        return count;
    }
    return inner;
}

const counter = outer();
console.log(counter())
console.log(counter());
