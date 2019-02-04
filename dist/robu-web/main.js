(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _page_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/login/login.component */ "./src/app/page/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/home/home.component */ "./src/app/page/home/home.component.ts");
/* harmony import */ var _page_selected_product_selected_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/selected-product/selected-product.component */ "./src/app/page/selected-product/selected-product.component.ts");
/* harmony import */ var _page_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/product-detail/product-detail.component */ "./src/app/page/product-detail/product-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'home', component: _page_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _page_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'product-detail', component: _page_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailComponent"] },
    { path: 'select-product', component: _page_selected_product_selected_product_component__WEBPACK_IMPORTED_MODULE_5__["SelectedProductComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#ff9558\" type=\"ball-atom\">\r\n    <p style=\"font-size: 14px; color: white; margin-top: 14px;\">กำลังโหลด...</p>\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'robu-web';
        this.configFirebase();
    }
    AppComponent.prototype.configFirebase = function () {
        var config = {
            apiKey: 'AIzaSyDazJXztjj-5VcdZPt3ueRS_sv6e9lQm8Q',
            authDomain: 'rabu-love-love.firebaseapp.com',
            databaseURL: 'https://rabu-love-love.firebaseio.com',
            projectId: 'rabu-love-love',
            storageBucket: 'rabu-love-love.appspot.com',
            messagingSenderId: '69927117585'
        };
        firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"](config);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/login/login.component */ "./src/app/page/login/login.component.ts");
/* harmony import */ var _components_component_frames_profile_component_frames_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/component-frames-profile/component-frames-profile.component */ "./src/app/components/component-frames-profile/component-frames-profile.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _page_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page/home/home.component */ "./src/app/page/home/home.component.ts");
/* harmony import */ var _components_shared_shared_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/shared/shared.component */ "./src/app/components/shared/shared.component.ts");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var _components_component_profile_component_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/component-profile/component-profile.component */ "./src/app/components/component-profile/component-profile.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _components_component_change_profile_facebook_component_change_profile_facebook_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/component-change-profile-facebook/component-change-profile-facebook.component */ "./src/app/components/component-change-profile-facebook/component-change-profile-facebook.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _page_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page/product-detail/product-detail.component */ "./src/app/page/product-detail/product-detail.component.ts");
/* harmony import */ var _page_selected_product_selected_product_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./page/selected-product/selected-product.component */ "./src/app/page/selected-product/selected-product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var fbLoginOptions = {
    scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
    return_scopes: true,
    enable_profile_selector: true,
    auth_type: 'rerequest'
};
var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_14__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_14__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_14__["FacebookLoginProvider"]("2134431583284588", fbLoginOptions)
    }
]);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _page_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _components_component_frames_profile_component_frames_profile_component__WEBPACK_IMPORTED_MODULE_4__["ComponentFramesProfileComponent"],
                _page_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_shared_shared_component__WEBPACK_IMPORTED_MODULE_10__["SharedComponent"],
                _components_component_profile_component_profile_component__WEBPACK_IMPORTED_MODULE_12__["ComponentProfileComponent"],
                _components_component_change_profile_facebook_component_change_profile_facebook_component__WEBPACK_IMPORTED_MODULE_15__["ComponentChangeProfileFacebookComponent"],
                _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["ToolbarComponent"],
                _page_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_19__["ProductDetailComponent"],
                _page_selected_product_selected_product_component__WEBPACK_IMPORTED_MODULE_20__["SelectedProductComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_14__["SocialLoginModule"],
                ngx_facebook__WEBPACK_IMPORTED_MODULE_11__["FacebookModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"]
            ],
            providers: [
                {
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_14__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/component-change-profile-facebook/component-change-profile-facebook.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/component-change-profile-facebook/component-change-profile-facebook.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n    display: inline-block;\r\n    /* height: calc(96vh - 145px); */\r\n    text-align: center;\r\n    width: 100vw;\r\n    vertical-align: middle;\r\n}\r\n\r\n.margin {\r\n    margin-top: 30px !important;\r\n    margin-bottom: 30px !important;\r\n}"

/***/ }),

