<template>
  <div>
    <div class="search-result" v-if="isSearched">
        <b-button variant="link" class="d-flex p-1 mr-2" @click="isSearched = !isSearched; isStationSelected = !isStationSelected; selectedCity = ''">
            <font-awesome-icon icon="angle-left"></font-awesome-icon>
        </b-button>
        <ul>
          <li v-for="(item, index) in cityStationData" :key="index" @click="querySelectedStaion(item, item.StationUID)" class="a cursor-pointer mb-1">{{item.StationName.Zh_tw}}</li>
        </ul>  
    </div>

    <div class="controller" v-else>
        <h1 class="h1 font-weight-3 mb-4">站牌搜尋</h1>
        <b-input class="mb-4"></b-input>
        <b-select  class="mb-4" :options="cityOption" v-model="selectedCity"></b-select>
        <b-button class="bg-primary" block @click="queryStation">搜尋</b-button>
    </div>

    <div v-if="isStationSelected" class="route-detail">
        <h5 class="h5 font-weight-3 mb-3">{{selectedStationData.StationName.Zh_tw}}</h5>
        <h6 class="h6 mb-2">{{selectedStationData.StationAddress.Zh_tw}}</h6>
        <h6 class="h6 mb-2">更新時間：{{selectedStationData.SrcUpdateTime}}</h6>
        <div class="d-flex justify-content-between">
          <div class="badge" :class="selectedStationData.AvailableRentBikes > 5? 'bg-primary' : selectedStationData.AvailableRentBikes < 1? 'bg-danger' : 'bg-success'"><span class="h6 font-weight-3 mr-2">可借車輛</span><span>{{selectedStationData.AvailableRentBikes}}</span></div>
          <div class="badge" :class="selectedStationData.AvailableReturnBikes > 5? 'bg-primary' : selectedStationData.AvailableRentBikes < 1? 'bg-danger' : 'bg-success'"><span class="h6 font-weight-3 mr-2">可停空位</span><span>{{selectedStationData.AvailableReturnBikes}}</span></div>
        </div>
    </div>

    <div>
        <b-spinner v-show="isLoading"></b-spinner>
          <div id="map1"></div>
    </div>
  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl';
  import jsSHA from "jssha";

