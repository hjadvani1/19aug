function add(num1,num2,...args)
{
    let total = num1 + num2 ;
    for(const a of args){
        total += a;
        }
        console.log(total);
    }
    add(1,3,5,7);


    function sum(...args)
    {
        let total=0;
        for(const a of args){
            total += a;
        }
        console.log(total);

    }
    sum (1,2,3,4,3,5,6);