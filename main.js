(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\A681259\Documents\Proyectos\resizable-bar\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _resizable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resizable.directive */ "ov8E");



class AppComponent {
    constructor() {
        this.height = 120;
        this.minHeight = 24;
        this.maxHeight = 700;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 3, consts: [[1, "error-console"], ["resizable", "", 3, "initialHeight", "minHeight", "maxHeight"], [1, "error-console__header"], [1, "error-console__container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resizable-BAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initialHeight", ctx.height)("minHeight", ctx.minHeight)("maxHeight", ctx.maxHeight);
    } }, directives: [_resizable_directive__WEBPACK_IMPORTED_MODULE_1__["ResizableDirective"]], styles: ["@charset \"UTF-8\";\n.error-console[_ngcontent-%COMP%] {\n  z-index: 998;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: calc(100vw - 1.3rem);\n  background-color: #f7f7f7;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.error-console__header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 24px;\n  display: flex;\n  justify-content: flex-end;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.error-console__header-message[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0 16px;\n  opacity: 1;\n}\n.error-console__header-message[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: inline;\n}\n.error-console__header-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]::after, .error-console__header-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]::before {\n  content: \"\u00A0\";\n}\n.error-console__header-message[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.error-console__header-message--hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.error-console__header-button[_ngcontent-%COMP%] {\n  border: none;\n  height: 24px;\n}\n.error-console__container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n.rg-right[_ngcontent-%COMP%], .rg-left[_ngcontent-%COMP%], .rg-top[_ngcontent-%COMP%], .rg-bottom[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: getColorTheme(light);\n  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.08), 0 -2px 6px rgba(0, 0, 0, 0.12);\n  border: 1px solid #ddd;\n  overflow: hidden;\n}\n.rg-right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .rg-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .rg-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .rg-bottom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 1px solid #828282;\n}\n.rg-top[_ngcontent-%COMP%] {\n  top: 0;\n  margin-top: -7px;\n}\n.rg-top[_ngcontent-%COMP%], .rg-bottom[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10px;\n  left: 0;\n  cursor: row-resize;\n}\n.rg-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .rg-bottom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 4px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-width: 1px 0;\n}\n.rg-right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .rg-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-width: 0 1px;\n  top: 50%;\n  margin-top: -10px;\n  margin: -10px 0 0 3.5px;\n  height: 20px;\n  width: 4px;\n}\n.rg-right[_ngcontent-%COMP%] {\n  cursor: col-resize;\n  height: 100%;\n  right: 0;\n  top: 0;\n  margin-right: -14px;\n}\n.rg-bottom[_ngcontent-%COMP%] {\n  cursor: row-resize;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  margin-bottom: -7px;\n}\n.rg-left[_ngcontent-%COMP%] {\n  cursor: col-resize;\n  height: 100%;\n  left: 0;\n  top: 0;\n  margin-left: -14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUVBQUE7QUFFRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx3RUFBQTtBQUVKO0FBQUk7RUFDRSxPQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFFTjtBQURNO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUdSO0FBRE07RUFFRSxZQUFBO0FBRVI7QUFBTTtFQUNFLHdCQUFBO0FBRVI7QUFBTTtFQUNFLFVBQUE7QUFFUjtBQUVJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFBTjtBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZKO0FBTUE7Ozs7RUFJRSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsMEVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBSEY7QUFJRTs7OztFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUVBO0VBQ0UsTUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDQTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBQUVGO0FBREU7O0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFJSjtBQUNFOztFQUNFLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUdKO0FBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLG1CQUFBO0FBR0Y7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7QUFJRjtBQUZBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtBQUtGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmVycm9yLWNvbnNvbGUge1xuICB6LWluZGV4OiA5OTg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDEuM3JlbSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIGJveC1zaGFkb3c6IDAgLTNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG4uZXJyb3ItY29uc29sZV9faGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuLmVycm9yLWNvbnNvbGVfX2hlYWRlci1tZXNzYWdlIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBvcGFjaXR5OiAxO1xufVxuLmVycm9yLWNvbnNvbGVfX2hlYWRlci1tZXNzYWdlICoge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmVycm9yLWNvbnNvbGVfX2hlYWRlci1tZXNzYWdlIHA6OmFmdGVyLCAuZXJyb3ItY29uc29sZV9faGVhZGVyLW1lc3NhZ2UgcDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLCoFwiO1xufVxuLmVycm9yLWNvbnNvbGVfX2hlYWRlci1tZXNzYWdlIGJyIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmVycm9yLWNvbnNvbGVfX2hlYWRlci1tZXNzYWdlLS1oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xufVxuLmVycm9yLWNvbnNvbGVfX2hlYWRlci1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMjRweDtcbn1cbi5lcnJvci1jb25zb2xlX19jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucmctcmlnaHQsXG4ucmctbGVmdCxcbi5yZy10b3AsXG4ucmctYm90dG9tIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvclRoZW1lKGxpZ2h0KTtcbiAgYm94LXNoYWRvdzogMCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIC0ycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucmctcmlnaHQgc3Bhbixcbi5yZy1sZWZ0IHNwYW4sXG4ucmctdG9wIHNwYW4sXG4ucmctYm90dG9tIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4MjgyODI7XG59XG5cbi5yZy10b3Age1xuICB0b3A6IDA7XG4gIG1hcmdpbi10b3A6IC03cHg7XG59XG5cbi5yZy10b3AsXG4ucmctYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTBweDtcbiAgbGVmdDogMDtcbiAgY3Vyc29yOiByb3ctcmVzaXplO1xufVxuLnJnLXRvcCBzcGFuLFxuLnJnLWJvdHRvbSBzcGFuIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogNHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm9yZGVyLXdpZHRoOiAxcHggMDtcbn1cblxuLnJnLXJpZ2h0IHNwYW4sXG4ucmctbGVmdCBzcGFuIHtcbiAgYm9yZGVyLXdpZHRoOiAwIDFweDtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW46IC0xMHB4IDAgMCAzLjVweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogNHB4O1xufVxuXG4ucmctcmlnaHQge1xuICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gIGhlaWdodDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTRweDtcbn1cblxuLnJnLWJvdHRvbSB7XG4gIGN1cnNvcjogcm93LXJlc2l6ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogLTdweDtcbn1cblxuLnJnLWxlZnQge1xuICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogLTE0cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _resizable_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resizable.directive */ "ov8E");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _resizable_directive__WEBPACK_IMPORTED_MODULE_3__["ResizableDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _resizable_directive__WEBPACK_IMPORTED_MODULE_3__["ResizableDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ov8E":
/*!****************************************!*\
  !*** ./src/app/resizable.directive.ts ***!
  \****************************************/
/*! exports provided: ResizableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableDirective", function() { return ResizableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ResizableDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.rDirections = ['top'];
        this.onChangeHeight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.oldY = 0;
        this.oldX = 0;
        this.isGrabber = false;
        this.onMouseMoveGrabber = (event) => {
            if (!this.isGrabber)
                return;
            this.resizerHeight(event);
        };
        this.onMouseDownGrabber = (event) => {
            this.isGrabber = true;
            this.oldY = event.clientY;
        };
        this.resizerHeight = (event) => {
            const oldHeight = this.el.nativeElement.offsetHeight;
            const offsetY = this.oldY - event.clientY;
            const height = oldHeight + offsetY;
            if (this.isValidLimits(this.minHeight, this.maxHeight, height)) {
                this.renderer.setStyle(this.el.nativeElement, 'height', height);
                this.el.nativeElement.style.height = `${height}px`;
                this.onChangeHeight.emit(height);
                this.oldY = event.clientY;
            }
        };
        this.isValidLimits = (minValue, maxValue, value) => {
            let validLimits = true;
            if (minValue)
                validLimits = minValue < value;
            if (maxValue && validLimits)
                validLimits = maxValue > value;
            return validLimits;
        };
        this.resizerDiretion = (event) => {
            for (const direction of this.rDirections)
                switch (direction) {
                    case 'top':
                        this.resizerHeight(event);
                        break;
                    // case 'bottom':
                    //   this.resizerHeight(event);
                    //   break;
                    // case 'left':
                    //   this.resizerWidth(event);
                    //   break;
                    // case 'right':
                    //   this.resizerWidth(event);
                    //   break;
                }
        };
        this.resizerWidth = (event) => {
            const oldWidth = this.el.nativeElement.offsetWidth;
            const offsetX = this.oldX + event.clientX;
            const width = oldWidth - offsetX;
            if (this.isValidLimits(this.minWidth, this.maxWidth, width)) {
                this.renderer.setStyle(this.el.nativeElement, 'width', width);
                this.el.nativeElement.style.width = width + 'px';
                this.oldX = event.clientX;
            }
        };
    }
    ngAfterViewInit() {
        const parent = this.el.nativeElement.parentNode;
        const grabber = this.renderer.createElement('div');
        this.renderer.addClass(grabber, 'grabber');
        const span = this.renderer.createElement('span');
        for (const direction of this.rDirections) {
            this.renderer.addClass(grabber, 'rg-' + direction);
        }
        grabber.addEventListener('mouseup', (e) => this.onMouseUp(e));
        grabber.addEventListener('mousemove', (e) => this.onMouseMoveGrabber(e));
        grabber.addEventListener('mousedown', (e) => this.onMouseDownGrabber(e));
        this.renderer.appendChild(grabber, span);
        this.renderer.insertBefore(parent, grabber, this.el.nativeElement);
    }
    ngOnChanges(changes) {
        if (changes.initialHeight) {
            this.el.nativeElement.style.height = `${changes.initialHeight.currentValue}px`;
        }
    }
    onMouseMove(event) {
        if (this.isGrabber)
            this.resizerHeight(event);
    }
    onMouseUp(event) {
        this.isGrabber = false;
    }
}
ResizableDirective.ɵfac = function ResizableDirective_Factory(t) { return new (t || ResizableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ResizableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ResizableDirective, selectors: [["", "resizable", ""]], hostBindings: function ResizableDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function ResizableDirective_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function ResizableDirective_mouseup_HostBindingHandler($event) { return ctx.onMouseUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { rDirections: "rDirections", minHeight: "minHeight", maxHeight: "maxHeight", initialHeight: "initialHeight", minWidth: "minWidth", maxWidth: "maxWidth" }, outputs: { onChangeHeight: "onChangeHeight" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line: directive-selector
                selector: '[resizable]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { rDirections: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], initialHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onChangeHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousemove', ['$event']]
        }], onMouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mouseup', ['$event']]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map