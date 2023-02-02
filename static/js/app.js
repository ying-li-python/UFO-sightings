// FINAL CODE
var tableData = data

var tbody = d3.select("tbody");

var submit = d3.select("#submit");

var states = ["CA", "OR", "NY"]

d3.select("#selectState").selectAll('myOptions').data(states).enter().append('option').text(function (d) {return d;}).attr("value", function (d) { return d; })

submit.on("click", function() {
    d3.event.preventDefault();

    var selectedOption = d3.select("#selectState");
    var inputValue = selectedOption.property("value");
    console.log(inputValue)

    var filteredData = tableData.filter(tableData => tableData.state == inputValue);
    
    console.log(filteredData)

    filteredData.forEach((therapists) => {
        console.log(therapists);
        var row = tbody.append("tr");

        Object.entries(therapists).forEach(([key, value]) => {
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });

});