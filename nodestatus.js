var refreshMillis = 3000;
var iota1 = new IOTA({
        'host': host1,
        'port': port1
});
var iota2 = new IOTA({
        'host': host2,
        'port': port2
});
var iota3 = new IOTA({
	'host': host3,
	'port': port3
});

function showNodeInfo1(){
    iota1.api.getNodeInfo(function(error, success) {
        if (error) {
            console.error("getNodeInfo error -------------");
        } else {
            objArr2Table([success], "nodeinfotable1");
        }
    })
};
function showNodeInfo2(){
    iota2.api.getNodeInfo(function(error, success) {
        if (error) {
            console.error("getNodeInfo error -------------");
        } else {
            objArr2Table([success], "nodeinfotable2");
        }
    })
};
function showNodeInfo3(){
    iota3.api.getNodeInfo(function(error, success) {
        if (error) {
            console.error("getNodeInfo error -------------");
        } else {
            objArr2Table([success], "nodeinfotable3");
        }
    })
};

function showTime1(){
    document.getElementById("date1").innerHTML = Date();
};
function showTime2(){
    document.getElementById("date2").innerHTML = Date();
};
function showTime3(){
    document.getElementById("date3").innerHTML = Date();
};

function refresh(fun, millis){
    fun();
    setInterval(fun, millis);
};

function flattenObjArray(arr){
    ret = {};
    for (k in arr[0]){
        values = [];
        for (i=0; i<arr.length; i++){
            values.push(arr[i][k]);
        }
        ret[k] = values;
    }
    return ret;
};

function objArr2Table(objArr, tableID){
    body = document.getElementById(tableID).tBodies[0];
    while( body.hasChildNodes() ){
        body.removeChild(body.lastChild);
    }
    flat = flattenObjArray(objArr);
    for ( key in flat ){
        vallist = flat[key];
        row = document.createElement('tr');
        cell = document.createElement('td');
        cell.innerHTML = key;
        row.appendChild(cell)
        for ( i in vallist ){
            cell = document.createElement('td');
            cell.innerHTML = vallist[i];
            row.appendChild(cell)
        }
        body.appendChild(row)
    }
};

window.addEventListener(`DOMContentLoaded`, function(){
    document.getElementById("hostname1").innerHTML = "ノード1: "+host1+':'+port1;
    refresh(showTime1, 1000);
    refresh(showNodeInfo1, refreshMillis);
})
window.addEventListener(`DOMContentLoaded`, function(){
    document.getElementById("hostname2").innerHTML = "ノード2: "+host2+':'+port2;
    refresh(showTime2, 1000);
    refresh(showNodeInfo2, refreshMillis);
})
window.addEventListener(`DOMContentLoaded`, function(){
    document.getElementById("hostname3").innerHTML = "ノード3: "+host3+':'+port3;
    refresh(showTime3, 1000);
    refresh(showNodeInfo3, refreshMillis);
})
