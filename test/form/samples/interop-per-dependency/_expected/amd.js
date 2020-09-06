define(['require', 'external-auto', 'external-default', 'external-defaultOnly', 'external-esModule'], function (require, fooAuto, fooDefault, fooDefaultOnly, fooEsModule) { 'use strict';

	function _interopNamespace(e) {
		return e && e.__esModule ? e : _interopNamespaceDefault(e);
	}

	function _interopNamespaceDefault(e) {
		var n = Object.defineProperty(Object.create(null), '__esModule', { value: true });
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () {
							return e[k];
						}
					});
				}
			});
		}
		n['default'] = e;
		return Object.freeze(n);
	}

	function _interopNamespaceDefaultOnly(e) {
		return Object.freeze(Object.defineProperty({__proto__: null, 'default': e}, '__esModule', { value: true }));
	}

	var fooAuto__namespace = /*#__PURE__*/_interopNamespace(fooAuto);
	var fooDefault__namespace = /*#__PURE__*/_interopNamespaceDefault(fooDefault);
	var fooDefaultOnly__namespace = /*#__PURE__*/_interopNamespaceDefaultOnly(fooDefaultOnly);

	console.log(fooAuto__namespace['default'], fooAuto.barAuto, fooAuto__namespace);
	console.log(fooDefault, fooDefault.barDefault, fooDefault__namespace);
	console.log(fooDefaultOnly, fooDefaultOnly__namespace);
	console.log(fooEsModule['default'], fooEsModule.barEsModule, fooEsModule);

	new Promise(function (resolve, reject) { require(['external-auto'], function (m) { resolve(/*#__PURE__*/_interopNamespace(m)); }, reject) }).then(console.log);
	new Promise(function (resolve, reject) { require(['external-default'], function (m) { resolve(/*#__PURE__*/_interopNamespaceDefault(m)); }, reject) }).then(console.log);
	new Promise(function (resolve, reject) { require(['external-defaultOnly'], function (m) { resolve(/*#__PURE__*/_interopNamespaceDefaultOnly(m)); }, reject) }).then(console.log);
	new Promise(function (resolve, reject) { require(['external-esModule'], resolve, reject) }).then(console.log);
	new Promise(function (resolve, reject) { require([globalThis.external1], function (m) { resolve(/*#__PURE__*/_interopNamespace(m)); }, reject) }).then(console.log);
	new Promise(function (resolve, reject) { require([globalThis.external2], function (m) { resolve(/*#__PURE__*/_interopNamespace(m)); }, reject) }).then(console.log);

});