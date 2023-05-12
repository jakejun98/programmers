function solution(phone_number) {
    let newArray = []
    for( let i=0; i<phone_number.length-4 ; i++){
        newArray.push("*")
    }
    for( let j=phone_number.length-4;j<phone_number.length;j++){
        newArray.push(phone_number[j])
    }
    
    return newArray.join("")
}