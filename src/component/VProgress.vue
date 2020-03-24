<template>
    <div class="" :style="{width:'100%',height:height + 'rem'}">
       <div class="progress" :style="{'background-color':color,width:percentage + '%'}"></div>
    </div>
</template>
<script>
   export default{
       name:'VProgress',
       props:{
           color:{
               type:String,
               default:'67c23a'
           },
           height:{
               type:Number,
               default:0.1
           },
           percentage:{
               type:Number,
               default:100
           }
       },
       data(){
           return{

           }
       }

   } 
</script>
<style lang="scss" scoped>
.progress{
    height: 100%;
    border-radius:0.12rem;
}
</style>
