const url="https://61b9ab5e38f69a0017ce61d3.mockapi.io/people";

function api_data(url){
    let request=new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload=()=>{
        let data=request.responseText;
        console.log(data);
        // document.getElementById("view").innerHTML=data;
        table_format(data);
    }
    request.send();
}


function table_format(data){
    for(i=0;i<data.length;i++){
    let table=document.getElementById("viewport");
    let count=table.rows.length;
    let row=table.insertRow(count);
    row.inserCell(0).innerHTML=data[i];
   }

};

api_data(url);
