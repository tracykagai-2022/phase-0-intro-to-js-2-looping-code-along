// Code your solutions in this file
function countdown(i)    
{
    // this is an ret string variable that is private to the countdown function
    // you can't access ret from outside of this function
    var ret = "";   

    // your loop should include 0 according to your requirements
    while( i >= 0)
    {
        // here you are appending i to your ret string which you'll return at the end of this function      
        ret += i;// += is a short hand form of saying ret = ret + i

        // you want to append an empty space for every i except the last one (0)
        if(i > 0) {
            ret += " "; 
        }
        i--;    // here you are decrementing i
    }
    return ret;
}
// here you are making the actual call to the function with integer 10
// you are assigning the returned value of your function call to result variable
var result = countdown(10);  

// here you are printing your result string variable to the log
console.log(result);
