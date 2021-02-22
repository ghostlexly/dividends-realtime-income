$(function() {
    if (window.$amount !== null) {
        let $dividend_monthly = (window.$amount / 12);
        let $dividend_dayly = $dividend_monthly / 31;
        let $dividend_hourly = $dividend_dayly / 24;
        let $dividend_minute = $dividend_hourly / 60;
        let $dividend_secondly = $dividend_minute / 60;

        // annual / days per month / hours in a day / 60 sec for 1 min / 60 secondes
        let $paid_dividend = 0;

        // set values for infos
        $("#dividend_rt_second").text(["Per second: $", $dividend_secondly.toFixed(5)].join(" "));
        $("#dividend_rt_minute").text(["Per minute: $", $dividend_minute.toFixed(5)].join(" "));
        $("#dividend_rt_hour").text(["Per hour: $", $dividend_hourly.toFixed(5)].join(" "));
        $("#dividend_rt_day").text(["Per day: $", $dividend_dayly.toFixed(5)].join(" "));
        $("#dividend_rt_month").text(["Per month: $", $dividend_monthly.toFixed(2)].join(" "));
        $("#dividend_rt_quarter").text(["Per quarter: $", (window.$amount / 4).toFixed(2)].join(" "));

        setInterval(function() {
            $paid_dividend = (parseFloat($paid_dividend) + parseFloat($dividend_secondly));
            $("#dividend_rt").html("$ " + $paid_dividend.toFixed(5));
        }, 1000);
    }
});
