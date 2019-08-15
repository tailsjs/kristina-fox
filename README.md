# kristina-fox
Модуль для взаимодействия с API Кристины Лис

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/deb89212fae74e809a4134feab1abc65)](https://www.codacy.com/app/tailsjs/kristina-fox?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=tailsjs/kristina-fox&amp;utm_campaign=Badge_Grade)
## Установка:
* Yarn:

`
yarn add kristina-fox
`

* NPM

`
npm i kristina-fox
`

## Использование
```js
let KF = require("kristina-fox")
let kf = new KF({
token: token
})

let balance = await kf.balance.get({ // Тут метод
vk_user_id: 227972326
})
```
|Аргумент|Тип|Необходим|Описание|
|-|-|-|-|
|token|string|Да|Для использования модуля. Токен брать у [этого человека](https://vk.com/unfox_vk)|
## Методы
> [Вот тут методы](http://mikasa.unf0x.ru/kris/public/)