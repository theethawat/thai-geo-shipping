# Thailand Regions Find and Remote Distance API

Use your 5 digit Thailand postcode to find what region on them and check if it a 'remote distance' for distribution service. Now it's only available only for Flash Express

### Install

Using npm to install

```
npm install --save thai-geo-shipping
```

### Using with Normal JavaScript

```
const thaiGeo = require('thai-geo-shipping')

let myRegion = thaiGeo.findRegion('90110')
console.log(myRegion)
```

expected answer is 'south'

### Using ES6 or Babel JavaScript

```
import ThaiGeo from 'thai-geo-shipping'
let myRegion = ThaiGeo.findRegion('90110')
```

## Core Function

### `checkIfRemoteArea(postcode, provider)`

Function is to check if your postcode is remote area in shipping provider in Thailand or not. Return Boolean true or false and or undefined.

- `postcode` postcode of the area that you want to check
- `provider` use flash,kerry,thaipost now available only flash

### `findRegion(postcode)`

Find that your postcode located in what region in Thailand, when use Thailand has 4 regions and 1 Bangkok.

Return 'string' region it will be 'bangkok','north','northeast','central', and 'south'

- postcode postcode of place where you want to search Region

### `findRegionGeoType(postcode)`

Find that your postcode located in what region in Thailand, when use Thailand has 6 regions and 1 Bangkok.

Return 'string' region it will be 'bangkok','north','northeast','central','east', 'west' and 'south'

- postcode postcode of place where you want to search Region

---

Design by Intelligent Automation Reserach Center (IARC) at Prince of Songkla University Hatyai Campus Thailand.
