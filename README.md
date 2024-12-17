[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/riderreact.svg)](https://badge.fury.io/js/riderreact)
![NPM Downloads](https://img.shields.io/npm/dm/riderreact?color=purple)

[![RiderReact Hero](https://i.pinimg.com/736x/ab/b5/d7/abb5d7ba3368324648e9c374ef37cfed.jpg)]()

# RiderReact

RiderReact is a rich set of open source UI Components for React. See [RiderReact homepage]() for live showcase and documentation.

This library is built upon Primereact and extends its functionality to better suit the needs of specific projects.

## Download

RiderReact is available at [npm](https://www.npmjs.com/package/riderreact).

```
# Using npm
npm install riderreact

# Using yarn
yarn add riderreact

# Using pnpm
pnpm add riderreact
```

## Import

Each component can be imported individually so that you only bundle what you use. Import path is available in the documentation of the corresponding component.

```javascript
//import { ComponentName } from 'riderreact/dist/{componentname}';
import { Button } from 'riderreact/dist/button';

export default function MyComponent() {
  return (
    <Button label="RiderReact" />
  )
}
```

## Theming

RiderReact has two theming modes; styled or unstyled.

**Styled Mode**

Styled mode is based on pre-skinned components with opinionated themes like Material, Bootstrap or PrimeOne themes. Theme is the required css file to be imported, visit the [Themes](https://primereact.org/theming) section for the complete list of available themes to choose from.

```javascript
// theme
import 'primereact/resources/themes/lara-light-cyan/theme.css';
```
