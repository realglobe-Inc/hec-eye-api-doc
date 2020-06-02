# 1. 入門

Hec-Eye のデバイス連携 API の利用方法を解説します。

## API 利用方法のサンプル

### 共通設定

API の共通設定として必要な値は、Hec-Eye のドメイン、API トークン、デバイス ID です。

例：

```sh
# 受け側の情報
domain="https://sandbox.hec-eye.jp"
apiToken="hogehoge"
deviceId="fugafuga"
```

`apiToken` と `deviceId` は以下のように取得します。

#### API トークンの取得方法

API トークンを取得するには、Hec-Eye に管理者としてログインします。

「アプリ情報画面」の下部にある「開発者向け情報」に API トークンが表示されます。(画像の赤丸部分)

![APIトークン](./images/api_token.png)

#### deviceId の取得方法

デバイス一覧のエンドポイントから Hec-Eye の全デバイス情報を取得できます。

```sh
# リクエスト URL
url="${domain}/api/devices?token=${apiToken}"

# 全デバイス情報の取得
curl -X GET "${url}"
```

返ってくる JSON データに、それぞれのデバイスの情報が記されています。
デバイス情報の形式は、後述の [データの形式](#devices) を参考にしてください。

デバイス一覧情報から使用したいデバイス ID を利用してください。

### GET のサンプル

このセクションでは、各デバイスから投稿した

- ビーコン（位置情報）
- 写真
- 動画

の情報を取得する方法を記述します。

```sh
# リクエスト URL
api="api/devices/${deviceId}/beacons"
url="${domain}/${api}?token=${apiToken}"

# ビーコンの取得
curl -X GET "${url}"
```

上記サンプルの `api` 記述部分については、リクエストしたいものに適宜対応させ変更してください。
( 詳細については、後述の [api 一覧](#api-%e4%b8%80%e8%a6%a7) にあります。)

### POST のサンプル

```sh
# 受け側のURL作成
url="${domain}/api/devices/${deviceId}/beacons?token=${apiToken}"

# 投稿したいデータ
data='{
  "lat":35.70161,
  "lng":139.75319,
  "name":"Sample from API",
}'

# option
header="Content-Type: application/json"

# jsonの取得
curl -d "${data}" -H "${header}" -X POST "${url}"
```

### API 一覧

| Url                                | Verb | 説明                             |
| ---------------------------------- | ---- | -------------------------------- |
| `/api/devices`                     | GET  | Device の一覧習得                |
| `/api/devices/${deviceId}`         | GET  | Device の習得                    |
| `/api/devices/${deviceId}/beacons` | GET  | Device の投稿したビーコンを取得  |
| `/api/devices/${deviceId}/photos`  | GET  | Device の投稿した画像を取得      |
| `/api/devices/${deviceId}/videos`  | GET  | Device の投稿した写真を取得      |
| `/api/devices/${deviceId}/beacons` | POST | 設定した Device のビーコンを投稿 |

<br/>

## データ形式

API 返り値のデータ形式は、特に利用しそうな項目だけを抜粋しています。
例として返り値を記述していますが、ランダムに生成したサンプルですのでご注意ください。

### Devices

```json
{
  "id": "foopnnzy8r2jx3ukr5gph9aijwj3ij7",
  "createdAt": "2020-05-29T05:11:14.333Z",
  "name": "TestDrone",
  "type": "device:drone"
}
```

| 項目      | 説明                            | データ型        |
| --------- | ------------------------------- | --------------- |
| id        | 登録されているデバイス固有の ID | 文字列          |
| createdAt | デバイスが登録された日時        | 文字列 (日付型) |
| name      | デバイス名                      | 文字列          |
| type      | 登録されているデバイスの情報    | 文字列          |

<div style="page-break-before:always"></div>

### Beacon

```json
{
  "additional": {
    "user": "John Doe",
    "info": {
      "foo": "dog",
      "bar": 1618
    }
  },
  "alt": 10.0,
  "createdAt": "2020-05-29T05:11:14.333Z",
  "direction": 187.5,
  "lat": 35.678803,
  "lng": 139.756263,
  "type": "device:third-party"
}
```

| 項目            | 説明                                       | データ型              |
| --------------- | ------------------------------------------ | --------------------- |
| additional.user | 投稿者の情報                               | 文字列                |
| additional.info | デバイスで投稿したい任意の情報。(複数可能) | 文字列や数字の object |
| alt             | デバイスの高度情報                         | 数字                  |
| createdAt       | 情報が投稿されたときの日付                 | 文字列 (日付型)       |
| direction       | デバイスの向き (0 ~ 360 度)                | 数字                  |
| lat             | デバイスの位置する緯度 (-180 ~ 180)        | 数字                  |
| lng             | デバイスの位置する経度 (-90 ~ 90)          | 数字                  |
| type            | 登録したデバイスの設定情報                 | 文字列                |

<div style="page-break-before:always"></div>

### Video

```json
{
  "createdAt": "2020-05-29T05:11:14.333Z",
  "duration": 60,
  "fileSize": 6181340,
  "fileType": "MPEG-4",
  "imageHeight": 1080,
  "imageWidth": 1920,
  "lat": 35.678803,
  "lng": 139.756263,
  "name": "Video-9999",
  "tags": ["foo", "bar", "baz"],
  "url": "https://snapbox.hec-eye.jp/video-9999.mp4"
}
```

| 項目        | 説明                            | データ型        |
| ----------- | ------------------------------- | --------------- |
| createdAt   | 動画が投稿された日時            | 文字列 (日付型) |
| duration    | 再生時間 (秒)                   | 数字            |
| fileSize    | 容量 (byte)                     | 数字            |
| fileType    | 拡張子                          | 文字列          |
| imageHeight | 映像の解像度 (縦)               | 数字            |
| imageWidth  | 映像の解像度 (横)               | 数字            |
| lat         | 動画が投稿された位置情報 (緯度) | 数字            |
| lng         | 動画が投稿された位置情報 (経度) | 数字            |
| name        | 動画につけられた名前            | 文字列          |
| tags        | 関連付けされたタグ情報          | 文字列の配列    |
| url         | 動画の URL                      | 文字列          |

<div style="page-break-before:always"></div>

### Photo

```json
{
  "createdAt": "2020-05-29T05:11:14.333Z",
  "lat": 35.678803,
  "lng": 139.756263,
  "name": "Photo-9999",
  "tags": ["foo", "bar", "baz"],
  "url": "https://snapbox.hec-eye.jp/Photo-9999.flv"
}
}
```

| 項目      | 説明                            | データ型        |
| --------- | ------------------------------- | --------------- |
| createdAt | 画像が投稿された日時            | 文字列 (日付型) |
| lat       | 画像が投稿された位置情報 (緯度) | 数字            |
| lng       | 画像が投稿された位置情報 (経度) | 数字            |
| name      | 画像につけられた名前            | 文字列          |
| tags      | 関連付けされたタグ情報          | 文字列の配列    |
| url       | 画像の URL                      | 文字列          |
