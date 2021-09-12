
let kq=document.getElementById("ketqua");
function myFunction(num) {
    kq.value+=num;
}

function result() {
    if(kq.value === '' ){
        alert('input empty ! try again');
        return;
    } else  {
        kq.value=eval(kq.value);
    }
    // try {
    //     kq.value=eval(kq.value);
    // } catch (error) {
    //     alert("invalid");
    // }
}
function clean() {
    kq.value="";
    return;
}
function del() {
    kq.value=kq.value.slice(0,-1);
}