export default {
    name: 'RentBike',
    components: {

    },
    data(){
      return{
        isLoading:true,
        isSearched:false,
        isStationSelected:false,
        cityOption:[
          {text:'台北', value:'Taipei'},
          {text:'新北', value:'NewTaipei'},
          {text:'基隆', value:'Keelung'},
          {text:'桃園', value:'Taoyuan'},
          {text:'新竹', value:'Hsinchu'},
          {text:'苗栗', value:'Miaoli'},
          {text:'台中', value:'Taichung'},
          {text:'彰化', value:'Changhua'},
          {text:'南投', value:'Nantou'},
          {text:'雲林', value:'Yunlin'},
          {text:'嘉義', value:'Chiayi'},
          {text:'台南', value:'Tainan'},
          {text:'高雄', value:'Kaohsiung'},
          {text:'屏東', value:'Pingtung'},
          {text:'宜蘭', value:'Yilan'},
          {text:'花蓮', value:'Hualien'},
          {text:'台東', value:'Taitung'}                
        ],
        cityStationData:[],
        nearStationData:[],
        nearAvaliableStationData:[],
        selectedStationData:[],
        selectedCity:'',
      }
    },
    mounted(){
      mapboxgl.accessToken = 'pk.eyJ1IjoidGVtcHVyYTMyNyIsImEiOiJja3Z6eXVqdnQ1YTdxMm9tdHUwMGx4eXBmIn0.7SOTd4xVrpfdvJiDx5R34g';
      this.map = new mapboxgl.Map({
          container: 'map1',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [121.5, 25.1],
          zoom: 10
          
      });   

      this.isLoading = false;
    },    
    methods:{
      async queryStation(){
        let GMTString = new Date().toGMTString();
        const ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey('OPt8cbnBt_P461mggB8qbzrZiDc', 'TEXT');
        ShaObj.update('x-date: ' + GMTString);
        const HMAC = ShaObj.getHMAC('B64');
        let Authorization = `hmac username="83592d8c997f4933ae965e60e5995a2d", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;

        try{
          let res = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Bike/Station/${this.selectedCity}?$top=30&$format=JSON`, {
            method:'GET',
            header:{
              Authorization: Authorization,
              "X-Date": GMTString,
              "Content-Type": "application/x-www-form-urlencoded"
            },
            'Accept-Encoding': 'gzip'              
          })
          res.json().then((d) => this.cityStationData = d);
        }catch{
            console.log('fail1');
        }finally{
          this.isSearched = true;
        }
      },
      async querySelectedStaion(data, id){       
        let GMTString = new Date().toGMTString();
        const ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey('OPt8cbnBt_P461mggB8qbzrZiDc', 'TEXT');
        ShaObj.update('x-date: ' + GMTString);
        const HMAC = ShaObj.getHMAC('B64');
        let Authorization = `hmac username="83592d8c997f4933ae965e60e5995a2d", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;

        try{
          let res = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/${this.selectedCity}?$filter=StationUID%20eq%20'${id}'&$format=JSON`, {
            method:'GET',
            header:{
              Authorization: Authorization,
              "X-Date": GMTString,
              "Content-Type": "application/x-www-form-urlencoded"
            },
            'Accept-Encoding': 'gzip'              
          })

          res.json().then((d) => {
            this.selectedStationData = data;
            this.selectedStationData.AvailableRentBikes = d[0].AvailableRentBikes;
            this.selectedStationData.AvailableReturnBikes = d[0].AvailableReturnBikes;
            this.selectedStationData.SrcUpdateTime = d[0].SrcUpdateTime.replace(/[A-Z]/, ' ').slice(0, 19);
          }).then(() => {
            new mapboxgl.Marker()
              .setLngLat([this.selectedStationData.StationPosition.PositionLon, this.selectedStationData.StationPosition.PositionLat])
              .addTo(this.map);
          }).then(() => this.isStationSelected = true);
        }catch{
          this.$bvToast.toast('', {
            title:'失敗',
            autoHideDelay:3000,
            variant:'danger'
          })
          console.log('fail');
        }
      },      
      // async queryNearStation(uId){
      //   try{
      //       let res = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Bike/Station/Taipei?$filter=StationUID%20eq%20'${uId}'&$top=30&$format=JSON`, {
      //           method:'GET',
      //           header:{
      //             Authorization:`Authorization: hmac username="83592d8c997f4933ae965e60e5995a2d", algorithm="hmac-sha1", headers="x-date", signature="C2CUtKZrhTWRhy6JkzOnsTBr+6o="`,
      //             'X-Date':new Date().toGMTString(),
      //           },
      //           'Accept-Encoding': 'gzip'                         
      //       })
      //       res.json().then((d) => this.selectedStationData = d).then(() => console.log(this.selectedStationData));
      //   }catch{
      //       console.log('fail1');
      //   }
      // },            
      // async queryNearAvaliableStation(){
      //   let res = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/NearBy?$top=30&$spatialFilter=nearby(25.04%2C%20121.56%2C%20500)&$format=JSON`, {
      //     method:'GET',
      //     header:{
      //       Authorization:`Authorization: hmac username="83592d8c997f4933ae965e60e5995a2d", algorithm="hmac-sha1", headers="x-date", signature="C2CUtKZrhTWRhy6JkzOnsTBr+6o="`,
      //       'X-Date':new Date().toGMTString(),
      //     },
      //     'Accept-Encoding': 'gzip'                     
      //   })

      //   res.json().then((d) => this.nearAvaliableStationData = d).then(() => console.log(this.nearAvaliableStationData));
      // },      
    },
    computed: {
      dynamicSize () {
        return [this.iconSize, this.iconSize * 1.15];
      },
      dynamicAnchor () {
        return [this.iconSize / 2, this.iconSize * 1.15];
      }
    }
  }
</script>

<style>
    #map1{
        height: 100vh;
    }

    .controller{
        position: absolute;
        top: 110px;
        left: 20px;
        width: 376px;
        height: 238px;
        background-color: white;
        z-index: 10;
        padding: 20px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
    }

    .search-result{
        display: flex;
        position: absolute;
        top: 110px;
        left: 20px;
        width: 376px;
        height: 400px;
        background-color: white;
        z-index: 10;
        padding: 20px;
        overflow-y: scroll;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
    }

    .route-detail{
        position: absolute;
        top: 520px;
        left: 20px;
        width: 376px;
        padding: 20px;
        z-index: 10;
        background-color: white;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
    }
</style>