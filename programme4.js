function Sumofsquares(Array)
{
    let k = Array.length;
    let sum = 0;
    for(let i=0;i<k;i++)
    {
        sum = sum + Array[i]**2;
    }
    return sum;
}
let Array = [5,2,8,2,9,5];
let t = Sumofsquares(Array);
console.log("Sum of squares of elements in array = %d",t);