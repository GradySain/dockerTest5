(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[4263],{

/***/ 64797:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(25108);
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _extends2=_interopRequireDefault(__webpack_require__(67154));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _react=_interopRequireDefault(__webpack_require__(67294));var _reactRouterDom=__webpack_require__(39711);var _reactIntl=__webpack_require__(97132);var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _pick=_interopRequireDefault(__webpack_require__(78718));var _get=_interopRequireDefault(__webpack_require__(27361));var _omit=_interopRequireDefault(__webpack_require__(57557));var _helperPlugin=__webpack_require__(68547);var _reactQuery=__webpack_require__(23724);var _formik=__webpack_require__(80831);var _Box=__webpack_require__(5493);var _Button=__webpack_require__(19408);var _Grid=__webpack_require__(34626);var _Layout=__webpack_require__(78862);var _Link=__webpack_require__(85104);var _Typography=__webpack_require__(49425);var _Main=__webpack_require__(62031);var _Stack=__webpack_require__(9008);var _ArrowLeft=_interopRequireDefault(__webpack_require__(68717));var _Check=_interopRequireDefault(__webpack_require__(84734));var _utils=__webpack_require__(26595);var _api=__webpack_require__(50289);var _layout=_interopRequireDefault(__webpack_require__(59015));var _users=__webpack_require__(37108);var _SelectRoles=_interopRequireDefault(__webpack_require__(22849));var MagicLink=function(){if(window&&window.strapi&&window.strapi.isEE){return __webpack_require__(43685)/* .default */ .Z;}return __webpack_require__(84768)/* .default */ .Z;}();var fieldsToPick=['email','firstname','lastname','username','isActive','roles'];var EditPage=function EditPage(_ref){var canUpdate=_ref.canUpdate;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useRouteMatch=(0,_reactRouterDom.useRouteMatch)('/settings/users/:id'),id=_useRouteMatch.params.id;var _useHistory=(0,_reactRouterDom.useHistory)(),push=_useHistory.push;var _useAppInfos=(0,_helperPlugin.useAppInfos)(),setUserDisplayName=_useAppInfos.setUserDisplayName;var toggleNotification=(0,_helperPlugin.useNotification)();var _useOverlayBlocker=(0,_helperPlugin.useOverlayBlocker)(),lockApp=_useOverlayBlocker.lockApp,unlockApp=_useOverlayBlocker.unlockApp;(0,_helperPlugin.useFocusWhenNavigate)();var _useQuery=(0,_reactQuery.useQuery)(['user',id],function(){return(0,_api.fetchUser)(id);},{retry:false,keepPreviousData:false,staleTime:1000*20,onError:function onError(err){var status=err.response.status;// Redirect the use to the homepage if is not allowed to read
// Redirect the use to the homepage if is not allowed to read
if(status===403){toggleNotification({type:'info',message:{id:'notification.permission.not-allowed-read',defaultMessage:'You are not allowed to see this document'}});push('/');}console.log(err.response.status);}}),status=_useQuery.status,data=_useQuery.data;var handleSubmit=/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(body,actions){var _data,userInfos,userDisplayName,errors,fieldsErrors;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:lockApp();_context.prev=1;_context.next=4;return(0,_api.putUser)(id,(0,_omit["default"])(body,'confirmPassword'));case 4:_data=_context.sent;toggleNotification({type:'success',message:formatMessage({id:'notification.success.saved',defaultMessage:'Saved'})});userInfos=_helperPlugin.auth.getUserInfo();// The user is updating himself
if(id.toString()===userInfos.id.toString()){_helperPlugin.auth.setUserInfo(_data);userDisplayName=(0,_get["default"])(body,'username')||(0,_utils.getFullName)(body.firstname,body.lastname);setUserDisplayName(userDisplayName);}actions.setValues((0,_pick["default"])(body,fieldsToPick));_context.next=17;break;case 11:_context.prev=11;_context.t0=_context["catch"](1);// FIXME when API errors are ready
errors=(0,_utils.formatAPIErrors)(_context.t0.response.data);fieldsErrors=Object.keys(errors).reduce(function(acc,current){acc[current]=errors[current].id;return acc;},{});actions.setErrors(fieldsErrors);toggleNotification({type:'warning',message:(0,_get["default"])(_context.t0,'response.data.message','notification.error')});case 17:unlockApp();case 18:case"end":return _context.stop();}}},_callee,null,[[1,11]]);}));return function handleSubmit(_x,_x2){return _ref2.apply(this,arguments);};}();var isLoading=status!=='success';var headerLabel=isLoading?{id:'app.containers.Users.EditPage.header.label-loading',defaultMessage:'Edit user'}:{id:'app.containers.Users.EditPage.header.label',defaultMessage:'Edit {name}'};var initialData=Object.keys((0,_pick["default"])(data,fieldsToPick)).reduce(function(acc,current){if(current==='roles'){acc[current]=((data===null||data===void 0?void 0:data.roles)||[]).map(function(_ref3){var id=_ref3.id;return id;});return acc;}acc[current]=data===null||data===void 0?void 0:data[current];return acc;},{});var headerLabelName=initialData.username||(0,_utils.getFullName)(initialData.firstname,initialData.lastname);var title=formatMessage(headerLabel,{name:headerLabelName});if(isLoading){return/*#__PURE__*/_react["default"].createElement(_Main.Main,{"aria-busy":"true"},/*#__PURE__*/_react["default"].createElement(_helperPlugin.SettingsPageTitle,{name:"Users"}),/*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout,{primaryAction:/*#__PURE__*/_react["default"].createElement(_Button.Button,{disabled:true,startIcon:/*#__PURE__*/_react["default"].createElement(_Check["default"],null),type:"button",size:"L"},formatMessage({id:'form.button.save',defaultMessage:'Save'})),title:title,navigationAction:/*#__PURE__*/_react["default"].createElement(_Link.Link,{startIcon:/*#__PURE__*/_react["default"].createElement(_ArrowLeft["default"],null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},formatMessage({id:'app.components.go-back',defaultMessage:'Go back'}))}),/*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout,null,/*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage,null)));}return/*#__PURE__*/_react["default"].createElement(_Main.Main,null,/*#__PURE__*/_react["default"].createElement(_helperPlugin.SettingsPageTitle,{name:"Users"}),/*#__PURE__*/_react["default"].createElement(_formik.Formik,{onSubmit:handleSubmit,initialValues:initialData,validateOnChange:false,validationSchema:_users.editValidation},function(_ref4){var errors=_ref4.errors,values=_ref4.values,handleChange=_ref4.handleChange,isSubmitting=_ref4.isSubmitting;return/*#__PURE__*/_react["default"].createElement(_helperPlugin.Form,null,/*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout,{primaryAction:/*#__PURE__*/_react["default"].createElement(_Button.Button,{disabled:isSubmitting||!canUpdate,startIcon:/*#__PURE__*/_react["default"].createElement(_Check["default"],null),loading:isSubmitting,type:"submit",size:"L"},formatMessage({id:'form.button.save',defaultMessage:'Save'})),title:title,navigationAction:/*#__PURE__*/_react["default"].createElement(_Link.Link,{startIcon:/*#__PURE__*/_react["default"].createElement(_ArrowLeft["default"],null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},formatMessage({id:'app.components.go-back',defaultMessage:'Go back'}))}),/*#__PURE__*/_react["default"].createElement(_Layout.ContentLayout,null,(data===null||data===void 0?void 0:data.registrationToken)&&/*#__PURE__*/_react["default"].createElement(_Box.Box,{paddingBottom:6},/*#__PURE__*/_react["default"].createElement(MagicLink,{registrationToken:data.registrationToken})),/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:7},/*#__PURE__*/_react["default"].createElement(_Box.Box,{background:"neutral0",hasRadius:true,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:4},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"delta",as:"h2"},formatMessage({id:'app.components.Users.ModalCreateBody.block-title.details',defaultMessage:'Details'})),/*#__PURE__*/_react["default"].createElement(_Grid.Grid,{gap:5},_layout["default"].map(function(row){return row.map(function(input){return/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,(0,_extends2["default"])({key:input.name},input.size),/*#__PURE__*/_react["default"].createElement(_helperPlugin.GenericInput,(0,_extends2["default"])({},input,{disabled:!canUpdate,error:errors[input.name],onChange:handleChange,value:values[input.name]||''})));});})))),/*#__PURE__*/_react["default"].createElement(_Box.Box,{background:"neutral0",hasRadius:true,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:4},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"delta",as:"h2"},formatMessage({id:'app.components.Users.ModalCreateBody.block-title.login',defaultMessage:'Login settings'})),/*#__PURE__*/_react["default"].createElement(_Grid.Grid,{gap:5},/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:6,xs:12},/*#__PURE__*/_react["default"].createElement(_SelectRoles["default"],{disabled:!canUpdate,error:errors.roles,onChange:handleChange,value:values.roles}))))))));}));};EditPage.propTypes={canUpdate:_propTypes["default"].bool.isRequired};var _default=EditPage;exports.default=_default;

