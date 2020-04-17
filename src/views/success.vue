<template>
  <div>
    <h1>Welcome!{{msg}}</h1>
    <a href="https://www.baidu.com/" @click.prevent="aClick">测试</a>


    <a href="https://www.baidu.com/" @click.prevent="aClick1">测试1</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: this.$route.query.data
    };
  },
//   data() { //这种方式也可以
//     return {
//       msg: null
//     };
//   },
  // created() {
  //   this.msg = this.$route.query.data;
  // }

  methods: {
    
    aClick() {
          this.loading = true;
          this.$store
            .dispatch("user/list")
            .then(response => {
              this.loading = false;
              let code = response.data.code;
              if (code == 200) {
                this.$router.push({
                  path: "/success",
                  query: { data: response.data.data }
                });
              } else {
                this.$router.push({
                  path: "/error",
                  query: { message: response.data.message }
                });
              }
            })
            .catch(() => {
              this.loading = false;
            });
        
    },
    aClick1() {
          this.loading = true;
          this.$store
            .dispatch("user/add",{username:"kxhtest",password:"123456"})
            .then(response => {
              this.loading = false;
              let code = response.data.code;
              if (code == 200) {
                this.$router.push({
                  path: "/success",
                  query: { data: response.data.data }
                });
              } else {
                this.$router.push({
                  path: "/error",
                  query: { message: response.data.message }
                });
              }
            })
            .catch(() => {
              this.loading = false;
            });
        
    }
  }
}
</script>