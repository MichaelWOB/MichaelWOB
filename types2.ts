
function stringLength(value: string):number{
    return value.length;   
}

let count:number = stringLength("test 1");
console.log(count);

function stringNoSpaces(value: string):number{
    return value.replace(/\s/,"").length;
}

let count2:number = stringNoSpaces("h e l l o");
console.log(count2);

function count_both(value:string, spaces: boolean):number{
    if(spaces){
        return value.length;
    }else {
        return value.replace(/\s/,"").replace.length;
    }
}

let countBoth = count_both("test 1", true);
console.log(countBoth);