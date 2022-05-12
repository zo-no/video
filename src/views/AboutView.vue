<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="ononon">123123</button>
  </div>
</template>

<script>
import GitHub from "github-api";
import $ from 'jquery'
       
export default {
    name: 'HeaDer',
    methods: {
        urlAutoParse: function (full_name, path){
          const FAST = true
          return (FAST ? "https://ghproxy.com/" : "") + "https://raw.githubusercontent.com/" + full_name + "/main/" + path
      },
        getContext: function (func) {
            const r = (new GitHub()).getOrganization("dataDuplicate").getRepos().then((a) => {
                a = a["data"].map(a => { return a["full_name"] })
                a = a.map(aa => {
                    return $.getJSON(this.urlAutoParse(aa, "/context.json")).catch(()=>{}).then(a => {
                        if (a) {
                            a["data"]["pic"] = this.urlAutoParse(aa, "pic.png");
                            return a["data"];
                        }
                    })
                })
                return Promise.all(a).then(a => { return a.filter(Boolean) })
            })
            return func ? r.then(func) : r
        },
        ononon: function(){
            this.getContext().then(console.log)
        }

    }
}

</script>