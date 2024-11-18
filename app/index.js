import { accounts } from '../accounts/accounts.js';
import { proxyList } from '../config/proxy_list.js';
import _0x548192 from './src/core/core.js';
import _0xb4c45a from './src/core/db/sqlite.js';
import { Helper } from './src/utils/helper.js';
import _0x376dfb from './src/utils/logger.js';
async function operation(_0x5ceb96, _0x1dc529, _0x2215f2) {
  const _0x167f4d = new _0x548192(_0x5ceb96, _0x1dc529, _0x2215f2);
  try {
    await _0x167f4d.initDevice();
    if (_0x5ceb96 instanceof Object) {
      await _0x167f4d.login();
      await _0x167f4d.getUser();
      await _0x167f4d.getPoint(true);
      await _0x167f4d.ipChecker();
      await _0x167f4d.getActiveNetwork();
    }
    await _0x167f4d.connectWebSocket();
  } catch (_0xe70c4b) {
    if (_0xe70c4b.message) {
      await Helper.delay(0x2710, _0x1dc529, "Error : " + _0xe70c4b.message + ", Retry again after 10 Second", _0x167f4d);
    } else {
      await Helper.delay(0x2710, _0x1dc529, "Error :" + JSON.stringify(_0xe70c4b) + ", Retry again after 10 Second", _0x167f4d);
    }
    await operation(_0x5ceb96, _0x1dc529, _0x2215f2);
  }
}
async function startBot() {
  return new Promise(async (_0x1752ca, _0x3ae540) => {
    try {
      _0x376dfb.info("BOT STARTED");
      if (accounts instanceof Object) {
        if (!accounts.email && !accounts.password) {
          throw Error("Please Set Up your account first on accounts.js file");
        }
      } else {
        if (accounts == undefined || accounts == '') {
          throw Error("Please Set Up your User id first on accounts.js file");
        }
      }
      if (proxyList.length == 0x0) {
        throw Error("This bot require you to use proxy, so add at least 1 proxy");
      }
      const _0x418dea = [];
      await _0xb4c45a.createTable();
      proxyList.forEach((_0x560cdd, _0x32eefb) => {
        _0x418dea.push(operation(accounts, _0x32eefb, _0x560cdd));
      });
      await Promise.all(_0x418dea);
      _0x1752ca();
    } catch (_0x1ebfe5) {
      _0x376dfb.info("BOT STOPPED");
      _0x376dfb.error(JSON.stringify(_0x1ebfe5));
      _0x3ae540(_0x1ebfe5);
    }
  });
}
(async () => {
  try {
    _0x376dfb.clear();
    _0x376dfb.info('');
    _0x376dfb.info("Application Started");
    console.log("GRASS NODE BOT");
    console.log();
    console.log("Author : Nofan Rambe");
    console.log("Welcome & Enjoy Sir!");
    console.log("Dont forget to run git pull to keep up to date");
    await startBot();
  } catch (_0x2fbfe2) {
    console.log("Error During executing bot", _0x2fbfe2);
    await startBot();
  }
})();
