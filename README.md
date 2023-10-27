<div style="text-align: center;">

# Swiper-react-component

</div>
<p align="center">
  <img src="https://img.shields.io/npm/v/readme-md-generator.svg?orange=blue" />
  <a href="https://www.npmjs.com/package/@ahmed-osama-salem/swiper-react-component">
    <img alt="downloads" src="https://img.shields.io/npm/dm/readme-md-generator.svg?color=blue" target="_blank" />
  </a>
  <a href="https://github.com/Ahmed-Osama-Salem/swiper-react-component/blob/main/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://codecov.io/gh/kefranabg/readme-md-generator">
    <img src="https://codecov.io/gh/kefranabg/readme-md-generator/branch/master/graph/badge.svg" />
  </a>
  <a href="https://github.com/Ahmed-Osama-Salem/swiper-react-component">
    <img src="https://img.shields.io/badge/changelog-gitmoji-brightgreen.svg" alt="gitmoji-changelog">
  </a>
  <a href="https://github.com/Ahmed-Osama-Salem">
    <img alt="Github: AhmedOsama" src="https://img.shields.io/twitter/follow/ahmedosama.svg?style=social" target="_blank" />
  </a> 
</p>

> `Swiper React Component` Elevate Your Slider Game with Seamless Reusability and Optimal Performance!.<br /> just install and start your Slider Game ,its swiper but smarter ✨

## ✨ Demo

`Swiper-React-Component` is a resuable and smarter component based on swiper library and based on cloning elements with different shapes this component always focused on handling external data with swiper slides that can easily handled by a developer and when working with team you just need one component to handle your needs `static data , api , styles, etc` without creating many different components and too much imports in your project that make it too hard to read and fix , so now don't be sad this component is your ideal soluation with your slider game .

<p align="center">
  <img width="700" align="center" src="https://github.com/Ahmed-Osama-Salem/swiper-react-component-demo/blob/main/public/demo.gif" alt="demo"/>
</p>

## Table of Contents

