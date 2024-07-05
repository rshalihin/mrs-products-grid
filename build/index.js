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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_spacing_Spacing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/spacing/Spacing */ "./src/components/spacing/Spacing.js");







const AdvanceTab = ({
  attributes,
  setAttributes
}) => {
  const {
    productsGridMargin,
    productsGridPadding,
    productsBorderStyle,
    productsBorderColor,
    productsBorderWidth,
    productsBorderRadius,
    productsBorderRadiusHover,
    productsBorderWidthHover,
    productsBorderColorHover,
    productsBorderStyleHover,
    productsBorderTransition
  } = attributes;
  const [borderHover, setBorderHover] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('Normal');
  // console.log(productsGridMargin);
  // console.log(productsGridPadding);

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spacing Settings', 'mrs-products-grid'),
    initialOpen: true,
    className: "mrs-product-grid-panel-body"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_spacing_Spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Margin', 'mrs-products-grid'),
    attributes: productsGridMargin,
    attributesKey: 'productsGridMargin',
    setAttributes: setAttributes,
    units: ['px', '%', 'em'],
    labelItem: {
      'top': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'mrs-products-grid'),
      'right': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'mrs-products-grid'),
      'bottom': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'mrs-products-grid'),
      'left': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'mrs-products-grid')
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_spacing_Spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'mrs-products-grid'),
    attributes: productsGridPadding,
    attributesKey: 'productsGridPadding',
    setAttributes: setAttributes,
    units: ['px', '%', 'em'],
    labelItem: {
      'top': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'mrs-products-grid'),
      'right': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'mrs-products-grid'),
      'bottom': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'mrs-products-grid'),
      'left': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'mrs-products-grid')
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border and Shadow', 'mrs-products-grid'),
    initialOpen: false,
    className: "mrs-product-grid-panel-body"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    className: 'mrs-products-btn-group'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: `mrs-products-btn ${borderHover === 'Normal' ? 'is-active' : ''}`,
    onClick: () => setBorderHover('Normal')
  }, "Normal"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: `mrs-products-btn ${borderHover === 'Hover' ? 'is-active' : ''}`,
    onClick: () => setBorderHover('Hover')
  }, "Hover")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalDivider, null), borderHover === 'Normal' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Style', 'mrs-products-grid'),
    value: productsBorderStyle,
    options: [{
      label: "None",
      value: "none"
    }, {
      label: "Solid",
      value: "solid"
    }, {
      label: "Dashed",
      value: "Dashed"
    }, {
      label: "Dotted",
      value: "dotted"
    }, {
      label: "Double",
      value: "double"
    }, {
      label: "Groove",
      value: "groove"
    }, {
      label: "Inset",
      value: "inset"
    }, {
      label: "Outset",
      value: "outset"
    }, {
      label: "Ridge",
      value: "ridge"
    }],
    onChange: value => setAttributes({
      productsBorderStyle: value
    })
  }), productsBorderStyle !== 'none' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Color', 'mrs-products-grid'),
      value: productsBorderColor,
      onChange: value => setAttributes({
        productsBorderColor: value
      })
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_spacing_Spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Width', 'mrs-products-grid'),
    attributes: productsBorderWidth,
    attributesKey: 'productsBorderWidth',
    setAttributes: setAttributes,
    units: ['px', '%', 'em', 'rem'],
    labelItem: {
      'top': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'mrs-products-grid'),
      'left': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'mrs-products-grid'),
      'bottom': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'mrs-products-grid'),
      'right': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'mrs-products-grid')
    }
  }), " ")), borderHover === 'Hover' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover Border Style', 'mrs-products-grid'),
    value: productsBorderStyleHover,
    options: [{
      label: "None",
      value: "none"
    }, {
      label: "Solid",
      value: "solid"
    }, {
      label: "Dashed",
      value: "Dashed"
    }, {
      label: "Dotted",
      value: "dotted"
    }, {
      label: "Double",
      value: "double"
    }, {
      label: "Groove",
      value: "groove"
    }, {
      label: "Inset",
      value: "inset"
    }, {
      label: "Outset",
      value: "outset"
    }, {
      label: "Ridge",
      value: "ridge"
    }],
    onChange: value => setAttributes({
      productsBorderStyleHover: value
    })
  }), productsBorderStyleHover !== 'none' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover Border Color', 'mrs-products-grid'),
      value: productsBorderColorHover,
      onChange: value => setAttributes({
        productsBorderColorHover: value
      })
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_spacing_Spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hover Border Width', 'mrs-products-grid'),
    attributes: productsBorderWidthHover,
    attributesKey: 'productsBorderWidthHover',
    setAttributes: setAttributes,
    units: ['px', '%', 'em', 'rem'],
    labelItem: {
      'top': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'mrs-products-grid'),
      'left': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'mrs-products-grid'),
      'bottom': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'mrs-products-grid'),
      'right': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'mrs-products-grid')
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    min: 0.1,
    max: 5.0,
    step: 0.1,
    value: productsBorderTransition,
    onChange: newValue => setAttributes({
      productsBorderTransition: newValue
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_spacing_Spacing__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'mrs-products-grid'),
    attributes: productsBorderRadius,
    attributesKey: 'productsBorderRadius',
    setAttributes: setAttributes,
    units: ['px', '%', 'em', 'rem'],
    labelItem: {
      'top': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Top', 'mrs-products-grid'),
      'left': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'mrs-products-grid'),
      'bottom': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bottom', 'mrs-products-grid'),
      'right': (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'mrs-products-grid')
    }
  })));
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
    showAddToCart,
    saleBadgeShow,
    saleBadgeText,
    customAddToCartText,
    addToCartText,
    addToCartTextGroup,
    hideOutOfStock,
    addToCartTextExternal,
    addToCartTextDefault,
    addToCartTextVariable,
    hideProductEmptyRatingStar
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
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_mrsToggle_MRSToggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide Out Of Stock Product', 'mrs-products-grid'),
    attributes: hideOutOfStock,
    attributesKey: 'hideOutOfStock',
    setAttributes: setAttributes
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Filter Settings', 'mrs-products-grid'),
    initialOpen: false,
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
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Rating', 'mrs-products-grid'),
      value: 'rating'
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
    initialOpen: false,
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
  }), showProductRatingStar && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_mrsToggle_MRSToggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide Products Empty Rating', 'mrs-products-grid'),
    attributes: hideProductEmptyRatingStar,
    attributesKey: 'hideProductEmptyRatingStar',
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_mrsToggle_MRSToggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sale Badge', 'mrs-products-grid'),
    attributes: saleBadgeShow,
    attributesKey: 'saleBadgeShow',
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_mrsToggle_MRSToggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Add To Cart', 'mrs-products-grid'),
    attributes: showAddToCart,
    attributesKey: 'showAddToCart',
    setAttributes: setAttributes
  })), saleBadgeShow && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sale Badge', 'mrs-products-grid'),
    initialOpen: false,
    className: 'mrs-product-grid-panel-body'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sale Text', 'mrs-products-grid'),
    value: saleBadgeText,
    onChange: newValue => setAttributes({
      saleBadgeText: newValue
    })
  })), showAddToCart && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cart Text', 'mrs-products-grid'),
    initialOpen: false,
    className: 'mrs-product-grid-panel-body'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_mrsToggle_MRSToggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Use custom cart button text', 'mrs-products-grid'),
    attributes: customAddToCartText,
    attributesKey: 'customAddToCartText',
    setAttributes: setAttributes
  }), customAddToCartText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Simple Product', 'mrs-products-grid'),
    value: addToCartText,
    onChange: newValue => setAttributes({
      addToCartText: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Group Product', 'mrs-products-grid'),
    value: addToCartTextGroup,
    onChange: newValue => setAttributes({
      addToCartTextGroup: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Variable Product', 'mrs-products-grid'),
    value: addToCartTextVariable,
    onChange: newValue => setAttributes({
      addToCartTextVariable: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('External Product', 'mrs-products-grid'),
    value: addToCartTextExternal,
    onChange: newValue => setAttributes({
      addToCartTextExternal: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default Product', 'mrs-products-grid'),
    value: addToCartTextDefault,
    onChange: newValue => setAttributes({
      addToCartTextDefault: newValue
    })
  }))));
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
/* harmony import */ var _components_responsive_Responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/responsive/Responsive */ "./src/components/responsive/Responsive.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);








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
    showAddToCart,
    addToCartFontSize,
    addToCartTextColor,
    addToCartBGColor,
    addToCartWidth,
    productContentAlign,
    productsBGColor,
    productsContentPadding,
    productSpacing,
    saleBadgeBorderStyle,
    saleBadgeShow,
    saleBadgeTextColor,
    saleBadgeBGColor,
    saleBadgeBorderColor,
    saleBadgeBorderWidth,
    saleBadgeBorderRadius,
    mrsProductSaleBadgeStyle,
    saleBadgeAlign
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
    return newObj;
  };
  const onChangeProductImage = newValue => {
    let checkValue = pxCheck(newValue);
    setAttributes({
      mrsProductImageBorderRadius: checkValue
    });
  };
  const productsContentPaddingHandle = newValues => {
    let checkValue = pxCheck(newValues);
    setAttributes({
      productsContentPadding: checkValue
    });
  };
  const saleBadgeBorderWidthOnChangeHandle = newValues => {
    let checkValues = pxCheck(newValues);
    setAttributes({
      saleBadgeBorderWidth: checkValues
    });
  };
  const saleBadgeBorderRadiusOnChangeHandle = newValues => {
    let checkValues = pxCheck(newValues);
    setAttributes({
      saleBadgeBorderRadius: checkValues
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (mrsProductSaleBadgeStyle !== 'simple') {
      setAttributes({
        saleBadgeBorderStyle: 'none'
      });
    } else {
      setAttributes({
        saleBadgeBorderStyle: 'solid'
      });
    }
  }, [mrsProductSaleBadgeStyle]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Products', 'mrs-products-grid'),
    initialOpen: true,
    className: 'mrs-product-grid-panel-body'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content Alignment', 'mrs-products-grid')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    className: 'mrs-products-btn-group'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: `mrs-products-btn ${productContentAlign === 'flex-start' ? 'is-active' : ''}`,
    onClick: () => setAttributes({
      productContentAlign: 'flex-start'
    })
  }, "Left"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: `mrs-products-btn ${productContentAlign === 'center' ? 'is-active' : ''}`,
    onClick: () => setAttributes({
      productContentAlign: 'center'
    })
  }, "Center"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: `mrs-products-btn ${productContentAlign === 'flex-end' ? 'is-active' : ''}`,
    onClick: () => setAttributes({
      productContentAlign: 'flex-end'
    })
  }, "Right")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content Background Color', 'mrs-products-grid'),
      value: productsBGColor,
      onChange: newValue => setAttributes({
        productsBGColor: newValue
      })
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'mrs-products-grid'),
    values: productsContentPadding,
    onChange: productsContentPaddingHandle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spacing', 'mrs-products-grid'),
    value: productSpacing,
    onChange: newValue => setAttributes({
      productSpacing: newValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image Settings', 'mrs-products-grid'),
    initialOpen: false,
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
  }, "100%"))), saleBadgeShow && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sale Badge Style', 'mrs-products-grid'),
    initialOpen: false,
    className: 'mrs-product-grid-panel-body'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a Sale Badge Style', 'mrs-products-grid'),
    value: mrsProductSaleBadgeStyle,
    options: [{
      label: 'Simple',
      value: 'simple'
    }, {
      label: 'Rotate Top Left',
      value: 'rTopLeft'
    }, {
      label: 'Rotate Top Right',
      value: 'rTopRight'
    }],
    onChange: newValue => setAttributes({
      mrsProductSaleBadgeStyle: newValue
    })
  }), mrsProductSaleBadgeStyle === 'simple' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "mrs-product-grid-btn-label"
  }, "Alignment"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    className: 'mrs-products-btn-group'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: `mrs-products-btn ${saleBadgeAlign === 'Left' ? 'is-active' : ''}`,
    onClick: () => setAttributes({
      saleBadgeAlign: 'Left'
    })
  }, "Left"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: `mrs-products-btn ${saleBadgeAlign === 'Right' ? 'is-active' : ''}`,
    onClick: () => setAttributes({
      saleBadgeAlign: 'Right'
    })
  }, "Right")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sale Text Color', 'mrs-products-grid'),
      value: saleBadgeTextColor,
      onChange: newValue => setAttributes({
        saleBadgeTextColor: newValue
      })
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sale Text Background Color', 'mrs-products-grid'),
      value: saleBadgeBGColor,
      onChange: newValue => setAttributes({
        saleBadgeBGColor: newValue
      })
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), mrsProductSaleBadgeStyle === 'simple' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border', 'mrs-products-grid'),
    value: saleBadgeBorderStyle,
    options: [{
      label: 'None',
      value: 'none'
    }, {
      label: 'Solid',
      value: 'solid'
    }, {
      label: 'Dashed',
      value: 'dashed'
    }, {
      label: 'Dotted',
      value: 'dotted'
    }, {
      label: 'Double',
      value: 'Double'
    }, {
      label: 'Groove',
      value: 'Groove'
    }, {
      label: 'Inset',
      value: 'inset'
    }, {
      label: 'Outset',
      value: 'outset'
    }, {
      label: 'Ridge',
      value: 'ridge'
    }],
    onChange: newValue => setAttributes({
      saleBadgeBorderStyle: newValue
    })
  }), saleBadgeBorderStyle !== 'none' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Color', 'mrs-products-grid'),
      value: saleBadgeBorderColor,
      onChange: newValue => setAttributes({
        saleBadgeBorderColor: newValue
      })
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Width', 'mrs-products-grid'),
    values: saleBadgeBorderWidth,
    onChange: saleBadgeBorderWidthOnChangeHandle,
    units: [{
      label: 'px',
      value: 'px'
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalDivider, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'mrs-products-grid'),
    values: saleBadgeBorderRadius,
    onChange: saleBadgeBorderRadiusOnChangeHandle,
    units: [{
      label: 'px',
      value: 'px'
    }]
  })))));
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