/***/ "./src/app/components/component-change-profile-facebook/component-change-profile-facebook.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/component-change-profile-facebook/component-change-profile-facebook.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin\">\r\n  <div class=\"col-12 center\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"ChangeProfile()\">Change Profile Facebook</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/component-change-profile-facebook/component-change-profile-facebook.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/component-change-profile-facebook/component-change-profile-facebook.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ComponentChangeProfileFacebookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentChangeProfileFacebookComponent", function() { return ComponentChangeProfileFacebookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentChangeProfileFacebookComponent = /** @class */ (function () {
    function ComponentChangeProfileFacebookComponent(fb) {
        this.fb = fb;
        var initParams = {
            appId: '2134431583284588',
            version: 'v3.2'
        };
        fb.init(initParams);
    }
    ComponentChangeProfileFacebookComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(window.localStorage.getItem('@user'));
        if (this.user) {
            // console.log(this.user);
        }
    };
    ComponentChangeProfileFacebookComponent.prototype.ChangeProfile = function () {
        // this.fb.api('https://www.khaosod.co.th/wp-content/uploads/2016/09/14333162_320123348342430_1546313821850115366_n.jpg'
        //   // if (response && !response.error) {
        //   /* handle the result */
        //   // }
        // );
        this.fb.api('/' + this.user.id + '/photos', 'post', {
            'url': 'https:\/\/www.khaosod.co.th\/wp-content\/uploads\/2016\/09\/14333162_320123348342430_1546313821850115366_n.jpg',
            'published': true
        }).then(function (res) {
            // console.log('res : ', res);
        }).catch(function (err) {
            // console.log('err : ', err);
        });
    };
    ComponentChangeProfileFacebookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component-change-profile-facebook',
            template: __webpack_require__(/*! ./component-change-profile-facebook.component.html */ "./src/app/components/component-change-profile-facebook/component-change-profile-facebook.component.html"),
            styles: [__webpack_require__(/*! ./component-change-profile-facebook.component.css */ "./src/app/components/component-change-profile-facebook/component-change-profile-facebook.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_facebook__WEBPACK_IMPORTED_MODULE_1__["FacebookService"]])
    ], ComponentChangeProfileFacebookComponent);
    return ComponentChangeProfileFacebookComponent;
}());



/***/ }),

