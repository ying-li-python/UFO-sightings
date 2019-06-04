// FINAL CODE
var tableData = data

var tbody = d3.select("tbody");

var submit = d3.select("#submit");

submit.on("click", function() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime-input");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(tableData => tableData.datetime == inputValue);
    
    console.log(filteredData)

    filteredData.forEach((ufoSightings) => {
        console.log(ufoSightings);
        var row = tbody.append("tr");

        Object.entries(ufoSightings).forEach(([key, value]) => {
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });

});
