
import GitHub from "github-api";
import $ from 'jquery'

var FAST = true
export function urlAutoParse(full_name, path) {
    return (FAST ? "https://ghproxy.com/" : "") + "https://raw.githubusercontent.com/" + full_name + "/main/" + path
}
export function getContext(func) {
    var r = (new GitHub()).getOrganization("dataDuplicate").getRepos().then((a) => {
        a = a["data"].map(a => { return a["full_name"] })
        a = a.map(aa => {
            return $.getJSON(urlAutoParse(aa, "/context.json")).catch((err) => {err}).then(a => {
                if (a) {
                    a["data"]["pic"] = urlAutoParse(aa, "pic.png");
                    return a["data"];
                }
            })
        })
        return Promise.all(a).then(a => { return a.filter(Boolean) })
    })
    return func ? r.then(func) : r
}
$(window).on("load", () => {
    getContext().then(console.log)
});
