/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AdvanceTab.js":
/*!***************************!*\
  !*** ./src/AdvanceTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const AdvanceTab = ({
  attributes,
  setAttributes
}) => {
  const {
    postsPerPage,
    orderBy,
    order,
    productsColumn
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout Settings', 'mrs-products-grid'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Advance Tab")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvanceTab);

/***/ }),

/***/ "./src/GeneralTab.js":
/*!***************************!*\
  !*** ./src/GeneralTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_mrsToggle_MRSToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mrsToggle/MRSToggle */ "./src/components/mrsToggle/MRSToggle.js");




const GeneralTab = ({
  attributes,
  setAttributes
}) => {
  const {
    postsPerPage,
    orderBy,
    order,
    productsColumn,
    productTitleShow,
    productPriceShow,
    showProductRatingStar,
    showAddToCart
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout Settings', 'mrs-products-grid'),
    initialOpen: true,
    className: 'mrs-product-grid-panel-body'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Column(s)', 'mrs-products-grid'),
    value: productsColumn,
    min: 1,
    max: 6,
    onChange: newValue => setAttributes({
      productsColumn: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Limit', 'mrs-products-grid'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set number of total products to show.', 'mrs-products-grid'),
    value: postsPerPage,
    onChange: newValue => setAttributes({
      postsPerPage: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Filter Settings', 'mrs-products-grid'),
    initialOpen: true,
    className: 'mrs-product-grid-panel-body'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Order By', 'mrs-products-grid'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set a order by option.', 'mrs-products-grid'),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('ID', 'mrs-products-grid'),
      value: 'id'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Date', 'mrs-products-grid'),
      value: 'date'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title', 'mrs-products-grid'),
      value: 'title'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Modified', 'mrs-products-grid'),
      value: 'modified'
    }],
    value: orderBy,
    onChange: newValue => setAttributes({
      orderBy: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Order', 'mrs-products-grid'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set product order.', 'mrs-products-grid'),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ascending', 'mrs-products-grid'),
      value: 'asc'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Descending', 'mrs-products-grid'),
      value: 'desc'
    }],
    value: order,
    onChange: newValue => setAttributes({
      order: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Template Settings', 'mrs-products-grid'),
    initialOpen: true,
    className: 'mrs-product-grid-panel-body'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_mrsToggle_MRSToggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Products Name', 'mrs-products-grid'),
    attributes: productTitleShow,
    attributesKey: 'productTitleShow',
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_mrsToggle_MRSToggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Products Price', 'mrs-products-grid'),
    attributes: productPriceShow,
    attributesKey: 'productPriceShow',
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_mrsToggle_MRSToggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Products Rating', 'mrs-products-grid'),
    attributes: showProductRatingStar,
    attributesKey: 'showProductRatingStar',
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_mrsToggle_MRSToggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Add To Cart', 'mrs-products-grid'),
    attributes: showAddToCart,
    attributesKey: 'showAddToCart',
    setAttributes: setAttributes
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralTab);

/***/ }),

/***/ "./src/Inspector.js":
/*!**************************!*\
  !*** ./src/Inspector.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GeneralTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GeneralTab */ "./src/GeneralTab.js");
/* harmony import */ var _StyleTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StyleTab */ "./src/StyleTab.js");
/* harmony import */ var _AdvanceTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AdvanceTab */ "./src/AdvanceTab.js");
/* harmony import */ var _components_tabControl_tabControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tabControl/tabControl */ "./src/components/tabControl/tabControl.js");






