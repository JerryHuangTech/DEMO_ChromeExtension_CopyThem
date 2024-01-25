
# CopyThem - ChatGPT Response Copier Chrome Extension

## 簡介

CopyThem 是一款專為 Chrome 瀏覽器設計的擴充功能，旨在提升使用 ChatGPT 的效率。這款擴充功能在每條 ChatGPT 回答下方添加了一個複製按鈕，使使用者能夠輕鬆地將回答複製到系統剪貼簿。

> [!INFO]
> 此複製功能已於2023年底成為 ChatGPT 基本功能，因此該項目已停止開發。

## 特色

- **一鍵複製**：在 ChatGPT 的回答下方新增一個可點擊的複製按鈕。
- **快速存取**：省去了手動選取和複製文字的麻煩。
- **提升工作流**：對於需要整理和保存 ChatGPT 回答的用戶來說，這個功能將大幅提升工作效率。

## 建置指南

建議基於node v18以上。

下載並解壓縮 `DEMO_CopyThem.zip` 文件。

```shell
cd ./DEMO_CopyThem
```

執行安裝

```shell
yarn install
```

程式碼執行建置

```shell
yarn run build
```

## Chrome 開發者安裝指南

1. 程式建置完成後，會放置於 `./CopyThem-4/dist` 資料夾。
2. 打開 Chrome，進入 `chrome://extensions/` 頁面。
3. 啟用開發者模式。
4. 點擊「加載已解壓的擴充功能」，選擇 `./CopyThem-4/dist`資料夾。

## 如何使用

安裝擴充功能後，打開 ChatGPT 對話頁面，您將在每條回答下方看到一個「Copy」按鈕。點擊此按鈕即可將相應的回答複製到剪貼簿。

## 支援與貢獻

## 授權

CopyThem 是一款開源擴充功能，遵循 MIT 授權。歡迎您根據需要修改和分發。
