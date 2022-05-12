<template>
<button @click="getContext().then(console.log)"></button>
</template>

<script>
export default{
    name: 'Header',
    methods: {
        getContext:function(func) {
            r = (new GitHub()).getOrganization("dataDuplicate").getRepos().then((a) => {
                a = a["data"].map(a => { return a["full_name"] })
                a = a.map(aa => {
                    return $.getJSON(urlAutoParse(aa, "/context.json")).catch(err => { }).then(a => {
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

        }
    }

</script>