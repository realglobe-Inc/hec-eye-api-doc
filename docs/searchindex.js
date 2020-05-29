Object.assign(window.search, {"doc_urls":["chapter_1.html#1-入門","chapter_1.html#api-利用方法のサンプル","chapter_1.html#共通設定","chapter_1.html#get-のサンプル","chapter_1.html#post-のサンプル","chapter_1.html#api-一覧","chapter_1.html#データ形式","chapter_1.html#devices","chapter_1.html#beacon","chapter_1.html#video","chapter_1.html#photo"],"index":{"documentStore":{"docInfo":{"0":{"body":3,"breadcrumbs":1,"title":1},"1":{"body":0,"breadcrumbs":1,"title":1},"10":{"body":24,"breadcrumbs":1,"title":1},"2":{"body":27,"breadcrumbs":0,"title":0},"3":{"body":8,"breadcrumbs":0,"title":0},"4":{"body":20,"breadcrumbs":1,"title":1},"5":{"body":15,"breadcrumbs":1,"title":1},"6":{"body":1,"breadcrumbs":0,"title":0},"7":{"body":13,"breadcrumbs":1,"title":1},"8":{"body":24,"breadcrumbs":1,"title":1},"9":{"body":36,"breadcrumbs":1,"title":1}},"docs":{"0":{"body":"Hec-Eye のデバイス連携 API の利用方法を解説します。","breadcrumbs":"1. 入門","id":"0","title":"1. 入門"},"1":{"body":"","breadcrumbs":"API 利用方法のサンプル","id":"1","title":"API 利用方法のサンプル"},"10":{"body":"{ createdAt: string, id: string, lat: number, lng: number, name: string, tags: Array<string>, url: string,\n} 項目 説明 createdAt 画像が投稿された日時 id 画像の固有 ID lat 画像が投稿された位置情報(緯度) lng 画像が投稿された位置情報(経度) name 画像につけられた名前 tags 関連付けされたタグ情報 url 画像の URL (domain からの相対パス)","breadcrumbs":"Photo","id":"10","title":"Photo"},"2":{"body":"API の共通設定として必要な値は、Hec-Eye のドメイン、API トークン、デバイス ID です。 例： # 受け側の情報\ndomain=\"https://sandbox.hec-eye.jp\"\napiToken=\"hogehoge\"\ndeviceId=\"fugafuga\" apiToken と deviceId は以下のように取得します。 API トークンの取得方法 API トークンを取得するには、Hec-Eye に管理者としてログインします。 「アプリ情報画面」の下部にある「開発者向け情報」に API トークンが表示されます。(画像の赤丸部分) APIトークン deviceId の取得方法 デバイス一覧のエンドポイントから Hec-Eye の全デバイス情報を取得できます。 # リクエスト URL\nurl=\"${domain}/api/devices?=${apiToken}\" # 全デバイス情報の取得\ncurl -X GET \"${url}\" 返ってくる JSON データに、それぞれのデバイスの情報が記されています。 デバイス情報の形式は、後述の データの形式 を参考にしてください。 デバイス一覧情報から使用したいデバイス ID を利用してください。","breadcrumbs":"共通設定","id":"2","title":"共通設定"},"3":{"body":"このセクションでは、各デバイスから投稿した ビーコン（位置情報） 写真 動画 の情報を取得する方法を記述します。 # リクエスト URL\napi=\"api/devices/${deviceId}/beacon\"\nurl=\"${domain}/${api}?token=${apiToken}\" # ビーコンの取得\ncurl -X GET \"${url}\" 上記サンプルの api 記述部分については、リクエストしたいものに適宜対応させ変更してください。 ( 詳細については、後述の api 一覧 にあります。)","breadcrumbs":"GET のサンプル","id":"3","title":"GET のサンプル"},"4":{"body":"# 受け側のURL作成\nurl=\"${domain}/api/devices/${deviceId}/beacon?token=${apiToken}\" # 投稿したいデータ\ndata='{ \"lat\":35.70161, \"lng\":139.75319, \"name\":\"Sample from API\",\n}' # option\nheader=\"Content-Type: application/json\" # jsonの取得\ncurl -d \"${data}\" -H \"${header}\" -X POST \"${url}\"","breadcrumbs":"POST のサンプル","id":"4","title":"POST のサンプル"},"5":{"body":"Url Verb 説明 /api/devices GET Device の一覧習得 /api/devices/${deviceId} GET Device の習得 /api/devices/${deviceId}/beacons GET Device の投稿したビーコンを取得 /api/devices/${deviceId}/photos GET Device の投稿した画像を取得 /api/devices/${deviceId}/videos GET Device の投稿した写真を取得 /api/devices/${deviceId}/beacons POST 設定した Device のビーコンを投稿","breadcrumbs":"API 一覧","id":"5","title":"API 一覧"},"6":{"body":"API 返り値のデータ形式は、特に利用しそうな項目だけを抜粋しています。","breadcrumbs":"データ形式","id":"6","title":"データ形式"},"7":{"body":"{ id: string, createdAt: string, name: string, type: string,\n} 項目 説明 id 登録されているデバイス固有の ID createdAt デバイスが登録された日時 name デバイス名 type 登録されているデバイスの情報","breadcrumbs":"Devices","id":"7","title":"Devices"},"8":{"body":"{ additional: { user: string, info: { hoge: string | number, } }, alt: number, direction: number, lat: number, lng: number, type: string\n} 項目 説明 additional.user 投稿者の情報 additional.info デバイスで投稿したい任意の情報。(複数可能) alt デバイスの高度情報 direction デバイスの向き lat デバイスの位置する緯度 lng デバイスの位置する経度 type 登録したデバイスの設定情報","breadcrumbs":"Beacon","id":"8","title":"Beacon"},"9":{"body":"{ createdAt: string, duration: number, fileSize: number, fileType: string, id: string, imageHeight: number, imageWidth: number, lat: number, lng: number, name: string, tags: Array<string>, url: string,\n} 項目 説明 createdAt 動画が投稿された日時 duration 再生時間 fileSize 容量 fileType 拡張子 id 動画の固有 ID lat 動画が投稿された位置情報(緯度) lng 動画が投稿された位置情報(経度) name 動画につけられた名前 tags 関連付けされたタグ情報 url 動画の URL","breadcrumbs":"Video","id":"9","title":"Video"}},"length":11,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"a":{"d":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}},"p":{"df":0,"docs":{},"i":{"/":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"5":{"tf":1.0}},"e":{"df":0,"docs":{},"s":{"/":{"$":{"df":0,"docs":{},"{":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"5":{"tf":1.0}},"}":{"/":{"b":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"v":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"=":{"\"":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"/":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"/":{"$":{"df":0,"docs":{},"{":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"}":{"/":{"b":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":7,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":2.449489742783178},"3":{"tf":1.4142135623730951},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"=":{"\"":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"/":{"df":0,"docs":{},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"<":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":2,"docs":{"10":{"tf":1.0},"9":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"b":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"d":{"a":{"df":0,"docs":{},"t":{"df":3,"docs":{"10":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951},"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":1,"docs":{"4":{"tf":1.0}},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"5":{"tf":2.449489742783178},"7":{"tf":1.0}},"e":{"df":0,"docs":{},"i":{"d":{"=":{"\"":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"=":{"\"":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"n":{"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"10":{"tf":1.0}}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.7320508075688772}},"e":{".":{"df":0,"docs":{},"j":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}}}}}},"h":{"df":1,"docs":{"4":{"tf":1.0}},"e":{"a":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"=":{"\"":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"c":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"i":{"d":{"df":4,"docs":{"10":{"tf":1.7320508075688772},"2":{"tf":1.4142135623730951},"7":{"tf":1.7320508075688772},"9":{"tf":1.7320508075688772}}},"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}}}}},"w":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"t":{"\"":{":":{"3":{"5":{".":{"7":{"0":{"1":{"6":{"1":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":3,"docs":{"10":{"tf":1.4142135623730951},"8":{"tf":1.4142135623730951},"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"\"":{":":{"1":{"3":{"9":{".":{"7":{"5":{"3":{"1":{"9":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":3,"docs":{"10":{"tf":1.4142135623730951},"8":{"tf":1.4142135623730951},"9":{"tf":1.4142135623730951}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"\"":{":":{"\"":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":3,"docs":{"10":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951},"9":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"10":{"tf":1.4142135623730951},"8":{"tf":2.23606797749979},"9":{"tf":2.449489742783178}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"5":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":4,"docs":{"10":{"tf":2.0},"7":{"tf":2.0},"8":{"tf":1.7320508075688772},"9":{"tf":2.23606797749979}}}}}}}},"t":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"10":{"tf":1.4142135623730951},"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":3,"docs":{"4":{"tf":1.0},"7":{"tf":1.4142135623730951},"8":{"tf":1.4142135623730951}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"=":{"\"":{"$":{"df":0,"docs":{},"{":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"}":{"/":{"$":{"df":0,"docs":{},"{":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"}":{"?":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"=":{"$":{"df":0,"docs":{},"{":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"/":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"/":{"$":{"df":0,"docs":{},"{":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"}":{"/":{"b":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"?":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"=":{"$":{"df":0,"docs":{},"{":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"?":{"=":{"$":{"df":0,"docs":{},"{":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":6,"docs":{"10":{"tf":1.7320508075688772},"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951},"5":{"tf":1.0},"9":{"tf":1.7320508075688772}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"b":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"i":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{}}},"x":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}}}},"breadcrumbs":{"root":{"1":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"a":{"d":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{".":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}},"p":{"df":0,"docs":{},"i":{"/":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"5":{"tf":1.0}},"e":{"df":0,"docs":{},"s":{"/":{"$":{"df":0,"docs":{},"{":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"5":{"tf":1.0}},"}":{"/":{"b":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"v":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"=":{"\"":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"/":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"/":{"$":{"df":0,"docs":{},"{":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"}":{"/":{"b":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":7,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951},"2":{"tf":2.449489742783178},"3":{"tf":1.4142135623730951},"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"=":{"\"":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"/":{"df":0,"docs":{},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"<":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":2,"docs":{"10":{"tf":1.0},"9":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"b":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"d":{"a":{"df":0,"docs":{},"t":{"df":3,"docs":{"10":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951},"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":1,"docs":{"4":{"tf":1.0}},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"5":{"tf":2.449489742783178},"7":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"i":{"d":{"=":{"\"":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"=":{"\"":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"n":{"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"x":{".":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"10":{"tf":1.0}}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.7320508075688772}},"e":{".":{"df":0,"docs":{},"j":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}},"t":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}}}}}},"h":{"df":1,"docs":{"4":{"tf":1.0}},"e":{"a":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"=":{"\"":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}},"c":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"i":{"d":{"df":4,"docs":{"10":{"tf":1.7320508075688772},"2":{"tf":1.4142135623730951},"7":{"tf":1.7320508075688772},"9":{"tf":1.7320508075688772}}},"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}}}}},"w":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"j":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"t":{"\"":{":":{"3":{"5":{".":{"7":{"0":{"1":{"6":{"1":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":3,"docs":{"10":{"tf":1.4142135623730951},"8":{"tf":1.4142135623730951},"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"\"":{":":{"1":{"3":{"9":{".":{"7":{"5":{"3":{"1":{"9":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":3,"docs":{"10":{"tf":1.4142135623730951},"8":{"tf":1.4142135623730951},"9":{"tf":1.4142135623730951}}}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"\"":{":":{"\"":{"df":0,"docs":{},"s":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":3,"docs":{"10":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951},"9":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"10":{"tf":1.4142135623730951},"8":{"tf":2.23606797749979},"9":{"tf":2.449489742783178}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":1,"docs":{"10":{"tf":1.4142135623730951}}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.7320508075688772},"5":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":4,"docs":{"10":{"tf":2.0},"7":{"tf":2.0},"8":{"tf":1.7320508075688772},"9":{"tf":2.23606797749979}}}}}}}},"t":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"10":{"tf":1.4142135623730951},"9":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":3,"docs":{"4":{"tf":1.0},"7":{"tf":1.4142135623730951},"8":{"tf":1.4142135623730951}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"=":{"\"":{"$":{"df":0,"docs":{},"{":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"}":{"/":{"$":{"df":0,"docs":{},"{":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"}":{"?":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"=":{"$":{"df":0,"docs":{},"{":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"/":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"/":{"$":{"df":0,"docs":{},"{":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"}":{"/":{"b":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"?":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"=":{"$":{"df":0,"docs":{},"{":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"?":{"=":{"$":{"df":0,"docs":{},"{":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":6,"docs":{"10":{"tf":1.7320508075688772},"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951},"5":{"tf":1.0},"9":{"tf":1.7320508075688772}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"b":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"i":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"x":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}}}},"title":{"root":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":2,"docs":{"1":{"tf":1.0},"5":{"tf":1.0}}}}},"b":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":1,"docs":{"9":{"tf":1.0}}}}},"df":0,"docs":{}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});