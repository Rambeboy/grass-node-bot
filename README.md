## GRASS EXTENSIONS NODE BOT

![GRASS](assets/img1.jpg)

Grass Extension node, with multiple proxy (worker) support, it generate random device id for each proxy, and save it. As long as database.db not deleted that proxy will always have binded device id everytime bot run

## PREREQUISITE

- Git
- Node JS (v22)

## BOT FEATURE

- Single Account With Multiple Worker Based On Proxy
- Proxy Support (HTTP / SOCKS5)
- Auto Run Grass Node

## GRASS EXTENSION NODE AIRDROP

Grass Stage 2
If you not join on Grass Stage 1, don't forget to join Stage 2. 

Currently grass Stage 2 is on Epoch 1, idk it will run until how many Epoch

JOIN GRASS EPOCH 2 : [GRASS](https://app.getgrass.io/register/?referralCode=_D-RVWUQOUA6vDI)

NODE : [NODE](https://app.getgrass.io/dashboard/store)

Make sure you use Static Residential Proxy not just Residential Proxy (Rotating) 

You can Get It from : 
[Buy Proxy](https://iproyal.com/?r=409724) 4$

## SETUP & CONFIGURE BOT

### LINUX

1. Clone project repository
   ```
   git clone https://github.com/Rambeboy/grass-node-bot.git && cd grass-node-bot
   ```
2. Install Dependencies and Setup Bot
   ```
   npm install && npm run setup
   ```
3. Configure your accounts
   ```
   nano accounts/accounts.js
   ```
4. Configure the proxy
   ```
   nano config/proxy_list.js
   ```
5. Run Bot
   ```
   npm run start
   ```
   
### WINDOWS

1. Open your `Command Prompt` or `Power Shell`.

2. Clone project repository
   ```
   git clone https://github.com/Rambeboy/grass-node-bot.git && cd grass-node-bot
   ```
3. Install Dependencies and Setup Bot
   ```
   npm install && npm run setup
   ```

4. Navigate to `grass-node-bot` directory. 

5. Navigate to `accounts` folder and rename `accounts_tmp.js` to `accounts.js`.

6. Now open `acccounts.js` and setup your accounts.

7. Also Configure proxy if you want to use proxy, by open `proxy_list.js`. (if you have 
8. accounts, proxy is required)

9.  Back to `grass-node-bot` directory.

10. To start the app open your `Command Prompt` or `Power Shell`

11. Run Bot
    ```
    npm run start
    ```

## UPDATE BOT

To update bot follow this step :
1. Run
   ```
   git pull
   ```
   or
   ```
   git pull --rebase
   ```
   if error run
   ```
   git stash && git pull
   ```
2. Run
   ```
   npm update
   ```
2. Start the bot

## IMPORTANT NOTE (READ IT THIS IS NOT DECORATION)

How can I get GRASS Points?
Read on this Article : [GRASS NODE REPUTATION SCORING](https://grass-foundation.gitbook.io/grass-docs/architecture/node-reputation-scoring)

**USE STATIC RESIDENTIAL PROXY**

If you want to regist a new account, make sure to use chrome with incognito or browser with no grass extension.

## TROUBLESHOOT

if any error happen or bot not runnnig check on log file
```
cat log/app.log
```

## CONTRIBUTE

Feel free to fork and contribute adding more feature thanks.

## LICENSE

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
