(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02519590"],{"27fe":function(t,i,e){"use strict";e.d(i,"a",(function(){return o})),e.d(i,"b",(function(){return l}));var s=e("cebe"),a=e.n(s),n=e("3089");function o(t,i={}){return new Promise((e,s)=>{a.a.get(t,{params:i}).then(t=>{e(t.data)}).catch(t=>{s(t)})})}function l(t,i={}){return new Promise((e,s)=>{a.a.post(t,i).then(t=>{e(t.data)},t=>{s(t)})})}a.a.defaults.timeout=5e4,a.a.defaults.baseURL="",a.a.interceptors.request.use(t=>{t.data=JSON.stringify(t.data),t.headers={"Content-Type":"application/json"};const i=localStorage.getItem("userAddr");if(i){const e=localStorage.getItem(i);t.headers["X-BELE-TOKEN"]=e}return t},t=>Promise.reject(t)),a.a.interceptors.response.use(t=>{if(!t.data||"LOGIN"==t.data.code){const i=localStorage.getItem("userAddr");return localStorage.removeItem(i),localStorage.removeItem("userAddr"),n["Dialog"].alert({message:"请签名登录"}).then(()=>{window.location.href=window.location.origin+"/captain"}),t}return t},t=>Promise.reject(t))},"286e":function(t,i,e){var s=e("6b3d");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=e("499e").default;a("6dc3d4e1",s,!0,{sourceMap:!1,shadowMode:!1})},"6b3d":function(t,i,e){var s=e("24fb");i=s(!1),i.push([t.i,"#marsIncome{width:100%;min-height:100vh}#marsIncome .top_bar{display:flex;align-items:center;padding-top:10px;padding-left:14px;margin-bottom:12px}#marsIncome .top_bar img{width:35px;height:35px;margin-right:16px}#marsIncome .top_bar img:active{opacity:.8}#marsIncome .top_bar p{font-size:24px;font-weight:500;color:#fcfcfd;line-height:32px}#marsIncome .swiper_view{padding-left:7px;margin-bottom:36px}#marsIncome .swiper_view .swiper-slide{width:100%;padding:18px 6px 10px 7px}#marsIncome .swiper_view .swiper-slide .mars_item{position:relative;width:100%;height:100%;background:linear-gradient(298deg,#1a3133,rgba(27,27,27,0));border-radius:8px 8px 8px 8px;opacity:1;border:1px solid #bfbfbf;padding:6px 10px}#marsIncome .swiper_view .swiper-slide .mars_item .issue{font-size:14px;font-weight:400;color:#fff;line-height:22px;margin-bottom:10px}#marsIncome .swiper_view .swiper-slide .mars_item .money_title{font-size:12px;font-weight:400;color:#fcfcfd;line-height:24px}#marsIncome .swiper_view .swiper-slide .mars_item .money_value{font-size:22px;font-weight:700;color:#fcfcfd;line-height:30px}#marsIncome .swiper_view .swiper-slide .mars_item .dollar{font-size:10px;font-weight:500;color:#fcfcfd;line-height:14px}#marsIncome .swiper_view .swiper-slide .mars_item .ball{width:71px;height:auto;position:absolute;top:-18px;right:12px}#marsIncome .swiper_view .swiper-slide .mars_item .status{width:44px;height:17px;background:linear-gradient(103deg,#29373e 1%,#032723 98%);box-shadow:0 4px 4px 0 rgba(17,25,53,.2);border-radius:16px;border:1px solid #e5e5e5;font-size:8px;font-weight:400;color:#fff;line-height:17px;text-align:center;position:absolute;right:20px;bottom:8px}#marsIncome .prize_title{padding:0 24px;display:flex;align-items:center;justify-content:space-between;margin-bottom:17px}#marsIncome .prize_title p{font-size:16px;font-weight:400;color:#fcfcfd;line-height:24px}#marsIncome .prize_title span{font-size:14px;font-weight:400;color:#fcfcfd;line-height:16px;padding:4px 12px;background:#343944;border-radius:24px}#marsIncome .prize_item{margin:0 16px;margin-bottom:14px;min-height:59px;background:#232323;box-shadow:0 4px 50px 0 rgba(0,0,0,.25);border-radius:10px;display:flex;align-items:center;justify-content:space-between;padding-left:8px;padding-right:15px}#marsIncome .prize_item .title{font-size:14px;font-weight:500;color:#fff;line-height:26px;flex-shrink:0}#marsIncome .prize_item .info{flex:1;display:flex;flex-direction:column;align-items:flex-end}#marsIncome .prize_item .value{font-size:10px;font-weight:400;color:#fcfcfd;line-height:20px}#marsIncome .prize_item .value span{font-size:16px;color:#fff;padding-left:5px}#marsIncome .prize_item .btn{width:53px;height:20px;background:#0a9660;border-radius:24px;font-size:12px;line-height:20px;font-weight:500;color:#fcfcfd;text-align:center}#marsIncome .prize_item .btn:active{background:#046b44}#marsIncome .nodata{width:100%;height:142px;display:flex;align-items:center;justify-content:center}#marsIncome .nodata p{font-size:16px;color:#fff;font-weight:700}",""]),t.exports=i},"865c":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"marsIncome"}},[s("div",{staticClass:"top_bar"},[s("img",{staticClass:"back",attrs:{src:e("d758"),alt:""},on:{click:function(i){return t.$router.go(-1)}}}),s("p",[t._v("火星收益")])]),t.list.length?s("div",{staticClass:"swiper_view"},[s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},t._l(t.list,(function(i,a){return s("swiper-slide",{key:a},[s("div",{staticClass:"mars_item"},[s("p",{staticClass:"issue"},[t._v(t._s(i.time))]),s("p",{staticClass:"money_title"},[t._v("入场费(MARS)")]),s("p",{staticClass:"money_value"},[t._v(t._s((1*i.minDepositAmount).toFixed(0)))]),s("p",{staticClass:"dollar"},[t._v("≈$200.00")]),s("img",{staticClass:"ball",attrs:{src:e("bc97"),alt:""}}),s("div",{staticClass:"status"},[t._v(t._s(i.isFusing?"已熔断":"未熔断"))])])])})),1)],1):s("div",{staticClass:"nodata"},[t.loading?s("van-loading",{attrs:{color:"#ffffff",vertical:""}}):s("p",[t._v("暂无数据")])],1),t._m(0),t.list.length&&t.list[t.activeIndex].isFusing?s("div",{staticClass:"prize_item"},[s("p",{staticClass:"title"},[t._v("本金")]),s("div",{staticClass:"info"},[s("p",{staticClass:"value"},[t._v("MARS"),s("span",[t._v(t._s(null!==t.activeIndex?t.list[t.activeIndex].principal:0))])])])]):t._e(),t.list.length&&t.list[t.activeIndex].isFusing?s("div",{staticClass:"prize_item"},[s("p",{staticClass:"title"},[t._v("可领取本金")]),s("div",{staticClass:"info"},[s("p",{staticClass:"value"},[t._v("MARS"),s("span",[t._v(t._s(null!==t.activeIndex?t.list[t.activeIndex].klqprincipal:0))])]),null!==t.activeIndex&&1*t.list[t.activeIndex].klqprincipal!==0?s("div",{staticClass:"btn",on:{click:t.getPrincipal}},[t._v("领取")]):t._e()])]):t._e(),t.list.length&&t.list[t.activeIndex].isFusing?s("div",{staticClass:"prize_item"},[s("p",{staticClass:"title"},[t._v("总补偿金")]),s("div",{staticClass:"info"},[s("p",{staticClass:"value"},[t._v("MARS"),s("span",[t._v(t._s(null!==t.activeIndex?t.list[t.activeIndex].zbcAmount:0))])])])]):t._e(),t.list.length&&t.list[t.activeIndex].isFusing?s("div",{staticClass:"prize_item"},[s("p",{staticClass:"title"},[t._v("锁仓补偿金")]),s("div",{staticClass:"info"},[s("p",{staticClass:"value"},[t._v("MARS"),s("span",[t._v(t._s(null!==t.activeIndex?t.list[t.activeIndex].scbcAmount:0))])])])]):t._e(),t.list.length&&t.list[t.activeIndex].isFusing?s("div",{staticClass:"prize_item"},[s("p",{staticClass:"title"},[t._v("已领取补偿金")]),s("div",{staticClass:"info"},[s("p",{staticClass:"value"},[t._v("MARS"),s("span",[t._v(t._s(null!==t.activeIndex?t.list[t.activeIndex].ylqbcAmount:0))])])])]):t._e(),t.list.length&&t.list[t.activeIndex].isFusing?s("div",{staticClass:"prize_item"},[s("p",{staticClass:"title"},[t._v("可领取补偿金")]),s("div",{staticClass:"info"},[s("p",{staticClass:"value"},[t._v("MARS"),s("span",[t._v(t._s(null!==t.activeIndex?t.list[t.activeIndex].klqbcAmount:0))])]),null!==t.activeIndex&&t.list[t.activeIndex].isFusing&&1*t.list[t.activeIndex].klqbcAmount!==0?s("div",{staticClass:"btn",on:{click:t.getBCJ}},[t._v("领取")]):t._e()])]):t._e(),t.list.length&&t.list[t.activeIndex].isFusing?s("div",{staticClass:"prize_item"},[s("p",{staticClass:"title"},[t._v("总奖金")]),s("div",{staticClass:"info"},[s("p",{staticClass:"value"},[t._v("MARS"),s("span",[t._v(t._s(null!==t.activeIndex?t.list[t.activeIndex].zjAmount:0))])])])]):t._e(),t.list.length&&t.list[t.activeIndex].isFusing?s("div",{staticClass:"prize_item"},[s("p",{staticClass:"title"},[t._v("可领取奖金")]),s("div",{staticClass:"info"},[s("p",{staticClass:"value"},[t._v("MARS"),s("span",[t._v(t._s(null!==t.activeIndex?t.list[t.activeIndex].klqAmount:0))])]),null!==t.activeIndex&&t.list[t.activeIndex].isFusing&&1*t.list[t.activeIndex].klqAmount!==0?s("div",{staticClass:"btn",on:{click:t.getPrize}},[t._v("领取")]):t._e()])]):t._e(),s("div",{staticClass:"prize_item"},[s("p",{staticClass:"title"},[t._v("总普通节点分红")]),s("div",{staticClass:"info"},[s("p",{staticClass:"value"},[t._v("MARS"),s("span",[t._v(t._s(null!==t.activeIndex?t.list[t.activeIndex].zptjdIncome:0))])])])]),s("div",{staticClass:"prize_item"},[s("p",{staticClass:"title"},[t._v("可领取普通节点分红")]),s("div",{staticClass:"info"},[s("p",{staticClass:"value"},[t._v("MARS"),s("span",[t._v(t._s(null!==t.activeIndex?t.list[t.activeIndex].ptjdIncome:0))])]),null!==t.activeIndex&&1*t.list[t.activeIndex].ptjdIncome!==0?s("div",{staticClass:"btn",on:{click:t.getPTJD}},[t._v("领取")]):t._e()])]),s("div",{staticClass:"prize_item"},[s("p",{staticClass:"title"},[t._v("总优秀节点分红")]),s("div",{staticClass:"info"},[s("p",{staticClass:"value"},[t._v("MARS"),s("span",[t._v(t._s(null!==t.activeIndex?t.list[t.activeIndex].zyxjdIncome:0))])])])]),s("div",{staticClass:"prize_item"},[s("p",{staticClass:"title"},[t._v("可领取优秀节点分红")]),s("div",{staticClass:"info"},[s("p",{staticClass:"value"},[t._v("MARS"),s("span",[t._v(t._s(null!==t.activeIndex?t.list[t.activeIndex].yxjdIncome:0))])]),null!==t.activeIndex&&1*t.list[t.activeIndex].yxjdIncome!==0?s("div",{staticClass:"btn",on:{click:t.getYXJD}},[t._v("领取")]):t._e()])]),s("div",{staticClass:"prize_item"},[s("p",{staticClass:"title"},[t._v("邀请奖励")]),s("div",{staticClass:"info"},[s("p",{staticClass:"value"},[t._v("MARS"),s("span",[t._v(t._s(null!==t.activeIndex?t.list[t.activeIndex].invitePrize:0))])]),null!==t.activeIndex&&1*t.list[t.activeIndex].invitePrize!==0?s("div",{staticClass:"btn",on:{click:t.getInvite}},[t._v("领取")]):t._e()])])])},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"prize_title"},[e("p",[t._v("领取奖励")]),e("span",[t._v("全部")])])}],n=e("27fe"),o=e("aacf"),l={name:"index",data(){return{swiperOption:{},fleetcontract:null,getLoading:!1,loading:!0,list:[],activeIndex:null}},watch:{"$store.state.userAddress"(){this.getList()}},mounted(){this.$store.state.userAddress&&this.getList()},destroyed(){},methods:{async getList(t){let i=[];this.loading=!0;for(let s=0;s<this.$api.FLEET_ADDR.length;s++){const t=this.$api.FLEET_ADDR[s];let e=null;const a=this.$store.state.userAddress,l=new this.web3js.eth.Contract(o["a"].fleetAbi,t.addr,{from:a}),c=await l.methods.getGameInfo().call(),r=await l.methods.fusing().call(),d=await l.methods.getUserRewardInfo(a).call(),p=await Object(n["a"])(this.$api.apiUrl+"fleet/assets",{contractAddress:t.addr});let h=0,g=0;p.data&&p.data.id&&(h=p.data.fleetRecommendTotalAmount-p.data.fleetRecommendWithdrawAmount,g=p.data.id),console.log(d),e={principal:this.$utils.mathpow(d.principal,18),klqprincipal:this.$utils.mathpow(d.withdrawablePrincipal,18),zbcAmount:this.$utils.mathpow(d.totalCompensationAmount,18),scbcAmount:this.$utils.mathpow(d.lockedCompensationAmount,18),ylqbcAmount:this.$utils.mathpow(d.withdrewCompensationAmount,18),klqbcAmount:this.$utils.mathpow(d.withdrawableCompensationAmount,18),bcTime:0==d.lastWithdrawCompensationAmountTime?"--":new Date(1e3*d.lastWithdrawCompensationAmountTime).toLocaleString(),zjAmount:this.$utils.mathpow(d.totalBonus,18),klqAmount:this.$utils.mathpow(d.withdrawableBonus,18),zptjdIncome:this.$utils.mathpow(d.totalNodeFundAmount,18),zyxjdIncome:this.$utils.mathpow(d.totalGenesisNodeFundAmount,18),yxjdIncome:this.$utils.mathpow(d.withdrawableGenesisNodeFundAmount,18),ptjdIncome:this.$utils.mathpow(d.withdrawableNodeFundAmount,18),time:this.$utils.formatDate(1e3*c.time),minDepositAmount:this.$utils.mathpow(c.minDepositAmount,18),show:!0,fleetcontract:l,addr:t.addr,invitePrize:h,inviteId:g,isFusing:r},i=i.concat([e]),this.$api.FLEET_ADDR.length-1==s&&(this.loading=!1)}this.list=i;const e=this;i.length&&(this.activeIndex=t||0),this.swiperOption={effect:"coverflow",slidesPerView:1.4,centeredSlides:!0,initialSlide:t||0,on:{slideChangeTransitionEnd:function(){e.activeIndex=this.activeIndex}}}},getPrincipal(){if(this.getLoading||0==this.list[this.activeIndex].klqprincipal)return;const t=this.$store.state.userAddress;this.$toast.loading({duration:0,forbidClick:!0,message:"取回中..."}),this.getLoading=!0;try{this.list[this.activeIndex].fleetcontract.methods.withdrawPrincipalAfterFusing().send({from:t}).on("transactionHash",t=>{console.log("receipt",t)}).on("receipt",()=>{this.$toast.clear(),this.$dialog.alert({message:"取回成功"}).then(()=>{setTimeout(()=>{this.getList(this.activeIndex),this.getLoading=!1},500)})}).on("error",()=>{this.$toast.clear(),this.getLoading=!1,this.$dialog.alert({message:"取回失败"})})}catch(i){this.$toast.clear(),this.getLoading=!1,this.$dialog.alert({message:"取回失败"})}},getYXJD(){if(this.getLoading||0==this.list[this.activeIndex].yxjdIncome)return;const t=this.$store.state.userAddress;this.$toast.loading({duration:0,forbidClick:!0,message:"领取中..."}),this.getLoading=!0;try{this.list[this.activeIndex].fleetcontract.methods.withdrawGenesisNodeFund().send({from:t}).on("transactionHash",t=>{console.log("receipt",t)}).on("receipt",()=>{this.$toast.clear(),this.$dialog.alert({message:"领取成功"}).then(()=>{setTimeout(()=>{this.getList(this.activeIndex),this.getLoading=!1},500)})}).on("error",()=>{this.$toast.clear(),this.getLoading=!1,this.$dialog.alert({message:"领取失败"})})}catch(i){this.$toast.clear(),this.getLoading=!1,this.$dialog.alert({message:"领取失败"})}},getInvitePrize(){this.getLoading||0==this.list[this.activeIndex].invitePrize||(this.$toast.loading({duration:0,forbidClick:!0,message:"领取中..."}),this.getLoading=!0,Object(n["b"])(this.$api.apiUrl+"fleet/recommendClaim",{id:this.list[this.activeIndex].inviteId}).then(t=>{t.data?this.$dialog.alert({message:"领取成功"}).then(()=>{setTimeout(()=>{this.getList(this.activeIndex),this.getLoading=!1},500)}):(this.getLoading=!1,this.$toast.clear(),this.$dialog.alert({message:"领取失败"}))}).catch(()=>{this.getLoading=!1,this.$toast.clear(),this.$dialog.alert({message:"领取失败"})}))},getPTJD(){if(this.getLoading||0==this.list[this.activeIndex].ptjdIncome)return;const t=this.$store.state.userAddress;this.$toast.loading({duration:0,forbidClick:!0,message:"领取中..."}),this.getLoading=!0;try{this.list[this.activeIndex].fleetcontract.methods.withdrawNodeFund().send({from:t}).on("transactionHash",t=>{console.log("receipt",t)}).on("receipt",()=>{this.$toast.clear(),this.$dialog.alert({message:"领取成功"}).then(()=>{setTimeout(()=>{this.getList(this.activeIndex),this.getLoading=!1},500)})}).on("error",()=>{this.$toast.clear(),this.getLoading=!1,this.$dialog.alert({message:"领取失败"})})}catch(i){this.$toast.clear(),this.getLoading=!1,this.$dialog.alert({message:"领取失败"})}},getPrize(){if(console.log(this.getLoading,this.list[this.activeIndex].klqAmount),this.getLoading||0==this.list[this.activeIndex].klqAmount)return;const t=this.$store.state.userAddress;this.$toast.loading({duration:0,forbidClick:!0,message:"领取中..."}),this.getLoading=!0;try{this.list[this.activeIndex].fleetcontract.methods.withdrawBonus().send({from:t}).on("transactionHash",t=>{console.log("receipt",t)}).on("receipt",()=>{this.$toast.clear(),this.$dialog.alert({message:"领取成功"}).then(()=>{setTimeout(()=>{this.getList(this.activeIndex),this.getLoading=!1},500)})}).on("error",()=>{this.$toast.clear(),this.getLoading=!1,this.$dialog.alert({message:"领取失败"})})}catch(i){this.$toast.clear(),this.getLoading=!1,this.$dialog.alert({message:"领取失败"})}},getBCJ(){if(this.getLoading||0==this.list[this.activeIndex].klqbcAmount)return;const t=this.$store.state.userAddress;this.$toast.loading({duration:0,forbidClick:!0,message:"领取中..."}),this.getLoading=!0,console.log(this.list[this.activeIndex].fleetcontract);try{this.list[this.activeIndex].fleetcontract.methods.withdrawCompensationAmountAfterFusing().send({from:t}).on("transactionHash",t=>{console.log("receipt",t)}).on("receipt",()=>{this.$toast.clear(),this.$dialog.alert({message:"领取成功"}).then(()=>{setTimeout(()=>{this.getList(this.activeIndex),this.getLoading=!1},500)})}).on("error",()=>{this.$toast.clear(),this.getLoading=!1,this.$dialog.alert({message:"领取失败"})})}catch(i){this.$toast.clear(),this.getLoading=!1,this.$dialog.alert({message:"领取失败"})}}}},c=l,r=(e("a3a2"),e("2877")),d=Object(r["a"])(c,s,a,!1,null,null,null);i["default"]=d.exports},a3a2:function(t,i,e){"use strict";e("286e")},bc97:function(t,i,e){t.exports=e.p+"img/ball.ff091806.png"},d758:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABUZJREFUeF7lm09vG0UUwN/bdQISRQqfAIcvgNt6pd1ccFo79EYqUeAQKX/aA6KiSS5c4wDqraoDJyRKEtFLK6GQAwTiSDEHahNHivsJvJzSnGIJOJCN/dCs167trPePvbO7NnP07r557zdv3ryZeUbg3GQ5ET2DkYSIEEPANwkpCoRjABRt7xpVQKogoVqj2nNCoVQloVQq/KLyVBF5CI/LyQQiTgPgexcNdd2jCgg5qtHmYWEv5/prmw88AxBLJMZGz0YXa1RbQmAjzKWpKGD6rCr85pVn9A3AJ8PbaBJQRUAhc1YTNvsF0RcASUktElCa44jbuZHuEQe/727avdjteU8AYvKN6AhW1wEg0WvHHn+naiRO9uINrgGEYNS7sasIIKz+kf814wauKwCSMvUQgJbcdOD3u4iYPni2u+q0X8cApIl314Fqc04FB/oewkbxWXbeiQ6OAEgTqSMgiDkRGKJ3csV8dtJOH1sAAzXyndY68ARLAPGJqRUkSttRDPdzzBTzu8uul0EW7QHAVUQNKwgBhOVuq4OpB7B1PoLnRwEmOF6zrGgkXjbLE0wBSEqqDAAduzWvdfJdnmlQvABAklNzgMCyvKFrZlOhDYCR4u4P4eg3BrOivaKNl3K5SuOHNgCDkOn165ZItHpQ2GuubE0A9dE/PwJ+e/l+dffq+zYvaAIY5rl/IT9q8YKXAAKO/B/eugm3F2Z0XZ883YJH64+9GnEzOZViPvsGe6ADMM7wWPALpN2Zn2ka31Dgi/sP4OedLDd9iGiSnTHqACQ5tQEIs9x6sxBsZjx7/aedLHx5/wFPldaK+exSHUBA7t/N+MY0yHz9DU8AajGfHUdj7WeZn6/Nyvjj4xO4e+8zOH5xwlUnkbRxvKpcnxZA2OLaU4fwMBjPVKoSzGNcTqYRccUvAGEx3rB3DeNKcguB3eLwbyEzHhBwG6WJ5BEQcj/uCpvxxnCXUFKmyh7c31m6T0iNZzqrKCkp4un8ITZeN5s7gN2dH+D1S69dYOzXUmc3uMEBeHECdz/lv9YHDuCjW9OweO9jUz1YohM0BH+C4MIM3J6v7/Q6W8AQVP+WwXBCKPmbCIUMgp4IXVWuZwQQ2CWIL+1OiCAQ0SpekVNzos/H4GGBQChMoyzfiFax6v922MYTZuc/gb/+/oerV4okjhsHIvzTYTNLrDzh2+8e8z4XrB+IMMX8jgOtMLpB4H4kZlydh+NQ1GQ6sPNABoFXazsUZZ1ISvI0yEsR5gkfvH9Tt/fRxvfw5OmPvGxncsvFfPYtfTPU6MXvkyGe1tnJRgHnGrWFL6/GEomxkX8j5SC9wE5xj55XRBIvF4wi7LbL0f+DF3S9HGV0Wd3vkHtBWSTxWmP022JAMxYoSVbt/dAjdwuVmNa531DMtEQmrqT2MTx1wF5BbEb+VoGmAOrp8TDVCtCpSJErra5v6QHsYXyIpgIBLR/m90xL/iwLJYNMkb3y+86o3ynXvlQ2wKvzviEQbBQL1kXTtgD0NHkAi6WJaP+wsHfNDqIjADqEQfIEByNvGwTNyA1ApkgAuGZVHO06BnR+UF8dYCV8ewY6JYDPu0X7blPB8RRoFWAco4WlopSIKBeByILZOu9ZDDATZNQWsuKKgAqrext120zQjlqnN2iosf3DrH/l9XRKBF9devU8k2up+3Wjd09B0KoDfVpANQHI4gMXjyAAqnhluOcAWuHohZeArOz+nT5gNOoWVADcJqpth/rP0928g3mGhloMWRkOwtsMiDFVOuNGmf0nmIBUAcQ/q0TPR0HLFQo5rn+f/w9p7oJH8zEXWAAAAABJRU5ErkJggg=="}}]);