/***/ }),

/***/ 50289:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.putUser=exports.fetchUser=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _utils=__webpack_require__(53777);var fetchUser=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(id){var _yield$axiosInstance$,data;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _utils.axiosInstance.get("/admin/users/".concat(id));case 2:_yield$axiosInstance$=_context.sent;data=_yield$axiosInstance$.data;return _context.abrupt("return",data.data);case 5:case"end":return _context.stop();}}},_callee);}));return function fetchUser(_x){return _ref.apply(this,arguments);};}();exports.fetchUser=fetchUser;var putUser=/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(id,body){var _yield$axiosInstance$2,data;return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _utils.axiosInstance.put("/admin/users/".concat(id),body);case 2:_yield$axiosInstance$2=_context2.sent;data=_yield$axiosInstance$2.data;return _context2.abrupt("return",data.data);case 5:case"end":return _context2.stop();}}},_callee2);}));return function putUser(_x2,_x3){return _ref2.apply(this,arguments);};}();exports.putUser=putUser;

/***/ }),

/***/ 59015:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var layout=[[{intlLabel:{id:'Auth.form.firstname.label',defaultMessage:'First name'},name:'firstname',placeholder:{id:'Auth.form.firstname.placeholder',defaultMessage:'e.g. Kai'},type:'text',size:{col:6,xs:12}},{intlLabel:{id:'Auth.form.lastname.label',defaultMessage:'Last name'},name:'lastname',placeholder:{id:'Auth.form.lastname.placeholder',defaultMessage:'e.g. Doe'},type:'text',size:{col:6,xs:12}}],[{intlLabel:{id:'Auth.form.email.label',defaultMessage:'Email'},name:'email',placeholder:{id:'Auth.form.email.placeholder',defaultMessage:'e.g. kai.doe@strapi.io'},type:'email',size:{col:6,xs:12}},{intlLabel:{id:'Auth.form.username.label',defaultMessage:'Username'},name:'username',placeholder:{id:'Auth.form.username.placeholder',defaultMessage:'e.g. Kai_Doe'},type:'email',size:{col:6,xs:12}}],[{intlLabel:{id:'Auth.form.password.label',defaultMessage:'Password'},name:'password',type:'password',size:{col:6,xs:12}},{intlLabel:{id:'Auth.form.confirmPassword.label',defaultMessage:'Password confirmation'},name:'confirmPassword',type:'password',size:{col:6,xs:12}}],[{intlLabel:{id:'Auth.form.active.label',defaultMessage:'Active'},name:'isActive',type:'bool',size:{col:6,xs:12}}]];var _default=layout;exports.default=_default;

