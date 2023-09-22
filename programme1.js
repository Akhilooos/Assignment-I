
function primeArray(Array){
    let a = Array[0];
    if (a<=1)
    {
        console.log("Neither prime nor composite");
        return 0;
    }
    let k=0;
    for(let i=2;i<=a/2;i++)
    {
        if (a%i==0)
        {
            k++;
        }
    }
    if(k>0)
    {
        console.log("Not a prime number");
    }
    else 
    {
        console.log('%d is a Prime number',a);
    }
}
//Reading an array
const Array = [7, 12, 5, 23, 8];
primeArray(Array);
const Array1 = [12, 8, 5, 23, 8];
primeArray(Array1);


























































