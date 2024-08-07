function solution(babbling) {
    const key = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    function splitWithKeys(str, keys) {
        for (let key of keys) {
            str = str.split(key).join(` ${key} `);
        }
        return str.split(' ').filter(Boolean);
    }
    
    for (let i = 0; i < babbling.length; i++) {
        let temp = babbling[i];
        let splitBabbling = splitWithKeys(temp, key);
        
        let isValid = true;
        
        
        for (let j = 0; j < splitBabbling.length; j++) {
            if (!key.includes(splitBabbling[j]) || (j > 0 && splitBabbling[j] === splitBabbling[j - 1])) {
                isValid = false;
                break;
            }
        }
        
        if (isValid) {
            count++;
        }
    }
    
    return count;
}
        
      
        
         
 