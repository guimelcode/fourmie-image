!function(){"use strict";var e,t={906:function(){var e=window.wp.blocks;function t(){return t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},t.apply(this,arguments)}var i=window.wp.element,a=window.wp.i18n,r=window.wp.blockEditor,n=window.wp.components;(0,e.registerBlockType)("fourmi-e/image",{edit:function(e){return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(r.InspectorControls,null,(0,i.createElement)(n.PanelBody,{title:"Gestion de l'image"},(0,i.createElement)(n.__experimentalSpacer,null,(0,i.createElement)(n.ToggleControl,{label:"Marges pour l'image",help:e.attributes.imgMargin?"Marges par défaut du thème":"Pas de marge",checked:e.attributes.imgMargin,onChange:t=>(t=>{e.setAttributes({imgMargin:t})})(t)})),(0,i.createElement)(n.__experimentalSpacer,null,(0,i.createElement)(n.ToggleControl,{label:"Ajustment de l'image",help:e.attributes.imgAjust?"Ajustement du cadre l'image":"Image au format original",checked:e.attributes.imgAjust,onChange:t=>(t=>{e.setAttributes({imgAjust:t})})(t)})),e.attributes.imgAjust&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)(n.__experimentalSpacer,null,(0,i.createElement)(n.__experimentalRadioGroup,{label:"Hauteur de l'image",checked:e.attributes.imgHeightLimit,onChange:t=>{e.setAttributes({imgHeightLimit:t})}},(0,i.createElement)(n.__experimentalRadio,{value:"petite"},"Petite"),(0,i.createElement)(n.__experimentalRadio,{value:"moyenne"},"Moyenne"),(0,i.createElement)(n.__experimentalRadio,{value:"grande"},"Grande"))),(0,i.createElement)(n.__experimentalSpacer,null,(0,i.createElement)(n.RangeControl,{label:"Décalage dans la hauteur",value:e.attributes.imgOffsetVerticalPosition,onChange:t=>{e.setAttributes({imgOffsetVerticalPosition:t})}}))),(0,i.createElement)(n.__experimentalSpacer,null,(0,i.createElement)(n.ToggleControl,{label:"Limitation de largeur maximum l'image",help:e.attributes.maxWidthLimit?"Limite la largeur de l'image à 55vw":"Pas de limite",checked:e.attributes.maxWidthLimit,onChange:()=>e.setAttributes({maxWidthLimit:!e.attributes.maxWidthLimit})})))),e.attributes.imgID?(0,i.createElement)("figure",t({},(0,r.useBlockProps)(),{className:`${(0,r.useBlockProps)().className} ${e.attributes.imgMargin?"":"no-margin"} ${e.attributes.maxWidthLimit?"width-limit":""}`}),(0,i.createElement)("img",{className:` hauteur-${e.attributes.imgHeightLimit} ${e.attributes.imgAjust&&"cover"} `,src:e.attributes.imgURL,alt:e.attributes.imgAlt,width:e.attributes.imgWidth,height:e.attributes.imgHeight,style:e.attributes.imgAjust?{objectPosition:`center ${e.attributes.imgOffsetVerticalPosition}%`}:{objectPosition:"0 center"}}),e.isSelected&&(0,i.createElement)(n.Button,{className:"fourmi-e-remove-image",onClick:()=>{e.setAttributes({imgID:null,imgURL:null,imgAlt:null,imgWidth:null,imgHeight:null})},icon:"dimiss"},(0,a.__)("Supprimer l'image","la-fourmi-e")),(0,i.createElement)(r.RichText,{tagName:"figcaption",multiline:"p",placeholder:(0,a.__)("Écrire du contenu","la-fourmi-e"),value:e.attributes.figcaptionContent,onChange:t=>e.setAttributes({figcaptionContent:t})})):(0,i.createElement)(r.MediaUploadCheck,null,(0,i.createElement)(r.MediaUpload,{onSelect:t=>{console.log("🚀 ~ file: edit.js ~ line 52 ~ onSelectImage ~ image",t),e.setAttributes({imgID:t.id,imgURL:t.url,imgAlt:t.alt,imgWidth:t.width,imgHeight:t.height})},allowedTypes:["image"],value:e.attributes.imgID,render:e=>{let{open:t}=e;return(0,i.createElement)(n.Placeholder,{icon:"image-alt",label:(0,a.__)("Photo","la-fourmi-e"),instructions:(0,a.__)("Selectionner une image","la-fourmi-e")},(0,i.createElement)(n.Button,{isSecondary:!0,isLarge:!0,onClick:t,icon:"upload"},(0,a.__)("Importer","la-fourmi-e")))}})))},save:function(e){return e.attributes.imgID&&(0,i.createElement)("figure",t({},r.useBlockProps.save(),{className:`${r.useBlockProps.save().className} ${e.attributes.imgMargin?"":"no-margin"} ${e.attributes.maxWidthLimit?"width-limit":""}`}),(0,i.createElement)("img",{className:` hauteur-${e.attributes.imgHeightLimit} ${e.attributes.imgAjust&&"cover"} `,src:e.attributes.imgURL,alt:e.attributes.imgAlt,width:e.attributes.imgWidth,height:e.attributes.imgHeight,style:e.attributes.imgAjust?{objectPosition:`center ${e.attributes.imgOffsetVerticalPosition}%`}:{objectPosition:"0 center"}}),!!e.attributes.figcaptionContent.replace(/(<([^>]+)>)/gi,"").length&&(0,i.createElement)(r.RichText.Content,{tagName:"figcaption",value:e.attributes.figcaptionContent}))}})}},i={};function a(e){var r=i[e];if(void 0!==r)return r.exports;var n=i[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=function(t,i,r,n){if(!i){var l=1/0;for(s=0;s<e.length;s++){i=e[s][0],r=e[s][1],n=e[s][2];for(var o=!0,m=0;m<i.length;m++)(!1&n||l>=n)&&Object.keys(a.O).every((function(e){return a.O[e](i[m])}))?i.splice(m--,1):(o=!1,n<l&&(l=n));if(o){e.splice(s--,1);var u=r();void 0!==u&&(t=u)}}return t}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[i,r,n]},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,n,l=i[0],o=i[1],m=i[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(m)var s=m(a)}for(t&&t(i);u<l.length;u++)n=l[u],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(s)},i=self.webpackChunkfourmie_image=self.webpackChunkfourmie_image||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var r=a.O(void 0,[431],(function(){return a(906)}));r=a.O(r)}();