# App Info

<!-- <Window/> -->

`window info` under construction

## Ip Address
<code-group>
  <code-block title="Function">
  ``` js
  /* get ipv4 => query ip-api with ipv4 */

  getIp() {
    fetch('http://icanhazip.com/')
      .then(response => response.text())
      .then(data => this.ipAddress = data)
      .then(ipAddress => 
            
    fetch(`http://ip-api.com/json/${ipAddress}?fields=33579999`))
      .then(res => res.json())
      .then(ipData => this.ipData = ipData);       
  }
  ```
  </code-block>

  <code-block title="Result">
  ``` json
  /* result */
  {
    "status": "success",
    "country": "United States",
    "countryCode": "US",
    "region": "OK",
    "regionName": "Oklahoma",
    "city": "Oklahoma City",
    "lat": 35.483,
    "lon": -97.5363,
    "timezone": "America/Chicago",
    "offset": -21600,
    "isp": "AT&T Services, Inc.",
    "query": "108.91.35.192"
  }
  ```
  </code-block>
</code-group>