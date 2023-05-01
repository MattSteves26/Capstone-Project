fetch("http://localhost:3000/Players").then((data)=>{
    return data.json();
}).then((objectData)=>{
        console.log(objectData);
        let tableData="";
        objectData.map((values) => {
        if(values.s == 's' && values.team == 'CHI'){
            tableData+=`<tr>
            <td>${values.id}</td>
            <td>${values.name}</td>
            <td>${values.g}</td>
            <td>${values.a}</td>
            <td>${values.p}</td>
            </tr>
            `;
           }
        });

        document.getElementById("table_body").innerHTML = tableData;
})