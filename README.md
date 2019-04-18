# Button

[![npm](https://img.shields.io/npm/v/rax-button.svg)](https://www.npmjs.com/package/rax-button)

Button is the basic button component. Internal implementation relies on `<Touchable>` to support onPress defined click events.
Button with default styles, but also support the style of custom.


## Install

```bash
$ npm install rax-button --save
```

## Import

```jsx
import Button from 'rax-button';
```

## Props

| name      | type       | default  | describe   |
| :------ | :------- | :--- | :--- |
| onPress | Function |      | click events |

At the same time to support any custom attributes through

## Example

```jsx
// demo
import { createElement, useState } from 'rax';
import Button from './mod';

export default (props) => {
  const [buttonText, setButtonText] = useState('normal');

  return (
    <Button onClick={(evt) => {
      setButtonText('click');
    }}>{buttonText}</Button>
  );
};
```