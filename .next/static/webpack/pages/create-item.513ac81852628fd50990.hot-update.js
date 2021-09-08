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
      sentFileUrl = _useState[1];

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

              if (!(!name || !description || !price || fileUrl)) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return");

            case 3:
              data = JSON.stringify({
                name: name,
                description: description,
                image: fileUrl
              });
              _context2.prev = 4;
              _context2.next = 7;
              return client.add(data);

            case 7:
              added = _context2.sent;
              url = "https:\\ipfs.infura.io/ipfs/".concat(added.path); // After file is uploaded to IPFS, pass the URL to save it on Polygon

              createSale(url);
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](4);
              console.log("Error uploading files: ".concat(_context2.t0));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 12]]);
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
        lineNumber: 89,
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
        lineNumber: 94,
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
        lineNumber: 99,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
        type: "file",
        name: "Asset",
        className: "my-4",
        onChange: onChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this), fileUrl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
        className: "rounded mt-4",
        width: "350",
        src: fileUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
        onClick: createMarket,
        className: "font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg",
        children: "Create Digital Asset"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 9
  }, this);
}

_s(CreateItem, "66/50qPVQWUR3e/P/W83uOPg1o4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3JlYXRlLWl0ZW0uNTEzYWM4MTg1MjYyOGZkNTA5OTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNTSxNQUFNLEdBQUdILHdEQUFjLENBQUMsb0NBQUQsQ0FBN0I7QUFFQTtBQUNBO0FBQ0E7O0FBR2UsU0FBU1EsVUFBVCxHQUFzQjtBQUFBOztBQUNqQyxrQkFBK0JYLCtDQUFRLENBQUMsSUFBRCxDQUF2QztBQUFBLE1BQU9ZLE9BQVA7QUFBQSxNQUFnQkMsV0FBaEI7O0FBQ0EsbUJBQXFDYiwrQ0FBUSxDQUFDO0FBQUNjLElBQUFBLEtBQUssRUFBRSxFQUFSO0FBQVlDLElBQUFBLElBQUksRUFBRSxFQUFsQjtBQUFzQkMsSUFBQUEsV0FBVyxFQUFFO0FBQW5DLEdBQUQsQ0FBN0M7QUFBQSxNQUFPQyxTQUFQO0FBQUEsTUFBa0JDLGVBQWxCOztBQUNBLE1BQU1DLE1BQU0sR0FBR2Ysc0RBQVMsRUFBeEI7O0FBSGlDLFdBS2xCZ0IsUUFMa0I7QUFBQTtBQUFBOztBQUFBO0FBQUEsc1RBS2pDLGlCQUF3QkMsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1VDLGNBQUFBLElBRFYsR0FDaUJELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQURqQjtBQUFBO0FBQUE7QUFBQSxxQkFJNEJsQixNQUFNLENBQUNtQixHQUFQLENBQ2hCSCxJQURnQixFQUVoQjtBQUNJSSxnQkFBQUEsUUFBUSxFQUFFLGtCQUFDQyxJQUFEO0FBQUEseUJBQVVDLE9BQU8sQ0FBQ0MsR0FBUixxQkFBeUJGLElBQXpCLEVBQVY7QUFBQTtBQURkLGVBRmdCLENBSjVCOztBQUFBO0FBSWNHLGNBQUFBLEtBSmQ7QUFVY0MsY0FBQUEsR0FWZCx5Q0FVbURELEtBQUssQ0FBQ0UsSUFW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TyxDQUFDLENBQUNFLE1BQUYsQ0FBU2tDO0FBQWpDLGFBQW5CO0FBQUE7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsZUFnQkU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUksRUFBQyxPQUZQO0FBR0UsaUJBQVMsRUFBQyxNQUhaO0FBSUUsZ0JBQVEsRUFBRXJDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRixFQXVCSVIsT0FBTyxpQkFDTDtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUE4QixhQUFLLEVBQUMsS0FBcEM7QUFBMEMsV0FBRyxFQUFFQTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJOLGVBMkJFO0FBQVEsZUFBTyxFQUFFc0IsWUFBakI7QUFBK0IsaUJBQVMsRUFBQyw2REFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREU7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUNIOztHQTNHdUJ2QjtVQUdMUDs7O0tBSEtPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NyZWF0ZS1pdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcclxuaW1wb3J0IHsgY3JlYXRlIGFzIGlwZnNIdHRwQ2xpZW50IH0gZnJvbSAnaXBmcy1odHRwLWNsaWVudCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM01vZGFsJ1xyXG5cclxuY29uc3QgY2xpZW50ID0gaXBmc0h0dHBDbGllbnQoJ2h0dHBzOi8vaXBmcy5pbmZ1cmEuaW86NTAwMS9hcGkvdjAnKVxyXG5cclxuaW1wb3J0IHsgbmZ0QWRkcmVzc2VzLCBuZnRtYXJrZXRhZGRyZXNzfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBORlQgZnJvbSAnLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORlQuc29sL05GVC5qc29uJ1xyXG5pbXBvcnQgTWFya2V0IGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvTkZUTWFya2V0LnNvbC9ORlRNYXJrZXQuanNvbidcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVJdGVtKCkge1xyXG4gICAgY29uc3QgW2ZpbGVVcmwsIHNlbnRGaWxlVXJsXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbZm9ybUlucHV0LCB1cGRhdGVGb3JtSW5wdXRdID0gdXNlU3RhdGUoe3ByaWNlOiAnJywgbmFtZTogJycsIGRlc2NyaXB0aW9uOiAnJ30pXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkZGVkID0gYXdhaXQgY2xpZW50LmFkZChcclxuICAgICAgICAgICAgICAgIGZpbGUsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IChwcm9nKSA9PiBjb25zb2xlLmxvZyhgUmVjZWl2ZWQ6ICR7cHJvZ31gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwczpcXFxcaXBmcy5pbmZ1cmEuaW8vaXBmcy8ke2FkZGVkLnBhdGh9YFxyXG4gICAgICAgICAgICBzZXRGaWxlVXJsKHVybClcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTWFya2V0KCkge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2V9ID0gZm9ybUlucHV0XHJcbiAgICAgICAgaWYoIW5hbWUgfHwgIWRlc2NyaXB0aW9uIHx8ICFwcmljZSB8fCBmaWxlVXJsKSByZXR1cm5cclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbmFtZSwgZGVzY3JpcHRpb24sIGltYWdlOiBmaWxlVXJsXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCBhZGRlZCA9IGF3YWl0IGNsaWVudC5hZGQoZGF0YSlcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOlxcXFxpcGZzLmluZnVyYS5pby9pcGZzLyR7YWRkZWQucGF0aH1gXHJcbiAgICAgICAgICAgIC8vIEFmdGVyIGZpbGUgaXMgdXBsb2FkZWQgdG8gSVBGUywgcGFzcyB0aGUgVVJMIHRvIHNhdmUgaXQgb24gUG9seWdvblxyXG4gICAgICAgICAgICBjcmVhdGVTYWxlKHVybClcclxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciB1cGxvYWRpbmcgZmlsZXM6ICR7ZXJyb3J9YClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU2FsZSh1cmwpe1xyXG4gICAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKVxyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpXHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbilcclxuICAgICAgICBjb25zdCBzaW5nZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxyXG5cclxuICAgICAgICBsZXQgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KG5mdEFkZHJlc3NlcywgTkZULmFiaSwgc2luZ2VyKVxyXG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZVRva2VuKHVybClcclxuICAgICAgICBsZXQgdHggPSBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KClcclxuXHJcbiAgICAgICAgbGV0IGV2ZW50ID0gdHguZXZlbnRzWzBdXHJcbiAgICAgICAgbGV0IHZhbHVlID0gZXZlbnQuYXJnc1syXVxyXG4gICAgICAgIGxldCB0b2tlbklkID0gdmFsdWUudG9OdW1iZXIoKVxyXG5cclxuICAgICAgICBjb25zdCBwcmljZSA9IGV0aGVycy51dGlscy5wYXJzZVVuaXRzKGZvcm1JbnB1dC5wcmljZSwgJ2V0aGVyJylcclxuICAgICAgICBcclxuICAgICAgICBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobmZ0bWFya2V0YWRkcmVzcywgTWFya2V0LmFiaSwgc2luZ2VyKVxyXG4gICAgICAgIGxldCBsaXN0aW5nUHJpY2UgPSBhd2FpdCBjb250cmFjdC5nZXRMaXN0aW5nUHJpY2UoKVxyXG4gICAgICAgIGxpc3RpbmdQcmljZSA9IGxpc3RpbmdQcmljZS50b1N0cmluZygpXHJcblxyXG4gICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgY29udHJhY3QuY3JlYXRlTWFya2V0SXRlbShcclxuICAgICAgICAgICAgbmZ0QWRkcmVzc2VzLCB0b2tlbklkLCBwcmljZSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZTogbGlzdGluZ1ByaWNlIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KClcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBmbGV4IGZsZXgtY29sIHBiLTEyXCI+XHJcbiAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBc3NldCBOYW1lXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTggYm9yZGVyIHJvdW5kZWQgcC00XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZUZvcm1JbnB1dCh7IC4uLmZvcm1JbnB1dCwgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXNzZXQgRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBib3JkZXIgcm91bmRlZCBwLTRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlRm9ybUlucHV0KHsgLi4uZm9ybUlucHV0LCBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXNzZXQgUHJpY2UgaW4gRXRoXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgYm9yZGVyIHJvdW5kZWQgcC00XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZUZvcm1JbnB1dCh7IC4uLmZvcm1JbnB1dCwgcHJpY2U6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBuYW1lPVwiQXNzZXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXktNFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaWxlVXJsICYmIChcclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkIG10LTRcIiB3aWR0aD1cIjM1MFwiIHNyYz17ZmlsZVVybH0gLz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjcmVhdGVNYXJrZXR9IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtdC00IGJnLXBpbmstNTAwIHRleHQtd2hpdGUgcm91bmRlZCBwLTQgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICBDcmVhdGUgRGlnaXRhbCBBc3NldFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImV0aGVycyIsImNyZWF0ZSIsImlwZnNIdHRwQ2xpZW50IiwidXNlUm91dGVyIiwiV2ViM01vZGFsIiwiY2xpZW50IiwibmZ0QWRkcmVzc2VzIiwibmZ0bWFya2V0YWRkcmVzcyIsIk5GVCIsIk1hcmtldCIsIkNyZWF0ZUl0ZW0iLCJmaWxlVXJsIiwic2VudEZpbGVVcmwiLCJwcmljZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImZvcm1JbnB1dCIsInVwZGF0ZUZvcm1JbnB1dCIsInJvdXRlciIsIm9uQ2hhbmdlIiwiZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImFkZCIsInByb2dyZXNzIiwicHJvZyIsImNvbnNvbGUiLCJsb2ciLCJhZGRlZCIsInVybCIsInBhdGgiLCJzZXRGaWxlVXJsIiwiY3JlYXRlTWFya2V0IiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbWFnZSIsImNyZWF0ZVNhbGUiLCJ3ZWIzTW9kYWwiLCJjb25uZWN0IiwiY29ubmVjdGlvbiIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwic2luZ2VyIiwiZ2V0U2lnbmVyIiwiY29udHJhY3QiLCJDb250cmFjdCIsImFiaSIsImNyZWF0ZVRva2VuIiwidHJhbnNhY3Rpb24iLCJ3YWl0IiwidHgiLCJldmVudCIsImV2ZW50cyIsInZhbHVlIiwiYXJncyIsInRva2VuSWQiLCJ0b051bWJlciIsInV0aWxzIiwicGFyc2VVbml0cyIsImdldExpc3RpbmdQcmljZSIsImxpc3RpbmdQcmljZSIsInRvU3RyaW5nIiwiY3JlYXRlTWFya2V0SXRlbSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9