## Nodejs 版本

16.18.x

## 本地運行

```bash
1. npm install

2. 在跟目錄建立 .env.development 並貼上以下內容

WEBSITE_DOMAIN=https://taidetest.stpi.narl.org.tw
#前台domain

3. npm run dev
```

## 測試站環境運行

```bash
1. npm install

2. pm2 delete taide

3. 在跟目錄建立 .env.production 並貼上以下內容

WEBSITE_DOMAIN=https://taidetest.stpi.narl.org.tw
#前台domain

4. npm run build

5. pm2 start buildFile.js --name "taide"
```

## 正式站環境運行

```bash
1. npm install

2. pm2 delete taide

3. 在跟目錄建立 .env.production 並貼上以下內容

WEBSITE_DOMAIN=https://en.taide.tw
#前台domain

4. npm run build

5. pm2 start buildFile.js --name "taide"
```
