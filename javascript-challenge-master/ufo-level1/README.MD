// from data.js
var tableData = data;

// YOUR CODE HERE!

// Build function to call data into our table
function buildtable(data){
    //creating our variables within our function
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
// test outo and display our work
buildtable(tableData);

// function to filter the table by date
function filtertable(){
    var date = d3.select("#datetime").property("value")
    var filterdata = tableData
    if(date){
        filterdata = filterdata.filter(datarow=>datarow.datetime==date)
    };
buildtable(filterdata)
};
d3.select("#filter-btn").on("click", filtertable);
