"use strict";
self["webpackHotUpdate_N_E"]("pages/create-item",{

/***/ "./pages/create-item.js":
/*!******************************!*\
  !*** ./pages/create-item.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateItem; }
/* harmony export */ });
/* harmony import */ var D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");
/* harmony import */ var ipfs_http_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ipfs-http-client */ "./node_modules/ipfs-http-client/src/index.js");
/* harmony import */ var ipfs_http_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ipfs_http_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var web3Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3Modal */ "./node_modules/web3Modal/dist/index.js");
/* harmony import */ var web3Modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3Modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../artifacts/contracts/NFT.sol/NFT.json */ "./artifacts/contracts/NFT.sol/NFT.json");
/* harmony import */ var _artifacts_contracts_NFTMarket_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../artifacts/contracts/NFTMarket.sol/NFTMarket.json */ "./artifacts/contracts/NFTMarket.sol/NFTMarket.json");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Projetos\\Blockchain\\marketplace\\nft-marketplace\\pages\\create-item.js",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var client = (0,ipfs_http_client__WEBPACK_IMPORTED_MODULE_4__.create)('https://ipfs.infura.io:5001/api/v0');




function CreateItem() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      fileUrl = _useState[0],
      setFileUrl = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    price: '',
    name: '',
    description: ''
  }),
      formInput = _useState2[0],
      updateFormInput = _useState2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  function onChange(_x) {
    return _onChange.apply(this, arguments);
  }

  function _onChange() {
    _onChange = (0,D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var file, added, url;
      return D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              file = e.target.files[0];
              _context.prev = 1;
              _context.next = 4;
              return client.add(file, {
                progress: function progress(prog) {
                  return console.log("Received: ".concat(prog));
                }
              });

            case 4:
              added = _context.sent;
              url = "https:\\ipfs.infura.io/ipfs/".concat(added.path);
              setFileUrl(url);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));
    return _onChange.apply(this, arguments);
  }

  function createMarket() {
    return _createMarket.apply(this, arguments);
  }

  function _createMarket() {
    _createMarket = (0,D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var name, description, price, data, added, url;
      return D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              name = formInput.name, description = formInput.description, price = formInput.price;
              console.log(formInput);

              if (!(!name || !description || !price || fileUrl)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return");

            case 4:
              data = JSON.stringify({
                name: name,
                description: description,
                image: fileUrl
              });
              debugger;
              _context2.prev = 6;
              _context2.next = 9;
              return client.add(data);

            case 9:
              added = _context2.sent;
              url = "https:\\ipfs.infura.io/ipfs/".concat(added.path); // After file is uploaded to IPFS, pass the URL to save it on Polygon

              createSale(url);
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](6);
              console.log("Error uploading files: ".concat(_context2.t0));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[6, 14]]);
    }));
    return _createMarket.apply(this, arguments);
  }

  function createSale(_x2) {
    return _createSale.apply(this, arguments);
  }

  function _createSale() {
    _createSale = (0,D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(url) {
      var web3Modal, connection, provider, singer, contract, transaction, tx, event, value, tokenId, price, listingPrice;
      return D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              web3Modal = new (web3Modal__WEBPACK_IMPORTED_MODULE_6___default())();
              _context3.next = 3;
              return web3Modal.connect();

            case 3:
              connection = _context3.sent;
              provider = new ethers__WEBPACK_IMPORTED_MODULE_11__.ethers.providers.Web3Provider(connection);
              singer = provider.getSigner();
              contract = new ethers__WEBPACK_IMPORTED_MODULE_11__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_7__.nftAddresses, _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_8__.abi, singer);
              _context3.next = 9;
              return contract.createToken(url);

            case 9:
              transaction = _context3.sent;
              _context3.next = 12;
              return transaction.wait();

            case 12:
              tx = _context3.sent;
              event = tx.events[0];
              value = event.args[2];
              tokenId = value.toNumber();
              price = ethers__WEBPACK_IMPORTED_MODULE_11__.ethers.utils.parseUnits(formInput.price, 'ether');
              contract = new ethers__WEBPACK_IMPORTED_MODULE_11__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_7__.nftmarketaddress, _artifacts_contracts_NFTMarket_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_9__.abi, singer);
              _context3.next = 20;
              return contract.getListingPrice();

            case 20:
              listingPrice = _context3.sent;
              listingPrice = listingPrice.toString();
              _context3.next = 24;
              return contract.createMarketItem(_config__WEBPACK_IMPORTED_MODULE_7__.nftAddresses, tokenId, price, {
                value: listingPrice
              });

            case 24:
              transaction = _context3.sent;
              _context3.next = 27;
              return transaction.wait();

            case 27:
              router.push('/');

            case 28:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _createSale.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: "flex justify-center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: "w-1/2 flex flex-col pb-12",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
        placeholder: "Asset Name",
        className: "mt-8 border rounded p-4",
        onChange: function onChange(e) {
          return updateFormInput(_objectSpread(_objectSpread({}, formInput), {}, {
            name: e.target.value
          }));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("textarea", {
        placeholder: "Asset Description",
        className: "mt-2 border rounded p-4",
        onChange: function onChange(e) {
          return updateFormInput(_objectSpread(_objectSpread({}, formInput), {}, {
            description: e.target.value
          }));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
        placeholder: "Asset Price in Eth",
        className: "mt-2 border rounded p-4",
        onChange: function onChange(e) {
          return updateFormInput(_objectSpread(_objectSpread({}, formInput), {}, {
            price: e.target.value
          }));
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
        type: "file",
        name: "Asset",
        className: "my-4",
        onChange: onChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this), fileUrl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
        className: "rounded mt-4",
        width: "350",
        src: fileUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
        onClick: createMarket,
        className: "font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg",
        children: "Create Digital Asset"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 9
  }, this);
}

_s(CreateItem, "QHFuUVFyGK5Xe405VN7wqqkxSaE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = CreateItem;

var _c;

$RefreshReg$(_c, "CreateItem");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3JlYXRlLWl0ZW0uZjU0MjQ3YTAxMDYwNzQ0Mzk5MTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNTSxNQUFNLEdBQUdILHdEQUFjLENBQUMsb0NBQUQsQ0FBN0I7QUFFQTtBQUNBO0FBQ0E7O0FBR2UsU0FBU1EsVUFBVCxHQUFzQjtBQUFBOztBQUNqQyxrQkFBOEJYLCtDQUFRLENBQUMsSUFBRCxDQUF0QztBQUFBLE1BQU9ZLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQXFDYiwrQ0FBUSxDQUFDO0FBQUNjLElBQUFBLEtBQUssRUFBRSxFQUFSO0FBQVlDLElBQUFBLElBQUksRUFBRSxFQUFsQjtBQUFzQkMsSUFBQUEsV0FBVyxFQUFFO0FBQW5DLEdBQUQsQ0FBN0M7QUFBQSxNQUFPQyxTQUFQO0FBQUEsTUFBa0JDLGVBQWxCOztBQUNBLE1BQU1DLE1BQU0sR0FBR2Ysc0RBQVMsRUFBeEI7O0FBSGlDLFdBS2xCZ0IsUUFMa0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsc1RBS2pDLGlCQUF3QkMsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1VDLGNBQUFBLElBRFYsR0FDaUJELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQURqQjtBQUFBO0FBQUE7QUFBQSxxQkFJNEJsQixNQUFNLENBQUNtQixHQUFQLENBQ2hCSCxJQURnQixFQUVoQjtBQUNJSSxnQkFBQUEsUUFBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEseUJBQVVDLE9BQU8sQ0FBQ0MsR0FBUixxQkFBeUJGLElBQXpCLEVBQVY7QUFBQTtBQURkLGVBRmdCLENBSjVCOztBQUFBO0FBSWNHLGNBQUFBLEtBSmQ7QUFVY0MsY0FBQUEsR0FWZCx5Q0FVbURELEtBQUssQ0FBQ0UsSUFW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aUJBQUlILGVBQWUsaUNBQU1ELFNBQU47QUFBaUJILFlBQUFBLEtBQUssRUFBRU8sQ0FBQyxDQUFDRSxNQUFGLENBQVNpQztBQUFqQyxhQUFuQjtBQUFBO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBZ0JFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUMsT0FGUDtBQUdFLGlCQUFTLEVBQUMsTUFIWjtBQUlFLGdCQUFRLEVBQUVwQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkYsRUF1QklSLE9BQU8saUJBQ0w7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBOEIsYUFBSyxFQUFDLEtBQXBDO0FBQTBDLFdBQUcsRUFBRUE7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCTixlQTJCRTtBQUFRLGVBQU8sRUFBRXFCLFlBQWpCO0FBQStCLGlCQUFTLEVBQUMsNkRBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURFO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1DSDs7R0E1R3VCdEI7VUFHTFA7OztLQUhLTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGUtaXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXHJcbmltcG9ydCB7IGNyZWF0ZSBhcyBpcGZzSHR0cENsaWVudCB9IGZyb20gJ2lwZnMtaHR0cC1jbGllbnQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gJ3dlYjNNb2RhbCdcclxuXHJcbmNvbnN0IGNsaWVudCA9IGlwZnNIdHRwQ2xpZW50KCdodHRwczovL2lwZnMuaW5mdXJhLmlvOjUwMDEvYXBpL3YwJylcclxuXHJcbmltcG9ydCB7IG5mdEFkZHJlc3NlcywgbmZ0bWFya2V0YWRkcmVzc30gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgTkZUIGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvTkZULnNvbC9ORlQuanNvbidcclxuaW1wb3J0IE1hcmtldCBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL05GVE1hcmtldC5zb2wvTkZUTWFya2V0Lmpzb24nXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlSXRlbSgpIHtcclxuICAgIGNvbnN0IFtmaWxlVXJsLCBzZXRGaWxlVXJsXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbZm9ybUlucHV0LCB1cGRhdGVGb3JtSW5wdXRdID0gdXNlU3RhdGUoe3ByaWNlOiAnJywgbmFtZTogJycsIGRlc2NyaXB0aW9uOiAnJ30pXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkZGVkID0gYXdhaXQgY2xpZW50LmFkZChcclxuICAgICAgICAgICAgICAgIGZpbGUsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChwcm9nKSA9PiBjb25zb2xlLmxvZyhgUmVjZWl2ZWQ6ICR7cHJvZ31gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwczpcXFxcaXBmcy5pbmZ1cmEuaW8vaXBmcy8ke2FkZGVkLnBhdGh9YFxyXG4gICAgICAgICAgICBzZXRGaWxlVXJsKHVybClcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTWFya2V0KCkge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2V9ID0gZm9ybUlucHV0XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybUlucHV0KVxyXG4gICAgICAgIGlmKCFuYW1lIHx8ICFkZXNjcmlwdGlvbiB8fCAhcHJpY2UgfHwgZmlsZVVybCkgcmV0dXJuXHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIG5hbWUsIGRlc2NyaXB0aW9uLCBpbWFnZTogZmlsZVVybFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCBhZGRlZCA9IGF3YWl0IGNsaWVudC5hZGQoZGF0YSlcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOlxcXFxpcGZzLmluZnVyYS5pby9pcGZzLyR7YWRkZWQucGF0aH1gXHJcbiAgICAgICAgICAgIC8vIEFmdGVyIGZpbGUgaXMgdXBsb2FkZWQgdG8gSVBGUywgcGFzcyB0aGUgVVJMIHRvIHNhdmUgaXQgb24gUG9seWdvblxyXG4gICAgICAgICAgICBjcmVhdGVTYWxlKHVybClcclxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciB1cGxvYWRpbmcgZmlsZXM6ICR7ZXJyb3J9YClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU2FsZSh1cmwpe1xyXG4gICAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKVxyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpXHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbilcclxuICAgICAgICBjb25zdCBzaW5nZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxyXG5cclxuICAgICAgICBsZXQgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KG5mdEFkZHJlc3NlcywgTkZULmFiaSwgc2luZ2VyKVxyXG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZVRva2VuKHVybClcclxuICAgICAgICBsZXQgdHggPSBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KClcclxuXHJcbiAgICAgICAgbGV0IGV2ZW50ID0gdHguZXZlbnRzWzBdXHJcbiAgICAgICAgbGV0IHZhbHVlID0gZXZlbnQuYXJnc1syXVxyXG4gICAgICAgIGxldCB0b2tlbklkID0gdmFsdWUudG9OdW1iZXIoKVxyXG5cclxuICAgICAgICBjb25zdCBwcmljZSA9IGV0aGVycy51dGlscy5wYXJzZVVuaXRzKGZvcm1JbnB1dC5wcmljZSwgJ2V0aGVyJylcclxuICAgICAgICBcclxuICAgICAgICBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobmZ0bWFya2V0YWRkcmVzcywgTWFya2V0LmFiaSwgc2luZ2VyKVxyXG4gICAgICAgIGxldCBsaXN0aW5nUHJpY2UgPSBhd2FpdCBjb250cmFjdC5nZXRMaXN0aW5nUHJpY2UoKVxyXG4gICAgICAgIGxpc3RpbmdQcmljZSA9IGxpc3RpbmdQcmljZS50b1N0cmluZygpXHJcblxyXG4gICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgY29udHJhY3QuY3JlYXRlTWFya2V0SXRlbShcclxuICAgICAgICAgICAgbmZ0QWRkcmVzc2VzLCB0b2tlbklkLCBwcmljZSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZTogbGlzdGluZ1ByaWNlIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KClcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBmbGV4IGZsZXgtY29sIHBiLTEyXCI+XHJcbiAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBc3NldCBOYW1lXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTggYm9yZGVyIHJvdW5kZWQgcC00XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZUZvcm1JbnB1dCh7IC4uLmZvcm1JbnB1dCwgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXNzZXQgRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBib3JkZXIgcm91bmRlZCBwLTRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlRm9ybUlucHV0KHsgLi4uZm9ybUlucHV0LCBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXNzZXQgUHJpY2UgaW4gRXRoXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgYm9yZGVyIHJvdW5kZWQgcC00XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZUZvcm1JbnB1dCh7IC4uLmZvcm1JbnB1dCwgcHJpY2U6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBuYW1lPVwiQXNzZXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXktNFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaWxlVXJsICYmIChcclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkIG10LTRcIiB3aWR0aD1cIjM1MFwiIHNyYz17ZmlsZVVybH0gLz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjcmVhdGVNYXJrZXR9IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtdC00IGJnLXBpbmstNTAwIHRleHQtd2hpdGUgcm91bmRlZCBwLTQgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICBDcmVhdGUgRGlnaXRhbCBBc3NldFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImV0aGVycyIsImNyZWF0ZSIsImlwZnNIdHRwQ2xpZW50IiwidXNlUm91dGVyIiwiV2ViM01vZGFsIiwiY2xpZW50IiwibmZ0QWRkcmVzc2VzIiwibmZ0bWFya2V0YWRkcmVzcyIsIk5GVCIsIk1hcmtldCIsIkNyZWF0ZUl0ZW0iLCJmaWxlVXJsIiwic2V0RmlsZVVybCIsInByaWNlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZm9ybUlucHV0IiwidXBkYXRlRm9ybUlucHV0Iiwicm91dGVyIiwib25DaGFuZ2UiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiYWRkIiwicHJvZ3Jlc3MiLCJwcm9nIiwiY29uc29sZSIsImxvZyIsImFkZGVkIiwidXJsIiwicGF0aCIsImNyZWF0ZU1hcmtldCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiaW1hZ2UiLCJjcmVhdGVTYWxlIiwid2ViM01vZGFsIiwiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNpbmdlciIsImdldFNpZ25lciIsImNvbnRyYWN0IiwiQ29udHJhY3QiLCJhYmkiLCJjcmVhdGVUb2tlbiIsInRyYW5zYWN0aW9uIiwid2FpdCIsInR4IiwiZXZlbnQiLCJldmVudHMiLCJ2YWx1ZSIsImFyZ3MiLCJ0b2tlbklkIiwidG9OdW1iZXIiLCJ1dGlscyIsInBhcnNlVW5pdHMiLCJnZXRMaXN0aW5nUHJpY2UiLCJsaXN0aW5nUHJpY2UiLCJ0b1N0cmluZyIsImNyZWF0ZU1hcmtldEl0ZW0iLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==