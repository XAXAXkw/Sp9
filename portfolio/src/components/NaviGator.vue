<template>
    <div class="wrap d-flexbox" style=" width:100%;
    margin:0-auto">
<p>navigator PROP inndex: {{ counted }} </p>


<div class="row wrap d-flexbox ">
<div class="col-1"><div class="navigator arrow"
@click="back()" 
>
  

  <img style="height:300px;align:right" src="../assets/arrow.gif"/>
  </div></div>
<div class="col-10"></div>
<div class="col-1">  <div class="navigator2 arrow"
  @click="next()" 
  >
  
 
  <img style="height:300px;transform: scaleX(-1);:right" src="../assets/arrow.gif"/>
  </div>
</div>



</div>

    </div>
</template>

<script>
    export default {
        name:'NaviGator',
        props:['counted'],
        data(){
            return{
                y:1
            }
        },
        methods:{
            next(){
                this.$emit('countedHijo', this.counted + 1)
            },
            back(){
                this.$emit('countedHijo', this.counted - 1)
            }
        },
        emits:['sendy']
    }
</script>

<style lang="scss" scoped>
.navigator{
  position:absolute;
margin-top:180px;

 
}
.navigator2{
  position:absolute;
  margin-top:180px;



 
}
.arrow:hover{
    box-shadow: 1px 1px 50px rgba(0, 255, 255, 0.573);
    box-flex-group: rgba(0, 255, 255, 0.426);
    border:solid 1px rgba(140, 255, 0, 0.406);

}
.wrap{
justify-content: space-between;
}
</style>