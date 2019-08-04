# kristina-fox
Модуль для взаимодействия с API Кристины Лис
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
```
|Аргумент|Тип|Необходим|Описание|
|-|-|-|-|
|token|string|Да|Для использования модуля. Токен брать у [этого человека](https://vk.com/unfox_vk)|
## Методы
Вообще, вы можете найти [вот тут методы](http://mikasa.unf0x.ru/kris/public/) или тут.
* balance.get
```js
kf.balance.get({
vk_user_id: id
})
```
|Аргумент|Тип|Необходим|Описание|
|-|-|-|-|
|id|number|Да|ID человек|
* pay.getHistory
```js
kf.pay.getHistory({
vk_user_id: id,
count: count
})
```
|Аргумент|Тип|Необходим|Описание|
|-|-|-|-|
|id|number|Да|ID человека|
|count|number|Да|Количество возвращаемых транзакций|
* merchant.pay
```js
kf.merchant.pay({
vk_user_id: id,
sum: count,
to_id: id_get
})
```
|Аргумент|Тип|Необходим|Описание|
|-|-|-|-|
|id|number|Да|ID человека|
|sum|number|Да|Количество лисов.|
|to_id|number|Да|ID человека, которому будет переданы лисы|