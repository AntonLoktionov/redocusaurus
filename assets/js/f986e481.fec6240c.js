/*! For license information please see f986e481.fec6240c.js.LICENSE.txt */
(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[256,612],{5110:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5773),c=n(7378),o=n(1062),s=n(3879);var u=function(e){var t=e.layoutProps,n=e.spec,u=t||{},i=u.title,a=void 0===i?"API Docs":i,p=u.description,l=void 0===p?"Open API Reference Docs for the API":p,d="object"===n.type?n.content:void 0,f="url"===n.type?n.content:void 0;return c.createElement(o.Z,(0,r.Z)({},t,{title:a,description:l}),c.createElement(s.Z,{spec:d,specUrl:f||n.specUrl}))}},3879:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7378),c=n(1869),o=n(9237),s=n(7725);var u=function(e){var t=(0,o.Z)().isDarkTheme,n=(0,c.usePluginData)("docusaurus-theme-redoc"),u=n.lightTheme,i=n.darkTheme,a=n.redocOptions,p=t?i:u,l=e.spec,d=e.specUrl,f=(0,r.useMemo)((function(){return l?new s.AppStore(l,d,Object.assign({},a,{theme:p})):null}),[l,d,a,p]);return r.createElement("div",{className:"redocusaurus"},f?r.createElement(s.Redoc,{store:f}):r.createElement(s.RedocStandalone,{spec:l,specUrl:d,options:Object.assign({},a,{theme:p})}))}},3231:function(e,t,n){"use strict";n.r(t);var r=n(7378),c=n(5110),o=n(8948);t.default=function(){return r.createElement(c.default,{layoutProps:{title:"Open API Docs",description:"Open API Reference Docs for API"},spec:{type:"url",content:(0,o.Z)("/openapi-page.yaml")}})}},9184:function(){},6016:function(){},8002:function(){}}]);