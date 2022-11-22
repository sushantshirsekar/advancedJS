// Currying using Bind method

let multiply = function(a,b)
{
    console.log(a*b);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(10);


// Currying using Closure method

let mu = function(x)
{
    return function(y)
    {
        console.log(x*y);
    }
}

let multiplyTwo = mu(2);
multiplyTwo(4);

let multiplyThree = mu(3);
multiplyThree(8);
