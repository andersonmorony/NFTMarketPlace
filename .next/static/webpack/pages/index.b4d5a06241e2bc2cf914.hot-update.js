"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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


var _jsxFileName = "D:\\Projetos\\Blockchain\\marketplace\\nft-marketplace\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();











var Home = function Home() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      nfts = _useState[0],
      setNfts = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('not-loaded'),
      loadingState = _useState2[0],
      setLoadingState = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    loadNFTs();
  }, []);

  function loadNFTs() {
    return _loadNFTs.apply(this, arguments);
  }

  function _loadNFTs() {
    _loadNFTs = (0,D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var provider, tokenContract, marketContract, data, items;
      return D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.JsonRpcProvider();
              tokenContract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftAddresses, _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_6__.abi, provider);
              marketContract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftmarketaddress, _artifacts_contracts_NFTMarket_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_7__.abi, provider);
              _context2.next = 5;
              return marketContract.fetchMarketItems();

            case 5:
              data = _context2.sent;
              _context2.next = 8;
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
                            priceWithoutFormat: i.price,
                            tokenId: i.tokenId.toNumber(),
                            seller: i.seller,
                            owner: i.owner,
                            image: meta.data.image,
                            name: meta.data.name,
                            description: meta.data.description
                          };
                          return _context.abrupt("return", item);

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x2) {
                  return _ref.apply(this, arguments);
                };
              }()));

            case 8:
              items = _context2.sent;
              console.log(items);
              setNfts(items);
              setLoadingState('loaded');

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _loadNFTs.apply(this, arguments);
  }

  function buyNFTs(_x) {
    return _buyNFTs.apply(this, arguments);
  }

  function _buyNFTs() {
    _buyNFTs = (0,D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(nft) {
      var web3Modal, connection, provider, singer, contract, price, transaction;
      return D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log(nft);
              web3Modal = new (web3Modal__WEBPACK_IMPORTED_MODULE_4___default())();
              _context3.next = 4;
              return web3Modal.connect();

            case 4:
              connection = _context3.sent;
              provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.Web3Provider(connection);
              singer = provider.getSigner();
              contract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftmarketaddress, _artifacts_contracts_NFTMarket_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_7__.abi, singer);
              price = ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.utils.parseUnits(nft.price.toString(), 'ether');
              console.log(price);
              _context3.next = 12;
              return contract.createMarketSale(_config__WEBPACK_IMPORTED_MODULE_5__.nftAddresses, nft.tokenId, {
                value: price
              });

            case 12:
              transaction = _context3.sent;
              _context3.next = 15;
              return transaction.wait();

            case 15:
              loadNFTs();

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _buyNFTs.apply(this, arguments);
  }

  if (loadingState === 'loaded' && !nfts.length) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
    className: "px-20 py-10 text-3xl",
    children: "No items in marketplace"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 9
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: "flex justify-center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "px-4",
      style: {
        maxWidth: '1600px'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",
        children: nfts.map(function (nft, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "border shadow rounder-xl overflow-hidden",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
              src: nft.image,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "p-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                style: {
                  height: '64px'
                },
                className: "text-2xl font-semibold",
                children: nft.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                style: {
                  height: '70px',
                  overflow: 'hidden'
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                  className: "text-gray-400",
                  children: nft.description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 33
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "p-4 bg-black",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                className: "text-2xl mb-4 font-bold text-white",
                children: [nft.price, " Matic"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 37
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
                type: "button",
                className: "w-full bg-pink-500 text-white font-bold py-2 px-12 rounded",
                onClick: function onClick() {
                  return buyNFTs(nft);
                },
                children: "Buy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 33
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 9
  }, _this);
};

_s(Home, "DL6OJ8B7YCUHYFOUoPi2JI8l+/o=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjRkNWEwNjI0MWUyYmMyY2Y5MTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7O0FBRUEsSUFBTVMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmLGtCQUF3QlAsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT1EsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQXdDVCwrQ0FBUSxDQUFDLFlBQUQsQ0FBaEQ7QUFBQSxNQUFPVSxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUVBWixFQUFBQSxnREFBUyxDQUFDLFlBQUs7QUFDWGEsSUFBQUEsUUFBUTtBQUNYLEdBRlEsRUFFUCxFQUZPLENBQVQ7O0FBSmUsV0FRQUEsUUFSQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxzVEFRZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVUMsY0FBQUEsUUFEVixHQUNxQixJQUFJZixvRUFBSixFQURyQjtBQUVVa0IsY0FBQUEsYUFGVixHQUUwQixJQUFJbEIsbURBQUosQ0FBb0JLLGlEQUFwQixFQUFrQ0Usc0VBQWxDLEVBQTJDUSxRQUEzQyxDQUYxQjtBQUdVTSxjQUFBQSxjQUhWLEdBRzJCLElBQUlyQixtREFBSixDQUFvQk0scURBQXBCLEVBQXNDRSxrRkFBdEMsRUFBa0RPLFFBQWxELENBSDNCO0FBQUE7QUFBQSxxQkFJdUJNLGNBQWMsQ0FBQ0MsZ0JBQWYsRUFKdkI7O0FBQUE7QUFJVUMsY0FBQUEsSUFKVjtBQUFBO0FBQUEscUJBTXdCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDRyxHQUFMO0FBQUEsaVVBQVMsaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FDZFQsYUFBYSxDQUFDVSxRQUFkLENBQXVC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LEVBQUMsUUFBYjtBQUFzQix5QkFBUyxFQUFDLDREQUFoQztBQUE2Rix1QkFBTyxFQUFFO0FBQUEseUJBQU1lLE9BQU8sQ0FBQ0MsR0FBRCxDQUFiO0FBQUEsaUJBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSSjtBQUFBLGFBQVVlLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESztBQUFBLFNBQVQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTJCSCxDQXBGRDs7R0FBTXZEOztLQUFBQTtBQXNGTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gJ3dlYjNNb2RhbCdcclxuXHJcbmltcG9ydCB7IG5mdEFkZHJlc3NlcywgbmZ0bWFya2V0YWRkcmVzcyB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmltcG9ydCBORlQgZnJvbSAnLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORlQuc29sL05GVC5qc29uJ1xyXG5pbXBvcnQgTWFya2V0IGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvTkZUTWFya2V0LnNvbC9ORlRNYXJrZXQuanNvbidcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbmZ0cywgc2V0TmZ0c10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtsb2FkaW5nU3RhdGUsIHNldExvYWRpbmdTdGF0ZV0gPSB1c2VTdGF0ZSgnbm90LWxvYWRlZCcpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICAgIGxvYWRORlRzKClcclxuICAgIH0sW10pXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZE5GVHMoKXtcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcigpXHJcbiAgICAgICAgY29uc3QgdG9rZW5Db250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobmZ0QWRkcmVzc2VzLCBORlQuYWJpLCBwcm92aWRlcilcclxuICAgICAgICBjb25zdCBtYXJrZXRDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobmZ0bWFya2V0YWRkcmVzcywgTWFya2V0LmFiaSwgcHJvdmlkZXIpXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IG1hcmtldENvbnRyYWN0LmZldGNoTWFya2V0SXRlbXMoKVxyXG5cclxuICAgICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IFByb21pc2UuYWxsKGRhdGEubWFwKGFzeW5jIGkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlblVyaSA9IGF3YWl0IHRva2VuQ29udHJhY3QudG9rZW5VUkkoaS50b2tlbklkKVxyXG4gICAgICAgICAgICBjb25zdCBtZXRhID0gYXdhaXQgYXhpb3MuZ2V0KHRva2VuVXJpKVxyXG4gICAgICAgICAgICBsZXQgcHJpY2UgPSBldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMoaS5wcmljZS50b1N0cmluZygpLCAnZXRoZXInKVxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHtcclxuICAgICAgICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpY2VXaXRob3V0Rm9ybWF0OiBpLnByaWNlLFxyXG4gICAgICAgICAgICAgICAgdG9rZW5JZDogaS50b2tlbklkLnRvTnVtYmVyKCksXHJcbiAgICAgICAgICAgICAgICBzZWxsZXI6IGkuc2VsbGVyLFxyXG4gICAgICAgICAgICAgICAgb3duZXI6IGkub3duZXIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogbWV0YS5kYXRhLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogbWV0YS5kYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogbWV0YS5kYXRhLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1cclxuICAgICAgICB9KSlcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtcylcclxuICAgICAgICBzZXROZnRzKGl0ZW1zKVxyXG4gICAgICAgIHNldExvYWRpbmdTdGF0ZSgnbG9hZGVkJylcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gYnV5TkZUcyhuZnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5mdClcclxuICAgICAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKClcclxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKVxyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pXHJcbiAgICAgICAgY29uc3Qgc2luZ2VyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcclxuICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobmZ0bWFya2V0YWRkcmVzcywgTWFya2V0LmFiaSwgc2luZ2VyKVxyXG5cclxuICAgICAgICBjb25zdCBwcmljZSA9IGV0aGVycy51dGlscy5wYXJzZVVuaXRzKCBuZnQucHJpY2UudG9TdHJpbmcoKSAsICdldGhlcicpXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJpY2UpXHJcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCBjb250cmFjdC5jcmVhdGVNYXJrZXRTYWxlKG5mdEFkZHJlc3NlcywgbmZ0LnRva2VuSWQsIHtcclxuICAgICAgICAgICAgdmFsdWU6IHByaWNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KClcclxuICAgICAgICBsb2FkTkZUcygpXHJcbiAgICB9XHJcblxyXG4gICAgaWYobG9hZGluZ1N0YXRlID09PSAnbG9hZGVkJyAmJiAhbmZ0cy5sZW5ndGgpIHJldHVybiAoXHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInB4LTIwIHB5LTEwIHRleHQtM3hsXCI+Tm8gaXRlbXMgaW4gbWFya2V0cGxhY2U8L2gxPlxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiAoIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTRcIiBzdHlsZT17e21heFdpZHRoOiAnMTYwMHB4J319PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00IHB0LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5mdHMubWFwKChuZnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJvcmRlciBzaGFkb3cgcm91bmRlci14bCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmZ0LmltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7aGVpZ2h0OiAnNjRweCd9fSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+e25mdC5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzcwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj57bmZ0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYmctYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItNCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPntuZnQucHJpY2V9IE1hdGljPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctcGluay01MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC0xMiByb3VuZGVkXCIgb25DbGljaz17KCkgPT4gYnV5TkZUcyhuZnQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ1eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVxyXG5cclxuIl0sIm5hbWVzIjpbImV0aGVycyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJXZWIzTW9kYWwiLCJuZnRBZGRyZXNzZXMiLCJuZnRtYXJrZXRhZGRyZXNzIiwiTkZUIiwiTWFya2V0IiwiSG9tZSIsIm5mdHMiLCJzZXROZnRzIiwibG9hZGluZ1N0YXRlIiwic2V0TG9hZGluZ1N0YXRlIiwibG9hZE5GVHMiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkpzb25ScGNQcm92aWRlciIsInRva2VuQ29udHJhY3QiLCJDb250cmFjdCIsImFiaSIsIm1hcmtldENvbnRyYWN0IiwiZmV0Y2hNYXJrZXRJdGVtcyIsImRhdGEiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaSIsInRva2VuVVJJIiwidG9rZW5JZCIsInRva2VuVXJpIiwiZ2V0IiwibWV0YSIsInByaWNlIiwidXRpbHMiLCJmb3JtYXRVbml0cyIsInRvU3RyaW5nIiwiaXRlbSIsInByaWNlV2l0aG91dEZvcm1hdCIsInRvTnVtYmVyIiwic2VsbGVyIiwib3duZXIiLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsImJ1eU5GVHMiLCJuZnQiLCJ3ZWIzTW9kYWwiLCJjb25uZWN0IiwiY29ubmVjdGlvbiIsIldlYjNQcm92aWRlciIsInNpbmdlciIsImdldFNpZ25lciIsImNvbnRyYWN0IiwicGFyc2VVbml0cyIsImNyZWF0ZU1hcmtldFNhbGUiLCJ2YWx1ZSIsInRyYW5zYWN0aW9uIiwid2FpdCIsImxlbmd0aCIsIm1heFdpZHRoIiwiaW5kZXgiLCJoZWlnaHQiLCJvdmVyZmxvdyJdLCJzb3VyY2VSb290IjoiIn0=