const Inspector = ({
  attributes,
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_tabControl_tabControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    GeneralTab: _GeneralTab__WEBPACK_IMPORTED_MODULE_2__["default"],
    StyleTab: _StyleTab__WEBPACK_IMPORTED_MODULE_3__["default"],
    AdvanceTab: _AdvanceTab__WEBPACK_IMPORTED_MODULE_4__["default"],
    attributes: attributes,
    setAttributes: setAttributes
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/StyleTab.js":
/*!*************************!*\
  !*** ./src/StyleTab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_mrsToggle_MRSToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mrsToggle/MRSToggle */ "./src/components/mrsToggle/MRSToggle.js");





const StyleTab = ({
  attributes,
  setAttributes
}) => {
  const {
    mrsProductImageBorderRadiusSet,
    mrsProductImageBorderRadius,
    productTitleShow,
    productTitleSize,
    productTitleColor,
    productPriceShow,
    productPriceSize,
    productPriceColor,
    showProductRatingStar,
    productRatingStarSize,
    productRatingStarColor,
    productRatingEmptyStarColor,
    showAddToCart,
    addToCartFontSize,
    addToCartTextColor,
    addToCartBGColor,
    addToCartWidth
  } = attributes;
  const pxCheck = newObj => {
    for (let side in newObj) {
      if (newObj[side] === undefined) {
        newObj[side] = '0px';
      }
      let unitCheck = newObj[side].slice(newObj[side].length - 2);
      if ('px' !== unitCheck) {
        newObj[side] = newObj[side] + 'px';
      }
    }
  };
  const onChangeProductImage = newValue => {
    pxCheck(newValue);
    setAttributes({
      mrsProductImageBorderRadius: newValue
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image Settings', 'mrs-products-grid'),
    initialOpen: true,
    className: 'mrs-product-grid-panel-body'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_mrsToggle_MRSToggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set Image Border Radius'),
    attributes: mrsProductImageBorderRadiusSet,
    attributesKey: 'mrsProductImageBorderRadiusSet',
    setAttributes: setAttributes
  }), mrsProductImageBorderRadiusSet && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image border Radius', 'mrs-products-grid'),
    onChange: onChangeProductImage,
    values: mrsProductImageBorderRadius,
    units: [{
      value: 'px',
      label: 'px'
    }]
  })), productTitleShow && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product Name Settings', 'mrs-products-grid'),
    initialOpen: false,
    className: 'mrs-product-grid-panel-body'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product Name Font Size', 'mrs-products-grid'),
    value: productTitleSize,
    onChange: newValue => setAttributes({
      productTitleSize: newValue
    }),
    min: 10,
    max: 100
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product Name Color', 'mrs-product-grid'),
      value: productTitleColor,
      onChange: newValue => setAttributes({
        productTitleColor: newValue
      })
    }]
  })), productPriceShow && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product Price', 'mrs-products-grid'),
    initialOpen: false,
    className: 'mrs-product-grid-panel-body'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product Price Font Size', 'mrs-products-grid'),
    value: productPriceSize,
    onChange: newValue => setAttributes({
      productPriceSize: newValue
    }),
    min: 10,
    max: 100
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product Price Color', 'mrs-product-grid'),
      value: productPriceColor,
      onChange: newValue => setAttributes({
        productPriceColor: newValue
      })
    }]
  })), showProductRatingStar && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product Rating', 'mrs-products-grid'),
    initialOpen: false,
    className: 'mrs-product-grid-panel-body'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Product Rating Star Size', 'mrs-products-grid'),
    value: productRatingStarSize,
    onChange: newValue => setAttributes({
      productRatingStarSize: newValue
    }),
    min: 10,
    max: 100
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fill Rating Star Color', 'mrs-product-grid'),
      value: productRatingStarColor,
      onChange: newValue => setAttributes({
        productRatingStarColor: newValue
      })
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Empty Rating Star Color', 'mrs-product-grid'),
      value: productRatingEmptyStarColor,
      onChange: newValue => setAttributes({
        productRatingEmptyStarColor: newValue
      })
    }]
  })), showAddToCart && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add To Cart', 'mrs-products-grid'),
    initialOpen: false,
    className: 'mrs-product-grid-panel-body'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add To Cart Font Size', 'mrs-products-grid'),
    value: addToCartFontSize,
    onChange: newValue => setAttributes({
      addToCartFontSize: newValue
    }),
    min: 10,
    max: 100
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color', 'mrs-products-grid'),
      value: addToCartTextColor,
      onChange: newValue => setAttributes({
        addToCartTextColor: newValue
      })
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'mrs-products-grid'),
      value: addToCartBGColor,
      onChange: newValue => setAttributes({
        addToCartBGColor: newValue
      })
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add To Cart Button Width', 'mrs-products-grid')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    className: 'mrs-products-btn-group'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: `mrs-products-btn ${addToCartWidth === '25%' ? 'is-active' : ''}`,
    onClick: () => setAttributes({
      addToCartWidth: '25%'
    })
  }, "25%"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: `mrs-products-btn ${addToCartWidth === '50%' ? 'is-active' : ''}`,
    onClick: () => setAttributes({
      addToCartWidth: '50%'
    })
  }, "50%"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: `mrs-products-btn ${addToCartWidth === '75%' ? 'is-active' : ''}`,
    onClick: () => setAttributes({
      addToCartWidth: '75%'
    })
  }, "75%"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: `mrs-products-btn ${addToCartWidth === '100%' ? 'is-active' : ''}`,
    onClick: () => setAttributes({
      addToCartWidth: '100%'
    })
  }, "100%"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyleTab);

