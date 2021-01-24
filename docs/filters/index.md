# Declaration

In Vue 2 `filters` were a seperate property of the Vue object:
``` js
filters: {
  titlecase(value) {
    if (!value) return ''
    value = value.toString().toLowerCase();
    return value.replace(/(^|\s)\S/g, function(t) { 
      return t.toUpperCase() });
  },
}

/* <div> {{ fullname | titlecase }} </div>
```
<br>  

In Vue 3 we use the `methods` property or the `computed` property:

``` js
methods: {
  titlecase(value) {
    if (!value) return ''
    value = value.toString().toLowerCase();
    return value.replace(/(^|\s)\S/g, function(t) { 
      return t.toUpperCase() });
  },
}

/* <div> {{ titlecase(fullname) }} </div> */
```

## titlecase
``` js
titlecase(value) {
  if (!value) return ''
  value = value.toString().toLowerCase();
  return value.replace(/(^|\s)\S/g, function(t) { 
    return t.toUpperCase() });
}
```

## sentencecase
``` js
sentencecase(value) {
  if (!value) return ''
  value = value.toString();
  return value.toLowerCase()
    .replace(/(^\s*\w|[.!?]\s*\w)/g, function(c) {
      return c.toUpperCase()});
}
```

## number
``` js
number(value, d=0) {
  if (!value) return '';
  value = value * 1;
  return value.toFixed(d);
}
```

## prefix
``` js
prefix(value, str) {
  if (!value) return '';
  value = value.toString(); 
  return str.concat(value);
}
```

## suffix
``` js
suffix(value, str) {
  if (!value) return '';
  value = value.toString(); 
  return value.concat(str);
}
```

<!-- <br>

___ -->



## Global Filters
<code-group>
  <code-block title="dateFormat.js">
  ``` js
export function dateFormat(date, format, utc) {
  date = new Date(date);
  var MMMM = ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var MMM = ["\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var dddd = ["\x02", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var ddd = ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function ii(i, len) {
      var s = i + "";
      len = len || 2;
      while (s.length < len) s = "0" + s;
      return s;
  }

  var y = utc ? date.getUTCFullYear() : date.getFullYear();
  format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
  format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
  format = format.replace(/(^|[^\\])y/g, "$1" + y);

  var Y = utc ? date.getUTCFullYear() : date.getFullYear();
  format = format.replace(/(^|[^\\])YYYY+/g, "$1" + Y);
  format = format.replace(/(^|[^\\])YY/g, "$1" + Y.toString().substr(2, 2));
  format = format.replace(/(^|[^\\])Y/g, "$1" + Y);

  var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
  format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
  format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
  format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
  format = format.replace(/(^|[^\\])M/g, "$1" + M);

  var d = utc ? date.getUTCDate() : date.getDate();
  format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
  format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
  format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
  format = format.replace(/(^|[^\\])d/g, "$1" + d);

  var D = utc ? date.getUTCDate() : date.getDate();
  format = format.replace(/(^|[^\\])DDDD+/g, "$1" + dddd[0]);
  format = format.replace(/(^|[^\\])DDD/g, "$1" + ddd[0]);
  format = format.replace(/(^|[^\\])DD/g, "$1" + ii(D));
  format = format.replace(/(^|[^\\])D/g, "$1" + D);   

  var H = utc ? date.getUTCHours() : date.getHours();
  format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
  format = format.replace(/(^|[^\\])H/g, "$1" + H);

  var h = H > 12 ? H - 12 : H == 0 ? 12 : H;
  format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
  format = format.replace(/(^|[^\\])h/g, "$1" + h);

  var m = utc ? date.getUTCMinutes() : date.getMinutes();
  format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
  format = format.replace(/(^|[^\\])m/g, "$1" + m);

  var s = utc ? date.getUTCSeconds() : date.getSeconds();
  format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
  format = format.replace(/(^|[^\\])s/g, "$1" + s);

  var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
  format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
  f = Math.round(f / 10);
  format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
  f = Math.round(f / 10);
  format = format.replace(/(^|[^\\])f/g, "$1" + f);

  var T = H < 12 ? "AM" : "PM";
  format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
  format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));

  var t = T.toLowerCase();
  format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
  format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));    

  var o = ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 !== 10) * d % 10];
  format = format.replace(/(^|[^\\])o+/g, "$1" + o);

  var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
  var timezoneClip = /[^-+\dA-Z]/g;
  var z = (String(date).match(timezone) || ['']).pop().replace(timezoneClip, '');
  format = format.replace(/(^|[^\\])z+/g, "$1" + z);

  var tz = -date.getTimezoneOffset();
  var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
  if (!utc) {
      tz = Math.abs(tz);
      var tzHrs = Math.floor(tz / 60);
      var tzMin = tz % 60;
      K += ii(tzHrs) + ":" + ii(tzMin);
  }
  format = format.replace(/(^|[^\\])K/g, "$1" + K);

  var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
  format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
  format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);

  format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
  format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);

  format = format.replace(/\\(.)/g, "$1");

  return format;
};

  ```
  </code-block>
	
  <code-block title="filters.js" active>
  ``` js
import { dateFormat } from './dateFormat.js';
export default {
  date(value="", filter="") {
    if (!value) return '';
    return dateFormat(value, filter);
  },
  titlecase(value) {
    if (!value) return ''
    value = value.toString().toLowerCase()  ;
    return value.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
  },
  sentencecase(value) {
    if (!value) return ''
    value = value.toString()  ;
      return value.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g,function(c){return c.toUpperCase()});
  },
  prefix(value, str) {
    if (!value) return '';
    value = value.toString(); 
    return str.concat(value);
  },
  suffix(value, str) {
    if (!value) return '';
    value = value.toString(); 
    return value.concat(str);
  },
  decimal(value, d=0) {
    if (!value) return '';
      value = value * 1;
    return value.toFixed(d);
  }
}
  ```
  </code-block>

  <code-block title="main.js">
  ``` js{3,7}
import { createApp } from 'vue'
import App from './App.vue'
import filters from './filters/filters.js'

const app = createApp(App)

app.config.globalProperties = filters;

app.use(router)
.mount('#app')
  ```
  </code-block>
</code-group>
```

<br>

## Global Registration ???

> deprecate

``` js
/* main.js */
import dateFormat from './dateFormat.js'

export default {
  install: (app, options) => {
    app.config.globalProperties.$filters = {

		}
    app.provide('filters', options)
  }
}
```