/***/ "./src/components/responsive/Responsive.js":
/*!*************************************************!*\
  !*** ./src/components/responsive/Responsive.js ***!
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
/* harmony import */ var _controls_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controls/controls */ "./src/controls/controls.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controls_svgIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controls/svgIcon */ "./src/controls/svgIcon.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/components/responsive/editor.scss");






const Responsive = () => {
  const Device = e => {
    const canvas = document.getElementsByClassName('edit-site-visual-editor__editor-canvas');
    if (canvas.length > 0) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/editor').setDeviceType(e.target.closest('button').value);
    } else {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType(e.target.closest('button').value);
    }
  };
  const deviceType = (0,_controls_controls__WEBPACK_IMPORTED_MODULE_2__.useDeviceType)();
  const DeviceIcon = () => {
    if ('Desktop' === deviceType) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_svgIcon__WEBPACK_IMPORTED_MODULE_4__.DesktopIcon, null);
    }
    if ('Tablet' === deviceType) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_svgIcon__WEBPACK_IMPORTED_MODULE_4__.TabletIcon, null);
    }
    if ('Mobile' === deviceType) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_svgIcon__WEBPACK_IMPORTED_MODULE_4__.MobileIcon, null);
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-products-grid-responsive"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-products-units"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DeviceIcon, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-products-units-btn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: deviceType === 'Desktop' ? 'active' : '',
    value: 'Desktop',
    onClick: Device
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_svgIcon__WEBPACK_IMPORTED_MODULE_4__.DesktopIcon, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: deviceType === 'Tablet' ? 'active' : '',
    value: 'Tablet',
    onClick: Device
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_svgIcon__WEBPACK_IMPORTED_MODULE_4__.TabletIcon, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: deviceType === 'Mobile' ? 'active' : '',
    value: 'Mobile',
    onClick: Device
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_svgIcon__WEBPACK_IMPORTED_MODULE_4__.MobileIcon, null))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Responsive);

