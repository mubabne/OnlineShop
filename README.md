# Онлайн дэлгүүр (web version)

The website version of the online shop mobile app. It has five roles, each with its own login page and screens:

| Role | Test login |
| --- | --- |
| Зочин (guest) | No login. Can browse and use the cart; checkout asks to log in |
| Худалдан авагч (buyer) | 99112233 / 1234 |
| Дэлгүүр /Merch (shop) | NT-0001 / 6123456 / 1234 |
| Хүргэлт (courier) | DRV-017 / PIN 1234 |
| Админ (admin) | admin / 1234 / 482913 |

The test details are already filled in on each login page.

## Run it on your computer

Needs Node.js 18 or newer.

```
npm start
```

Then open http://localhost:3000

## Publish on Vercel (no terminal needed)

1. Create a new **empty** repository on GitHub (for example `online-delguur`).
2. On the repository page, click **uploading an existing file**, drag in everything from this folder (`public`, `package.json`, `vercel.json`, `server.js`, `README.md`), and click **Commit changes**.
3. Go to https://vercel.com, sign in with GitHub, click **Add New... → Project**, and **Import** the repository.
4. Leave every setting as it is (Framework Preset: Other) and click **Deploy**.
5. After about a minute you get a link like `https://online-delguur.vercel.app`. That is the link for your teacher.

Every time you upload a changed file to GitHub, Vercel publishes the new version to the same link automatically.

## Files

- `public/index.html` - the page
- `public/styles.css` - all styles
- `public/app.js` - screens, navigation and sample data
- `server.js` - small local server for `npm start` (Vercel doesn't use it)
- `vercel.json` - tells Vercel to publish the `public` folder

Data (orders, products, carts) is saved in each visitor's browser, so everyone starts with the same sample data. "Өгөгдөл сэргээх" at the top resets it.
