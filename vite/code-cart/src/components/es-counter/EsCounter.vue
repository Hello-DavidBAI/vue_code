<template>
  <div class="counter-container">
    <!-- 数量 -1 按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="onSubClick">-</button>
    <!-- 输入框 -->
    <input
      type="number"
      class="form-control form-control-sm iptnum"
      v-model.number.lazy="number"
    />
    <!-- 数量 +1 按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="onAddClick">+</button>
  </div>
</template>

<script>
export default {
  name: "EsCounter",
  watch:{
      number(newval){
          const parseResult = parseInt(newval)
          if(isNaN(parseResult)||parseResult<1){
              this.number = 1
              return
          }
          if(String(newval).indexOf('.')!==-1) {
              this.number = parseResult
              return
          }
        //   console.log(this.number);
        this.$emit('numChange',this.number)
      }
  },
  data() {
    return {
      number: this.num,
    };
  },
  emits: ["numChange"],
  props: {
    num: {
      type: Number,
      default: 0,
    },
    min: {
        type: Number,
        default: NaN,
    }
  },
  methods: {
      onSubClick(){
          if(!isNaN(this.min)&&this.number-1<this.min) return
          this.number--
      },
      onAddClick(){
          this.number++
      }
  }
};
</script>
<style lang='less' scoped>
.counter-container {
  display: flex;
  // 按钮的样式
  .btn {
    width: 25px;
  }
  // 输入框的样式
  .ipt-num {
    width: 34px;
    text-align: center;
    margin: 0 4px;
  }
  .form-control-sm {
    width: 30px;
  }
}
</style>