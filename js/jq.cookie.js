/*
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function(f,b,g){var a=/\+/g;function e(h){return h}function c(h){return decodeURIComponent(h.replace(a," "))}var d=f.cookie=function(q,p,v){if(p!==g){v=f.extend({},d.defaults,v);if(p===null){v.expires=-1}if(typeof v.expires==="number"){var r=v.expires,u=v.expires=new Date();u.setDate(u.getDate()+r)}if(v.nextDay){var k=new Date();v.expires=new Date();v.expires.setFullYear(k.getFullYear());v.expires.setMonth(k.getMonth());v.expires.setDate(k.getDate()+1);v.expires.setHours(0);v.expires.setMinutes(0);v.expires.setSeconds(0)}p=d.json?JSON.stringify(p):String(p);return(b.cookie=[encodeURIComponent(q),"=",d.raw?p:encodeURIComponent(p),v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join(""))}var h=d.raw?e:c;var s=b.cookie.split("; ");for(var o=0,m=s.length;o<m;o++){var n=s[o].split("=");if(h(n.shift())===q){var j=h(n.join("="));return d.json?JSON.parse(j):j}}return null};d.defaults={};f.removeCookie=function(i,h){if(f.cookie(i)!==null){f.cookie(i,null,h);return true}return false}})(Zepto,document);