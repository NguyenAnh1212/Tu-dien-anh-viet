let ta = ["one","two","three","four"];
let tv = ["một", "hai","ba","bốn"];
//tạo function tìm kiếm
function search() {
    let key = document.getElementById("key").value;
    let index = -1;
    for (let i = 0; i <ta.length ; i++) {
        if(key==ta[i]){
            index=i;
            break;
        }

    }
    let result;
    if(index==-1){
        result = "Không tìm thấy từ bạn từ tìm kiếm";
    }else{
        result = "Từ "+key +" có nghĩa là "+tv[index];
    }
document.getElementById("kq").innerText=result;

}