/***/ "./src/app/components/component-frames-profile/component-frames-profile.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/component-frames-profile/component-frames-profile.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[class*=\"col-\"] {\r\n    margin: 5px;\r\n    padding: 0px\r\n  }\r\n\r\n  .selectItem {\r\n    border: 5px solid indianred;\r\n    border-radius: 2%;\r\n  }\r\n\r\n  .center {\r\n    display: inline-block; \r\n    text-align: center;\r\n    width: 100vw;\r\n    vertical-align: middle;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/component-frames-profile/component-frames-profile.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/component-frames-profile/component-frames-profile.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col-12 center\">\r\n  <canvas id=\"canvas\" width=\"655%\" height=\"655%\" #canvas></canvas>\r\n</div> -->\r\n<div class=\"row\" ng-class=\"home\" *ngIf=\"frame && frame.data\">\r\n  <div align-self-center class=\"col-2 center \" *ngFor=\"let img of frame.data\" (click)=\"select(img)\">\r\n    <img src=\"{{img.image.url}}\" style=\"width: 100%;\" alt=\"error\" [ngClass]=\"{'selectItem':check.id === img._id}\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/component-frames-profile/component-frames-profile.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/component-frames-profile/component-frames-profile.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ComponentFramesProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentFramesProfileComponent", function() { return ComponentFramesProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



// export interface Frame {
//   id: string;
//   image: string;
// }
var ComponentFramesProfileComponent = /** @class */ (function () {
    // userImg: any = "https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/33037353_1774105469351187_6162166278820724736_n.jpg?_nc_cat=106&_nc_ht=scontent.fbkk12-1.fna&oh=2a5f4827d44e73fcc805042ec15d83d4&oe=5CC6C4D2"
    // // userImg: any;
    // @ViewChild('canvas') canvas: ElementRef
    function ComponentFramesProfileComponent(http, spinner) {
        this.http = http;
        this.spinner = spinner;
        this.check = {
            id: ''
        };
        this.sendFrame = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ComponentFramesProfileComponent.prototype.ngOnInit = function () {
        this.getFrame();
    };
    ComponentFramesProfileComponent.prototype.getFrame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinner.show();
                        return [4 /*yield*/, this.http.get('../../../assets/json/json-frame.json').toPromise()];
                    case 1:
                        res = _a.sent();
                        this.frame = res;
                        // console.log(this.frame);
                        this.spinner.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    // image: Frame[] = [
    //   { id: "1", image: "./assets/img/frame-0.png" },
    //   { id: "2", image: "./assets/img/frame-1.png" },
    //   { id: "3", image: "./assets/img/frame-2.png" },
    //   { id: "4", image: "./assets/img/frame-3.png" },
    //   { id: "5", image: "https://res.cloudinary.com/dyiuidzsc/image/upload/v1546922692/Rabu%20Rabu/f1.png" },
    //   { id: "6", image: "https://res.cloudinary.com/dyiuidzsc/image/upload/v1546922690/Rabu%20Rabu/f3.png" },
    //   { id: "7", image: "https://res.cloudinary.com/dyiuidzsc/image/upload/v1546922692/Rabu%20Rabu/f4.png" },
    //   { id: "8", image: "https://res.cloudinary.com/dyiuidzsc/image/upload/v1546922692/Rabu%20Rabu/f1.png" },
    // ]
    ComponentFramesProfileComponent.prototype.select = function (img) {
        // console.log(img)
        this.spinner.show();
        this.check.id = img._id;
        if (this.check.id === img._id) {
            this.sendFrame.emit(img);
        }
        // this.clickToMerge(img);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ComponentFramesProfileComponent.prototype, "sendFrame", void 0);
    ComponentFramesProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component-frames-profile',
            template: __webpack_require__(/*! ./component-frames-profile.component.html */ "./src/app/components/component-frames-profile/component-frames-profile.component.html"),
            styles: [__webpack_require__(/*! ./component-frames-profile.component.css */ "./src/app/components/component-frames-profile/component-frames-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], ComponentFramesProfileComponent);
    return ComponentFramesProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/component-profile/component-profile.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/component-profile/component-profile.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n    display: inline-block;\r\n     /* height: calc(96vh - 145px); */\r\n    text-align: center;\r\n    width: 100vw;\r\n    vertical-align: middle;\r\n}\r\n\r\n.margin-top {\r\n  margin-top: 30px !important;\r\n  margin-bottom: 30px !important;\r\n}"

/***/ }),

/***/ "./src/app/components/component-profile/component-profile.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/component-profile/component-profile.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 margin-top\">\r\n  <div class=\"row\">\r\n    <!-- <div class=\"col-12 center\">\r\n      <button (click)=\"clickToMerge()\">ใส่กรอปกร๊อปกรอป</button>\r\n      <button (click)=\"getMerge()\">เอาออกมาาาา</button> -->\r\n  </div>\r\n  <div class=\"col-12 center\">\r\n    <img style=\"width: 200px; height: 200px; object-fit: cover\" *ngIf=\"user && user.photoUrl\" class=\"center\" src=\"{{user.photoUrl}}\">\r\n    <img style=\"width: 200px; height: 200px; object-fit: cover\" *ngIf=\"!user || !user.photoUrl\" class=\"center\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAk1BMVEX////S19sREiQAAADa2tvP1NgODyL29/jT19vu8PLd4eTW2t7y8/QAABrZ3eHi5egAABcAABgAABPp6+0HCB5tbnYAAA8nKDZBQUyUlJp0dH2NjZUAAB86OkZnaG+AgIZhYWsXGCmcnKBVVl8gIjGChYxZWmGwsLZPT1odHSynp6y1trfFxcgoKTMJDSU/P0wyMj+F22kNAAAJCUlEQVR4nO1dC3uiOhCtUB6i+MAgryr4wGJrV///r7sgurXb3iYzGcD2y9ltt7Zdh5PMnJmEkDw8KCgoKCgoKCgoKCgoKCgoKCjAYVnD2XjsOM7o/NcZj2f9odX1VUnB6o+dgW0bhtH7gPIbtj1wxv0fSK/kNPhE6F+UvzD4UeyG4xGP0y270XjY9RWLoO/YwqT+kus5/a6v+3sMHfGu+rfjnLvtN2vcQ7K69tv4HuNtOJKjVVMb3Vu39QfSrC7cBvcUbWS07osaKa37oTYcEdM6Uxt1LSOW0wCtMzWnU2qzZljVmHVGyxLzQsO4VI0Gt3r8+P+68seZwFWWZa4ze69zrf7MGYjnO6OLThPpLmM0+6LRLfFysoNO6/Mv6rsg6QtracvKP+Zdl8ErjkQrS2PcDqMavPY2BiI1n5imGqPG6Vxh2bxrEQx6wSxotxRoQ153ASKeH6rnd2yl5uepPCwoLMcZ8TWyDd3n8kJcw5CvRY0z412CgZNnbrQ1LY5cXuiW5b5zo8ya4/Xw0GWfcUPBkXn3AefNm2PGrXoHUm/PSyONMePyMiQTKa/LGtLGfuMNyrWA1dxvYXGtyjliBZ4Feaf4DG59SNGaDp8Zed044pqU7zC+fJQgrvW5Qk8S2BafF7E08sO6Z1DY4epij1ZARFpSKjdfIRBkJejCjB9gRO0oNqYmCzORebYeiSUBl+/R5Wl+BiNrRRFZ7JFlM5GI7tFolUgwkzWjkCMSSZUosbZyC9l0iygxCmUUU2AqCRYmJp1dhJSjA2LS+iGQwgiJibuirH6IJZYuiEnKlZDUd0JMbjQh3GFUqsgd9d2YlOkyYTtUeQxArGfj7Qh3WBnLJL4IcUWZxhSOsKr9KJZBiSaXGugoEyxJ5RsQaxHblKI57GKGoH4D+H4FZC4DOTwNMaGC+8YkLrDHHRCDmUQOloBGKIZkwLbEjduHBiSp0BATHEpcYaPkA2iEZJ6qFZtQGxTEYDrcQ81mApW3K2Lw5An2CooZFkipUwPemkDloCEGtgnXRVhxQ0QMViqeAdZFcEahuI+EIAZOMnBvJyCGcBOwVczibGlicCUGCz7GhPy8B4oYTPARIWbI3x62ZvAkAwwyeIgRLUsegg3Dggz+0B7VbUbgkAwYZHDdpbuZD7UMalJ4FNPdy4dGAUg94NpBt8oJHN6QNoWLU4fEIHUwXBS7c0WQLMJLe5JlHmeATQOmukFT6DUIVlJdbMOJicsipsomI9ZkCkVU2WQJGp5pAEMycPYnXLoFzzSAmVrMo5dUsogog8WJIWp7MvVAjHDF2xRDjGS9YtOzAwh3oLoLjYkC8RyKIUYUZAhPbJoYzcAFMyXRMDGSpR6IRNM4MZJ1nxhPbLzHCAQfNTnWODGCpXZN20USMxyp3bMs7F4T4sQwCbqmJhNn6B1Pmq08oDY+AyUcMKP4/UckiGGKqRriboITpwoSWRptFDBiwtzOqSEh+UjFAlWpeK+QqPGxJiGDd2Q+6cnU+PjGhNRy8FmqK9B6jxcsyEpT8HqLv0CrRzsm0YGMnoaT8ERIJYcaPZyBrT1asohPZFhfHKDDGjTxJ+EYuJlTfOYEGkSbQQ5eJIIaFtV4jUJ1mYSHAH0fX9+jokymw2BqJeHziOpDQqvA1mT2g4RWwjK8wIlTIsigjSjjHXDHxydM8C0luQ6DFgQyOgUkJtVjcA1Gz0C0Sww+spUQfGCMyTgHYpJFpshpjxhmYCthDej3Mj0G5yXji0BiErww030W9KGddwAtoXXKxg0l0PagSoUvBnCzfegcDS0G8DOKuOE6YkVVDajjo1sQ+yQ0Uj7A7YiuqbB3CpAJBpxbsIkMv34LF9XwaW4cL4k7IKimtOFShWxAidunKItwz8cFs8zCEkzBiCjfUHWp3BonTJchzCCsSK4EQixkxWgw5hkhyYVA8KoAYxChUrKLSsAmcQbhzwlLr9xqZ8MGqHxQLNwCFfnojTiBLk+xUBfUmHiDIF40y1kBjTnAe75V1izCdogeOBFuR6nUAjlmiYaXoDN+e06LEPqCZ/DQHTEhkD9pzgwTS9SEOwVzt6KnOgpNxB/JHnx64KRp26A852fIO3+Odp/xb0bvhk28C33/W/+g3hn+/zbjJqdV4ZvlR/SnFHxdzbV+GkIDByV95SBNHszxtfY3YOnTNGPT5wvOvpCRRix+lMY2DnP794RO+oMXatxUINxz06hM3q5Zb+5Qq6vot0Wrwju1Jo4AueLMrO0TVy/UmuRVMSMtMwRRUWuWV8ms1bME383exbm8CgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgq/F4+/FA/6L8WD9kuhiP00XIiZlw/t5l9NY0wzb16VP2LvL+8cNTFzYWpmsK+/Pq0uP5vsNt7b4kplVTAz2Jx+CrOamLvM3Eky8Sba1NOTFfO8KfP0lxL+Wvd0nTFdPxm6vshD1vEFi+LSY/vE26dxlOppFKfRKYricF08Frruz3aRbQTho10cQjs4LtrsMbOKhTIazp+ZZl5emVW4VF9V32Vu9aFNTfOp+pnrsltimhetln48if2lrudPiabH8WZ+NJzUj4KDnj0fFnows13Waoyxooj/bN39KpwErrnLw4UbTPartLz+YPrmrlZ7z8/8ZV7ksf6ipWkYnZIsLdgtMTfbJbsoW6Yh85I/6/mk/HU2158e06h41Revh/n8bWxs2/VDM4jz+GWThM/LePlc5OE6jZd5eNjM813qx8k6D9NFlkeb/Dl8mS8SbR2+xMXmAzGTvaT7hAVBZG6zzM+0KCvctZ8cjo+nx/gQR69peAgf560SK/1omftFclynWbpeLKMkWSZ5+OwHUZFkySYqOR/jJN1tkuVhsS45ruN047u3xDTX37K3PGZBEs8zfZlsTye2idKptyueosybly7p6/GxXU00A20astNb8HR0Ay30Tuw4P522wYmFXsj2wSrUgpAdvXDqbbVis13o4XRxuca/CdotI3HqaubE1co/kyoymTc1NZeZXtkGrme61e+0i1omzLNUaOwqGebllXkVlCrDlknXrL+rfST226CI/TT8WmL/ATmgql/NCtrgAAAAAElFTkSuQmCC\">\r\n  </div>\r\n\r\n  <!-- <div class=\"col-12 center\">\r\n      <canvas id=\"canvas\" width=\"655%\" height=\"655%\" #canvas></canvas>\r\n    </div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/components/component-profile/component-profile.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/component-profile/component-profile.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ComponentProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentProfileComponent", function() { return ComponentProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentProfileComponent = /** @class */ (function () {
    function ComponentProfileComponent(spinner) {
        this.spinner = spinner;
        this.getFrameImg = [];
        this.userImg = "https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/33037353_1774105469351187_6162166278820724736_n.jpg?_nc_cat=106&_nc_ht=scontent.fbkk12-1.fna&oh=2a5f4827d44e73fcc805042ec15d83d4&oe=5CC6C4D2";
    }
    ComponentProfileComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(window.localStorage.getItem('@user'));
        // if (this.user) {
        //   console.log(this.user);
        //   this.userImg = this.user.photoUrl
        // }
    };
    ComponentProfileComponent.prototype.ngAfterViewChecked = function () {
        // if (this.getFrameImg.image.url) {
        //   this.clickToMerge()
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComponentProfileComponent.prototype, "getFrameImg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ComponentProfileComponent.prototype, "canvas", void 0);
    ComponentProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component-profile',
            template: __webpack_require__(/*! ./component-profile.component.html */ "./src/app/components/component-profile/component-profile.component.html"),
            styles: [__webpack_require__(/*! ./component-profile.component.css */ "./src/app/components/component-profile/component-profile.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
    ], ComponentProfileComponent);
    return ComponentProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/shared.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/shared/shared.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n    display: inline-block;\r\n    text-align: center;\r\n    width: 100vw;\r\n    vertical-align: middle;\r\n}\r\n\r\n.margin{\r\n    margin-top: 30px !important;\r\n    margin-bottom: 30px !important;\r\n}\r\n\r\n.disble-1{\r\n    visibility: hidden !important;\r\n}"

/***/ }),

/***/ "./src/app/components/shared/shared.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/shared/shared.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin\">\r\n  <div class=\"col-12 center\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"shareWithOpenGraphActions()\">Shared Facebook</button>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div class=\"fb-share-button\" data-href=\"https://developers.facebook.com/docs/plugins/\" data-layout=\"button_count\"\r\n  data-size=\"small\" data-mobile-iframe=\"true\"><a target=\"_blank\" href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse\"\r\n    class=\"fb-xfbml-parse-ignore\">แชร์</a>\r\n</div> -->"

/***/ }),

/***/ "./src/app/components/shared/shared.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/shared/shared.component.ts ***!
  \*******************************************************/
/*! exports provided: SharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponent", function() { return SharedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ClassUpload } from './class-upload';
var SharedComponent = /** @class */ (function () {
    function SharedComponent(fb, spinner) {
        this.fb = fb;
        this.spinner = spinner;
        // private basePath: string = '/uploads';
        this.imageArray = [];
        var initParams = {
            appId: '391466811398230',
            version: 'v3.2'
        };
        fb.init(initParams);
    }
    SharedComponent.prototype.ngOnInit = function () {
        // console.log(this.imageInput);
        console.log(this.images);
        this.user = JSON.parse(window.localStorage.getItem('@user'));
        // console.log(this.imageInput);
    };
    // onClickShare() {
    //   console.log('object');
    //   const element: HTMLElement = document.getElementById('u_0_2') as HTMLElement;
    //   console.log(element);
    //   element.click();
    // }
    SharedComponent.prototype.shareWithOpenGraphActions = function () {
        // this.pushUpload(this.imageInput).then(res => {
        var params = {
            method: 'share',
            action_type: 'og.likes',
            action_properties: JSON.stringify({
                object: {
                    // 'og:url': 'https://angular-for-seo.firebaseapp.com',
                    'og:title': 'RabuRabuLoveLove',
                    'og:description': this.detailInput,
                    'og:image': this.imageInput
                }
            })
        };
        this.fb.ui(params)
            .then(function (res) { return console.log(res); })
            .catch(function (e) { return console.error(e); });
        // }).catch(err => {
        //   console.log(err)
        // });
        // const image = await this.pushUpload(this.imageInput);
        // console.log(image);
        // const params: UIParams = {
        //   method: 'share',
        //   action_type: 'og.likes',
        //   action_properties: JSON.stringify({
        //     object: {
        //       // 'og:url': 'https://angular-for-seo.firebaseapp.com',
        //       'og:title': 'RabuRabuLoveLove',
        //       'og:description': 'ข้อความยาว ๆ',
        //       'og:image': image
        //     }
        //   })
        // };
        // this.fb.ui(params)
        //   .then((res: UIResponse) => console.log(res))
        //   .catch((e: any) => console.error(e));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SharedComponent.prototype, "imageInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SharedComponent.prototype, "detailInput", void 0);
    SharedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shared',
            template: __webpack_require__(/*! ./shared.component.html */ "./src/app/components/shared/shared.component.html"),
            styles: [__webpack_require__(/*! ./shared.component.css */ "./src/app/components/shared/shared.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_facebook__WEBPACK_IMPORTED_MODULE_1__["FacebookService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], SharedComponent);
    return SharedComponent;
}());



/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"color-header\">\r\n  <mat-toolbar-row>\r\n    <!-- <button *ngIf=\"isMenuIcon\" mat-icon-button (click)=\"sidenavService.openNav()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <span class=\"pl-5\" *ngIf=\"!isMenuIcon\">Angular7 Material</span>\r\n    <span class=\"example-spacer\"></span> -->\r\n    <div class=\"pl-5\">\r\n      <img class=\"image-style\" src=\"https://res.cloudinary.com/dyiuidzsc/image/upload/v1548991271/Rabu%20Rabu/perfect%20lips/LOGO-RABU.png\"\r\n        alt=\"\">\r\n    </div>\r\n    <span class=\"example-spacer\"></span>\r\n    <div *ngIf=\"data\">\r\n      <span class=\"profile\">\r\n        <img *ngIf=\"data && data.photoUrl\" src=\"{{data.photoUrl}}\">\r\n        <span>&nbsp;{{data.name}}</span>\r\n      </span>\r\n\r\n      <!-- <mat-menu #profile=\"matMenu\">\r\n        <button mat-menu-item>\r\n          <mat-icon svgIcon=\"lock-outline\"></mat-icon>\r\n          <span>Log out</span>\r\n        </button>\r\n      </mat-menu> -->\r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z6 {\n  position: fixed;\n  z-index: 999; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.profile {\n  cursor: pointer; }\n\n.profile img {\n    width: 30px;\n    height: 30px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 100%;\n    border: 2px solid #ffffff; }\n\n.profile span {\n    font-size: 14px; }\n\n.color-header {\n  background-color: white; }\n\n.image-style {\n  width: 150px; }\n"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.isMenuIcon = true;
        this.checkUser = false;
        this.onResizeDisplay();
    }
    ToolbarComponent.prototype.onResize = function () {
        this.onResizeDisplay();
    };
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.ngDoCheck = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                if (!this.checkUser) {
                    this.checkUser = true;
                    user = window.localStorage.getItem('@user');
                    if (user) {
                        console.log(JSON.parse(user));
                        this.data = JSON.parse(user);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    ToolbarComponent.prototype.onResizeDisplay = function () {
        if (window.innerWidth > 800) {
            this.isMenuIcon = false;
        }
        else {
            this.isMenuIcon = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToolbarComponent.prototype, "onResize", null);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/components/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/page/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/page/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n    display: inline-block; \r\n    text-align: center;\r\n    width: 100vw;\r\n    vertical-align: middle;\r\n}"

/***/ }),

/***/ "./src/app/page/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/page/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-component-profile [getFrameImg]=\"frameImg\" *ngIf=\"!setframe\"></app-component-profile>\r\n<div class=\"col-12 center\" style=\"display: none\">\r\n    <canvas id=\"canvas\" width=\"700px\" height=\"700px\" #canvas></canvas>\r\n</div>\r\n<div style=\"margin-top: 30px;margin-bottom: 30px\" *ngIf=\"setframe\">\r\n    <div class=\"col-12 center\">\r\n        <img src=\"{{dataURL}}\" style=\"width: 200px;height: 200px;\" alt=\"\">\r\n    </div>\r\n</div>\r\n<app-shared [imageInput]=\"images\"></app-shared>\r\n<app-component-change-profile-facebook></app-component-change-profile-facebook>\r\n<app-component-frames-profile (sendFrame)=\"getFrame($event)\"></app-component-frames-profile>"

/***/ }),

