function solution(str, ending){
    return str.endsWith(ending);
}

/// OR ///

function solution(str, ending){
    return str.indexOf(ending, str.length - ending.length) !== -1;
}