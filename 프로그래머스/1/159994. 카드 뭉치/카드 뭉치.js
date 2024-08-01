function solution(cards1, cards2, goal) {
            let i=0;
            let j=0;
            let k=0;
            let g=0;
            let h=0;
    
        while(i<goal.length){
            
            if(cards1[j]==goal[i]){
                i++;
                j++;
                continue;
            }else {
                if(cards2[k]==goal[i]){
                    i++;
                    k++;
                    continue;
                }else {
                    return "No"
                }
            }
            if(cards2[g]==goal[i]){
                i++;
                g++;
                continue;
            }else {
                if(cards1[h]==goal[i]){
                    i++;
                    h++
                    continue;
                    
                }else {
                    return "No"
                }
            }
            
    
        }
        
      return "Yes"
} 

/* function solution(cards1, cards2, goal) {
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < goal.length) {
        if (j < cards1.length && cards1[j] === goal[i]) {
            j++;
        } else if (k < cards2.length && cards2[k] === goal[i]) {
            k++;
        } else {
            return "No";
        }
        i++;
    }

    return "Yes";
}
*/
