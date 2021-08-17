<template>
  <div>
    <!-- <h1>MyApp</h1> -->
    <hr />
    <!-- es-header -->
    <es-header :title="title"></es-header>
    <hr />
    <es-goods
      v-for="item in goodslist"
      :key="item.id"
      :id="item.id"
      @stateChange="onGoodsStateChange"
      @countChange="onGoodsCountChange"
      :count="item.goods_count"
      :thumb="item.goods_img"
      :thumb="item.goods_img"
      :title="item.goods_name"
      :price="item.goods_price"
      :checked="item.goods_state"
    ></es-goods>
    <!-- es-footer -->
    <es-footer
      @fullChange="onFullStateChange"
      :amount="amount"
      :total="total"
    ></es-footer>
  </div>
</template>

<script>
import EsHeader from "./components/es-header/EsHeader.vue";
import EsFooter from "./components/es-footer/EsFooter.vue";
import EsGoods from "./components/es-goods/EsGoods.vue";
export default {
  name: "MyApp",
  components: {
    EsHeader,
    EsFooter,
    EsGoods,
  },
  data() {
    return {
      goodslist: [],
      title: "购物车案例",
      color: "red",
      //  fullChange: false
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    async getGoodsList() {
      const { data: res } = await this.$http.get("/api/cart");
      if (res.status !== 200) return alert("请求数据失败！！！");
      this.goodslist = res.list;
      console.log(this.goodslist);
    },
    onFullStateChange(isFull) {
      // console.log(isFull);
      this.goodslist.forEach((x) => (x.goods_state = isFull));
    },
    onGoodsStateChange(e) {
      console.log(e);
      const findResult = this.goodslist.find((x) => x.id === e.id);
      if (findResult) findResult.goods_state = e.value;
    },
    onGoodsCountChange(e) {
      //  console.log(e);
      const findResult = this.goodslist.find((x) => x.id === e.id)
      if(findResult) {
        findResult.goods_count = e.value
      }
    },
  },
  computed: {
    amount() {
      let a = 0;
      this.goodslist
        .filter((x) => x.goods_state)
        .forEach((x) => {
          a += x.goods_price * x.goods_count;
        });
      return a;
    },
    total() {
      let t = 0;
      this.goodslist
        .filter((x) => x.goods_state)
        .forEach((x) => {
          t += x.goods_count;
        });
      return t;
    },
  },
};
</script>
<style lang='less' scoped>
</style>