/***/ "./src/app/page/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(spinner) {
        this.spinner = spinner;
        this.setframe = false;
        this.userImg = "https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/33037353_1774105469351187_6162166278820724736_n.jpg?_nc_cat=106&_nc_ht=scontent.fbkk12-1.fna&oh=2a5f4827d44e73fcc805042ec15d83d4&oe=5CC6C4D2";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(window.localStorage.getItem('@user'));
        // console.log(this.user);
        if (this.user && this.user.photoUrl) {
            this.userImg = this.user.photoUrl;
            // console.log('userImg : ', this.userImg)
            this.spinner.hide();
        }
    };
    HomeComponent.prototype.getFrame = function (e) {
        this.setframe = true;
        if (e) {
            this.clickToMerge(e);
        }
    };
    HomeComponent.prototype.clickToMerge = function (img) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            function loadImage(src, onload) {
                var img = new Image();
                img.onload = onload;
                img.crossOrigin = "Anonymous";
                img.src = src;
                console.log('1');
                return img;
            }
            function main() {
                imagesLoaded = imagesLoaded + 1;
                console.log('2');
                if (imagesLoaded == 2) {
                    // composite now
                    ctx.drawImage(img1, 0, 0, img1.width, img1.height, 0, 0, canvas.width, canvas.height);
                    ctx.globalAlpha = 1;
                    ctx.drawImage(img2, 0, 0, img2.width, img2.height, 0, 0, canvas.width, canvas.height);
                    console.log('3');
                }
            }
            var frame, profile, canvas, ctx, imagesLoaded, img1, img2;
            return __generator(this, function (_a) {
                console.log(img);
                console.log(this.userImg);
                frame = img.image.url;
                profile = this.userImg;
                canvas = document.getElementById("canvas");
                ctx = canvas.getContext("2d");
                imagesLoaded = 0;
                img1 = loadImage(profile, main);
                img2 = loadImage(frame, main);
                setTimeout(function () {
                    return _this.getMerge();
                }, 500);
                return [2 /*return*/];
            });
        });
    };
    HomeComponent.prototype.getMerge = function () {
        var getCnvs = document.getElementById('canvas');
        this.dataURL = getCnvs.toDataURL();
        // console.log(this.dataURL);
        this.images = this.dataURL;
        // console.log(this.images)
        this.spinner.hide();
        console.log('4');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "canvas", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/page/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/page/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/page/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".f-icon {\r\n    width: 15px;\r\n}\r\n\r\n.container {\r\n    height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.btn-center {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/page/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/page/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row container pl-0 pr-0 ml-0 mr-0\">\r\n    <div class=\"col-12 btn-center\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"openHome()\"><img class=\"f-icon\" src=\"assets/icons/facebook-f-brands.svg\"><span\r\n                class=\"pl-3\">Login with facebook</span></button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/page/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/page/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _services_service_api_service_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/service-api/service-api.service */ "./src/app/services/service-api/service-api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, route, spinner, seviceApi) {
        this.authService = authService;
        this.route = route;
        this.spinner = spinner;
        this.seviceApi = seviceApi;
    }
    LoginComponent.prototype.signInWithFB = function () {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.openHome = function () {
        var _this = this;
        this.signInWithFB();
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            _this.user.photoUrl = "https://graph.facebook.com/" + _this.user.id + "/picture?width=2000&height=2000";
            window.localStorage.setItem('@user', JSON.stringify(_this.user));
            _this.loggedIn = (user != null);
            _this.route.navigate(['select-product']);
        });
        // this.saveUser();
    };
    LoginComponent.prototype.saveUser = function () {
        try {
            var dataUser = JSON.parse(window.localStorage.getItem('@user'));
            console.log(dataUser);
            var data = {
                username: 'admin',
                password: 'P@ssw'
            };
            var user = this.seviceApi.saveUser(data);
            console.log('login' + user);
            console.log('login');
            if (!user) {
                console.log('regis');
                var dataRegis = {
                    username: "boom",
                    password: 'P@ssw0rd',
                    firstname: 'boom',
                    lastname: 'jaidee',
                    email: 'boom@hotmail.com'
                };
                var res = this.seviceApi.sigup(dataRegis);
                console.log('resiter' + res);
            }
        }
        catch (error) {
            console.log('error ' + error);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/page/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/page/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _services_service_api_service_api_service__WEBPACK_IMPORTED_MODULE_0__["ServiceApiService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/page/product-detail/product-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/page/product-detail/product-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{\r\n    text-align: center;\r\n}\r\n\r\n.size-image{\r\n    width: 65%;\r\n    height: 30vw;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.font-header{\r\n    font-size: 3vw\r\n}\r\n\r\n.border-image{\r\n    border: solid 1px #e2e2e2;\r\n    border-radius: 2%\r\n}\r\n\r\n.full-width {\r\n    width: 100%;\r\n}\r\n\r\n.height-input {\r\n    height: 15vw;\r\n}\r\n\r\n.word-wrap {\r\n    word-wrap: break-word;\r\n}\r\n\r\n.scroll-detail {\r\n    overflow: auto;\r\n}\r\n\r\n.font-detail {\r\n    font-size: 13px;\r\n}\r\n\r\n.color-title {\r\n    color: hotpink;\r\n}"

/***/ }),

/***/ "./src/app/page/product-detail/product-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/page/product-detail/product-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-2\"></div>\r\n    <div class=\"col-8\">\r\n        <p>\r\n            <span class=\"mr-2 font-header\">my</span>\r\n            <span class=\"mr-2 font-header\">Lips</span>\r\n            <span class=\"mr-2 font-header\">my</span>\r\n            <span class=\"mr-2 font-header\">Life</span>\r\n        </p>\r\n    </div>\r\n    <div class=\"col-2\"></div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-2\"></div>\r\n  <div class=\"col-8 center\" *ngIf=\"productDetail\">\r\n      <img class=\"size-image border-image\" [src]=\"productDetail.productcolor\">\r\n  </div>\r\n  <div class=\"col-2\"></div>\r\n</div>\r\n\r\n<div class=\"row mt-4\">\r\n  <div class=\"col-0 col-sm-0 col-md-1 col-lg-2\"></div>\r\n  <div class=\"col-12 col-sm-12 col-md-10 col-lg-8\" *ngIf=\"productDetail\">\r\n      <div class=\"full-width border-image scroll-detail word-wrap height-input pr-4 pl-4\">\r\n          <p>รายละเอียด:</p>\r\n          <h4 class=\"color-title\">{{productDetail.titledetail}}</h4>\r\n          <p class=\"font-detail\">\r\n              {{productDetail.detail}}\r\n          </p>\r\n      </div>\r\n  </div>\r\n  <div class=\"col-0 col-sm-0 col-md-1 col-lg-2\"></div>\r\n</div>\r\n \r\n\r\n<app-shared *ngIf=\"productDetail && productDetail.productcolor && productDetail.detail\" [detailInput]=\"productDetail.detail\" [imageInput]=\"productDetail.productcolor\"></app-shared>"

/***/ }),

