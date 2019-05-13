<template>
  <div>123</div>
</template>
<script>
export default {
  data() {
    return {
      products: []
    };
  },
  methods: {
    getProducts() {
      //取得遠端的資料，複製App.vue中的程式碼
      const api = `${process.env.APIPATH}api/${
        process.env.CUSTOMPATH
      }/products`;
      //為了將products的內容存到上方data的products: []中，
      //因此還是需要宣告vm=this，確保在http結束之後，取回的資料還能存回vm中
      const vm = this;
      console.log(process.env.APIPATH, process.env.CUSTOMPATH);
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.products = response.data.products;
      });
    }
  },
  //還需要再加一個created才能觸發getProducts事件
  created(){
      this.getProducts();
  }
};
</script>