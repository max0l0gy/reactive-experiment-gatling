var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1395",
        "ok": "1361",
        "ko": "34"
    },
    "minResponseTime": {
        "total": "1123",
        "ok": "1123",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "22110",
        "ok": "22110",
        "ko": "10001"
    },
    "meanResponseTime": {
        "total": "5893",
        "ok": "5790",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "6118",
        "ok": "6159",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2812",
        "ok": "2748",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "6959",
        "ok": "6812",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "21757",
        "ok": "21763",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "22029",
        "ok": "22031",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1358,
    "percentage": 97
},
    "group4": {
    "name": "failed",
    "count": 34,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "46.5",
        "ok": "45.367",
        "ko": "1.133"
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
        "total": "1395",
        "ok": "1361",
        "ko": "34"
    },
    "minResponseTime": {
        "total": "1123",
        "ok": "1123",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "22110",
        "ok": "22110",
        "ko": "10001"
    },
    "meanResponseTime": {
        "total": "5893",
        "ok": "5790",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "6118",
        "ok": "6159",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2812",
        "ok": "2748",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "6959",
        "ok": "6812",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "21757",
        "ok": "21763",
        "ko": "10001"
    },
    "percentiles4": {
        "total": "22029",
        "ok": "22031",
        "ko": "10001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1358,
    "percentage": 97
},
    "group4": {
    "name": "failed",
    "count": 34,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "46.5",
        "ok": "45.367",
        "ko": "1.133"
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
