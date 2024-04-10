"use strict";
(self["webpackChunkngx_charts_web_app"] = self["webpackChunkngx_charts_web_app"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _documentation_donut_gauge_doc_donut_gauge_doc_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentation/donut-gauge-doc/donut-gauge-doc.component */ 7796);


class AppComponent {
  constructor() {
    this.title = 'app';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-donut-gauge-doc");
      }
    },
    dependencies: [_documentation_donut_gauge_doc_donut_gauge_doc_component__WEBPACK_IMPORTED_MODULE_0__.DonutGaugeDocComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var ngx_charts_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-charts-web */ 3944);
/* harmony import */ var _documentation_donut_gauge_doc_donut_gauge_doc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documentation/donut-gauge-doc/donut-gauge-doc.component */ 7796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, ngx_charts_web__WEBPACK_IMPORTED_MODULE_4__.NgxChartsWebModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _documentation_donut_gauge_doc_donut_gauge_doc_component__WEBPACK_IMPORTED_MODULE_1__.DonutGaugeDocComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, ngx_charts_web__WEBPACK_IMPORTED_MODULE_4__.NgxChartsWebModule]
  });
})();

/***/ }),

/***/ 7796:
/*!****************************************************************************!*\
  !*** ./src/app/documentation/donut-gauge-doc/donut-gauge-doc.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonutGaugeDocComponent": () => (/* binding */ DonutGaugeDocComponent)