/***/ }),

/***/ "./src/components/spacing/Spacing.js":
/*!*******************************************!*\
  !*** ./src/components/spacing/Spacing.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controls_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controls/controls */ "./src/controls/controls.js");
/* harmony import */ var _controls_svgIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controls/svgIcon */ "./src/controls/svgIcon.js");
/* harmony import */ var _responsive_Responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../responsive/Responsive */ "./src/components/responsive/Responsive.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/components/spacing/editor.scss");






const Spacing = ({
  label,
  attributes,
  attributesKey,
  setAttributes,
  units,
  linkButton = true,
  labelItem = {
    'top': 'Top',
    'right': 'Right',
    'bottom': 'Bottom',
    'left': 'Left'
  },
  defaultValue = {
    'unit': 'px',
    'value': {
      'top': '0px',
      'right': '0px',
      'bottom': '0px',
      'left': '0px'
    }
  }
}) => {
  const deviceType = (0,_controls_controls__WEBPACK_IMPORTED_MODULE_2__.useDeviceType)();
  const SpacingAllChangeIcon = attributes?.allChange ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_svgIcon__WEBPACK_IMPORTED_MODULE_3__.SpacingControlActiveIcon, null) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_svgIcon__WEBPACK_IMPORTED_MODULE_3__.SpacingControlIcon, null);
  const value = attributes?.device ? attributes?.device[deviceType] : attributes;
  const setDefaultValue = () => {
    if (attributes?.device) {
      let data = {
        ...attributes?.device[deviceType],
        'top': defaultValue?.value?.top,
        'right': defaultValue?.value?.right,
        'bottom': defaultValue?.value?.bottom,
        'left': defaultValue?.value?.left
      };
      setAttributes({
        [attributesKey]: {
          ...attributes,
          'device': {
            ...attributes?.device,
            [deviceType]: data
          },
          'unit': {
            ...attributes?.unit,
            [deviceType]: defaultValue.unit
          }
        }
      });
    } else {
      let data = {
        ...attributes,
        'top': defaultValue?.value?.top,
        'right': defaultValue?.value?.right,
        'bottom': defaultValue?.value?.bottom,
        'left': defaultValue?.value?.left
      };
      setAttributes({
        [attributesKey]: {
          data,
          'unit': {
            ...attributes?.unit,
            [deviceType]: defaultValue.unit
          }
        }
      });
    }
  };
  const setSpacingData = (newValue, typeKey) => {
    if (attributes.device && !attributes.allChange) {
      setAttributes({
        [attributesKey]: {
          ...attributes,
          'device': {
            ...attributes.device,
            [deviceType]: {
              ...attributes.device[deviceType],
              [typeKey]: newValue
            }
          }
        }
      });
    }
    if (!attributes.device && !attributes.allChange) {
      setAttributes({
        [attributesKey]: {
          ...attributes,
          [typeKey]: newValue
        }
      });
    }
    if (attributes.device && attributes.allChange) {
      let data = {
        ...attributes,
        'top': newValue,
        'right': newValue,
        'bottom': newValue,
        'left': newValue
      };
      setAttributes({
        [attributesKey]: {
          ...attributes,
          'device': {
            ...attributes.device,
            [deviceType]: data
          }
        }
      });
    }
  };

  // Set Unit Function
  const setUnit = newValue => {
    setAttributes({
      [attributesKey]: {
        ...attributes,
        'unit': {
          ...attributes?.unit,
          [deviceType]: newValue.toLowerCase()
        }
      }
    });
  };

  // When the reset button active and not-active.
  const activeResetButton = () => {
    if (defaultValue?.unit !== attributes?.unit || JSON.stringify(defaultValue.value) != JSON.stringify(value)) {
      return 'active';
    }
    return '';
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-component-spacing mrs-components-mb"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-spacing-part-1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-header-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-header-control-left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "mrs-component-title"
  }, label), attributes?.device && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_responsive_Responsive__WEBPACK_IMPORTED_MODULE_4__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-header-control-right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: () => setDefaultValue(),
    className: `mrs-header-control-reset ${activeResetButton()}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_svgIcon__WEBPACK_IMPORTED_MODULE_3__.ResetIcon, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-units"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: ''
  }, 'object' !== typeof attributes.unit ? attributes?.unit : attributes.unit[deviceType]), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-units-btn"
  }, units?.map((item, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: attributes.unit[deviceType] === item.toLowerCase() ? 'active' : '',
    key: i,
    value: item,
    onClick: e => setUnit(e.target.value)
  }, item))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-spacing-part-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-spacing-top"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "mrs-spacing-top",
    type: "number",
    value: value?.top,
    onChange: e => setSpacingData(e.target.value, 'top')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "mrs-spacing-top"
  }, labelItem?.top)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-spacing-right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "mrs-spacing-right",
    type: "number",
    value: value?.right,
    onChange: e => setSpacingData(e.target.value, 'right')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "mrs-spacing-right"
  }, labelItem?.right)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-spacing-bottom"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "mrs-spacing-bottom",
    type: "number",
    value: value?.bottom,
    onChange: e => setSpacingData(e.target.value, 'bottom')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "mrs-spacing-bottom"
  }, labelItem?.bottom)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-spacing-left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "mrs-spacing-left",
    type: "number",
    value: value?.left,
    onChange: e => setSpacingData(e.target.value, 'left')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "mrs-spacing-left"
  }, labelItem?.left)), linkButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mrs-spacing-all"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: attributes?.allChange ? 'active' : '',
    onClick: () => setAttributes({
      [attributesKey]: {
        ...attributes,
        'allChange': !attributes?.allChange
      }
    })
  }, SpacingAllChangeIcon)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spacing);

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
      name: 'advance',
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
/* harmony export */   cssDataCheck: () => (/* binding */ cssDataCheck),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useDeviceType: () => (/* binding */ useDeviceType)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);


// Device type fn
const useDeviceType = () => {
  const canvas = document.getElementsByClassName('edit-site-visual-editor__editor-canvas');
  const {
    deviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    if (canvas.length > 0) {
      return {
        deviceType: select('core/editor').getDeviceType() || 'Desktop'
      };
    } else {
      return {
        deviceType: select('core/edit-post')?.__experimentalGetPreviewDeviceType() || 'Desktop'
      };
    }
  }, []);
  return deviceType || '';
};
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
const cssDataCheck = (value, unit = '') => {
  let data = '';
  if ('object' === typeof value) {
    for (let single in value) {
      if (value[single].length > 0) {
        data += ` ${value[single]}${unit}`;
      }
    }
  } else {
    if (value && value.toString().length > 0) {
      data += ` ${value}${unit}`;
    }
  }
  return data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cssString);

/***/ }),

/***/ "./src/controls/svgIcon.js":
/*!*********************************!*\
  !*** ./src/controls/svgIcon.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesktopIcon: () => (/* binding */ DesktopIcon),
/* harmony export */   MobileIcon: () => (/* binding */ MobileIcon),
/* harmony export */   ResetIcon: () => (/* binding */ ResetIcon),
/* harmony export */   SpacingControlActiveIcon: () => (/* binding */ SpacingControlActiveIcon),
/* harmony export */   SpacingControlIcon: () => (/* binding */ SpacingControlIcon),
/* harmony export */   TabletIcon: () => (/* binding */ TabletIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Reset Icon.
const ResetIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 12,
  height: 20,
  fill: "none"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fillRule: "evenodd",
  d: "M2.335 6.69A4.965 4.965 0 1 1 1.07 10h-1a5.965 5.965 0 1 0 1.556-4.018L.57 4.926v2.732h2.733l-.968-.968Z",
  clipRule: "evenodd"
}));

// Desktop Icon.
const DesktopIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 14,
  height: 12,
  fill: "none"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12.714 0H1.286C.655 0 .143.504.143 1.125v7.5c0 .621.512 1.125 1.143 1.125h4.571l-.38 1.125H3.761a.566.566 0 0 0-.571.563c0 .311.254.562.571.562h6.476c.317 0 .572-.25.572-.563a.566.566 0 0 0-.572-.562H8.524l-.38-1.125h4.57c.631 0 1.143-.504 1.143-1.125v-7.5C13.857.504 13.346 0 12.714 0Zm-.38 8.25H1.667V1.5h10.667v6.75Z"
}));

// Tablet device Icon.
const TabletIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 12,
  height: 12,
  fill: "none"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M9.428 0H2.571C1.623 0 .857.67.857 1.5v9c0 .83.766 1.5 1.714 1.5h6.857c.949 0 1.715-.67 1.715-1.5v-9c0-.83-.766-1.5-1.715-1.5ZM7.143 11H4.857v-.5h2.286v.5Zm3-1.5H1.857v-8h8.286v8Z"
}));

// Tablet device Icon.
const MobileIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 8,
  height: 12,
  fill: "none"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6.286 0H1.714C1.082 0 .571.67.571 1.5v9c0 .83.51 1.5 1.143 1.5h4.572c.632 0 1.142-.67 1.142-1.5v-9c0-.83-.51-1.5-1.142-1.5ZM4.762 11H3.238v-.5h1.524v.5Zm2-1.5H1.238v-8h5.524v8Z"
}));

// Space Control Icon.
const SpacingControlIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  fill: "none"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#2F2F2F",
  d: "M8.4 16.7h.7l-1.6 3.5.9.4 3.9-8.5H15v-1.5h-2l1.3-2.8h1.3c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2H15l1.4-3.2-.9-.4-5.7 12.5H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V6.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.4 5.2 5.2 5.2Z"
}));
// Space Control Icon.
const SpacingControlActiveIcon = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  fill: "none"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#fff",
  d: "M8.4 16.8H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V6.4H8.4c-2.8 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2Zm10.9-5.2c0 2-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7Zm-4.6-.9H9.4v1.5h5.3v-1.5Z"
}));

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


const dynamicCss = (attributes, deviceType = 'Desktop') => {
  const {
    uniqueID,
    productTitleSize,
    productContentAlign,
    productsBGColor,
    productsContentPadding,
    productTitleColor,
    productPriceSize,
    productPriceColor,
    productRatingStarSize,
    productRatingStarColor,
    addToCartFontSize,
    addToCartBGColor,
    addToCartTextColor,
    mrsProductImageBorderRadius,
    addToCartWidth,
    saleBadgeAlign,
    productSpacing,
    saleBadgeBorderWidth,
    saleBadgeBorderStyle,
    saleBadgeBorderColor,
    saleBadgeBorderRadius,
    saleBadgeTextColor,
    saleBadgeBGColor,
    productsGridMargin,
    productsGridPadding,
    productsBorderWidth,
    productsBorderStyle,
    productsBorderColor,
    productsBorderRadius,
    productsBorderRadiusHover,
    productsBorderWidthHover,
    productsBorderColorHover,
    productsBorderStyleHover,
    productsBorderTransition
  } = attributes;
  const unit = (attributes, deviceType) => {
    if ('object' !== typeof attributes.unit) {
      return attributes.unit;
    } else {
      return attributes.unit[deviceType];
    }
  };
  const flexTextAlign = value => {
    if (value == 'flex-start') {
      return 'left';
    } else if (value === 'flex-end') {
      return 'right';
    } else {
      return 'center';
    }
  };
  let desktopCss = {
    [`.mrs-block-mrs-products-grid .mrs-product-${uniqueID}`]: {
      'display': 'block',
      'box-sizing': 'border-box'
    },
    [`.mrs-product-${uniqueID} .mrs-products-grid-wrapper`]: {
      'margin': (0,_controls_controls__WEBPACK_IMPORTED_MODULE_0__.cssDataCheck)(productsGridMargin.device.Desktop, unit(productsGridMargin, 'Desktop')),
      'padding': (0,_controls_controls__WEBPACK_IMPORTED_MODULE_0__.cssDataCheck)(productsGridPadding.device.Desktop, unit(productsGridPadding, 'Desktop')),
      'border-style': productsBorderStyle,
      'border-color': productsBorderColor,
      'border-width': (0,_controls_controls__WEBPACK_IMPORTED_MODULE_0__.cssDataCheck)(productsBorderWidth.device.Desktop, unit(productsBorderWidth, 'Desktop')),
      'border-radius': (0,_controls_controls__WEBPACK_IMPORTED_MODULE_0__.cssDataCheck)(productsBorderRadius.device.Desktop, unit(productsBorderRadius, 'Desktop')),
      'transition': `all ${productsBorderTransition}s ease-out`
    },
    [`.mrs-product-${uniqueID} .mrs-products-grid-wrapper:hover`]: {
      'border-style': productsBorderStyleHover,
      'border-color': productsBorderColorHover,
      'border-width': (0,_controls_controls__WEBPACK_IMPORTED_MODULE_0__.cssDataCheck)(productsBorderWidthHover.device.Desktop, unit(productsBorderWidth, 'Desktop')),
      'border-radius': (0,_controls_controls__WEBPACK_IMPORTED_MODULE_0__.cssDataCheck)(productsBorderRadiusHover.device.Desktop, unit(productsBorderRadius, 'Desktop'))
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
      'width': `calc(100% / 2 - ${productSpacing * 2}px)`,
      'margin': '5px ' + productSpacing + 'px'
    },
    [`.mrs-product-${uniqueID} .mrs-product-col.has-3-col`]: {
      'width': `calc(100% / 3 - ${productSpacing * 2}px)`,
      'margin': '5px ' + productSpacing + 'px'
    },
    [`.mrs-product-${uniqueID} .mrs-product-col.has-4-col`]: {
      'width': `calc(100% / 4 - ${productSpacing * 2}px)`,
      'margin': '5px ' + productSpacing + 'px'
    },
    [`.mrs-product-${uniqueID} .mrs-product-col.has-5-col`]: {
      'width': `calc(100% / 5 - ${productSpacing * 2}px)`,
      'margin': '5px ' + productSpacing + 'px'
    },
    [`.mrs-product-${uniqueID} .mrs-product-col.has-6-col`]: {
      'width': `calc(100% / 6 - ${productSpacing * 2}px)`,
      'margin': '5px ' + productSpacing + 'px'
    },
    [`.mrs-product-${uniqueID} .mrs-product .mrs-product-img-wrapper`]: {
      'position': 'relative',
      'overflow': 'hidden'
    },
    [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img img`]: {
      'width': '100%',
      'height': 'auto'
    },
    [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img-overlay.simple`]: {
      'position': 'absolute',
      'top': '5px',
      'right': `${saleBadgeAlign === 'Right' ? '0px' : 'auto'}`,
      'left': `${saleBadgeAlign === 'Left' ? '0px' : 'auto'}`,
      'color': saleBadgeTextColor,
      'background': saleBadgeBGColor,
      'padding': '5px 10px',
      'border-top': `${saleBadgeBorderWidth?.top} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
      'border-right': `${saleBadgeBorderWidth?.right} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
      'border-bottom': `${saleBadgeBorderWidth?.bottom} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
      'border-left': `${saleBadgeBorderWidth?.left} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
      'border-top-left-radius': saleBadgeBorderRadius.top,
      'border-top-right-radius': saleBadgeBorderRadius.right,
      'border-bottom-right-radius': saleBadgeBorderRadius.bottom,
      'border-bottom-left-radius': saleBadgeBorderRadius.left,
      'font-size': '14px'
    },
    [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img-overlay.rTopLeft`]: {
      'position': 'absolute',
      'inset': '0 auto auto 0',
      'transform-origin': '100% 0',
      'transform': 'translate(-29.3%) rotate(-45deg)',
      'box-shadow': `0 0 0 999px ${saleBadgeBGColor}`,
      'clip-path': 'inset(0 -100%)',
      'color': saleBadgeTextColor,
      'background': saleBadgeBGColor,
      'border-top': `${saleBadgeBorderWidth?.top} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
      'border-right': `${saleBadgeBorderWidth?.right} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
      'border-bottom': `${saleBadgeBorderWidth?.bottom} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
      'border-left': `${saleBadgeBorderWidth?.left} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
      'border-top-left-radius': saleBadgeBorderRadius.top,
      'border-top-right-radius': saleBadgeBorderRadius.right,
      'border-bottom-right-radius': saleBadgeBorderRadius.bottom,
      'border-bottom-left-radius': saleBadgeBorderRadius.left,
      'font-size': '14px'
    },
    [`.mrs-product-${uniqueID} .mrs-product-img-wrapper .mrs-product-img-overlay.rTopRight`]: {
      'position': 'absolute',
      'inset': '0 0 auto auto',
      'transform-origin': '0 100%',
      'transform': 'translate(-29.3%) rotate(45deg)',
      'box-shadow': '0 0 0 999px #d8613c',
      'clip-path': 'inset(0 -100%)',
      'color': saleBadgeTextColor,
      'background': saleBadgeBGColor,
      'border-top': `${saleBadgeBorderWidth?.top} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
      'border-right': `${saleBadgeBorderWidth?.right} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
      'border-bottom': `${saleBadgeBorderWidth?.bottom} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
      'border-left': `${saleBadgeBorderWidth?.left} ${saleBadgeBorderStyle} ${saleBadgeBorderColor}`,
      'border-top-left-radius': saleBadgeBorderRadius.top,
      'border-top-right-radius': saleBadgeBorderRadius.right,
      'border-bottom-right-radius': saleBadgeBorderRadius.bottom,
      'border-bottom-left-radius': saleBadgeBorderRadius.left,
      'font-size': '14px'
    },
    [`.mrs-product-${uniqueID} .mrs-product .mrs-product-content-wrapper`]: {
      'display': 'flex',
      'flex-direction': 'column',
      'justify-content': 'center',
      'align-items': productContentAlign,
      'background': productsBGColor,
      'padding': `${productsContentPadding.top} ${productsContentPadding.right} ${productsContentPadding.bottom} ${productsContentPadding.left}`
    },
    [`.mrs-product-${uniqueID} .mrs-product-content-wrapper .mrs-product-title h4`]: {
      'margin': '10px',
      'font-size': productTitleSize + 'px',
      'font-weight': '700',
      'color': productTitleColor,
      'text-align': flexTextAlign(productContentAlign)
    },
    [`.mrs-product-${uniqueID} .mrs-product-content-wrapper .mrs-product-price`]: {
      'font-size': productPriceSize + 'px',
      'color': productPriceColor
    },
    [`.mrs-product-${uniqueID} .mrs-products-grid-wrapper .mrs-products-grid-content`]: {
      'margin-left': '-' + productSpacing + 'px',
      'margin-right': '-' + productSpacing + 'px'
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
    showAddToCart,
    saleBadgeShow,
    saleBadgeText,
    customAddToCartText,
    addToCartText,
    addToCartTextGroup,
    hideOutOfStock,
    hideProductEmptyRatingStar,
    mrsProductSaleBadgeStyle
  } = attributes;
  const [firstTLoad, setFirstTLoad] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [mrsPro, setMrsPro] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);

  // console.log(mrsProductsGrid.products);

  const selectProduct = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    return select('core').getEntityRecords('postType', 'product', {
      per_page: postsPerPage,
      _embed: true,
      orderby: orderBy,
      order
    });
  }, [postsPerPage, orderBy, order]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (selectProduct) {
      const copyProduct = selectProduct;
      copyProduct?.map(item => {
        mrsProductsGrid?.products?.map(v => {
          if (parseInt(v.id) === parseInt(item.id)) {
            item.stock = v.price ? 'instock' : 'out of stock';
          }
        });
      });
      if (hideOutOfStock) {
        const filterPro = copyProduct?.filter(v => v.stock === 'instock');
        setMrsPro(filterPro);
      } else {
        setMrsPro(copyProduct);
      }
    }
  }, [selectProduct, hideOutOfStock]);
  const starRating = ratingCount => {
    let rating = parseInt(ratingCount);
    let starRatings = [];
    for (let i = 0; i < rating; i++) {
      starRatings.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        icon: 'star-filled'
      }));
    }
    for (let i = rating; i < 5; i++) {
      starRatings.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        icon: 'star-empty'
      }));
    }
    return starRatings;
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
  }, mrsPro && mrsPro.length > 0 && mrsPro.map((item, i) => {
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
          key: i
        }, saleBadgeShow && saleBadgeText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: `mrs-product-img-overlay ${mrsProductSaleBadgeStyle}`
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, saleBadgeText)));
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrs-product-content-wrapper"
    }, productTitleShow && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrs-product-title"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, item?.title?.rendered)), showProductRatingStar && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mrs-product-ratting"
    }, mrsProductsGrid?.products?.map((v, i) => {
      if (parseInt(v.id) === parseInt(item.id)) {
        if (hideProductEmptyRatingStar && v.rating == 0) {
          return '';
        }
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          key: i
        }, starRating(v.rating).map((v, i) => {
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
            key: i
          }, v);
        }));
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
        }, customAddToCartText ? v.groupProduct ? addToCartTextGroup : addToCartText : v.groupProduct ? 'View Products' : 'Add To Cart'));
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

/***/ "./src/components/responsive/editor.scss":
/*!***********************************************!*\
  !*** ./src/components/responsive/editor.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/spacing/editor.scss":
/*!********************************************!*\
  !*** ./src/components/spacing/editor.scss ***!
  \********************************************/
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

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"mrs-block/mrs-products-grid","version":"0.1.0","title":"MRS Products Grid","category":"text","icon":"cart","description":"A simple Gutenberg form widget.","example":{},"supports":{"html":false,"align":["wide","full"]},"attributes":{"uniqueID":{"type":"string","default":""},"frontendCss":{"type":"string","default":""},"postsPerPage":{"type":"number","default":100},"orderBy":{"type":"string","default":"title"},"order":{"type":"string","default":"desc"},"productsColumn":{"type":"number","default":3},"mrsProductImageBorderRadiusSet":{"type":"boolean","default":false},"mrsProductImageBorderRadius":{"type":"object","default":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"productTitleShow":{"type":"boolean","default":true},"productTitleColor":{"type":"string","default":"#111111"},"productTitleSize":{"type":"number","default":22},"showProductRatingStar":{"type":"boolean","default":true},"hideProductEmptyRatingStar":{"type":"boolean","default":true},"productRatingStarSize":{"type":"number","default":16},"productRatingStarColor":{"type":"string","default":"#111111"},"productPriceShow":{"type":"boolean","default":true},"productPriceSize":{"type":"number","default":18},"productPriceColor":{"type":"string","default":"#111111"},"showAddToCart":{"type":"boolean","default":true},"customAddToCartText":{"type":"boolean","default":false},"addToCartText":{"type":"string","default":"Add To Cart"},"addToCartTextGroup":{"type":"string","default":"View Products"},"addToCartTextVariable":{"type":"string","default":"Select Options"},"addToCartTextExternal":{"type":"string","default":"Buy Now"},"addToCartTextDefault":{"type":"string","default":"Read More"},"addToCartBGColor":{"type":"string","default":"#111111"},"addToCartTextColor":{"type":"string","default":"#fff"},"addToCartFontSize":{"type":"number","default":16},"addToCartWidth":{"type":"string","default":"75%"},"saleBadgeShow":{"type":"boolean","default":true},"saleBadgeAlign":{"type":"string","default":"Left"},"saleBadgeText":{"type":"string","default":"Sale"},"saleBadgeBGColor":{"type":"string","default":"#ffffff"},"saleBadgeTextColor":{"type":"string","default":"#111111"},"saleBadgeBorderStyle":{"type":"string","default":"solid"},"saleBadgeBorderColor":{"type":"string","default":"#111111"},"saleBadgeBorderWidth":{"type":"object","default":{"top":"1px","right":"1px","bottom":"1px","left":"1px"}},"saleBadgeBorderRadius":{"type":"object","default":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"productContentAlign":{"type":"string","default":"Center"},"productsBGColor":{"type":"string","default":"#ffffff"},"productsContentPadding":{"type":"object","default":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"productSpacing":{"type":"number","default":10},"productsGridMargin":{"type":"object","default":{"device":{"Desktop":{"top":"0","right":"0","bottom":"0","left":"0"},"Tablet":{"top":"","right":"","bottom":"","left":""},"Mobile":{"top":"","right":"","bottom":"","left":""}},"unit":{"Desktop":"px","Tablet":"px","Mobile":"px"},"allChange":false}},"productsGridPadding":{"type":"object","default":{"device":{"Desktop":{"top":"0","right":"0","bottom":"0","left":"0"},"Tablet":{"top":"","right":"","bottom":"","left":""},"Mobile":{"top":"","right":"","bottom":"","left":""}},"unit":{"Desktop":"px","Tablet":"px","Mobile":"px"},"allChange":false}},"hideOutOfStock":{"type":"boolean","default":false},"productsBorderStyle":{"type":"string","default":"none"},"productsBorderColor":{"type":"string","default":"#111111"},"productsBorderWidth":{"type":"object","default":{"device":{"Desktop":{"top":"0","right":"0","bottom":"0","left":"0"},"Tablet":{"top":"0","right":"0","bottom":"0","left":"0"},"Mobile":{"top":"0","right":"0","bottom":"0","left":"0"}},"unit":{"Desktop":"px","Tablet":"px","Mobile":"px"},"allChange":true}},"productsBorderRadius":{"type":"object","default":{"device":{"Desktop":{"top":"0","right":"0","bottom":"0","left":"0"},"Tablet":{"top":"0","right":"0","bottom":"0","left":"0"},"Mobile":{"top":"0","right":"0","bottom":"0","left":"0"}},"unit":{"Desktop":"px","Tablet":"px","Mobile":"px"},"allChange":true}},"productsBorderStyleHover":{"type":"string","default":"none"},"productsBorderColorHover":{"type":"string","default":"#111111"},"productsBorderWidthHover":{"type":"object","default":{"device":{"Desktop":{"top":"0","right":"0","bottom":"0","left":"0"},"Tablet":{"top":"0","right":"0","bottom":"0","left":"0"},"Mobile":{"top":"0","right":"0","bottom":"0","left":"0"}},"unit":{"Desktop":"px","Tablet":"px","Mobile":"px"},"allChange":true}},"productsBorderRadiusHover":{"type":"object","default":{"device":{"Desktop":{"top":"0","right":"0","bottom":"0","left":"0"},"Tablet":{"top":"0","right":"0","bottom":"0","left":"0"},"Mobile":{"top":"0","right":"0","bottom":"0","left":"0"}},"unit":{"Desktop":"px","Tablet":"px","Mobile":"px"},"allChange":true}},"productsBorderTransition":{"type":"number","default":0.3},"mrsProductSaleBadgeStyle":{"type":"string","default":"sTopLeft"}},"textdomain":"mrs-products-grid","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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