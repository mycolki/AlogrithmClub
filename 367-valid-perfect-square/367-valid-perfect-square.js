/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) return true;
  
  let start = 1;
  let end = num;
  
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    const square = mid * mid;
    
    if (square === num) {
      return true;
    } 
    
    if (square < num) {
      start = mid + 1;
    }
    
    if (square > num) {
      end = mid - 1;
    }
  }
  
  return false;
};