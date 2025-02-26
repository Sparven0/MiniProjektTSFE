// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"modules/functions.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = getData;
exports.changeReadStatus = changeReadStatus;
exports.changeReviewStatus = changeReviewStatus;
exports.writeBook = writeBook;
exports.deleteBook = deleteBook;
var url = "http://localhost:3030/books";
function getData() {
  return __awaiter(this, void 0, Promise, function () {
    var res, data;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, fetch(url)];
        case 1:
          res = _a.sent();
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return [4 /*yield*/, res.json()];
        case 2:
          data = _a.sent();
          if (data) {
            console.log("Books array:", data);
          } else {
            console.log("Books property is undefined or missing.");
          }
          return [2 /*return*/, data];
      }
    });
  });
}
function changeReadStatus(ID, readStat) {
  return __awaiter(this, void 0, Promise, function () {
    var specUrl, body, options, res, data, e_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          specUrl = "".concat(url, "/").concat(ID, "/readstatus");
          body = {
            read: readStat
          };
          options = {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
          };
          _a.label = 1;
        case 1:
          _a.trys.push([1, 4,, 5]);
          return [4 /*yield*/, fetch(specUrl, options)];
        case 2:
          res = _a.sent();
          return [4 /*yield*/, res.json()];
        case 3:
          data = _a.sent();
          console.log(data);
          return [3 /*break*/, 5];
        case 4:
          e_1 = _a.sent();
          console.log('Error updating readstatus', e_1);
          return [3 /*break*/, 5];
        case 5:
          return [2 /*return*/];
      }
    });
  });
}
function changeReviewStatus(id, reviewStat) {
  return __awaiter(this, void 0, Promise, function () {
    var specUrl, body, options, res, data, e_2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          specUrl = "".concat(url, "/").concat(id, "/reviewstatus");
          body = {
            review: "".concat(reviewStat)
          };
          options = {
            method: 'PATCH',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
          };
          _a.label = 1;
        case 1:
          _a.trys.push([1, 4,, 5]);
          return [4 /*yield*/, fetch(specUrl, options)];
        case 2:
          res = _a.sent();
          return [4 /*yield*/, res.json()];
        case 3:
          data = _a.sent();
          return [3 /*break*/, 5];
        case 4:
          e_2 = _a.sent();
          console.log('Error updating status:', e_2);
          return [3 /*break*/, 5];
        case 5:
          return [2 /*return*/];
      }
    });
  });
}
function writeBook(title, writer, read, callback) {
  return __awaiter(this, void 0, Promise, function () {
    var body, options, specUrl, res, data, e_3;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          body = {
            ID: Date.now(),
            title: title,
            writer: writer,
            read: read,
            review: ''
          };
          options = {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
          };
          _a.label = 1;
        case 1:
          _a.trys.push([1, 4,, 5]);
          specUrl = "".concat(url, "/new");
          return [4 /*yield*/, fetch(specUrl, options)];
        case 2:
          res = _a.sent();
          return [4 /*yield*/, res.json()];
        case 3:
          data = _a.sent();
          console.log(data);
          callback();
          return [3 /*break*/, 5];
        case 4:
          e_3 = _a.sent();
          console.log('Error writing book:', e_3);
          return [3 /*break*/, 5];
        case 5:
          return [2 /*return*/];
      }
    });
  });
}
function deleteBook(id, callback) {
  return __awaiter(this, void 0, Promise, function () {
    var specUrl, options, res, data, e_4;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          specUrl = "".concat(url, "/").concat(id, "/delete");
          options = {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json'
            }
          };
          _a.label = 1;
        case 1:
          _a.trys.push([1, 4,, 5]);
          return [4 /*yield*/, fetch(specUrl, options)];
        case 2:
          res = _a.sent();
          return [4 /*yield*/, res.json()];
        case 3:
          data = _a.sent();
          console.log(data);
          callback();
          return [3 /*break*/, 5];
        case 4:
          e_4 = _a.sent();
          console.log('Error deleting book:', e_4);
          return [3 /*break*/, 5];
        case 5:
          return [2 /*return*/];
      }
    });
  });
}
},{}],"modules/main.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var functions_1 = require("./functions");
var functions_2 = require("./functions");
var functions_3 = require("./functions");
var functions_4 = require("./functions");
var functions_5 = require("./functions");
var form = document.querySelector('form');
function displayBookIds() {
  return __awaiter(this, void 0, void 0, function () {
    var data, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);
          return [4 /*yield*/, (0, functions_1.getData)()];
        case 1:
          data = _a.sent();
          console.log(data);
          if (data.books && Array.isArray(data.books)) {
            data.books.forEach(function (book) {
              var _this = this;
              var bookWrapper = document.createElement("div");
              bookWrapper.classList.add("bookwrapper");
              var saveBtn = document.createElement("button");
              saveBtn.innerText = "Save";
              var titleEl = document.createElement("p");
              var writerEl = document.createElement("p");
              var readElTxt = document.createElement("p");
              var readEl = document.createElement("input");
              readElTxt.innerText = "Read: ".concat(book.read);
              readEl.setAttribute("type", "checkbox");
              readEl.checked = book.read;
              readEl.addEventListener("change", function () {
                reviewEl.disabled = !readEl.checked;
                var readStat = readEl.checked;
                readElTxt.innerText = "Read: ".concat(readStat ? "true" : "false");
                if (readStat && reviewEl.value === 'disliked') {
                  addRemoveButton();
                } else {
                  removeRemoveButton();
                }
              });
              var reviewEl = document.createElement("select");
              var options = ["no comment", "liked", "disliked"];
              options.forEach(function (optionText) {
                var optionEl = document.createElement("option");
                optionEl.value = optionText;
                optionEl.innerText = optionText;
                reviewEl.appendChild(optionEl);
              });
              reviewEl.value = book.review;
              reviewEl.disabled = !readEl.checked;
              var reviewStat = '';
              reviewEl.addEventListener('change', function () {
                reviewStat = reviewEl.value;
                if (reviewStat === 'disliked' && readEl.checked) {
                  addRemoveButton();
                } else {
                  removeRemoveButton();
                }
              });
              function addRemoveButton() {
                var _this = this;
                if (!bookWrapper.querySelector('.removeBtn')) {
                  var removeBtn = document.createElement('button');
                  removeBtn.innerText = 'Remove';
                  removeBtn.classList.add('removeBtn');
                  bookWrapper.append(removeBtn);
                  removeBtn.addEventListener('click', function () {
                    return __awaiter(_this, void 0, void 0, function () {
                      return __generator(this, function (_a) {
                        switch (_a.label) {
                          case 0:
                            return [4 /*yield*/, (0, functions_5.deleteBook)(book.ID, displayBookIds)];
                          case 1:
                            _a.sent();
                            location.reload();
                            return [2 /*return*/];
                        }
                      });
                    });
                  });
                }
              }
              function removeRemoveButton() {
                var removeBtn = bookWrapper.querySelector('.removeBtn');
                if (removeBtn) {
                  removeBtn.remove();
                }
              }
              writerEl.innerText = "Writer: ".concat(book.writer);
              titleEl.innerText = "Title: ".concat(book.title);
              document.body.append(bookWrapper);
              bookWrapper.append(titleEl, writerEl, readEl, reviewEl, saveBtn, readElTxt);
              if (book.read && book.review === 'disliked') {
                addRemoveButton();
              }
              saveBtn.addEventListener("click", function () {
                return __awaiter(_this, void 0, void 0, function () {
                  var readStat;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        console.log(book.ID);
                        readStat = readEl.checked;
                        return [4 /*yield*/, (0, functions_2.changeReadStatus)(book.ID, readStat)];
                      case 1:
                        _a.sent();
                        return [4 /*yield*/, (0, functions_3.changeReviewStatus)(book.ID, reviewStat)];
                      case 2:
                        _a.sent();
                        if (readStat && reviewEl.value === 'disliked') {
                          addRemoveButton();
                        } else {
                          removeRemoveButton();
                        }
                        return [2 /*return*/];
                    }
                  });
                });
              });
            });
          } else {
            console.log("Data is not in the expected format or 'books' property is missing.");
          }
          return [3 /*break*/, 3];
        case 2:
          error_1 = _a.sent();
          console.error("Error fetching data:", error_1);
          return [3 /*break*/, 3];
        case 3:
          return [2 /*return*/];
      }
    });
  });
}
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
  event.preventDefault();
  var formData = new FormData(form);
  var title = formData.get('title');
  var writer = formData.get('writer');
  var read = formData.get('read');
  location.reload();
  var readBoolean = read !== null && typeof read === 'string' && read === 'on';
  (0, functions_4.writeBook)(title, writer, readBoolean, function () {
    displayBookIds();
  });
});
displayBookIds();
},{"./functions":"modules/functions.ts"}],"../../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55203" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","modules/main.ts"], null)
//# sourceMappingURL=/main.0aa3ff3b.js.map