/* harmony export */ });
/* harmony import */ var ngx_charts_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-charts-web */ 3944);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class DonutGaugeDocComponent {
  constructor() {
    this.chartValue = 0;
    this.chartOverride1 = {
      strokeWidth: ngx_charts_web__WEBPACK_IMPORTED_MODULE_0__.DonutWidth.Medium,
      gradientColors: ['#c93cc2']
    };
    this.chartOverride2 = {
      strokeWidth: ngx_charts_web__WEBPACK_IMPORTED_MODULE_0__.DonutWidth.Thick,
      gradientColors: ['#9d11af', '#309aad', '#cef995'],
      baseColor: '#dae5c9',
      textColor: '#309aad',
      gradientDirection: ngx_charts_web__WEBPACK_IMPORTED_MODULE_0__.DonutGradientOrigin.BottomLeft,
      label: 'testLabel',
      title: 'title'
    };
    this.chartOverride3 = {
      strokeWidth: ngx_charts_web__WEBPACK_IMPORTED_MODULE_0__.DonutWidth.Medium,
      gradientColors: ['#309aad', '#cef995', '#9d11af'],
      baseColor: '#dae5c9',
      textColor: '#309aad',
      gradientDirection: ngx_charts_web__WEBPACK_IMPORTED_MODULE_0__.DonutGradientOrigin.TopRight,
      label: 'otherLabel'
    };
    this.chartOverride4 = this.chartOverride2;
  }
  ngOnInit() {
    setTimeout(() => {
      this.chartValue = 0.75;
    }, 200);
  }
  changeValue() {
    this.chartValue = Math.random();
  }
  changeConfig() {
    this.chartOverride4 = this.chartOverride4 === this.chartOverride2 ? this.chartOverride3 : this.chartOverride2;
  }
  static #_ = this.ɵfac = function DonutGaugeDocComponent_Factory(t) {
    return new (t || DonutGaugeDocComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DonutGaugeDocComponent,
    selectors: [["app-donut-gauge-doc"]],
    decls: 124,
    vars: 9,
    consts: [[1, "language-markup"], [1, "button-primary--large", 3, "click"], [1, "donut-gauge-demo"], [1, "donut-gauge-demo__small"], [3, "value"], [1, "donut-gauge-demo__med"], [1, "donut-gauge-demo__large"], [3, "value", "config"], [1, "button-secondary--small", 3, "click"], [1, "language-javascript"]],
    template: function DonutGaugeDocComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Donut Gauge Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section")(3, "pre")(4, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n    <ngx-donut-gauge [value]=\"value\" [config]=\"config\"></ngx-donut-gauge>\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table")(7, "tr")(8, "td")(9, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "A number between 0 and 1 inclusive that will be displayed as a percentage in the chart.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr")(14, "td")(15, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "config");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Customization configuration for the chart. See example further down.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DonutGaugeDocComponent_Template_button_click_19_listener() {
          return ctx.changeValue();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "change value");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "section")(22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Default Styles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 2)(25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "ngx-donut-gauge", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "ngx-donut-gauge", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ngx-donut-gauge", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "section")(32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Overriding configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 2)(35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "ngx-donut-gauge", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "ngx-donut-gauge", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "section")(40, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Dynamically Swapping Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DonutGaugeDocComponent_Template_button_click_42_listener() {
          return ctx.changeConfig();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Swap");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 2)(45, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "ngx-donut-gauge", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "section")(48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Sample Custom Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "pre")(51, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\n    // all fields are optional to override\n    // the gauge uses defaults if the config field is not overridden\n    config = {\n      strokeWidth: DonutWidth.Thick,\n      gradientDirection: DonutGradientOrigin.BottomLeft,\n      gradientColors: ['#9d11af', '#309aad', '#cef995'],\n      baseColor: '#dae5c9',\n      textColor: '#309aad',\n      label: 'testLabel',\n      title: 'title'\n    };\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " To get constants that ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "strokeWidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "gradientDirection");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " use, please import them from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "donut-gauge.constants.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Custom Parameters:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "table")(67, "tr")(68, "td")(69, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "strokeWidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Width of the stroke. See ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "donut-gauge.constants.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " for possible values. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "tr")(77, "td")(78, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "gradientDirection");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "The starting direction of the linear gradient for the colors used in the gauge. See ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "donut-gauge.constants.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " for possible values.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "tr")(86, "td")(87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "gradientColors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Takes array of colors in hexadecimal strings prefixed by with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, ". The first color in the array is the color at the source of the gradient and the rest goes in order. For a solid color, supply only 1 color in the array.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "tr")(95, "td")(96, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "baseColor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "The color of the gauge base. Is grey by default. Takes a hexadecimal string prefixed with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "tr")(104, "td")(105, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "textColor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "The color of the percentage value and label in the middle. Is black by default. Takes a hexadecimal string prefixed with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "tr")(113, "td")(114, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Optional text label under the percentage.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "tr")(119, "td")(120, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "SVG Chart Title for accessibility purposes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.chartValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.chartValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.chartValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.chartValue)("config", ctx.chartOverride1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.chartValue)("config", ctx.chartOverride2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.chartValue)("config", ctx.chartOverride4);
      }
    },
    dependencies: [ngx_charts_web__WEBPACK_IMPORTED_MODULE_0__.DonutGaugeComponent],
    styles: ["button[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\nsection[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\nh5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\ntd[_ngcontent-%COMP%]:first-child {\n  padding-right: 30px;\n}\n\n.donut-gauge-demo[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n  align-items: baseline;\n  flex-wrap: wrap;\n}\n.donut-gauge-demo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.donut-gauge-demo__small[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n\n.donut-gauge-demo__med[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n}\n\n.donut-gauge-demo__large[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZG9jdW1lbnRhdGlvbi9kb251dC1nYXVnZS1kb2MvZG9udXQtZ2F1Z2UtZG9jLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtBQUVKO0FBREk7RUFDSSxtQkFBQTtBQUdSOztBQUNBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBRUo7QUFESTtFQUNJLGtCQUFBO0FBR1I7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUdKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFHSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBR0oiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuc2VjdGlvbntcbiAgICBtYXJnaW46IDIwcHggMDtcbn1cbmg0e1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmg1e1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbnRke1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICB9XG59XG5cbi5kb251dC1nYXVnZS1kZW1ve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgICYgPiBkaXZ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG59XG4uZG9udXQtZ2F1Z2UtZGVtb19fc21hbGx7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbi5kb251dC1nYXVnZS1kZW1vX19tZWR7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbi5kb251dC1nYXVnZS1kZW1vX19sYXJnZXtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 3944:
/*!***********************************************************************!*\
  !*** ./dist/ngx-charts-web/fesm2020/atom-platform-ngx-charts-web.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DonutGaugeComponent": () => (/* binding */ DonutGaugeComponent),
/* harmony export */   "DonutGradientOrigin": () => (/* binding */ DonutGradientOrigin),
/* harmony export */   "DonutWidth": () => (/* binding */ DonutWidth),
/* harmony export */   "NgxChartsWebModule": () => (/* binding */ NgxChartsWebModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);




