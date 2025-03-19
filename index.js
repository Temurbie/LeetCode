/*

1. Сумма двух

Дан массив целых чисел nums и целое число target, вернуть индексы двух чисел, чтобы их сумма давалаtarget .

Вы можете предположить, что каждый вход будет иметь ровно одно решение , и вы не можете использовать один и тот же элемент дважды.

Вы можете возвращать ответ в любом порядке.

 

Пример 1:

Ввод: nums = [2,7,11,15], цель = 9
 Вывод: [0,1]
 Объяснение: поскольку nums[0] + nums[1] == 9, мы возвращаем [0, 1].
Пример 2:

Ввод: числа = [3,2,4], цель = 6
 Вывод: [1,2]
Пример 3:

Ввод: числа = [3,3], цель = 6
 Вывод: [0,1]
 

Ограничения:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Существует только один правильный ответ.
 */

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
     for(let j = i + 1; j < nums.length; j++ ){
        console.log(i, j);
         if(nums[i] + nums[j] == target){
            
            
             return [i , j]
         }
     }
    
    }
    return []
 };
let arr = [2,3,7,8,11,1]


var twoSum2 = function(nums, tar){
    let map = new Map();
    for( let i = 0; nums.length > 0; i++){
        
        
        let need = tar - nums[i];
        if(map.has(need)){
            return[map.get(need), i ];
        }
        map.set(nums[i] , i);
        console.log(map);
    }
    return [];
}
console.log(twoSum2(arr, 3));
