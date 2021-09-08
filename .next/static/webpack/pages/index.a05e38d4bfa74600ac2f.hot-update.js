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

  function buyNft(_x) {
    return _buyNft.apply(this, arguments);
  }

  function _buyNft() {
    _buyNft = (0,D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Projetos_Blockchain_marketplace_nft_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(nft) {
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
              price = ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.utils.formatUnits(nft.price, 'wei');
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
    return _buyNft.apply(this, arguments);
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
        children: nfts.map(function (nft, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "border shadow rounded-xl overflow-hidden",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
              src: nft.image
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 21
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
                columnNumber: 23
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
                  columnNumber: 25
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 23
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "p-4 bg-black",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                className: "text-2xl mb-4 font-bold text-white",
                children: [nft.price, " ETH"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 23
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
                className: "w-full bg-pink-500 text-white font-bold py-2 px-12 rounded",
                onClick: function onClick() {
                  return buyNft(nft);
                },
                children: "Buy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 23
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 21
            }, _this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 19
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTA1ZTM4ZDRiZmE3NDYwMGFjMmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7O0FBRUEsSUFBTVMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmLGtCQUF3QlAsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT1EsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQXdDVCwrQ0FBUSxDQUFDLFlBQUQsQ0FBaEQ7QUFBQSxNQUFPVSxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUVBWixFQUFBQSxnREFBUyxDQUFDLFlBQUs7QUFDWGEsSUFBQUEsUUFBUTtBQUNYLEdBRlEsRUFFUCxFQUZPLENBQVQ7O0FBSmUsV0FRQUEsUUFSQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxzVEFRZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVUMsY0FBQUEsUUFEVixHQUNxQixJQUFJZixvRUFBSixFQURyQjtBQUVVa0IsY0FBQUEsYUFGVixHQUUwQixJQUFJbEIsbURBQUosQ0FBb0JLLGlEQUFwQixFQUFrQ0Usc0VBQWxDLEVBQTJDUSxRQUEzQyxDQUYxQjtBQUdVTSxjQUFBQSxjQUhWLEdBRzJCLElBQUlyQixtREFBSixDQUFvQk0scURBQXBCLEVBQXNDRSxrRkFBdEMsRUFBa0RPLFFBQWxELENBSDNCO0FBQUE7QUFBQSxxQkFJdUJNLGNBQWMsQ0FBQ0MsZ0JBQWYsRUFKdkI7O0FBQUE7QUFJVUMsY0FBQUEsSUFKVjtBQUFBO0FBQUEscUJBTXdCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDRyxHQUFMO0FBQUEsaVVBQVMsaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FDZFQsYUFBYSxDQUFDVSxRQUFkLENBQXVC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ZSxNQUFNLENBQUNDLEdBQUQsQ0FBWjtBQUFBLGlCQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkY7QUFBQSxhQUFVdEIsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURPO0FBQUEsU0FBVDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBeUJILENBbEZEOztHQUFNbEI7O0tBQUFBO0FBb0ZOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM01vZGFsJ1xyXG5cclxuaW1wb3J0IHsgbmZ0QWRkcmVzc2VzLCBuZnRtYXJrZXRhZGRyZXNzIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuaW1wb3J0IE5GVCBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL05GVC5zb2wvTkZULmpzb24nXHJcbmltcG9ydCBNYXJrZXQgZnJvbSAnLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORlRNYXJrZXQuc29sL05GVE1hcmtldC5qc29uJ1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtuZnRzLCBzZXROZnRzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2xvYWRpbmdTdGF0ZSwgc2V0TG9hZGluZ1N0YXRlXSA9IHVzZVN0YXRlKCdub3QtbG9hZGVkJylcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgICAgbG9hZE5GVHMoKVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkTkZUcygpe1xyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKClcclxuICAgICAgICBjb25zdCB0b2tlbkNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChuZnRBZGRyZXNzZXMsIE5GVC5hYmksIHByb3ZpZGVyKVxyXG4gICAgICAgIGNvbnN0IG1hcmtldENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChuZnRtYXJrZXRhZGRyZXNzLCBNYXJrZXQuYWJpLCBwcm92aWRlcilcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgbWFya2V0Q29udHJhY3QuZmV0Y2hNYXJrZXRJdGVtcygpXHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgUHJvbWlzZS5hbGwoZGF0YS5tYXAoYXN5bmMgaSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuVXJpID0gYXdhaXQgdG9rZW5Db250cmFjdC50b2tlblVSSShpLnRva2VuSWQpXHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCBheGlvcy5nZXQodG9rZW5VcmkpXHJcbiAgICAgICAgICAgIGxldCBwcmljZSA9IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyhpLnByaWNlLnRvU3RyaW5nKCksICdldGhlcicpXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICAgICAgICBwcmljZVdpdGhvdXRGb3JtYXQ6IGkucHJpY2UsXHJcbiAgICAgICAgICAgICAgICB0b2tlbklkOiBpLnRva2VuSWQudG9OdW1iZXIoKSxcclxuICAgICAgICAgICAgICAgIHNlbGxlcjogaS5zZWxsZXIsXHJcbiAgICAgICAgICAgICAgICBvd25lcjogaS5vd25lcixcclxuICAgICAgICAgICAgICAgIGltYWdlOiBtZXRhLmRhdGEuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBtZXRhLmRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBtZXRhLmRhdGEuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1zKVxyXG4gICAgICAgIHNldE5mdHMoaXRlbXMpXHJcbiAgICAgICAgc2V0TG9hZGluZ1N0YXRlKCdsb2FkZWQnKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBidXlOZnQobmZ0KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZnQpXHJcbiAgICAgICAgY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCgpXHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KClcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKVxyXG4gICAgICAgIGNvbnN0IHNpbmdlciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXHJcbiAgICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KG5mdG1hcmtldGFkZHJlc3MsIE1hcmtldC5hYmksIHNpbmdlcilcclxuXHJcbiAgICAgICAgY29uc3QgcHJpY2UgPSBldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMobmZ0LnByaWNlLCAnd2VpJylcclxuICAgICAgICBjb25zb2xlLmxvZyhwcmljZSlcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZU1hcmtldFNhbGUobmZ0QWRkcmVzc2VzLCBuZnQudG9rZW5JZCwge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJpY2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIGF3YWl0IHRyYW5zYWN0aW9uLndhaXQoKVxyXG4gICAgICAgIGxvYWRORlRzKClcclxuICAgIH1cclxuXHJcbiAgICBpZihsb2FkaW5nU3RhdGUgPT09ICdsb2FkZWQnICYmICFuZnRzLmxlbmd0aCkgcmV0dXJuIChcclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHgtMjAgcHktMTAgdGV4dC0zeGxcIj5ObyBpdGVtcyBpbiBtYXJrZXRwbGFjZTwvaDE+XHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNFwiIHN0eWxlPXt7IG1heFdpZHRoOiAnMTYwMHB4JyB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00IHB0LTRcIj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuZnRzLm1hcCgobmZ0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJib3JkZXIgc2hhZG93IHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e25mdC5pbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgaGVpZ2h0OiAnNjRweCcgfX0gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPntuZnQubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzcwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj57bmZ0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJnLWJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi00IGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+e25mdC5wcmljZX0gRVRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctcGluay01MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC0xMiByb3VuZGVkXCIgb25DbGljaz17KCkgPT4gYnV5TmZ0KG5mdCl9PkJ1eTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcblxyXG4iXSwibmFtZXMiOlsiZXRoZXJzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIldlYjNNb2RhbCIsIm5mdEFkZHJlc3NlcyIsIm5mdG1hcmtldGFkZHJlc3MiLCJORlQiLCJNYXJrZXQiLCJIb21lIiwibmZ0cyIsInNldE5mdHMiLCJsb2FkaW5nU3RhdGUiLCJzZXRMb2FkaW5nU3RhdGUiLCJsb2FkTkZUcyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSnNvblJwY1Byb3ZpZGVyIiwidG9rZW5Db250cmFjdCIsIkNvbnRyYWN0IiwiYWJpIiwibWFya2V0Q29udHJhY3QiLCJmZXRjaE1hcmtldEl0ZW1zIiwiZGF0YSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpIiwidG9rZW5VUkkiLCJ0b2tlbklkIiwidG9rZW5VcmkiLCJnZXQiLCJtZXRhIiwicHJpY2UiLCJ1dGlscyIsImZvcm1hdFVuaXRzIiwidG9TdHJpbmciLCJpdGVtIiwicHJpY2VXaXRob3V0Rm9ybWF0IiwidG9OdW1iZXIiLCJzZWxsZXIiLCJvd25lciIsImltYWdlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaXRlbXMiLCJjb25zb2xlIiwibG9nIiwiYnV5TmZ0IiwibmZ0Iiwid2ViM01vZGFsIiwiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJXZWIzUHJvdmlkZXIiLCJzaW5nZXIiLCJnZXRTaWduZXIiLCJjb250cmFjdCIsImNyZWF0ZU1hcmtldFNhbGUiLCJ2YWx1ZSIsInRyYW5zYWN0aW9uIiwid2FpdCIsImxlbmd0aCIsIm1heFdpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciXSwic291cmNlUm9vdCI6IiJ9