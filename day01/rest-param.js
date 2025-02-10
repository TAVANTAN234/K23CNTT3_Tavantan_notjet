
function fn_rest_param(a,b,...other){
    console.log("a=",a);
    console.log("b=",b);
    console.log("...other",other);
}
fn_rest_param(1,2);
fn_rest_param(1,2,4,5);
fn_rest_param(1,2,4,5,100,200);