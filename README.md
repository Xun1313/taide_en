## Nodejs 版本

16.18.x

## 本地運行

```bash
1. npm install

2. 在跟目錄建立 .env.development 並貼上以下內容

WEBSITE_DOMAIN=https://taidetest.stpi.narl.org.tw
#前台domain

API_URL=https://taidetest.stpi.narl.org.tw/public/api
#api domain + 固定路徑前綴

NEXT_PUBLIC_NEWS_IMG_URL=https://taidetest.stpi.narl.org.tw/myImg/show/ISSUE_PLAN
#前台放上動態圖片的domain + 固定路徑前綴

TRAIN_DATA_IMG_URL=https://taidetest.stpi.narl.org.tw/myImg/show/TRAIN_DATA
#前台放上動態圖片的domain + 固定路徑前綴

NEXT_PUBLIC_WORD_CLOUD_IMG_URL=https://taidetest.stpi.narl.org.tw/myImg/show/WORD_CLOUD
#前台放上動態圖片的domain + 固定路徑前綴

NEXT_PUBLIC_ASSET_PREFIX=""
#配合 server 路由前綴

3. npm run dev
```

## 測試站環境運行

```bash
1. npm install

2. pm2 delete taide

3. 在跟目錄建立 .env.production 並貼上以下內容

WEBSITE_DOMAIN=https://taidetest.stpi.narl.org.tw
#前台domain

API_URL=https://taidetest.stpi.narl.org.tw/public/api
#api domain + 固定路徑前綴

NEXT_PUBLIC_NEWS_IMG_URL=https://taidetest.stpi.narl.org.tw/myImg/show/ISSUE_PLAN
#前台放上動態圖片的domain + 固定路徑前綴

TRAIN_DATA_IMG_URL=https://taidetest.stpi.narl.org.tw/myImg/show/TRAIN_DATA
#前台放上動態圖片的domain + 固定路徑前綴

NEXT_PUBLIC_WORD_CLOUD_IMG_URL=https://taidetest.stpi.narl.org.tw/myImg/show/WORD_CLOUD
#前台放上動態圖片的domain + 固定路徑前綴

NEXT_PUBLIC_ASSET_PREFIX="/index"
#配合 server 路由前綴

4. npm run build

5. pm2 start buildFile.js --name "taide"
```

## 正式站環境運行

```bash
1. npm install

2. pm2 delete taide

3. 在跟目錄建立 .env.production 並貼上以下內容

WEBSITE_DOMAIN=https://taide.tw
#前台domain

API_URL=https://taide.tw/public/api
#api domain + 固定路徑前綴

NEXT_PUBLIC_NEWS_IMG_URL=https://taide.tw/myImg/show/ISSUE_PLAN
#前台放上動態圖片的domain + 固定路徑前綴

TRAIN_DATA_IMG_URL=https://taide.tw/myImg/show/TRAIN_DATA
#前台放上動態圖片的domain + 固定路徑前綴

NEXT_PUBLIC_WORD_CLOUD_IMG_URL=https://taide.tw/myImg/show/WORD_CLOUD
#前台放上動態圖片的domain + 固定路徑前綴

NEXT_PUBLIC_ASSET_PREFIX="/index"
#配合 server 路由前綴

4. npm run build

5. pm2 start buildFile.js --name "taide"
```
