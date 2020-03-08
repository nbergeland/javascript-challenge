// from data.js
var tableData = data;

// YOUR CODE HERE!
function buildtable(data){
    var tbody = d3.select("tbody")
    tbody.html("")
    data.forEach((element) => {
    var row = tbody.append("tr")
    Object.values(element).forEach((value)=>{
        var cell = row.append("td")
        cell.text(value) 
    })

    });
};
buildtable(tableData);

function filtertable(){
    var date = d3.select("#datetime").property("value")
    var filterdata = tableData
    if(date){
        filterdata = filterdata.filter(datarow=>datarow.datetime==date)
    };
buildtable(filterdata)
};
d3.select("#filter-btn").on("click", filtertable);