/***/ "./src/app/page/product-detail/product-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/page/product-detail/product-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_service_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/service-api/service-api.service */ "./src/app/services/service-api/service-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(serviceApi, activatedRoute) {
        this.serviceApi = serviceApi;
        this.activatedRoute = activatedRoute;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute
            .queryParams
            .subscribe(function (params) {
            if (params['id']) {
                _this.itemId = params['id'];
                _this.getProductDerail(_this.itemId);
            }
        });
    };
    ProductDetailComponent.prototype.getProductDerail = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.serviceApi.getProdById(id)];
                    case 1:
                        res = _a.sent();
                        // console.log(res)
                        this.productDetail = res.data;
                        console.log(this.productDetail);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/page/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/page/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_service_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ServiceApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/page/selected-product/selected-product.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/page/selected-product/selected-product.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font-header{\r\n    font-size: 3vw;\r\n    font-family: 'segoe_print', 'arial', sans-serif;\r\n}\r\n\r\n@font-face {\r\n    font-family: segoe_print;\r\n    src: url('segoe_print.ttf') format(\"opentype\");\r\n}\r\n\r\n.size-image{\r\n    width: 40%;\r\n    height: 20vw;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.margin-image {\r\n    margin-right: 5px;\r\n    margin-left: 5px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.text-center {\r\n    text-align: center;\r\n}\r\n\r\n.border-image{\r\n    border: solid 1px #e2e2e2;\r\n    border-radius: 2%\r\n}\r\n\r\n.full-width{\r\n    width: 100%;\r\n}\r\n\r\n.color-font {\r\n    color: #d60045;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/page/selected-product/selected-product.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/page/selected-product/selected-product.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-2\"></div>\r\n  <div class=\"col-8\">\r\n    <p>\r\n      <span class=\"mr-2 font-header\">my</span>\r\n      <span class=\"mr-2 font-header color-font\">Lips</span>\r\n      <span class=\"mr-2 font-header\">my</span>\r\n      <span class=\"mr-2 font-header color-font\">Life</span>\r\n    </p>\r\n  </div>\r\n  <div class=\"col-2\"></div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-2\"></div>\r\n  <div class=\"col-8 col-sm-8 col-md-8\">\r\n    <div class=\"text-center\">\r\n      <div style=\"display: inline\" *ngFor=\"let item of data\">\r\n        <img class=\"size-image margin-image border-image\" [src]=\"item.color\" alt=\"color\" (click)=\"openProductDetail(item)\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-2\"></div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-2\"></div>\r\n  <div class=\"col-8\">\r\n    <img class=\"border-image full-width\" src=\"https://res.cloudinary.com/dyiuidzsc/image/upload/v1548991563/Rabu%20Rabu/perfect%20lips/project.jpg\"\r\n      alt=\"\">\r\n  </div>\r\n  <div class=\"col-2\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/page/selected-product/selected-product.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/page/selected-product/selected-product.component.ts ***!
  \*********************************************************************/
/*! exports provided: SelectedProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedProductComponent", function() { return SelectedProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_service_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/service-api/service-api.service */ "./src/app/services/service-api/service-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var SelectedProductComponent = /** @class */ (function () {
    function SelectedProductComponent(serviceApi, router) {
        this.serviceApi = serviceApi;
        this.router = router;
    }
    SelectedProductComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    SelectedProductComponent.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.serviceApi.getProd()];
                    case 1:
                        res = _a.sent();
                        this.data = res.data;
                        console.log(this.data);
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectedProductComponent.prototype.openProductDetail = function (item) {
        this.router.navigate(['product-detail'], { queryParams: { id: item._id } });
    };
    SelectedProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-selected-product',
            template: __webpack_require__(/*! ./selected-product.component.html */ "./src/app/page/selected-product/selected-product.component.html"),
            styles: [__webpack_require__(/*! ./selected-product.component.css */ "./src/app/page/selected-product/selected-product.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_service_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ServiceApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SelectedProductComponent);
    return SelectedProductComponent;
}());



/***/ }),

