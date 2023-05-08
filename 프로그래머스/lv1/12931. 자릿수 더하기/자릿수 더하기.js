function solution(n)
{
    let sum=0;
   const nn = n.toString().split("");
    for(let i=0 ; i<nn.length;i++){
        sum = sum + Number(nn[i])
  }
    return sum
}