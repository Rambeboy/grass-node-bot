import _0x88d81c from 'blessed';
import _0x22434a from '../core/core.js';
import { Helper } from './helper.js';
import { proxyList } from '../../../config/proxy_list.js';
import { accounts } from '../../../accounts/accounts.js';
export class Bless {
  constructor() {
    this.screen = _0x88d81c.screen({
      'smartCSR': true
    });
    this.screen.title = "Nofan Rambe";
    this.titleBox = _0x88d81c.box({
      'top': 0x0,
      'left': "center",
      'width': "shrink",
      'height': 0x2,
      'tags': true,
      'content': "{center}GRASS NODE BOT{/center}\n\n    Author : Nofan Rambe",
      'style': {
        'fg': "white",
        'bold': true
      }
    });
    this.screen.append(this.titleBox);
    this.subTitle = _0x88d81c.box({
      'top': 0x1,
      'left': "center",
      'width': 'shrink',
      'height': 0x2,
      'tags': true,
      'content': "Welcome & Enjoy Sir!",
      'style': {
        'fg': "white",
        'bold': true
      }
    });
    this.screen.append(this.subTitle);
    this.tabList = _0x88d81c.box({
      'top': 0x5,
      'left': 'center',
      'width': "100%",
      'height': 0x3,
      'tags': true,
      'style': {
        'fg': 'white'
      }
    });
    this.screen.append(this.tabList);
    this.hintBox = _0x88d81c.box({
      'bottom': 0x0,
      'left': "center",
      'width': "100%",
      'height': 0x3,
      'tags': true,
      'content': "{center}Use '->'(arrow right) and '<-'(arrow left) to switch between tabs{/center}",
      'style': {
        'fg': "white"
      }
    });
    this.screen.append(this.hintBox);
    this.infoBox = _0x88d81c.box({
      'bottom': 0x3,
      'left': "center",
      'width': "100%",
      'height': 0x3,
      'tags': true,
      'content': '',
      'style': {
        'fg': 'white'
      }
    });
    this.screen.append(this.infoBox);
    this.tabs = [];
    this.currentTabIndex = 0x0;
    proxyList.forEach((_0x3cb4ac, _0x4f7611) => {
      const _0x1db7af = this.createAccountTab("Worker " + (_0x4f7611 + 0x1));
      this.tabs.push(_0x1db7af);
      this.screen.append(_0x1db7af);
      _0x1db7af.hide();
    });
    if (this.tabs.length > 0x0) {
      this.tabs[0x0].show();
    }
    this.renderTabList();
    this.screen.key(['q', 'C-c'], () => {
      return process.exit(0x0);
    });
    this.screen.key(["left", 'right'], (_0x141c8c, _0xa1bafe) => {
      if (_0xa1bafe.name === "right") {
        this.switchTab((this.currentTabIndex + 0x1) % this.tabs.length);
      } else if (_0xa1bafe.name === 'left') {
        this.switchTab((this.currentTabIndex - 0x1 + this.tabs.length) % this.tabs.length);
      }
    });
    this.screen.render();
  }
  ['createAccountTab'](_0x1725fb) {
    return _0x88d81c.box({
      'label': _0x1725fb,
      'top': 0x6,
      'left': 0x0,
      'width': "100%",
      'height': 'shrink',
      'border': {
        'type': "line"
      },
      'style': {
        'fg': 'white',
        'border': {
          'fg': "#f0f0f0"
        }
      },
      'tags': true
    });
  }
  ["renderTabList"]() {
    let _0x40e49d = '';
    proxyList.forEach((_0x4ed894, _0x3d127a) => {
      if (_0x3d127a === this.currentTabIndex) {
        _0x40e49d += "{blue-fg}{bold} Worker " + (_0x3d127a + 0x1) + " {/bold}{/blue-fg} ";
      } else {
        _0x40e49d += " Worker " + (_0x3d127a + 0x1) + " ";
      }
    });
    this.tabList.setContent("{center}" + _0x40e49d + "{/center}");
    this.screen.render();
  }
  ["switchTab"](_0x45c9e9) {
    this.tabs[this.currentTabIndex].hide();
    this.currentTabIndex = _0x45c9e9;
    this.tabs[this.currentTabIndex].show();
    this.renderTabList();
    this.screen.render();
  }
  ["log"](_0x5e79c1 = '', _0x5a57ea = '', _0x1eb09b = new _0x22434a(), _0x5cae75) {
    if (_0x5cae75 === undefined || _0x5cae75 == "Delaying for 0 Hours 0 Minutes 0 Seconds") {
      _0x5cae75 = '-';
    }
    let _0x41a753;
    const _0x1cf90b = accounts.email ?? '-';
    const _0x567d14 = _0x1eb09b.user ?? {};
    let _0x9a5e36;
    if (accounts instanceof Object == true) {
      _0x9a5e36 = _0x567d14.userId ?? '-';
    } else {
      _0x9a5e36 = accounts;
    }
    const _0x9ea480 = _0x1eb09b.point ?? '-';
    const _0x3b88ba = _0x1eb09b.deviceId ?? '-';
    const _0x2d9439 = _0x1eb09b.IP;
    const _0x10ab5e = _0x1eb09b.network ?? {};
    const _0xbcd95e = _0x10ab5e.ipScore ?? '-';
    let _0x122b1f = {
      'msg': _0x5e79c1,
      'delay': _0x5cae75,
      'email': _0x1cf90b,
      'id': _0x9a5e36,
      'point': _0x9ea480,
      'device': _0x3b88ba,
      'ip': _0x2d9439,
      'ipScore': _0xbcd95e
    };
    _0x41a753 = '' + Helper.spinnerContent(_0x122b1f);
    this.tabs[_0x5a57ea].setContent(_0x41a753);
    this.screen.render();
  }
  ["info"](_0x59433e = '') {
    const _0x523540 = "\n\n{center}Info: " + _0x59433e + "{/center}\n\n";
    this.infoBox.setContent(_0x523540);
    this.screen.render();
  }
  ["clearInfo"]() {
    this.infoBox.setContent('');
    this.screen.render();
  }
}
