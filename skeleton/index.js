// Console example: Write a console.log "Hello World"


// Alert example: Write an allert "Hello World"


// Const array example: Use const to define an array "array"


// Let example: Use let to define a variable "sum"


// For loop example: Use a for loop to sum the array elements


// String + number example: Use console.log to print the result


// Define a function warning: alert "Warning!"
// Update the function: if change_message: change message's innerText to be "Warning!";
// else alert "Warning!" and change message's innerText to be "No Message"
function warning(change_message = false) {

}

// Define a function change_color:
// If "color" is not null, change message's color to be "color";
// Else, get the "color" from color_text, and change message's color to be the "color".
function change_color(color = null) {

}

// ECharts example

// A ECharts Example from the official tutorial
function echarts_example() {
    // based on prepared DOM, initialize echarts instance
    var myChart = echarts.init(document.getElementById('graphics'));

    // specify chart configuration item and data
    var option = {
        title: {
            text: 'ECharts entry example'
        },
        tooltip: {},
        legend: {
            data: ['Sales']
        },
        xAxis: {
            data: ["shirt", "cardign", "chiffon shirt", "pants", "heels", "socks"]
        },
        yAxis: {},
        series: [{
            name: 'Sales',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    // use configuration item and data specified to show chart
    myChart.setOption(option);
}

// Dynamically update data from the input "data"
function echarts_update_data(data) {
    // based on prepared DOM, initialize echarts instance
    var myChart = echarts.init(document.getElementById('graphics'));

    // specify chart configuration item and data
    var option = {
        title: {
            text: 'ECharts entry example'
        },
        tooltip: {},
        legend: {
            data: ['Sales']
        },
        xAxis: {
            data: ["shirt", "cardign", "chiffon shirt", "pants", "heels", "socks"]
        },
        yAxis: {},
        series: [{
            name: 'Sales',
            type: 'bar',
            data: data
        }]
    };

    // use configuration item and data specified to show chart
    myChart.setOption(option);
}


// Update a predefined data
function echarts_change_data() {
    echarts_update_data([10, 20, 30, 40, 50, 60]);
}


// Define a function: fetch_data(id)
// Fetch the data from the url: "/fake_data/"+id
// Use json to parse the data
// Then use console.log to print the data
function fetch_data(id) {

}


// Define a function: fetch_data_and_change(id)
// If id is null, get the id from "data_input" value.
// Then, fetch the data from the url: "/fake_data/"+id
// Use json to parse the data
// Then use echarts_update_data to update the new data.
function fetch_data_and_change(id = null) {

}