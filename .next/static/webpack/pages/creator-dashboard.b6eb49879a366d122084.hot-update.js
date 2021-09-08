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
      var web3Modal, connection, provider, singer, marketContract, tokenContract, data, items;
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
              setNfts(items);
              setLoadingState('loaded');

            case 18:
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
    lineNumber: 51,
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
              lineNumber: 61,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "p-4 bg-black",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                className: "text-2xl font-bold text-white",
                children: ["Price - ", nft.price, " Eth"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 25
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 25
            }, _this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3JlYXRvci1kYXNoYm9hcmQuYjZlYjQ5ODc5YTM2NmQxMjIwODQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVlLFNBQVNTLGVBQVQsR0FBMkI7QUFBQTs7QUFBQTs7QUFDdEMsa0JBQXdCUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFBQSxNQUFPUyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxtQkFBd0JWLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUFBLE1BQU9XLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLG1CQUF3Q1osK0NBQVEsQ0FBQyxZQUFELENBQWhEO0FBQUEsTUFBT2EsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQWIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1pjLElBQUFBLFFBQVE7QUFDWCxHQUZRLEVBRVAsRUFGTyxDQUFUOztBQUpzQyxXQVF2QkEsUUFSdUI7QUFBQTtBQUFBOztBQUFBO0FBQUEsc1RBUXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNVQyxjQUFBQSxTQURWLEdBQ3NCLElBQUliLGtEQUFKLEVBRHRCO0FBQUE7QUFBQSxxQkFPNkJhLFNBQVMsQ0FBQ0MsT0FBVixFQVA3Qjs7QUFBQTtBQU9VQyxjQUFBQSxVQVBWO0FBQUE7QUFBQSxxQkFRMkIsSUFBSW5CLGlFQUFKLENBQWtDbUIsVUFBbEMsQ0FSM0I7O0FBQUE7QUFRVUcsY0FBQUEsUUFSVjtBQVNVQyxjQUFBQSxNQVRWLEdBU21CRCxRQUFRLENBQUNFLFNBQVQsRUFUbkI7QUFXVUMsY0FBQUEsY0FYVixHQVcyQixJQUFJekIsbURBQUosQ0FBb0JNLHFEQUFwQixFQUFzQ0Usa0ZBQXRDLEVBQXFEZSxNQUFyRCxDQVgzQjtBQVlVSyxjQUFBQSxhQVpWLEdBWTBCLElBQUk1QixtREFBSixDQUFvQkssaURBQXBCLEVBQWtDRSxzRUFBbEMsRUFBMkNnQixNQUEzQyxDQVoxQjtBQUFBO0FBQUEscUJBYXVCRSxjQUFjLENBQUNJLGlCQUFmLEVBYnZCOztBQUFBO0FBYVVDLGNBQUFBLElBYlY7QUFBQTtBQUFBLHFCQWV3QkMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csR0FBTDtBQUFBLGlVQUFTLGlCQUFNQyxDQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQ2ROLGFBQWEsQ0FBQ08sUUFBZCxDQUF1QkQsQ0FBQyxDQUFDRSxPQUF6QixDQURjOztBQUFBO0FBQy9CQywwQkFBQUEsUUFEK0I7QUFBQTtBQUFBLGlDQUVsQmxDLGdEQUFBLENBQVVrQyxRQUFWLENBRmtCOztBQUFBO0FBRS9CRSwwQkFBQUEsSUFGK0I7QUFHakNDLDBCQUFBQSxLQUhpQyxHQUd6QnhDLDREQUFBLENBQXlCa0MsQ0FBQyxDQUFDTSxLQUFGLENBQVFHLFFBQVIsRUFBekIsRUFBNkMsT0FBN0MsQ0FIeUI7QUFJakNDLDBCQUFBQSxJQUppQyxHQUkxQjtBQUNQSiw0QkFBQUEsS0FBSyxFQUFMQSxLQURPO0FBRVBKLDRCQUFBQSxPQUFPLEVBQUVGLENBQUMsQ0FBQ0UsT0FBRixDQUFVUyxRQUFWLEVBRkY7QUFHUEMsNEJBQUFBLE1BQU0sRUFBRVosQ0FBQyxDQUFDWSxNQUhIO0FBSVBDLDRCQUFBQSxLQUFLLEVBQUViLENBQUMsQ0FBQ2EsS0FKRjtBQUtQQyw0QkFBQUEsS0FBSyxFQUFFVCxJQUFJLENBQUNULElBQUwsQ0FBVWtCO0FBTFYsMkJBSjBCO0FBQUEsMkRBVzlCSixJQVg4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBVDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBWixDQWZ4Qjs7QUFBQTtBQWVVSyxjQUFBQSxLQWZWO0FBNEJJdEMsY0FBQUEsT0FBTyxDQUFDc0MsS0FBRCxDQUFQO0FBQ0FsQyxjQUFBQSxlQUFlLENBQUMsUUFBRCxDQUFmOztBQTdCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVJzQztBQUFBO0FBQUE7O0FBdUN0QyxNQUFJRCxZQUFZLEtBQUssUUFBakIsSUFBNkIsQ0FBQ0osSUFBSSxDQUFDd0MsTUFBdkMsRUFBK0Msb0JBQzNDO0FBQUksYUFBUyxFQUFDLHNCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRDJDO0FBSS9DLHNCQUNJO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQywyREFBZjtBQUFBLGtCQUVJeEMsSUFBSSxDQUFDdUIsR0FBTCxDQUFTLFVBQUNrQixHQUFELEVBQU1qQixDQUFOO0FBQUEsOEJBQ1Q7QUFBYSxxQkFBUyxFQUFDLDBDQUF2QjtBQUFBLG9DQUNJO0FBQUssaUJBQUcsRUFBRWlCLEdBQUcsQ0FBQ0gsS0FBZDtBQUFxQix1QkFBUyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFLLHVCQUFTLEVBQUMsY0FBZjtBQUFBLHFDQUNBO0FBQUcseUJBQVMsRUFBQywrQkFBYjtBQUFBLHVDQUFzREcsR0FBRyxDQUFDWCxLQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUEsYUFBVU4sQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURTO0FBQUEsU0FBVDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0JIOztHQS9EdUJ6Qjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRvci1kYXNoYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gJ3dlYjNNb2RhbCdcclxuXHJcbmltcG9ydCB7IG5mdEFkZHJlc3NlcywgbmZ0bWFya2V0YWRkcmVzcyB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmltcG9ydCBORlQgZnJvbSAnLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORlQuc29sL05GVC5qc29uJ1xyXG5pbXBvcnQgTkZUTWFya2V0IGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvTkZUTWFya2V0LnNvbC9ORlRNYXJrZXQuanNvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZURhc2hib2FyZCgpIHtcclxuICAgIGNvbnN0IFtuZnRzLCBzZXROZnRzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3NvbGQsIHNldFNvbGRdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbbG9hZGluZ1N0YXRlLCBzZXRMb2FkaW5nU3RhdGVdID0gdXNlU3RhdGUoJ25vdC1sb2FkZWQnKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2FkTkZUcygpXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRORlRzKCkge1xyXG4gICAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoXHJcbiAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgLy8gICAgIG5ldHdvcms6IFwibWFpbm5ldFwiLFxyXG4gICAgICAgICAgICAvLyAgICAgY2FjaGVQcm92aWRlcjogdHJ1ZVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpXHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbilcclxuICAgICAgICBjb25zdCBzaW5nZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxyXG5cclxuICAgICAgICBjb25zdCBtYXJrZXRDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobmZ0bWFya2V0YWRkcmVzcywgTkZUTWFya2V0LmFiaSwgc2luZ2VyKVxyXG4gICAgICAgIGNvbnN0IHRva2VuQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KG5mdEFkZHJlc3NlcywgTkZULmFiaSwgc2luZ2VyKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBtYXJrZXRDb250cmFjdC5mZWN0aEl0ZW1zQ3JlYXRlZCgpXHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgUHJvbWlzZS5hbGwoZGF0YS5tYXAoYXN5bmMgaSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuVXJpID0gYXdhaXQgdG9rZW5Db250cmFjdC50b2tlblVSSShpLnRva2VuSWQpXHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCBheGlvcy5nZXQodG9rZW5VcmkpXHJcbiAgICAgICAgICAgIGxldCBwcmljZSA9IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhpLnByaWNlLnRvU3RyaW5nKCksICdldGhlcicpXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICAgICAgICB0b2tlbklkOiBpLnRva2VuSWQudG9OdW1iZXIoKSxcclxuICAgICAgICAgICAgICAgIHNlbGxlcjogaS5zZWxsZXIsXHJcbiAgICAgICAgICAgICAgICBvd25lcjogaS5vd25lcixcclxuICAgICAgICAgICAgICAgIGltYWdlOiBtZXRhLmRhdGEuaW1hZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIHNldE5mdHMoaXRlbXMpXHJcbiAgICAgICAgc2V0TG9hZGluZ1N0YXRlKCdsb2FkZWQnKVxyXG4gICAgfVxyXG4gICAgaWYoIGxvYWRpbmdTdGF0ZSA9PT0gJ2xvYWRlZCcgJiYgIW5mdHMubGVuZ3RoKSByZXR1cm4gKFxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJweS0xMCBweC0yMCB0ZXh0LTN4bFwiPk5vIGFzc2V0cyBvd25lcjwvaDE+XHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmZ0cy5tYXAoKG5mdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJib3JkZXIgc2hhZG93IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtuZnQuaW1hZ2V9IGNsYXNzTmFtZT1cInJvdW5kZWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBiZy1ibGFja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlByaWNlIC0ge25mdC5wcmljZX0gRXRoPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuXHJcbn0iXSwibmFtZXMiOlsiZXRoZXJzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIldlYjNNb2RhbCIsIm5mdEFkZHJlc3NlcyIsIm5mdG1hcmtldGFkZHJlc3MiLCJORlQiLCJORlRNYXJrZXQiLCJDcmVhdGVEYXNoYm9hcmQiLCJuZnRzIiwic2V0TmZ0cyIsInNvbGQiLCJzZXRTb2xkIiwibG9hZGluZ1N0YXRlIiwic2V0TG9hZGluZ1N0YXRlIiwibG9hZE5GVHMiLCJ3ZWIzTW9kYWwiLCJjb25uZWN0IiwiY29ubmVjdGlvbiIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsInByb3ZpZGVyIiwic2luZ2VyIiwiZ2V0U2lnbmVyIiwibWFya2V0Q29udHJhY3QiLCJDb250cmFjdCIsImFiaSIsInRva2VuQ29udHJhY3QiLCJmZWN0aEl0ZW1zQ3JlYXRlZCIsImRhdGEiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaSIsInRva2VuVVJJIiwidG9rZW5JZCIsInRva2VuVXJpIiwiZ2V0IiwibWV0YSIsInByaWNlIiwidXRpbHMiLCJmb3JtYXRVbml0cyIsInRvU3RyaW5nIiwiaXRlbSIsInRvTnVtYmVyIiwic2VsbGVyIiwib3duZXIiLCJpbWFnZSIsIml0ZW1zIiwibGVuZ3RoIiwibmZ0Il0sInNvdXJjZVJvb3QiOiIifQ==