/***/ }),

/***/ 20262:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(67294));var _helperPlugin=__webpack_require__(68547);var _reactRouterDom=__webpack_require__(39711);var _lodash=__webpack_require__(96486);var _permissions=_interopRequireDefault(__webpack_require__(13240));var _EditPage=_interopRequireDefault(__webpack_require__(64797));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var ProtectedEditPage=function ProtectedEditPage(){var toggleNotification=(0,_helperPlugin.useNotification)();var permissions=(0,_react.useMemo)(function(){return{read:_permissions["default"].settings.users.read,update:_permissions["default"].settings.users.update};},[]);var _useRBAC=(0,_helperPlugin.useRBAC)(permissions),isLoading=_useRBAC.isLoading,_useRBAC$allowedActio=_useRBAC.allowedActions,canRead=_useRBAC$allowedActio.canRead,canUpdate=_useRBAC$allowedActio.canUpdate;var _useLocation=(0,_reactRouterDom.useLocation)(),state=_useLocation.state;var from=(0,_lodash.get)(state,'from','/');(0,_react.useEffect)(function(){if(!isLoading){if(!canRead&&!canUpdate){toggleNotification({type:'info',message:{id:'notification.permission.not-allowed-read',defaultMessage:'You are not allowed to see this document'}});}}},[isLoading,canRead,canUpdate,toggleNotification]);if(isLoading){return/*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage,null);}if(!canRead&&!canUpdate){return/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect,{to:from});}return/*#__PURE__*/_react["default"].createElement(_EditPage["default"],{canUpdate:canUpdate});};var _default=ProtectedEditPage;exports.default=_default;

/***/ }),