/***/ }),

/***/ "./src/components/mrsToggle/MRSToggle.js":
/*!***********************************************!*\
  !*** ./src/components/mrsToggle/MRSToggle.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MRSToggle_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MRSToggle.scss */ "./src/components/mrsToggle/MRSToggle.scss");



const MRSToggle = ({
  label,
  attributes,
  setAttributes,
  attributesKey
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-products-toggle"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: label,
    checked: attributes,
    onChange: () => setAttributes({
      [attributesKey]: !attributes
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MRSToggle);

/***/ }),

/***/ "./src/components/tabControl/tabControl.js":
/*!*************************************************!*\
  !*** ./src/components/tabControl/tabControl.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/components/tabControl/editor.scss");



const TabControl = ({
  attributes,
  setAttributes,
  GeneralTab = '',
  StyleTab = '',
  AdvanceTab = ''
}) => {
  const Tabs = [];
  if (GeneralTab) {
    Tabs.push({
      name: 'general',
      title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "mrs-products-tab-panel-title"
      }, "General"),
      className: 'mrs-products-general-tab'
    });
  }
  if (StyleTab) {
    Tabs.push({
      name: 'style',
      title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "mrs-products-tab-panel-title"
      }, "Style"),
      className: 'mrs-products-style-tab'
    });
  }
  if (AdvanceTab) {
    Tabs.push({
      name: 'Advance',
      title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "mrs-products-tab-panel-title"
      }, "Advance"),
      className: 'mrs-products-advance-tab'
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: 'mrs-products-tab-panel',
    activeClass: 'active-tab',
    tabs: Tabs
  }, tab => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, tab.name === 'general' && GeneralTab && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GeneralTab, {
      attributes: attributes,
      setAttributes: setAttributes
    }), tab.name === 'style' && StyleTab && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StyleTab, {
      attributes: attributes,
      setAttributes: setAttributes
    }), tab.name === 'advance' && AdvanceTab && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AdvanceTab, {
      attributes: attributes,
      setAttributes: setAttributes
    }));
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabControl);

/***/ }),

/***/ "./src/controls/controls.js":
/*!**********************************!*\
  !*** ./src/controls/controls.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cssString = css => {
  let results = '';
  for (let selector in css) {
    let cssProps = '';
    for (let property in css[selector]) {
      if (css[selector][property] && css[selector][property].length > 0) {
        cssProps += property + ':' + css[selector][property] + ';';
      }
    }
    results += '' !== cssProps ? selector + '{' + cssProps + '}' : '';
  }
  return results;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cssString);

/***/ }),

