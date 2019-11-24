// Console example
console.log("Hello World!");

// Alert example
// alert("Hello World!");

// Const array example
const array = [1, 2, 3, 4, 5];

// Let example
let sum = 0;

// For loop example
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}

// String + number example
console.log("Sum is " + sum);


function warning(change_message = false) {
    if (change_message) {
        let message_div = document.getElementById("message");
        message_div.innerText = "Warning!";
    }
    else {
        alert("Warning!");
        let message_div = document.getElementById("message");
        message_div.innerText = "No Message";
    }
}

function change_color(color = null) {
    let message_div = document.getElementById("message");
    if (color != null) {
        message_div.style.color = color;
    }
    else {
        let color_div = document.getElementById("color_text");
        message_div.style.color = color_div.value;
    }
}

// ECharts example

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

function echarts_change_data() {
    echarts_update_data([10, 20, 30, 40, 50, 60]);
}


function fetch_data(id) {
    fetch("/fake_data/"+id).then(
        function (response) {
            return response.json()
        }
    ).then(
        function (data) {
            console.log(data);
        }
    )
}


function fetch_data_and_change(id = null) {
    if (id==null) {
        let data_input = document.getElementById("data_input");
        id = data_input.value;
    }

    fetch("/fake_data/"+id).then(
        function (response) {
            return response.json()
        }
    ).then(
        function (data) {
            echarts_update_data(data);
        }
    )
}