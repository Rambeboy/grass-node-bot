import _0x2c8477 from 'moment-timezone';
import { Bless } from './bless.js';
import _0x26eae6 from './logger.js';
import { accounts } from '../../../accounts/accounts.js';
export class Helper {
  static ["myCode"] = "_D-RVWUQOUA6vDI";
  static ["myCode2"] = "nofan";
  static ["log"] = new Bless();
  static ["spinnerContent"] = _0x383c9c => "\n\n" + (accounts instanceof Object ? "\n\nEmail        : " + _0x383c9c.email + "\n\nPoints       : " + _0x383c9c.point : '') + "\n\nUser Id      : " + _0x383c9c.id + "\n\nDevice Id    : " + _0x383c9c.device + "\n\nIP           : " + _0x383c9c.ip + " (" + _0x383c9c.ipScore + "%)\n\nStatus : " + _0x383c9c.msg + "\n\nDelay : " + _0x383c9c.delay + "\n\n";
  static ['delay'] = (_0x5549c9, _0x3e8d44, _0x41b1a0, _0xe6429d) => {
    return new Promise(async _0x4a5711 => {
      let _0x3c1988 = _0x5549c9;
      if (_0x3e8d44 != undefined) {
        await this.log.log(_0x41b1a0, _0x3e8d44, _0xe6429d, "Delaying for " + this.msToTime(_0x5549c9));
      } else {
        await this.log.info("Delaying for " + this.msToTime(_0x5549c9));
      }
      const _0x34f63a = setInterval(async () => {
        _0x3c1988 -= 0x3e8;
        if (_0x3e8d44 != undefined) {
          await this.log.log(_0x41b1a0, _0x3e8d44, _0xe6429d, "Delaying for " + this.msToTime(_0x3c1988));
        } else {
          await this.log.info("Delaying for " + this.msToTime(_0x3c1988));
        }
        if (_0x3c1988 <= 0x0) {
          clearInterval(_0x34f63a);
          _0x4a5711();
        }
      }, 0x3e8);
      setTimeout(async () => {
        _0x26eae6.info("Worker " + _0x3e8d44 + " - " + _0x41b1a0);
        clearInterval(_0x34f63a);
        await this.log.clearInfo();
        if (_0x3e8d44) {
          await this.log.log(_0x41b1a0, _0x3e8d44, _0xe6429d);
        }
        _0x4a5711();
      }, _0x5549c9);
    });
  };
  static ["readTime"](_0x4ae81c) {
    const _0x411547 = _0x2c8477.unix(_0x4ae81c);
    return _0x411547.format("YYYY-MM-DD HH:mm:ss");
  }
  static ["getCurrentTimestamp"]() {
    const _0x375de8 = _0x2c8477().tz('Asia/Singapore').unix();
    return _0x375de8.toString();
  }
  static ["random"](_0x2b6614, _0x359cdb) {
    const _0x5b82bf = Math.floor(Math.random() * (_0x359cdb - _0x2b6614 + 0x1)) + _0x2b6614;
    return _0x5b82bf;
  }
  static ["randomFloat"](_0x130ccc, _0x53a6f9, _0x6dca61 = 0x4) {
    const _0x405f6e = Math.random() * (_0x53a6f9 - _0x130ccc) + _0x130ccc;
    return parseFloat(_0x405f6e.toFixed(_0x6dca61));
  }
  static ["msToTime"](_0x5252e7) {
    const _0x13624e = Math.floor(_0x5252e7 / 3600000);
    const _0x35ed57 = _0x5252e7 % 3600000;
    const _0xa45e95 = Math.floor(_0x35ed57 / 60000);
    const _0x524326 = _0x35ed57 % 60000;
    const _0x50871a = Math.round(_0x524326 / 0x3e8);
    return _0x13624e + " Hours " + _0xa45e95 + " Minutes " + _0x50871a + " Seconds";
  }
  static ["generateRandomString"](_0x454b1c) {
    let _0x4c219c = '';
    const _0x495b72 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length;
    for (let _0x4ee825 = 0x0; _0x4ee825 < _0x454b1c; _0x4ee825++) {
      _0x4c219c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * _0x495b72));
    }
    return _0x4c219c;
  }
  static ["serializeBigInt"] = _0x1ee5b2 => {
    return JSON.parse(JSON.stringify(_0x1ee5b2, (_0x17e4aa, _0x33693a) => typeof _0x33693a === "bigint" ? _0x33693a.toString() : _0x33693a));
  };
  static ["isToday"](_0x2d9b21) {
    const _0x3b68c0 = new Date(_0x2d9b21);
    const _0x39e6aa = new Date();
    _0x39e6aa.setHours(0x0, 0x0, 0x0, 0x0);
    const _0x1ed224 = new Date(_0x3b68c0);
    _0x1ed224.setHours(0x0, 0x0, 0x0, 0x0);
    return !!(_0x1ed224.getTime() === _0x39e6aa.getTime());
  }
  static ["refCheck"](_0x1339e6, _0x4397ee) {}
  ["static"]() {
    console.log('');
  }
            }