- [Getting Started](#getting-started)
- [Example](#example)
- [Usage](#usage)
- [Props](#props)
- [Browser Compatibility](#browser-compatibility)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Getting started

Install `swiper-react-component` using npm.

```sh
# NPM
npm i @ahmed-osama-salem/swiper-react-component

# YARN
yarn add @ahmed-osama-salem/swiper-react-component
```

## Example

See the docs, tutorials and examples on the Github:

You can find [swiper-react-component examples here](https://github.com/Ahmed-Osama-Salem/swiper-react-component-demo).

## 🚀 Usage

> your first swiper component

```jsx
import { SwiperCarousel } from '@ahmed-osama-salem/swiper-react-component';

interface ShapeOneProps {
  item?: { id: number };
}

// THIS IS YOUR SWIPERSLIDE COMPONENT THAT AUTOMATICALLY READ EVERY OBJECT OF YOUR DATA AS item prop
// YOU CAN CUSTOMIZE YOUR OWN

const ShapeOne = (props: ShapeOneProps) => {
  return (
    <div className="flex h-[250px] w-[100%] items-center justify-center bg-stone-300 rounded-lg ">
      {props.item?.id}
    </div>
  );
};

const SwiperPagination = () => {
  // Your custom data you can add any data like you want , but must have an id key
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];

  return (
    <div className="w-full">
      <SwiperCarousel
        item={data}
        slidesPerView={1}
        pagination
        navigation
        spaceBetween={2}
        direction="horizontal"
        swiperContainerClass="w-[80%]"
      >
        <ShapeOne />
      </SwiperCarousel>
    </div>
  );
};

export default SwiperPagination;
```

> swiper component can easy handle api data by passing your api data state

```jsx
import { SwiperCarousel } from '@ahmed-osama-salem/swiper-react-component';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ShapeOne = ({
  item,
}: {
  item?: { id: number, urls: { raw: string } },
}) => {
  return (
    <div className="flex h-[250px] w-[250px] items-center justify-center bg-stone-300 rounded-full">
      <img
        alt="image"
        src={item?.urls.raw}
        className=" rounded-full object-cover w-full h-full"
      />
    </div>
  );
};

const SwiperWithApi = () => {
  const [data, setData] = useState([]);

  const getRandomData = async () => {
    const res = await axios
      .get(
        'https://api.unsplash.com/photos/?client_id=9dfwtUcXdaD9C3I6HXgAq-3R4Ceyry8mv9ryFvd54dA'
      )
      .then(data => {
        setData(data.data);
      })
      .catch(err => {
        return err;
      });

    return res;
  };

  useEffect(() => {
    getRandomData();
  }, []);

  return (
    <SwiperCarousel
      item={data}
      navigation
      slidesPerView={5}
      spaceBetween={2}
      direction="horizontal"
    >
      <ShapeOne />
    </SwiperCarousel>
  );
};

export default SwiperWithApi;
```

> `swiperProps` can provide any props from swiper lib from one prop

```jsx
<SwiperCarousel
  item={data}
  slidesPerView={1}
  pagination
  spaceBetween={2}
  direction="horizontal"
  swiperContainerClass="w-[80%]"
  swiperProps={{ pagination: { type: 'progressbar' } }} // HERE
>
  <ShapeOne />
</SwiperCarousel>
```

## Props

| Prop                          |           Type            | <div style="width: 400px;">Description</div>                                                                                         |
| :---------------------------- | :-----------------------: | :----------------------------------------------------------------------------------------------------------------------------------- |
| item<br/>_(required)_         |         object[]          | slides data with the following keys: <div>`id` is the primary **Example**: `[{id: 1, anything: 'sub'}, { id: 2, anything: "sub 2"}]` |
| children<br/>_(required)_     | ReactElement<{ item: T }> | your component that will render every object in your data in a single slide of swiper that accept any shape of data.                 |
| direction<br/>_(recommended)_ |          string           | by default is horizontal <div>`"horizontal" or "vertical"`</div>                                                                     |
| slidesPerView                 |          number           | number of how may slide show per view of swiper<br/> by default is `4`                                                               |
| spaceBetween                  |          number           | number of gaps between slides<br/> by default is `30`                                                                                |
| pagination                    |          boolean          | `true` if you want to add pagination                                                                                                 |
| navigation                    |          boolean          | `true` if you want to add navigation                                                                                                 |
| swiperContainerClass          |          string           | class of main swiper container accept any css class ,tailwind or bootstrap classes                                                   |
| swiperSlideClass              |          string           | class of swiper slides accept any css class ,tailwind or bootstrap classes.                                                          |
| swiperProps                   |       SwiperOptions       | this prop catches any option or props in swiper lib and give you many option to handle your swiper .                                 |

<!--## Code Contributors-->

<!--This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].-->
<!--<a href="https://github.com/kefranabg/readme-md-generator/graphs/contributors"><img src="https://opencollective.com/readme-md-generator/contributors.svg?width=890&button=false" /></a>-->

## Browser Compatibility

| Browser | Works? |
| :------ | :----- |
| Chrome  | Yes    |
| Firefox | Yes    |
| Safari  | Yes    |
| IE 11   | Yes    |

## 🤝 Contributing

Contributions, issues and feature requests are welcome.<br />
Feel free to check [issues page](https://github.com/Ahmed-Osama-Salem/swiper-react-component/issues) if you want to contribute.<br />
[Check the contributing guide](./CONTRIBUTING.md).<br />

## Author

👤 **Ahmed Osama**

- Linkedin: [@AhmedOsama](https://www.linkedin.com/in/ahmed-osama-083602243/)
- Github: [Ahmed Osama](https://github.com/Ahmed-Osama-Salem)

## Show your support

Please ⭐️ this repository if this package helped you!

<a href="https://github.com/Ahmed-Osama-Salem/swiper-react-component">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## 📝 License

Copyright © 2023 [Ahmed Osama](https://github.com/Ahmed-Osama-Salem).<br />
This project is [MIT](https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE) licensed.
