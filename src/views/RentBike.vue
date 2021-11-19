<template>
  <b-container>
    <b-row>
      <b-col>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>

  export default {
    name: 'Home',
    components: {
    
    },
    data(){
      return{
        nearStationData:[],
        nearAvaliableStationData:[],
        selectedStationData:[],
      }
    },
    methods:{
      async queryNearStation(uId){
        try{
            let res = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Bike/Station/Taipei?$filter=StationUID%20eq%20'${uId}'&$top=30&$format=JSON`, {
                method:'GET',
                header:{
                  Authorization:'hmac username=83592d8c997f4933ae965e60e5995a2d',
                  'X-Date':new Date().toGMTString(),
                },
                'Accept-Encoding': 'gzip'                         
            })
            res.json().then((d) => this.selectedStationData = d).then(() => console.log(this.selectedStationData));
        }catch{
            console.log('fail1');
        }
      },            
      async queryNearAvaliableStation(){
          let res = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Bike/Station/NearBy?$top=30&$spatialFilter=nearBy(25.04%2C%20121.56%2C%20500)&$format=JSON`, {
              method:'GET',
              header:{
                Authorization:'hmac username=83592d8c997f4933ae965e60e5995a2d',
                'X-Date':new Date().toGMTString(),
              },
              'Accept-Encoding': 'gzip'                     
          })
          res.json().then((d) => this.nearAvaliableStationData = d);
      },      
    }
  }
</script>