/***/ 38059:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _IconButton=__webpack_require__(30741);var _helperPlugin=__webpack_require__(68547);var _Duplicate=_interopRequireDefault(__webpack_require__(67483));var _reactCopyToClipboard=__webpack_require__(74855);var _reactIntl=__webpack_require__(97132);// FIXME replace with parts when ready
var Envelope=function Envelope(){return/*#__PURE__*/_react["default"].createElement("svg",{xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/_react["default"].createElement("text",{transform:"translate(-23 -9)",fill:"#4B515A",fillRule:"evenodd",fontSize:"32",fontFamily:"AppleColorEmoji, Apple Color Emoji"},/*#__PURE__*/_react["default"].createElement("tspan",{x:"23",y:"36"},"\u2709\uFE0F")));};var MagicLinkWrapper=function MagicLinkWrapper(_ref){var children=_ref.children,target=_ref.target;var toggleNotification=(0,_helperPlugin.useNotification)();var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var handleCopy=function handleCopy(){toggleNotification({type:'info',message:{id:'notification.link-copied'}});};var copyLabel=formatMessage({id:'app.component.CopyToClipboard.label',defaultMessage:'Copy to clipboard'});return/*#__PURE__*/_react["default"].createElement(_helperPlugin.ContentBox,{endAction:/*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard.CopyToClipboard,{onCopy:handleCopy,text:target},/*#__PURE__*/_react["default"].createElement(_IconButton.IconButton,{label:copyLabel,noBorder:true,icon:/*#__PURE__*/_react["default"].createElement(_Duplicate["default"],null)})),title:target,titleEllipsis:true,subtitle:children,icon:/*#__PURE__*/_react["default"].createElement(Envelope,null),iconBackground:"neutral100"});};MagicLinkWrapper.propTypes={children:_propTypes["default"].oneOfType([_propTypes["default"].element,_propTypes["default"].string]).isRequired,target:_propTypes["default"].string.isRequired};var _default=MagicLinkWrapper;exports.default=_default;

/***/ }),

