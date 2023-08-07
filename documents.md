# 設計

## 使用ライブラリ

1. react-router-dom
    1. ルーティング設定に使用
    2. https://www.npmjs.com/package/react-router-dom
2. react-helmet-async
    1. ページごとのタイトルの設定に使用
    2. https://www.npmjs.com/package/react-helmet-async
3. mui
    1. マテリアルデザイン」
    2. https://mui.com/

# コンポーネント設計

## Page

### MCU

- 責務  
次回作と次々回作の情報を表示するページ

- props
 
| 物理名 |型| 概要 |
|---|---|---|
|movieInfo|Array\<movieInfo>|映画の情報|

```typescript
type movieInfo = {
    days_until: number;
    overview: string;
    poster_url: string;
    release_date: string;
    title: string;
    type: string;
}
```
