(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Andrew_S1ach0s\Desktop\ping-coming-soon\src\main.ts */"zUnb");


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function AppComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please provide a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.title = 'ping-coming-soon';
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log('form submitted successfully');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 31, vars: 1, consts: [["src", "../assets/images/logo.svg", "alt", "ping logo"], [1, "subtitle"], [3, "ngSubmit"], ["f", "ngForm"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "ngModel", "", "required", "", "email", "", "placeholder", "Your email address..."], ["email", "ngModel"], ["class", "error", 4, "ngIf"], ["type", "submit"], ["id", "illustration"], ["src", "../assets/images/illustration-dashboard.png", "alt", "illustration-dashboard"], ["id", "socials"], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-x-twitter"], [1, "fa-brands", "fa-instagram"], ["id", "copyright"], [1, "error"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We are launching ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "soon!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Subscribe and get notified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_p_15_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Notify Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u00A9 Copyright Ping. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r1.valid && _r1.touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["header[_ngcontent-%COMP%] {\n  padding: 80px 0 50px 0;\n  text-align: center;\n}\n\nmain[_ngcontent-%COMP%] {\n  font-family: \"Libre Franklin\", sans-serif;\n}\n\nmain[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #969696;\n  font-weight: 300;\n  font-size: 38px;\n  text-align: center;\n}\n\nmain[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 700;\n}\n\nmain[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 25px 0 38px 0;\n  font-size: 16px;\n  text-align: center;\n}\n\nmain[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\nmain[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\nmain[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 420px;\n  padding: 12px 0 12px 22px;\n  border: 1px solid #c2d3ff;\n  border-radius: 25px;\n}\n\nmain[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #4f7df3;\n}\n\nmain[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: #ff5263;\n  font-style: italic;\n  font-size: 12px;\n  padding-left: 22px;\n  margin-top: 8px;\n}\n\nmain[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 12px 32px;\n  border: none;\n  border-radius: 25px;\n  cursor: pointer;\n  background-color: #4f7df3;\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n}\n\nmain[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #628bf3;\n}\n\nmain[_ngcontent-%COMP%]   #illustration[_ngcontent-%COMP%] {\n  width: 45%;\n  margin: 70px auto 0 auto;\n}\n\nmain[_ngcontent-%COMP%]   #illustration[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n}\n\nfooter[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\nfooter[_ngcontent-%COMP%]   #socials[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\nfooter[_ngcontent-%COMP%]   #socials[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border: 1px solid #4f7df3;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #4f7df3;\n  margin-right: 15px;\n  cursor: pointer;\n}\n\nfooter[_ngcontent-%COMP%]   #socials[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  background-color: #4f7df3;\n  color: white;\n}\n\nfooter[_ngcontent-%COMP%]   #copyright[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #969696;\n  margin-top: 25px;\n}\n\n@media (max-width: 768px) {\n  main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n  main[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 78%;\n    margin: auto;\n  }\n  main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-right: 0;\n  }\n  main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 25px;\n  }\n  main[_ngcontent-%COMP%]   #illustration[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVNBO0VBQ0UseUNBQUE7QUFORjs7QUFPRTtFQUNFLGNBWEc7RUFZSCxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUxKOztBQU1JO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBSk47O0FBUUU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBUEo7O0FBUUk7RUFDRSxrQkFBQTtBQU5OOztBQVFJO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQU5OOztBQU9NO0VBQ0UsY0ExQ0Y7QUFxQ047O0FBUUk7RUFDRSxjQTVDSztFQTZDTCxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFOTjs7QUFTSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQTFEQTtFQTJEQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUE47O0FBUU07RUFDRSx5QkFBQTtBQU5SOztBQVdFO0VBQ0UsVUFBQTtFQUNBLHdCQUFBO0FBVEo7O0FBVUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQVJOOztBQWFBO0VBQ0UsZ0JBQUE7QUFWRjs7QUFZRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQVZKOztBQVlJO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQTdGQTtFQThGQSxrQkFBQTtFQUNBLGVBQUE7QUFWTjs7QUFXTTtFQUNFLHlCQWpHRjtFQWtHRSxZQUFBO0FBVFI7O0FBY0U7RUFDRSxrQkFBQTtFQUNBLGNBdEdHO0VBdUdILGdCQUFBO0FBWko7O0FBZ0JBO0VBRUk7SUFDRSxlQUFBO0VBZEo7RUFnQkU7SUFDRSxlQUFBO0VBZEo7RUFpQkU7SUFDRSxzQkFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VBZko7RUFnQkk7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQWROO0VBZ0JJO0lBQ0UsV0FBQTtFQWROO0VBZ0JJO0lBQ0Usa0JBQUE7RUFkTjtFQWdCSTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQWROO0VBa0JFO0lBQ0UsVUFBQTtFQWhCSjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ29sb3IgVmFyaWFibGVzXHJcbiRibHVlOmhzbCgyMjMsIDg3JSwgNjMlKTtcclxuJHBhbGVCbHVlOiBoc2woMjIzLCAxMDAlLCA4OCUpO1xyXG4kbGlnaHRSZWQ6IGhzbCgzNTQsIDEwMCUsIDY2JSk7XHJcbiRncmF5OiBoc2woMCwgMCUsIDU5JSk7XHJcbiR2ZXJ5RGFya0JsdWU6IGhzbCgyMDksIDMzJSwgMTIlKTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5oZWFkZXJ7XHJcbiAgcGFkZGluZzogODBweCAwIDUwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxubWFpbntcclxuICBmb250LWZhbWlseTogXCJMaWJyZSBGcmFua2xpblwiLCBzYW5zLXNlcmlmO1xyXG4gIGgxe1xyXG4gICAgY29sb3I6ICRncmF5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHNwYW57XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdWJ0aXRsZXtcclxuICAgIG1hcmdpbjogMjVweCAwIDM4cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXZ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICB3aWR0aDogNDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMCAxMnB4IDIycHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwYWxlQmx1ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgJjo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZXJyb3J7XHJcbiAgICAgIGNvbG9yOiAkbGlnaHRSZWQ7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIycHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b257XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMzJweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIzLCA4NiUsIDY3JSk7O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjaWxsdXN0cmF0aW9ue1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIG1hcmdpbjogNzBweCBhdXRvIDAgYXV0bztcclxuICAgIGltZ3tcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZvb3RlcntcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG5cclxuICAjc29jaWFsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBkaXZ7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRibHVlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI2NvcHlyaWdodHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkZ3JheTtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcclxuICBtYWlue1xyXG4gICAgaDF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuICAgIC5zdWJ0aXRsZXtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm17XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHdpZHRoOiA3OCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgZGl2e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAuZXJyb3J7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2lsbHVzdHJhdGlvbntcclxuICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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