function frequentelement(Array)
{
    let n = Array.length;
    let mostelement;
    let max = 0;
    for(let i=0;i<n;i++)
    {
        let k=Array[i];
        let count=0;
        for(let j=0;j<n;j++)
        {
            if(Array[j]==k)
            {
                count++;
            }
        }
        if(count > max)
        {
            max = count;
            mostelement = k;
        }
    }
    return mostelement;

}
let Array = [5,2,8,2,9,5,2,4,2];
let t = frequentelement(Array);
console.log("Most frequent element is %d",t);