/***/ "./src/dynamicCss.js":
/*!***************************!*\
  !*** ./src/dynamicCss.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controls_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/controls */ "./src/controls/controls.js");

const dynamicCss = attributes => {
  const {
    uniqueID,
    productTitleSize,
    productTitleColor,
    productPriceSize,
    productPriceColor,
    productRatingStarSize,
    productRatingStarColor,
    addToCartFontSize,
    addToCartBGColor,
    addToCartTextColor,
    mrsProductImageBorderRadius,
    addToCartWidth
  } = attributes;
  let desktopCss = {
    [`.mrs-block-mrs-products-grid .mrs-product-${uniqueID}`]: {
      'display': 'block',
      'box-sizing': 'border-box'
    },
    [`.mrs-product-${uniqueID} .mrs-products-grid-content`]: {
      'display': 'flex',
      'flex-wrap': 'wrap'
    },
    [`.mrs-product-${uniqueID} .mrs-products-grid-content .mrs-product-col`]: {
      'box-sizing': 'border-box'
    },
    [`.mrs-product-${uniqueID} .mrs-product-col.has-1-col`]: {
      'width': '100%'
    },
    [`.mrs-product-${uniqueID} .mrs-product-col.has-2-col`]: {
      'width': 'calc(100% / 2 - 20px)',
      'margin': '10px'
    },
    [`.mrs-product-${uniqueID} .mrs-product-col.has-3-col`]: {
      'width': 'calc(100% / 3 - 20px)',
      'margin': '10px'
    },
    [`.mrs-product-${uniqueID} .mrs-product-col.has-4-col`]: {
      'width': 'calc(100% / 4 - 20px)',
      'margin': '10px'
    },
    [`.mrs-product-${uniqueID} .mrs-product-col.has-5-col`]: {
      'width': 'calc(100% / 5 - 20px)',
      'margin': '10px'
    },
    [`.mrs-product-${uniqueID} .mrs-product-col.has-6-col`]: {
      'width': 'calc(100% / 6 - 20px)',
      'margin': '10px'
    },
    [`.mrs-product-${uniqueID} .mrs-product .mrs-product-img-wrapper`]: {
      'position': 'relative'
    },
    [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img img`]: {
      'width': '100%',
      'height': 'auto'
    },
    [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img-overlay`]: {
      'position': 'absolute',
      'top': '5px',
      'right': '10px',
      'background': '#fff',
      'padding': '5px 10px',
      'border': '1px solid',
      'border-radius': '5px',
      'font-size': '14px'
    },
    [`.mrs-product-${uniqueID} .mrs-product .mrs-product-content-wrapper`]: {
      'display': 'flex',
      'flex-direction': 'column',
      'justify-content': 'center',
      'align-items': 'center'
    },
    [`.mrs-product-${uniqueID} .mrs-product-content-wrapper .mrs-product-title h4`]: {
      'margin': '10px',
      'font-size': productTitleSize + 'px',
      'font-weight': '700',
      'color': productTitleColor
    },
    [`.mrs-product-${uniqueID} .mrs-product-content-wrapper .mrs-product-price`]: {
      'font-size': productPriceSize + 'px',
      'color': productPriceColor
    },
    [`.mrs-product-${uniqueID} .mrs-product-content-wrapper`]: {
      'margin-left': '-10px',
      'margin-right': '-10px'
    },
    [`.mrs-product-${uniqueID} .mrs-product-ratting .dashicons.dashicons-star-filled, .dashicons.dashicons-star-empty`]: {
      'width': productRatingStarSize + 'px',
      'font-size': productRatingStarSize + 'px',
      'color': productRatingStarColor,
      'font-weight': '700'
    },
    [`.mrs-product-${uniqueID} .mrs-product-add-to-cart .mrs-product-buy-btn-cart .wp-element-button`]: {
      'font-size': addToCartFontSize + 'px',
      'color': addToCartTextColor,
      'background': addToCartBGColor
    },
    [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img`]: {
      'border-radius': `${mrsProductImageBorderRadius.top ? mrsProductImageBorderRadius.top : 0} ${mrsProductImageBorderRadius.right ? mrsProductImageBorderRadius.right : 0} ${mrsProductImageBorderRadius.bottom ? mrsProductImageBorderRadius.bottom : 0} ${mrsProductImageBorderRadius.left ? mrsProductImageBorderRadius.left : 0}`
    },
    [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img img`]: {
      'border-radius': 'inherit',
      'width': '100%',
      'border-radius': `${mrsProductImageBorderRadius.top ? mrsProductImageBorderRadius.top : 0} ${mrsProductImageBorderRadius.right ? mrsProductImageBorderRadius.right : 0} ${mrsProductImageBorderRadius.bottom ? mrsProductImageBorderRadius.bottom : 0} ${mrsProductImageBorderRadius.left ? mrsProductImageBorderRadius.left : 0}`
    },
    [`.mrs-product-${uniqueID} .mrs-product-content-wrapper .mrs-product-add-to-cart`]: {
      'width': '100%',
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center'
    },
    [`.mrs-product-${uniqueID} .mrs-product-add-to-cart .mrs-product-buy-btn-cart`]: {
      'width': '100%',
      'display': 'flex',
      'justify-content': 'center'
    },
    [`.mrs-product-${uniqueID} .mrs-product-buy-btn-cart .mrs-product-add-to-cart-button`]: {
      'width': addToCartWidth
    },
    [`.mrs-product-${uniqueID} .mrs-product-content-wrapper .mrs-product-price ins`]: {
      'text-decoration': 'none'
    }
  };
  desktopCss = (0,_controls_controls__WEBPACK_IMPORTED_MODULE_0__["default"])(desktopCss);
  const styling = `${desktopCss}`;
  return styling;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dynamicCss);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dynamicCss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamicCss */ "./src/dynamicCss.js");