/***/ 84768:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
var _interopRequireDefault=__webpack_require__(95318);__webpack_unused_export__ = ({value:true});exports.Z=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _reactIntl=__webpack_require__(97132);var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _basename=_interopRequireDefault(__webpack_require__(92424));var _MagicLinkWrapper=_interopRequireDefault(__webpack_require__(38059));var MagicLink=function MagicLink(_ref){var registrationToken=_ref.registrationToken;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var target="".concat(window.location.origin).concat(_basename["default"],"auth/register?registrationToken=").concat(registrationToken);return/*#__PURE__*/_react["default"].createElement(_MagicLinkWrapper["default"],{target:target},formatMessage({id:'app.components.Users.MagicLink.connect',defaultMessage:'Send this link to the user for them to connect.'}));};MagicLink.defaultProps={registrationToken:''};MagicLink.propTypes={registrationToken:_propTypes["default"].string};var _default=MagicLink;exports.Z=_default;

/***/ }),

/***/ 22849:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactIntl=__webpack_require__(97132);var _Select=__webpack_require__(43808);var _reactQuery=__webpack_require__(23724);var _styledComponents=_interopRequireWildcard(__webpack_require__(78384));var _Loader=_interopRequireDefault(__webpack_require__(57572));var _utils=__webpack_require__(53777);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var rotation=/*#__PURE__*/(0,_styledComponents.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(359deg);}"]);var LoadingWrapper=/*#__PURE__*/_styledComponents["default"].div.withConfig({displayName:"SelectRoles__LoadingWrapper",componentId:"sc-1z5s3s-0"})(["animation:"," 2s infinite linear;"],rotation);var Loader=function Loader(){return/*#__PURE__*/_react["default"].createElement(LoadingWrapper,null,/*#__PURE__*/_react["default"].createElement(_Loader["default"],null));};var fetchData=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(){var _yield$axiosInstance$,data;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _utils.axiosInstance.get('/admin/roles');case 2:_yield$axiosInstance$=_context.sent;data=_yield$axiosInstance$.data;return _context.abrupt("return",data.data);case 5:case"end":return _context.stop();}}},_callee);}));return function fetchData(){return _ref.apply(this,arguments);};}();var SelectRoles=function SelectRoles(_ref2){var disabled=_ref2.disabled,error=_ref2.error,_onChange=_ref2.onChange,value=_ref2.value;var _useQuery=(0,_reactQuery.useQuery)(['roles'],fetchData,{staleTime:50000}),status=_useQuery.status,data=_useQuery.data;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var errorMessage=error?formatMessage({id:error,defaultMessage:error}):'';var label=formatMessage({id:'app.components.Users.ModalCreateBody.block-title.roles',defaultMessage:"User's roles"});var hint=formatMessage({id:'app.components.Users.ModalCreateBody.block-title.roles.description',defaultMessage:'Your user can have one or several roles'});var placeholder=formatMessage({id:'app.components.Select.placeholder',defaultMessage:'Select'});var startIcon=status==='loading'?/*#__PURE__*/_react["default"].createElement(Loader,null):undefined;return/*#__PURE__*/_react["default"].createElement(_Select.Select,{id:"roles",disabled:disabled,error:errorMessage,hint:hint,label:label,name:"roles",onChange:function onChange(v){_onChange({target:{name:'roles',value:v}});},placeholder:placeholder,multi:true,startIcon:startIcon,value:value,withTags:true},(data||[]).map(function(role){return/*#__PURE__*/_react["default"].createElement(_Select.Option,{key:role.id,value:role.id},role.name);}));};SelectRoles.defaultProps={disabled:false,error:undefined};SelectRoles.propTypes={disabled:_propTypes["default"].bool,error:_propTypes["default"].string,onChange:_propTypes["default"].func.isRequired,value:_propTypes["default"].array.isRequired};var _default=SelectRoles;exports.default=_default;

/***/ }),

/***/ 33694:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var yup=_interopRequireWildcard(__webpack_require__(53209));var _profile=__webpack_require__(21600);var _roles=_interopRequireDefault(__webpack_require__(20703));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}var schema=yup.object().shape(_objectSpread(_objectSpread({},_profile.commonUserSchema),{},{isActive:yup.bool()},_roles["default"]));var _default=schema;exports.default=_default;

