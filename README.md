# fraction-parser
parse decimals into fractions / unicode vulgar fractions and vice-versa

##### Table of Contents 
[Installation](#installation)

[Usage](#usage)


<a name="installation"/>

## Installation

```yarn add fraction-parser``` or  ```npm install fraction-parser```

## Usage

```
import {toDecimal, toFraction} from 'fraction-parser'

toFraction(1.5, {useUnicodeVulgar: true}) // returns 1 ½

toFraction(1.5, {useUnicodeVulgar: true}) // returns 1 1/2

toDecimal('1 1/2') // returns 1.5

toDecimal('1 ½') // returns 1.5

```


