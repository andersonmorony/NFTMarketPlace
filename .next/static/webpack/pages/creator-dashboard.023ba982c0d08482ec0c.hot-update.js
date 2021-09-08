"use strict";
self["webpackHotUpdate_N_E"]("pages/creator-dashboard",{

/***/ "./pages/creator-dashboard.js":
/*!************************************!*\
  !*** ./pages/creator-dashboard.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateDashboard; }
/* harmony export */ });
/* harmony import */ var D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3Modal */ "./node_modules/web3Modal/dist/index.js");
/* harmony import */ var web3Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../artifacts/contracts/NFT.sol/NFT.json */ "./artifacts/contracts/NFT.sol/NFT.json");
/* harmony import */ var _artifacts_contracts_NFTMarket_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../artifacts/contracts/NFTMarket.sol/NFTMarket.json */ "./artifacts/contracts/NFTMarket.sol/NFTMarket.json");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Projetos\\Blockchain\\marketplace\\nft-marketplace\\pages\\creator-dashboard.js",
    _s = $RefreshSig$();










function CreateDashboard() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      nfts = _useState[0],
      setNfts = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      sold = _useState2[0],
      setSold = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('not-loaded'),
      loadingState = _useState3[0],
      setLoadingState = _useState3[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    loadNFTs();
  }, []);

  function loadNFTs() {
    return _loadNFTs.apply(this, arguments);
  }

  function _loadNFTs() {
    _loadNFTs = (0,D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var web3Modal, connection, provider, singer, marketContract, tokenContract, data, items, soldItems;
      return D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              web3Modal = new (web3Modal__WEBPACK_IMPORTED_MODULE_4___default())();
              _context2.next = 3;
              return web3Modal.connect();

            case 3:
              connection = _context2.sent;
              _context2.next = 6;
              return new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.Web3Provider(connection);

            case 6:
              provider = _context2.sent;
              singer = provider.getSigner();
              marketContract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftmarketaddress, _artifacts_contracts_NFTMarket_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_7__.abi, singer);
              tokenContract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftAddresses, _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_6__.abi, singer);
              _context2.next = 12;
              return marketContract.fecthItemsCreated();

            case 12:
              data = _context2.sent;
              _context2.next = 15;
              return Promise.all(data.map( /*#__PURE__*/function () {
                var _ref = (0,D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(i) {
                  var tokenUri, meta, price, item;
                  return D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return tokenContract.tokenURI(i.tokenId);

                        case 2:
                          tokenUri = _context.sent;
                          _context.next = 5;
                          return axios__WEBPACK_IMPORTED_MODULE_3___default().get(tokenUri);

                        case 5:
                          meta = _context.sent;
                          price = ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.utils.formatUnits(i.price.toString(), 'ether');
                          item = {
                            price: price,
                            tokenId: i.tokenId.toNumber(),
                            seller: i.seller,
                            owner: i.owner,
                            image: meta.data.image
                          };
                          return _context.abrupt("return", item);

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }()));

            case 15:
              items = _context2.sent;
              soldItems = items.filter(function (item) {
                return item.sold;
              });
              setSold(soldItems);
              setNfts(items);
              setLoadingState('loaded');

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _loadNFTs.apply(this, arguments);
  }

  if (loadingState === 'loaded' && !nfts.length) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
    className: "py-10 px-20 text-3xl",
    children: "No assets owner"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: "flex justify-center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "p-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",
        children: nfts.map(function (nft, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "border shadow rounded-xl overflow-hidden",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
              src: nft.image,
              className: "rounded"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "p-4 bg-black",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                className: "text-2xl font-bold text-white",
                children: ["Price - ", nft.price, " Eth"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 25
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 25
            }, _this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, this);
}

_s(CreateDashboard, "q967QPw7UcYAyNaU0Oe5MNu4MGI=");

_c = CreateDashboard;

var _c;

$RefreshReg$(_c, "CreateDashboard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3JlYXRvci1kYXNoYm9hcmQuMDIzYmE5ODJjMGQwODQ4MmVjMGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVlLFNBQVNTLGVBQVQsR0FBMkI7QUFBQTs7QUFBQTs7QUFDdEMsa0JBQXdCUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPUyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBd0JWLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBLE1BQU9XLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUF3Q1osK0NBQVEsQ0FBQyxZQUFELENBQWhEO0FBQUEsTUFBT2EsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQWIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1pjLElBQUFBLFFBQVE7QUFDWCxHQUZRLEVBRVAsRUFGTyxDQUFUOztBQUpzQyxXQVF2QkEsUUFSdUI7QUFBQTtBQUFBOztBQUFBO0FBQUEsc1RBUXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNVQyxjQUFBQSxTQURWLEdBQ3NCLElBQUliLGtEQUFKLEVBRHRCO0FBQUE7QUFBQSxxQkFFNkJhLFNBQVMsQ0FBQ0MsT0FBVixFQUY3Qjs7QUFBQTtBQUVVQyxjQUFBQSxVQUZWO0FBQUE7QUFBQSxxQkFHMkIsSUFBSW5CLGlFQUFKLENBQWtDbUIsVUFBbEMsQ0FIM0I7O0FBQUE7QUFHVUcsY0FBQUEsUUFIVjtBQUlVQyxjQUFBQSxNQUpWLEdBSW1CRCxRQUFRLENBQUNFLFNBQVQsRUFKbkI7QUFNVUMsY0FBQUEsY0FOVixHQU0yQixJQUFJekIsbURBQUosQ0FBb0JNLHFEQUFwQixFQUFzQ0Usa0ZBQXRDLEVBQXFEZSxNQUFyRCxDQU4zQjtBQU9VSyxjQUFBQSxhQVBWLEdBTzBCLElBQUk1Qixt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NUR1QnpCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdG9yLWRhc2hib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM01vZGFsJ1xyXG5cclxuaW1wb3J0IHsgbmZ0QWRkcmVzc2VzLCBuZnRtYXJrZXRhZGRyZXNzIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuaW1wb3J0IE5GVCBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL05GVC5zb2wvTkZULmpzb24nXHJcbmltcG9ydCBORlRNYXJrZXQgZnJvbSAnLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORlRNYXJrZXQuc29sL05GVE1hcmtldC5qc29uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlRGFzaGJvYXJkKCkge1xyXG4gICAgY29uc3QgW25mdHMsIHNldE5mdHNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbc29sZCwgc2V0U29sZF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtsb2FkaW5nU3RhdGUsIHNldExvYWRpbmdTdGF0ZV0gPSB1c2VTdGF0ZSgnbm90LWxvYWRlZCcpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWRORlRzKClcclxuICAgIH0sW10pXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZE5GVHMoKSB7XHJcbiAgICAgICAgY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCgpXHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KClcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKVxyXG4gICAgICAgIGNvbnN0IHNpbmdlciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXHJcblxyXG4gICAgICAgIGNvbnN0IG1hcmtldENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChuZnRtYXJrZXRhZGRyZXNzLCBORlRNYXJrZXQuYWJpLCBzaW5nZXIpXHJcbiAgICAgICAgY29uc3QgdG9rZW5Db250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobmZ0QWRkcmVzc2VzLCBORlQuYWJpLCBzaW5nZXIpXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IG1hcmtldENvbnRyYWN0LmZlY3RoSXRlbXNDcmVhdGVkKClcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCBQcm9taXNlLmFsbChkYXRhLm1hcChhc3luYyBpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW5VcmkgPSBhd2FpdCB0b2tlbkNvbnRyYWN0LnRva2VuVVJJKGkudG9rZW5JZClcclxuICAgICAgICAgICAgY29uc3QgbWV0YSA9IGF3YWl0IGF4aW9zLmdldCh0b2tlblVyaSlcclxuICAgICAgICAgICAgbGV0IHByaWNlID0gZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKGkucHJpY2UudG9TdHJpbmcoKSwgJ2V0aGVyJylcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICBwcmljZSxcclxuICAgICAgICAgICAgICAgIHRva2VuSWQ6IGkudG9rZW5JZC50b051bWJlcigpLFxyXG4gICAgICAgICAgICAgICAgc2VsbGVyOiBpLnNlbGxlcixcclxuICAgICAgICAgICAgICAgIG93bmVyOiBpLm93bmVyLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG1ldGEuZGF0YS5pbWFnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgY29uc3Qgc29sZEl0ZW1zID0gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zb2xkKVxyXG4gICAgICAgIHNldFNvbGQoc29sZEl0ZW1zKTtcclxuICAgICAgICBzZXROZnRzKGl0ZW1zKVxyXG4gICAgICAgIHNldExvYWRpbmdTdGF0ZSgnbG9hZGVkJylcclxuICAgIH1cclxuICAgIGlmKCBsb2FkaW5nU3RhdGUgPT09ICdsb2FkZWQnICYmICFuZnRzLmxlbmd0aCkgcmV0dXJuIChcclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHktMTAgcHgtMjAgdGV4dC0zeGxcIj5ObyBhc3NldHMgb3duZXI8L2gxPlxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTQgcHQtNFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5mdHMubWFwKChuZnQsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiYm9yZGVyIHNoYWRvdyByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmZ0LmltYWdlfSBjbGFzc05hbWU9XCJyb3VuZGVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYmctYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5QcmljZSAtIHtuZnQucHJpY2V9IEV0aDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcblxyXG59Il0sIm5hbWVzIjpbImV0aGVycyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJXZWIzTW9kYWwiLCJuZnRBZGRyZXNzZXMiLCJuZnRtYXJrZXRhZGRyZXNzIiwiTkZUIiwiTkZUTWFya2V0IiwiQ3JlYXRlRGFzaGJvYXJkIiwibmZ0cyIsInNldE5mdHMiLCJzb2xkIiwic2V0U29sZCIsImxvYWRpbmdTdGF0ZSIsInNldExvYWRpbmdTdGF0ZSIsImxvYWRORlRzIiwid2ViM01vZGFsIiwiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJwcm92aWRlciIsInNpbmdlciIsImdldFNpZ25lciIsIm1hcmtldENvbnRyYWN0IiwiQ29udHJhY3QiLCJhYmkiLCJ0b2tlbkNvbnRyYWN0IiwiZmVjdGhJdGVtc0NyZWF0ZWQiLCJkYXRhIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImkiLCJ0b2tlblVSSSIsInRva2VuSWQiLCJ0b2tlblVyaSIsImdldCIsIm1ldGEiLCJwcmljZSIsInV0aWxzIiwiZm9ybWF0VW5pdHMiLCJ0b1N0cmluZyIsIml0ZW0iLCJ0b051bWJlciIsInNlbGxlciIsIm93bmVyIiwiaW1hZ2UiLCJpdGVtcyIsInNvbGRJdGVtcyIsImZpbHRlciIsImxlbmd0aCIsIm5mdCJdLCJzb3VyY2VSb290IjoiIn0=