/***/ }),

/***/ 37108:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));Object.defineProperty(exports, "editValidation", ({enumerable:true,get:function get(){return _edit["default"];}}));Object.defineProperty(exports, "profileValidation", ({enumerable:true,get:function get(){return _profile["default"];}}));Object.defineProperty(exports, "rolesValidation", ({enumerable:true,get:function get(){return _roles["default"];}}));var _edit=_interopRequireDefault(__webpack_require__(33694));var _profile=_interopRequireDefault(__webpack_require__(21600));var _roles=_interopRequireDefault(__webpack_require__(20703));

/***/ }),

/***/ 21600:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=exports.commonUserSchema=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var yup=_interopRequireWildcard(__webpack_require__(53209));var _helperPlugin=__webpack_require__(68547);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}var commonUserSchema={firstname:yup.mixed().required(_helperPlugin.translatedErrors.required),lastname:yup.mixed(),email:yup.string().email(_helperPlugin.translatedErrors.email).lowercase().required(_helperPlugin.translatedErrors.required),username:yup.string().nullable(),password:yup.string().min(8,_helperPlugin.translatedErrors.minLength).matches(/[a-z]/,'components.Input.error.contain.lowercase').matches(/[A-Z]/,'components.Input.error.contain.uppercase').matches(/\d/,'components.Input.error.contain.number'),confirmPassword:yup.string().min(8,_helperPlugin.translatedErrors.minLength).oneOf([yup.ref('password'),null],'components.Input.error.password.noMatch').when('password',function(password,passSchema){return password?passSchema.required(_helperPlugin.translatedErrors.required):passSchema;})};exports.commonUserSchema=commonUserSchema;var schema=_objectSpread(_objectSpread({},commonUserSchema),{},{currentPassword:yup.string().when(['password','confirmPassword'],function(password,confirmPassword,passSchema){return password||confirmPassword?passSchema.required(_helperPlugin.translatedErrors.required):passSchema;}),preferedLanguage:yup.string().nullable()});var _default=schema;exports.default=_default;

/***/ }),

/***/ 20703:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var yup=_interopRequireWildcard(__webpack_require__(53209));var _helperPlugin=__webpack_require__(68547);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var schema={roles:yup.array().min(1,_helperPlugin.translatedErrors.required).required(_helperPlugin.translatedErrors.required)};var _default=schema;exports.default=_default;

/***/ }),

/***/ 43685:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
var _interopRequireDefault=__webpack_require__(95318);__webpack_unused_export__ = ({value:true});exports.Z=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _reactIntl=__webpack_require__(97132);var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _basename=_interopRequireDefault(__webpack_require__(92424));var _MagicLinkWrapper=_interopRequireDefault(__webpack_require__(38059));// FIXME replace with parts compo when ready
var MagicLink=function MagicLink(_ref){var registrationToken=_ref.registrationToken;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;if(registrationToken){return/*#__PURE__*/_react["default"].createElement(_MagicLinkWrapper["default"],{target:"".concat(window.location.origin).concat(_basename["default"],"auth/register?registrationToken=").concat(registrationToken)},formatMessage({id:'app.components.Users.MagicLink.connect',defaultMessage:'Send this link to the user for them to connect.'}));}return/*#__PURE__*/_react["default"].createElement(_MagicLinkWrapper["default"],{target:"".concat(window.location.origin).concat(_basename["default"],"auth/login")},formatMessage({id:'app.components.Users.MagicLink.connect.sso',defaultMessage:'Send this link to the user, the first login can be made via a SSO provider.'}));};MagicLink.defaultProps={registrationToken:''};MagicLink.propTypes={registrationToken:_propTypes["default"].string};var _default=MagicLink;exports.Z=_default;

/***/ })

}]);