var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1358",
        "ok": "1358",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "978",
        "ok": "978",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "22151",
        "ok": "22151",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5979",
        "ok": "5979",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6489",
        "ok": "6489",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2540",
        "ok": "2540",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6704",
        "ok": "6704",
        "ko": "-"
    },
    "percentiles3": {
        "total": "21597",
        "ok": "21597",
        "ko": "-"
    },
    "percentiles4": {
        "total": "21834",
        "ok": "21834",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1357,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.267",
        "ok": "45.267",
        "ko": "-"
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
        "total": "1358",
        "ok": "1358",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "978",
        "ok": "978",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "22151",
        "ok": "22151",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5979",
        "ok": "5979",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6489",
        "ok": "6489",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2540",
        "ok": "2540",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6704",
        "ok": "6704",
        "ko": "-"
    },
    "percentiles3": {
        "total": "21597",
        "ok": "21597",
        "ko": "-"
    },
    "percentiles4": {
        "total": "21834",
        "ok": "21834",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1357,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.267",
        "ok": "45.267",
        "ko": "-"
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