/* harmony import */ var _Inspector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Inspector */ "./src/Inspector.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");









function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    postsPerPage,
    orderBy,
    order,
    uniqueID,
    frontendCss,
    productsColumn,
    productTitleShow,
    productPriceShow,
    showProductRatingStar,
    showAddToCart
  } = attributes;
  const [firstTLoad, setFirstTLoad] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  // console.log(mrsProductsGrid.products);

  const selectProduct = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    return select('core').getEntityRecords('postType', 'product', {
      per_page: postsPerPage,
      _embed: true,
      orderby: orderBy,
      order
    });
  }, [postsPerPage, orderBy, order]);
  const starRating = ratingCount => {
    let rating = parseInt(ratingCount);
    switch (rating) {
      case 1:
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-filled'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-empty'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-empty'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-empty'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-empty'
        }));
      case 2:
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-filled'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-filled'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-empty'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-empty'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-empty'
        }));
      case 3:
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-filled'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-filled'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-filled'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-empty'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-empty'
        }));
      case 4:
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-filled'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-filled'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-filled'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-filled'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-empty'
        }));
      case 5:
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-filled'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-filled'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-filled'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-filled'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-filled'
        }));
      default:
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-empty'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-empty'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-empty'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-empty'
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          icon: 'star-empty'
        }));
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (uniqueID && !firstTLoad) {
      setFirstTLoad(false);
    }
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (firstTLoad && !uniqueID) {
      setAttributes({
        uniqueID: clientId
      });
    }
  }, [firstTLoad]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setAttributes({
      frontendCss: JSON.stringify((0,_dynamicCss__WEBPACK_IMPORTED_MODULE_6__["default"])(attributes))
    });
  }, [attributes]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (selectProduct === null) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [selectProduct]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Inspector__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, (0,_dynamicCss__WEBPACK_IMPORTED_MODULE_6__["default"])(attributes)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: `mrs-block-mrs-products-grid mrs-product-${uniqueID}`
    })
  }, loading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Loading Products..."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-products-grid-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-products-grid-content"
  }, selectProduct && selectProduct.length > 0 && selectProduct.map((item, i) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `mrs-product-col has-${productsColumn}-col`,
      key: i
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrs-product"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrs-product-img-wrapper"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrs-product-img"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: item._embedded['wp:featuredmedia'][0]?.source_url,
      alt: ""
    }))), mrsProductsGrid?.products?.map((v, i) => {
      if (parseInt(v.id) === parseInt(item.id) && v.onSale === true) {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          key: i,
          className: "mrs-product-img-overlay"
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Sale"));
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrs-product-content-wrapper"
    }, productTitleShow && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrs-product-title"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, item?.title?.rendered)), showProductRatingStar && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrs-product-ratting"
    }, mrsProductsGrid?.products?.map((v, i) => {
      if (parseInt(v.id) === parseInt(item.id)) {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          key: i
        }, starRating(v.rating));
      }
    })), productPriceShow && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrs-product-price"
    }, mrsProductsGrid?.products?.map((v, i) => {
      if (parseInt(v.id) === parseInt(item.id)) {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.RawHTML, {
          key: i
        }, v.price ? v.price : 'Out of Stock');
      }
    })), showAddToCart && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrs-product-add-to-cart"
    }, mrsProductsGrid?.products?.map((v, i) => {
      if (parseInt(v.id) === parseInt(item.id)) {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
          className: "product woocommerce add_to_cart_inline mrs-product-buy-btn-cart",
          key: i
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          "data-quantity": "1",
          className: "wp-block-button__link wp-element-button add_to_cart_button wc-block-components-product-button__button",
          "aria-label": `Add to cart: “${item?.title?.raw}”`,
          "aria-describedby": true,
          rel: "nofollow"
        }, v.groupProduct ? 'View Products' : 'Add To Cart'));
      }
    })))));
  })))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
