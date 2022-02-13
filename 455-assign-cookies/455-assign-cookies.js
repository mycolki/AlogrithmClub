/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = (children, cookies) => {
  children.sort((a, b) => a - b);
  cookies.sort((a, b) => a - b)
  
  let childCount = children.length-1;
  let cookieCount = cookies.length-1;
  let result = 0;
  
  while (childCount >= 0) {
    const isSatisfiedChild = cookies[cookieCount] >= children[childCount];;
      
    if (isSatisfiedChild){
      result++
      childCount--;
      cookieCount--;
    } else {
      childCount--;
    }
  }
  
  return result;
};