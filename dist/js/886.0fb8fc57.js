"use strict";(self["webpackChunkpokemon_app"]=self["webpackChunkpokemon_app"]||[]).push([[886],{886:function(e,s,o){o.r(s),o.d(s,{default:function(){return K}});var n=o(252),i=o(577);const l={class:"poke_card_container"},t={key:0,class:"poke_card w-4/12 m-auto mt-4 flex justify-center flex-col items-center"},a={class:"poke_name text-2xl uppercase"},p={class:"poke_name"},c={class:"poke_img_container flex justify-center"},_=["src"],k=["src"],r={class:"attributes_container"},m={class:"bg-none types_container"},u={class:"poke_list"},g=(0,n._)("p",{class:"bg-none font-bold"},"Types: ",-1),b={class:"poke_li"},d={class:"bg-none"},f={class:"poke_list"},y=(0,n._)("p",{class:"bg-none font-bold"},"Abilities: ",-1),v={class:"poke_li"};function w(e,s,o,w,h,D){return(0,n.wg)(),(0,n.iD)("div",l,[e.pokemon?((0,n.wg)(),(0,n.iD)("div",t,[(0,n._)("h3",a,[(0,n._)("b",p,(0,i.zw)(e.pokemon.name),1)]),(0,n._)("div",c,[(0,n._)("img",{class:"poke_img",src:e.pokemon.sprites.front_shiny,alt:"poke_img"},null,8,_),(0,n._)("img",{class:"poke_img",src:e.pokemon.sprites.back_shiny,alt:"poke_img"},null,8,k)]),(0,n._)("div",r,[(0,n._)("div",m,[(0,n._)("ol",u,[g,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.pokemon.types,((e,s)=>((0,n.wg)(),(0,n.iD)("div",{class:"types",key:s},[(0,n._)("li",b,(0,i.zw)(e.type.name),1)])))),128))])]),(0,n._)("div",d,[(0,n._)("ol",f,[y,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.pokemon.abilities,((e,s)=>((0,n.wg)(),(0,n.iD)("div",{class:"abilities",key:s},[(0,n._)("li",v,(0,i.zw)(e.ability.name),1)])))),128))])])])])):(0,n.kq)("",!0)])}var h=o(201),D=o(262),j={setup(){const e=(0,h.yj)(),s=(0,D.qj)({pokemon:null});return fetch(`https://pokeapi.co/api/v2/pokemon/${e.params.slug}/`).then((e=>e.json())).then((e=>{console.log(e),s.pokemon=e})),{...(0,D.BK)(s)}}},x=o(744);const z=(0,x.Z)(j,[["render",w]]);var K=z}}]);
//# sourceMappingURL=886.0fb8fc57.js.map