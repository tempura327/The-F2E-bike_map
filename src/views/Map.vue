<template>
    <div>
        <div class="search-result" v-if="isSearched">
            <b-button variant="link" class="d-flex p-1 mr-2" @click="isSearched = !isSearched; isRouteSelected = !isRouteSelected; selectedCity = ''">
                <font-awesome-icon icon="angle-left"></font-awesome-icon>
            </b-button>
            <ul>
                <li v-for="(item, index) in routeData" :key="index" class="a cursor-pointer mb-1" @click="showRoute(item)">{{item.RouteName}}</li>
            </ul>  
        </div>
        <div class="controller" v-else>
            <h1 class="h1 font-weight-3 mb-4">路線搜尋</h1>
            <b-input class="mb-4"></b-input>
            <b-select  class="mb-4" :options="cityOption" v-model="selectedCity"></b-select>
            <b-button class="bg-primary" block @click="queryRoute">搜尋</b-button>
        </div>
        <div v-if="isRouteSelected" class="route-detail">
            <h5 class="h5 font-weight-3 mb-2">{{selectedRoute.RouteName}}</h5>
            <h6 class="h6 mb-2">{{selectedRoute.City}}</h6>
            <h6 class="h6 mb-2">{{selectedRoute.RoadSectionStart}} - {{selectedRoute.RoadSectionEnd}}</h6>
            <h6 class="h6 mb-2">全長：{{selectedRoute.CyclingLength}}m</h6>
        </div>
        <div>
            <b-spinner v-show="isLoading"></b-spinner>
            <div id="map1" v-hide></div>
        </div>
    </div>
</template>

<script>
    import mapboxgl from 'mapbox-gl';
    import jsSHA from "jssha";

    export default {
        name:'Map',
        data() {
            return{
                isLoading:true,
                isSearched:false,
                isRouteSelected:false,
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
                routeData:[],
                selectedCity:'',
                selectedRoute:{},
            } 
        },
        created() {

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
            async queryRoute(){
            let GMTString = new Date().toGMTString();
            const ShaObj = new jsSHA('SHA-1', 'TEXT');
            ShaObj.setHMACKey('OPt8cbnBt_P461mggB8qbzrZiDc', 'TEXT');
            ShaObj.update('x-date: ' + GMTString);
            const HMAC = ShaObj.getHMAC('B64');
            let Authorization = `hmac username="83592d8c997f4933ae965e60e5995a2d", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;

                try{
                    const res = await fetch(`https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape/${this.selectedCity}?$top=30&$format=JSON`, {
                        method:'GET',
                        header:{
                            Authorization: Authorization,
                            "X-Date": GMTString,
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        'Accept-Encoding': 'gzip'                         
                    })

                    res.json().then((d) => this.routeData = d);
                    
                }catch{
                    console.log('fail route');
                }finally{
                    this.isSearched = true;
                }
            },
            showRoute(data){
                const regex = /[A-Z\s(]+/;
                let geometry = data.Geometry.replace(regex, '').replaceAll(')', '').replaceAll(' ', ',').split(',');
                this.routeGeometry = [];

                for(let i = 0; i < geometry.length; i++){                
                    if(i % 2 === 0){
                        this.routeGeometry.push([Number(geometry[i]), Number(geometry[i+1])]);
                    }
                }
                this.selectedRoute = data;
                this.isRouteSelected = true;
                this.drawRoute();
            },
            drawRoute(){
                this.map.addLayer({
                  id: "route",
                  type: "line",
                  source: {
                    type: "geojson",
                    data: {
                      type: "Feature",
                      properties: {},
                      geometry: {
                        type: "LineString",
                        coordinates: this.routeGeometry
                      }
                    }
                  },
                  layout: {
                    "line-join": "round",
                    "line-cap": "round"
                  },
                  paint: {
                    "line-color": "#D0104C",
                    "line-width": 10
                  }
                });

            },            
        },
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