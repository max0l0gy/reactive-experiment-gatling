var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "1395",
        "ko": "605"
    },
    "minResponseTime": {
        "total": "1357",
        "ok": "1357",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "23692",
        "ok": "23692",
        "ko": "10015"
    },
    "meanResponseTime": {
        "total": "7421",
        "ok": "6302",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "5388",
        "ok": "6122",
        "ko": "2"
    },
    "percentiles1": {
        "total": "6895",
        "ok": "3245",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "7206",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "21867",
        "ok": "22180",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "22579",
        "ok": "22609",
        "ko": "10012"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1395,
    "percentage": 70
},
    "group4": {
    "name": "failed",
    "count": 605,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "62.5",
        "ok": "43.594",
        "ko": "18.906"
    }
},
contents: {
"req_customer-id-101-adae8": {
        type: "REQUEST",
        name: "customer-id/101",
path: "customer-id/101",
pathFormatted: "req_customer-id-101-adae8",
stats: {
    "name": "customer-id/101",
    "numberOfRequests": {
        "total": "2000",
        "ok": "1395",
        "ko": "605"
    },
    "minResponseTime": {
        "total": "1357",
        "ok": "1357",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "23692",
        "ok": "23692",
        "ko": "10015"
    },
    "meanResponseTime": {
        "total": "7421",
        "ok": "6302",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "5388",
        "ok": "6122",
        "ko": "2"
    },
    "percentiles1": {
        "total": "6895",
        "ok": "3245",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10000",
        "ok": "7206",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "21867",
        "ok": "22180",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "22579",
        "ok": "22609",
        "ko": "10012"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1395,
    "percentage": 70
},
    "group4": {
    "name": "failed",
    "count": 605,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "62.5",
        "ok": "43.594",
        "ko": "18.906"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
