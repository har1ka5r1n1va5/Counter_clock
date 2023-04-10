let count=0
function onincrement(){
    count=count+1
    document.getElementById("countervalue").innerHTML=count
}
function resetvalue(){
    count=0
    document.getElementById("countervalue").innerHTML=0
}