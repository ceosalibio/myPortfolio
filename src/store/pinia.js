import { defineStore } from 'pinia';
export const storeData = defineStore('storeData',{
   state: () =>({
    sample:'hi'
   }),
   actions:{
    testBtn(){
        alert(this.sample)
    }
   }
});