function save() {
  return null;
}

/***/ }),

/***/ "./src/components/mrsToggle/MRSToggle.scss":
/*!*************************************************!*\
  !*** ./src/components/mrsToggle/MRSToggle.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/tabControl/editor.scss":
/*!***********************************************!*\
  !*** ./src/components/tabControl/editor.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"mrs-block/mrs-products-grid","version":"0.1.0","title":"MRS Products Grid","category":"text","icon":"cart","description":"A simple Gutenberg form widget.","example":{},"supports":{"html":false,"align":["wide","full"]},"attributes":{"uniqueID":{"type":"string","default":""},"frontendCss":{"type":"string","default":""},"postsPerPage":{"type":"number","default":100},"orderBy":{"type":"string","default":"title"},"order":{"type":"string","default":"desc"},"productsColumn":{"type":"number","default":3},"mrsProductImageBorderRadiusSet":{"type":"boolean","default":false},"mrsProductImageBorderRadius":{"type":"object","default":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"productTitleShow":{"type":"boolean","default":true},"productTitleColor":{"type":"string","default":"#111111"},"productTitleSize":{"type":"number","default":22},"showProductRatingStar":{"type":"boolean","default":true},"productRatingStarSize":{"type":"number","default":16},"productRatingStarColor":{"type":"string","default":"#111111"},"productRatingEmptyStarColor":{"type":"string","default":"#ffffff"},"productPriceShow":{"type":"boolean","default":true},"productPriceSize":{"type":"number","default":18},"productPriceColor":{"type":"string","default":"#111111"},"showAddToCart":{"type":"boolean","default":true},"addToCartBGColor":{"type":"string","default":"#111111"},"addToCartTextColor":{"type":"string","default":"#fff"},"addToCartFontSize":{"type":"number","default":16},"addToCartWidth":{"type":"string","default":"75%"}},"textdomain":"mrs-products-grid","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkmrs_products_grid"] = globalThis["webpackChunkmrs_products_grid"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map