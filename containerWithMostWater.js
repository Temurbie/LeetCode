function maxArea(height) {
    let left = 0; // Chap indeks
    let right = height.length - 1; // O'ng indeks
    let maxWater = 0; // Maksimal suv sig‘imi

    while (left < right) {
        console.log("left",left);
        console.log("right",right);


        // Joriy ikkita chiziq bo‘yicha suv sig‘imini hisoblash
        let width = right - left; 
        let minHeight = Math.min(height[left], height[right]); 
        console.log(width = right - left );
        
        console.log( minHeight);
        
        let currentWater = width * minHeight; 

        // Maksimal qiymatni yangilash
        maxWater = Math.max(maxWater, currentWater);

        // Pastroq devorni ichkariga suramiz
        if (height[left] < height[right]) {
            // console.log("left",left);
            
            left++;
        } else {
            // console.log("right",right);

            right--;
        }
    }

    return maxWater;
}

// Test
console.log(maxArea([1,8,6,2,5,4,8,3])); // 49
