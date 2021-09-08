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

              if (!(!name || !description || !price || !fileUrl)) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return");

            case 3:
              console.log(formInput);
              data = JSON.stringify({
                name: name,
                description: description,
                image: fileUrl
              }); // try{

              _context2.next = 7;
              return client.add(data);

            case 7:
              added = _context2.sent;
              url = "https:\\ipfs.infura.io/ipfs/".concat(added.path);
              console.log(added); // After file is uploaded to IPFS, pass the URL to save it on Polygon

              createSale(url); // } catch(error) {

              console.log("Error uploading files: ".concat(error)); // }

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3JlYXRlLWl0ZW0uMWUwMGQ4OGY3N2ViOTA2ZjJmZGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNTSxNQUFNLEdBQUdILHdEQUFjLENBQUMsb0NBQUQsQ0FBN0I7QUFFQTtBQUNBO0FBQ0E7O0FBR2UsU0FBU1EsVUFBVCxHQUFzQjtBQUFBOztBQUNqQyxrQkFBOEJYLCtDQUFRLENBQUMsSUFBRCxDQUF0QztBQUFBLE1BQU9ZLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQXFDYiwrQ0FBUSxDQUFDO0FBQUNjLElBQUFBLEtBQUssRUFBRSxFQUFSO0FBQVlDLElBQUFBLElBQUksRUFBRSxFQUFsQjtBQUFzQkMsSUFBQUEsV0FBVyxFQUFFO0FBQW5DLEdBQUQsQ0FBN0M7QUFBQSxNQUFPQyxTQUFQO0FBQUEsTUFBa0JDLGVBQWxCOztBQUNBLE1BQU1DLE1BQU0sR0FBR2Ysc0RBQVMsRUFBeEI7O0FBSGlDLFdBS2xCZ0IsUUFMa0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsc1RBS2pDLGlCQUF3QkMsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1VDLGNBQUFBLElBRFYsR0FDaUJELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQURqQjtBQUFBO0FBQUE7QUFBQSxxQkFJNEJsQixNQUFNLENBQUNtQixHQUFQLENBQ2hCSCxJQURnQixFQUVoQjtBQUNJSSxnQkFBQUEsUUFBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEseUJBQVVDLE9BQU8sQ0FBQ0MsR0FBUixxQkFBeUJGLElBQXpCLEVBQVY7QUFBQTtBQURkLGVBRmdCLENBSjVCOztBQUFBO0FBSWNHLGNBQUFBLEtBSmQ7QUFVY0MsY0FBQUEsR0FWZCx5Q0FVbURELEtBQUssQ0FBQ0UsSUFW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O0FBRUUsaUJBQVMsRUFBQyx5QkFGWjtBQUdFLGdCQUFRLEVBQUUsa0JBQUFwQyxDQUFDO0FBQUEsaUJBQUlILGVBQWUsaUNBQU1ELFNBQU47QUFBaUJILFlBQUFBLEtBQUssRUFBRU8sQ0FBQyxDQUFDRSxNQUFGLENBQVNrQztBQUFqQyxhQUFuQjtBQUFBO0FBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBZ0JFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUMsT0FGUDtBQUdFLGlCQUFTLEVBQUMsTUFIWjtBQUlFLGdCQUFRLEVBQUVyQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkYsRUF1QklSLE9BQU8saUJBQ0w7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBOEIsYUFBSyxFQUFDLEtBQXBDO0FBQTBDLFdBQUcsRUFBRUE7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCTixlQTJCRTtBQUFRLGVBQU8sRUFBRXFCLFlBQWpCO0FBQStCLGlCQUFTLEVBQUMsNkRBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURFO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1DSDs7R0E1R3VCdEI7VUFHTFA7OztLQUhLTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGUtaXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXHJcbmltcG9ydCB7IGNyZWF0ZSBhcyBpcGZzSHR0cENsaWVudCB9IGZyb20gJ2lwZnMtaHR0cC1jbGllbnQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gJ3dlYjNNb2RhbCdcclxuXHJcbmNvbnN0IGNsaWVudCA9IGlwZnNIdHRwQ2xpZW50KCdodHRwczovL2lwZnMuaW5mdXJhLmlvOjUwMDEvYXBpL3YwJylcclxuXHJcbmltcG9ydCB7IG5mdEFkZHJlc3NlcywgbmZ0bWFya2V0YWRkcmVzc30gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgTkZUIGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvTkZULnNvbC9ORlQuanNvbidcclxuaW1wb3J0IE1hcmtldCBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL05GVE1hcmtldC5zb2wvTkZUTWFya2V0Lmpzb24nXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlSXRlbSgpIHtcclxuICAgIGNvbnN0IFtmaWxlVXJsLCBzZXRGaWxlVXJsXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbZm9ybUlucHV0LCB1cGRhdGVGb3JtSW5wdXRdID0gdXNlU3RhdGUoe3ByaWNlOiAnJywgbmFtZTogJycsIGRlc2NyaXB0aW9uOiAnJ30pXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkZGVkID0gYXdhaXQgY2xpZW50LmFkZChcclxuICAgICAgICAgICAgICAgIGZpbGUsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChwcm9nKSA9PiBjb25zb2xlLmxvZyhgUmVjZWl2ZWQ6ICR7cHJvZ31gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwczpcXFxcaXBmcy5pbmZ1cmEuaW8vaXBmcy8ke2FkZGVkLnBhdGh9YFxyXG4gICAgICAgICAgICBzZXRGaWxlVXJsKHVybClcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTWFya2V0KCkge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2V9ID0gZm9ybUlucHV0XHJcbiAgICAgICAgaWYoIW5hbWUgfHwgIWRlc2NyaXB0aW9uIHx8ICFwcmljZSB8fCAhZmlsZVVybCkgcmV0dXJuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybUlucHV0KVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIG5hbWUsIGRlc2NyaXB0aW9uLCBpbWFnZTogZmlsZVVybFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCBhZGRlZCA9IGF3YWl0IGNsaWVudC5hZGQoZGF0YSlcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOlxcXFxpcGZzLmluZnVyYS5pby9pcGZzLyR7YWRkZWQucGF0aH1gXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZGVkKVxyXG4gICAgICAgICAgICAvLyBBZnRlciBmaWxlIGlzIHVwbG9hZGVkIHRvIElQRlMsIHBhc3MgdGhlIFVSTCB0byBzYXZlIGl0IG9uIFBvbHlnb25cclxuICAgICAgICAgICAgY3JlYXRlU2FsZSh1cmwpXHJcbiAgICAgICAgLy8gfSBjYXRjaChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgdXBsb2FkaW5nIGZpbGVzOiAke2Vycm9yfWApXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVNhbGUodXJsKXtcclxuICAgICAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKClcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKVxyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pXHJcbiAgICAgICAgY29uc3Qgc2luZ2VyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcclxuXHJcbiAgICAgICAgbGV0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChuZnRBZGRyZXNzZXMsIE5GVC5hYmksIHNpbmdlcilcclxuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBhd2FpdCBjb250cmFjdC5jcmVhdGVUb2tlbih1cmwpXHJcbiAgICAgICAgbGV0IHR4ID0gYXdhaXQgdHJhbnNhY3Rpb24ud2FpdCgpXHJcblxyXG4gICAgICAgIGxldCBldmVudCA9IHR4LmV2ZW50c1swXVxyXG4gICAgICAgIGxldCB2YWx1ZSA9IGV2ZW50LmFyZ3NbMl1cclxuICAgICAgICBsZXQgdG9rZW5JZCA9IHZhbHVlLnRvTnVtYmVyKClcclxuXHJcbiAgICAgICAgY29uc3QgcHJpY2UgPSBldGhlcnMudXRpbHMucGFyc2VVbml0cyhmb3JtSW5wdXQucHJpY2UsICdldGhlcicpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KG5mdG1hcmtldGFkZHJlc3MsIE1hcmtldC5hYmksIHNpbmdlcilcclxuICAgICAgICBsZXQgbGlzdGluZ1ByaWNlID0gYXdhaXQgY29udHJhY3QuZ2V0TGlzdGluZ1ByaWNlKClcclxuICAgICAgICBsaXN0aW5nUHJpY2UgPSBsaXN0aW5nUHJpY2UudG9TdHJpbmcoKVxyXG5cclxuICAgICAgICB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZU1hcmtldEl0ZW0oXHJcbiAgICAgICAgICAgIG5mdEFkZHJlc3NlcywgdG9rZW5JZCwgcHJpY2UsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWU6IGxpc3RpbmdQcmljZSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgYXdhaXQgdHJhbnNhY3Rpb24ud2FpdCgpXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgZmxleCBmbGV4LWNvbCBwYi0xMlwiPlxyXG4gICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXNzZXQgTmFtZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC04IGJvcmRlciByb3VuZGVkIHAtNFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVGb3JtSW5wdXQoeyAuLi5mb3JtSW5wdXQsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFzc2V0IERlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgYm9yZGVyIHJvdW5kZWQgcC00XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZUZvcm1JbnB1dCh7IC4uLmZvcm1JbnB1dCwgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFzc2V0IFByaWNlIGluIEV0aFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIGJvcmRlciByb3VuZGVkIHAtNFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVGb3JtSW5wdXQoeyAuLi5mb3JtSW5wdXQsIHByaWNlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgbmFtZT1cIkFzc2V0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmlsZVVybCAmJiAoXHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicm91bmRlZCBtdC00XCIgd2lkdGg9XCIzNTBcIiBzcmM9e2ZpbGVVcmx9IC8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y3JlYXRlTWFya2V0fSBjbGFzc05hbWU9XCJmb250LWJvbGQgbXQtNCBiZy1waW5rLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgcC00IHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgQ3JlYXRlIERpZ2l0YWwgQXNzZXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJldGhlcnMiLCJjcmVhdGUiLCJpcGZzSHR0cENsaWVudCIsInVzZVJvdXRlciIsIldlYjNNb2RhbCIsImNsaWVudCIsIm5mdEFkZHJlc3NlcyIsIm5mdG1hcmtldGFkZHJlc3MiLCJORlQiLCJNYXJrZXQiLCJDcmVhdGVJdGVtIiwiZmlsZVVybCIsInNldEZpbGVVcmwiLCJwcmljZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImZvcm1JbnB1dCIsInVwZGF0ZUZvcm1JbnB1dCIsInJvdXRlciIsIm9uQ2hhbmdlIiwiZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImFkZCIsInByb2dyZXNzIiwicHJvZyIsImNvbnNvbGUiLCJsb2ciLCJhZGRlZCIsInVybCIsInBhdGgiLCJjcmVhdGVNYXJrZXQiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImltYWdlIiwiY3JlYXRlU2FsZSIsImVycm9yIiwid2ViM01vZGFsIiwiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInNpbmdlciIsImdldFNpZ25lciIsImNvbnRyYWN0IiwiQ29udHJhY3QiLCJhYmkiLCJjcmVhdGVUb2tlbiIsInRyYW5zYWN0aW9uIiwid2FpdCIsInR4IiwiZXZlbnQiLCJldmVudHMiLCJ2YWx1ZSIsImFyZ3MiLCJ0b2tlbklkIiwidG9OdW1iZXIiLCJ1dGlscyIsInBhcnNlVW5pdHMiLCJnZXRMaXN0aW5nUHJpY2UiLCJsaXN0aW5nUHJpY2UiLCJ0b1N0cmluZyIsImNyZWF0ZU1hcmtldEl0ZW0iLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==