function countDuplicate(numbers) {
    // Write your code here
    let unique = new Set();
    let duplicates = [];
    
    for(let i = 0; i < numbers.length; i++){
        if(unique.has(numbers[i])){
            duplicates.push(numbers[i]);
        }
        unique.add(numbers[i]);
    }
    
    const duplicatedNums = Array.from(new Set(duplicates));
    return duplicatedNums.length;
}
