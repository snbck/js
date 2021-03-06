// need jQuery and jq.cookie;

var getCookie = $.cookie,
    delCookie = $.removeCookie;

function setCookie(cname, cvalue, options) {
    var o = {}, exM, exs, domain, path, s;
    if (options != undefined) {
        exM = options["exM"];
        exs = options["exs"];
        domain = options["domain"];
        path = options["path"];
        s = options["s"];
    }
    if (exM != undefined && exs != undefined) {
        var d = new Date();
        switch (exM) {
            case "s":
                d.setTime(d.getTime() + exs);
                break;
            case "S":
                d.setSeconds(d.getSeconds() + exs);
                break;
            case "D":
                d.setDate(d.getDate() + exs);
                break;
            case "W":
                d.setDate(d.getDate() + (exs * 7));
                break;
            case "M":
                d.setMonth(d.getMonth() + exs);
                break;
            case "Y":
                d.setFullYear(d.getFullYear() + exs);
                break;
            case "O":
                d.setTime(exs.getTime());
                break;
            case "Str":
                d = new Date(exs);
                break;
            default:
                d.setTime(exs.getTime());
        }
        o["expires"] = d;
    }
    if (domain != undefined) {
        o["domain"] = domain;
    }
    if (path != undefined) {
        o["path"] = path;
    }
    if (s != undefined) {
        o["secure"] = s;
    }
    return $.cookie(cname, cvalue, o);
}
