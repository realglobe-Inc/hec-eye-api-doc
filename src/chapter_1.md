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
url="${domain}/api/devices?=${apiToken}"

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
api="api/devices/${deviceId}/beacon"
url="${domain}/${api}?token=${apiToken}"

# ビーコンの取得
curl -X GET "${url}"
```

上記サンプルの `api` 記述部分については、リクエストしたいものに適宜対応させ変更してください。
( 詳細については、後述の [api 一覧](#api-%e4%b8%80%e8%a6%a7) にあります。)

### POST のサンプル

```sh
# 受け側のURL作成
url="${domain}/api/devices/${deviceId}/beacon?token=${apiToken}"

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

### Devices

```typescript
{
  id: string,
  createdAt: string,
  name: string,
  type: string,
}
```

| 項目      | 説明                            |
| --------- | ------------------------------- |
| id        | 登録されているデバイス固有の ID |
| createdAt | デバイスが登録された日時        |
| name      | デバイス名                      |
| type      | 登録されているデバイスの情報    |

<div style="page-break-before:always"></div>

### Beacon

```typescript
{
  additional: {
    user: string,
    info: {
      hoge: string | number,
    }
  },
  alt: number,
  direction: number,
  lat: number,
  lng: number,
  type: string
}
```

| 項目            | 説明                                       |
| --------------- | ------------------------------------------ |
| additional.user | 投稿者の情報                               |
| additional.info | デバイスで投稿したい任意の情報。(複数可能) |
| alt             | デバイスの高度情報                         |
| direction       | デバイスの向き                             |
| lat             | デバイスの位置する緯度                     |
| lng             | デバイスの位置する経度                     |
| type            | 登録したデバイスの設定情報                 |

<div style="page-break-before:always"></div>

### Video

```typescript
 {
  createdAt: string,
  duration: number,
  fileSize: number,
  fileType: string,
  id: string,
  imageHeight: number,
  imageWidth: number,
  lat: number,
  lng: number,
  name: string,
  tags: Array<string>,
  url: string,
}
```

| 項目      | 説明                           |
| --------- | ------------------------------ |
| createdAt | 動画が投稿された日時           |
| duration  | 再生時間                       |
| fileSize  | 容量                           |
| fileType  | 拡張子                         |
| id        | 動画の固有 ID                  |
| lat       | 動画が投稿された位置情報(緯度) |
| lng       | 動画が投稿された位置情報(経度) |
| name      | 動画につけられた名前           |
| tags      | 関連付けされたタグ情報         |
| url       | 動画の URL                     |

<div style="page-break-before:always"></div>

### Photo

```typescript
{
  createdAt: string,
  id: string,
  lat: number,
  lng: number,
  name: string,
  tags: Array<string>,
  url: string,
}
```

| 項目      | 説明                               |
| --------- | ---------------------------------- |
| createdAt | 画像が投稿された日時               |
| id        | 画像の固有 ID                      |
| lat       | 画像が投稿された位置情報(緯度)     |
| lng       | 画像が投稿された位置情報(経度)     |
| name      | 画像につけられた名前               |
| tags      | 関連付けされたタグ情報             |
| url       | 画像の URL (domain からの相対パス) |