function DonutGaugeComponent__svg_stop_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "stop");
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("offset", item_r2.percent)("stop-color", item_r2.color);
  }
}
function DonutGaugeComponent__svg_text_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r1.fontStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.label, " ");
  }
}
const DonutWidth = {
  Thin: 0,
  Medium: 1,
  Thick: 2
};
const DonutGradientOrigin = {
  Top: 0,
  Left: 1,
  Bottom: 2,
  Right: 3,
  TopLeft: 4,
  TopRight: 5,
  BottomLeft: 6,
  BottomRight: 7
};
class DonutGaugeComponent {
  constructor() {
    this.chartWidths = [0.03, 0.06, 0.09];
    this.gradientDirections = [{
      x1: '100%',
      x2: '0%',
      y1: '50%',
      y2: '50%'
    }, {
      x1: '50%',
      x2: '50%',
      y1: '0%',
      y2: '100%'
    }, {
      x1: '0%',
      x2: '100%',
      y1: '50%',
      y2: '50%'
    }, {
      x1: '50%',
      x2: '50%',
      y1: '100%',
      y2: '0%'
    }, {
      x1: '100%',
      x2: '0%',
      y1: '0%',
      y2: '100%'
    }, {
      x1: '100%',
      x2: '0%',
      y1: '100%',
      y2: '0%'
    }, {
      x1: '0%',
      x2: '100%',
      y1: '0%',
      y2: '100%'
    }, {
      x1: '0%',
      x2: '100%',
      y1: '100%',
      y2: '0%'
    } // BottomRight
    ];

    this.defaultConfig = {
      strokeWidth: DonutWidth.Thin,
      gradientColors: ['#1951c1', '#c90cb3'],
      baseColor: '#B4B4B4',
      textColor: '#000000',
      gradientDirection: DonutGradientOrigin.TopLeft,
      title: 'Add your accessible title here for your Donut Chart'
    };
    this.config = {};
    this.value = 0;
    this.chartConfig = this.defaultConfig;
    this.gradientId = 'gradient-' + this.create_UUID();
    this.baseGaugeStyle = {
      stroke: `url(${location.href}#${this.gradientId})`
    };
    this.onConfigUpdate();
  }
  create_UUID() {
    let dt = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
    return uuid;
  }
  ngOnChanges(changes) {
    if (changes.config) {
      this.onConfigUpdate();
    }
    if (changes.value) {
      this.onValueUpdate();
    }
  }
  calculateValues(config) {
    const strokeWidth = this.chartWidths[config.strokeWidth];
    const circleRadius = .5 - strokeWidth / 2;
    const dashArrayMax = 2 * Math.PI * circleRadius;
    return {
      strokeWidth,
      circleRadius,
      dashArrayMax
    };
  }
  onConfigUpdate() {
    this.chartConfig = {
      ...this.defaultConfig,
      ...this.config
    };
    this.calculatedValues = this.calculateValues(this.chartConfig);
    this.gradient = this.getGradientPercentages(this.chartConfig.gradientColors);
    this.baseCircleStyles = this.getBaseCircleStyles(this.chartConfig.baseColor, this.calculatedValues.strokeWidth);
    this.circleRadius = this.toPercent(this.calculatedValues.circleRadius);
    this.fontStyles = this.getFontStyles(this.chartConfig.textColor);
    this.gaugeStyles = this.updateGaugeStyles(this.gaugeStyles, this.calculatedValues);
    this.gradientSource = this.gradientDirections[this.chartConfig.gradientDirection];
    this.label = this.chartConfig.label;
    this.title = this.chartConfig.title;
  }
  onValueUpdate() {
    this.gaugeStyles = this.updateGaugeStyles(this.gaugeStyles, this.calculatedValues);
  }
  getGradientPercentages(colors) {
    return colors.map((color, index, arr) => ({
      percent: this.toPercent(index ? index / (arr.length - 1) : 0),
      color: color
    }));
  }
  getBaseCircleStyles(color, widthProportion) {
    return {
      'stroke': color,
      'stroke-width': this.toPercent(widthProportion)
    };
  }
  getFontStyles(color) {
    return {
      'fill': color
    };
  }
  updateGaugeStyles(oldStyle = this.baseGaugeStyle, calculatedValues) {
    const gaugeStyle = {
      ...oldStyle
    };
    const dashArrayMax = calculatedValues.dashArrayMax;
    const dashArrayMaxPercent = this.toPercent(dashArrayMax);
    const gaugeLength = this.toPercent(this.value * dashArrayMax);
    gaugeStyle['stroke-width'] = this.toPercent(calculatedValues.strokeWidth);
    gaugeStyle['stroke-dasharray'] = `${gaugeLength} ${dashArrayMaxPercent}`;
    return gaugeStyle;
  }
  toPercent(num) {
    return `${num * 100}%`;
  }
}
DonutGaugeComponent.ɵfac = function DonutGaugeComponent_Factory(t) {
  return new (t || DonutGaugeComponent)();
};
DonutGaugeComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DonutGaugeComponent,
  selectors: [["ngx-donut-gauge"]],
  inputs: {
    config: "config",
    value: "value"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 13,
  vars: 18,
  consts: [[1, "donut-gauge"], ["width", "100px", "height", "100px", "viewBox", "0 0 100 100", 1, "donut-gauge__graphic"], [4, "ngFor", "ngForOf"], ["cx", "50%", "cy", "50%", 1, "donut-gauge__background", 3, "ngStyle"], ["transform", "rotate(-90,50,50)", "cx", "50%", "cy", "50%", 1, "donut-gauge__gauge", 3, "ngStyle"], ["text-anchor", "middle", "x", "50", "font-size", "23px", 1, "donut-gauge__value", 3, "ngStyle"], ["class", "donut-gauge__label", "text-anchor", "middle", "x", "50", "y", "68", "font-size", "12px", 3, "ngStyle", 4, "ngIf"], ["text-anchor", "middle", "x", "50", "y", "68", "font-size", "12px", 1, "donut-gauge__label", 3, "ngStyle"]],
  template: function DonutGaugeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1)(2, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "defs")(5, "linearGradient");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DonutGaugeComponent__svg_stop_6_Template, 1, 2, "stop", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "circle", 3)(8, "circle", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "text", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "percent");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DonutGaugeComponent__svg_text_12_Template, 2, 2, "text", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.gradientId)("x1", ctx.gradientSource.x1)("y1", ctx.gradientSource.y1)("x2", ctx.gradientSource.x2)("y2", ctx.gradientSource.y2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.gradient);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.baseCircleStyles);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx.circleRadius);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.gaugeStyles);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx.circleRadius);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.fontStyles);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("y", ctx.label ? 54 : 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 15, ctx.value, ".0-0"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.PercentPipe],
  styles: [".donut-gauge[_ngcontent-%COMP%]{height:100%;width:100%}.donut-gauge__graphic[_ngcontent-%COMP%]{width:100%;height:100%}.donut-gauge__background[_ngcontent-%COMP%]{fill:transparent}.donut-gauge__gauge[_ngcontent-%COMP%]{fill:transparent;transition:stroke-dasharray .3s ease-in-out,stroke .3s ease-in-out}.donut-gauge__value[_ngcontent-%COMP%]{font-weight:700}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonutGaugeComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-donut-gauge',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<div class='donut-gauge'>\n  <svg class='donut-gauge__graphic' width='100px' height='100px' viewBox='0 0 100 100'>\n    <title>{{title}}</title>\n    <defs>\n      <linearGradient [attr.id]=\"gradientId\" \n        [attr.x1]=\"gradientSource.x1\" [attr.y1]=\"gradientSource.y1\"\n        [attr.x2]=\"gradientSource.x2\" [attr.y2]=\"gradientSource.y2\">\n        <stop *ngFor=\"let item of gradient\" [attr.offset]=\"item.percent\" [attr.stop-color]=\"item.color\" />\n      </linearGradient>\n    </defs>\n\n    <circle class='donut-gauge__background' \n      [attr.r]=\"circleRadius\" \n      cx=\"50%\" \n      cy=\"50%\" \n      [ngStyle]=\"baseCircleStyles\" />\n    <circle class='donut-gauge__gauge' \n      transform=\"rotate(-90,50,50)\" \n      [attr.r]=\"circleRadius\" \n      cx=\"50%\" \n      cy=\"50%\" \n      [ngStyle]=\"gaugeStyles\" />\n    \n      <text \n      class='donut-gauge__value' \n      text-anchor=\"middle\" \n      x=\"50\" \n      attr.y=\"{{label? 54 : 59 }}\" \n      font-size=\"23px\"\n      [ngStyle]=\"fontStyles\">\n      {{value |percent: '.0-0'}}\n    </text>\n    <text *ngIf='label'\n      class='donut-gauge__label' \n      text-anchor=\"middle\" \n      x=\"50\" \n      y=\"68\" \n      font-size=\"12px\"\n      [ngStyle]=\"fontStyles\">\n      {{label}}\n    </text>\n  </svg>\n</div>\n",
      styles: [".donut-gauge{height:100%;width:100%}.donut-gauge__graphic{width:100%;height:100%}.donut-gauge__background{fill:transparent}.donut-gauge__gauge{fill:transparent;transition:stroke-dasharray .3s ease-in-out,stroke .3s ease-in-out}.donut-gauge__value{font-weight:700}\n"]
    }]
  }], function () {
    return [];
  }, {
    config: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgxChartsWebModule {}
NgxChartsWebModule.ɵfac = function NgxChartsWebModule_Factory(t) {
  return new (t || NgxChartsWebModule)();
};
NgxChartsWebModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxChartsWebModule
});
NgxChartsWebModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxChartsWebModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      declarations: [DonutGaugeComponent],
      exports: [DonutGaugeComponent]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-charts-web
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map