/***/ "./src/app/services/service-api/service-api.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/service-api/service-api.service.ts ***!
  \*************************************************************/
/*! exports provided: ServiceApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceApiService", function() { return ServiceApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiceApiService = /** @class */ (function () {
    function ServiceApiService(http) {
        this.http = http;
    }
    ServiceApiService.prototype.authorizationHeader = function () {
        // console.log(token);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
        return headers;
    };
    ServiceApiService.prototype.saveUser = function (body) {
        return this.http.post('https://rabu-authen.herokuapp.com/api/auth/signin', body, { headers: this.authorizationHeader() }).toPromise();
    };
    ServiceApiService.prototype.sigup = function (body) {
        return this.http.post('https://rabu-authen.herokuapp.com/api/auth/signup', body, { headers: this.authorizationHeader() }).toPromise();
    };
    ServiceApiService.prototype.getProd = function () {
        return this.http.get('https://rabu-product-service.herokuapp.com/api/productsrabu', { headers: this.authorizationHeader() }).toPromise();
    };
    ServiceApiService.prototype.getProdById = function (_id) {
        return this.http.get('https://rabu-product-service.herokuapp.com/api/productsrabu/' + _id, { headers: this.authorizationHeader() }).toPromise();
    };
    ServiceApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServiceApiService);
    return ServiceApiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    environment: "dev",
    appName: "raburabulovelove-web",
    apiUrl: "http://13.250.121.197"
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\html\robu-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map