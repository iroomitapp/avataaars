"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lodash_1 = require("lodash");
var facialHair_1 = require("./facialHair");
var HatColor_1 = require("./HatColor");
var WinterHat2 = /** @class */ (function (_super) {
    __extends(WinterHat2, _super);
    function WinterHat2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = (0, lodash_1.uniqueId)('react-mask-');
        _this.mask2 = (0, lodash_1.uniqueId)('react-mask-');
        _this.path1 = (0, lodash_1.uniqueId)('react-path-');
        _this.path2 = (0, lodash_1.uniqueId)('react-path-');
        _this.path3 = (0, lodash_1.uniqueId)('react-path-');
        return _this;
    }
    WinterHat2.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2, path3 = _a.path3;
        return (React.createElement("g", { id: 'Top' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path3, x: '0', y: '0', width: '264', height: '280' }),
                React.createElement("path", { d: 'M72,21 C126.772655,21 144,68.8032255 144,103.04488 L144,176.910255 C144,196.404852 121.366901,196.446757 121.366901,165.988782 L121.366901,86.5347425 C121.366901,80.4596103 117.635097,77.5347425 111.551408,77.5347425 L72,77.5347425 L32.4485915,77.5347425 C26.3649028,77.5347425 22.6330986,80.4596103 22.6330986,86.5347425 L22.6330986,165.988782 C22.6330986,196.446757 -1.41137102e-14,196.404852 0,176.910255 L0,103.04488 C-7.11930515e-15,68.8032255 17.2273451,21 72,21 Z', id: path1 }),
                React.createElement("path", { d: 'M101.428403,98.1685688 C98.9148372,100.462621 96.23722,101.494309 92.8529444,100.772863 C92.2705777,100.648833 89.8963391,96.2345713 83.9998344,96.2345713 C78.1033297,96.2345713 75.7294253,100.648833 75.1467245,100.772863 C71.7624488,101.494309 69.0848316,100.462621 66.5712661,98.1685688 C61.8461772,93.855604 57.9166219,87.9081858 60.2778299,81.4191814 C61.5083844,78.0369425 63.5097479,74.3237342 67.1506257,73.2459109 C71.0384163,72.0955419 76.4968931,73.2439051 80.4147542,72.4582708 C81.6840664,72.2035248 83.0706538,71.7508657 83.9998344,71 C84.929015,71.7508657 86.3159365,72.2035248 87.5845805,72.4582708 C91.5027758,73.2439051 96.9612525,72.0955419 100.849043,73.2459109 C104.489921,74.3237342 106.491284,78.0369425 107.722173,81.4191814 C110.083381,87.9081858 106.153826,93.855604 101.428403,98.1685688 M140.081033,26 C136.670693,34.4002532 137.987774,44.8580348 137.356666,53.6758724 C136.844038,60.8431942 135.33712,71.5857526 128.972858,76.214531 C125.718361,78.5816138 119.79436,82.5598986 115.54187,81.4501943 C112.614539,80.6863848 112.302182,72.290096 108.455284,69.1469801 C104.09172,65.5823153 98.6429854,64.0160432 93.1491481,64.2578722 C90.7785381,64.3622683 85.9841367,64.3374908 83.9999331,66.1604584 C82.0157295,64.3374908 77.2216647,64.3622683 74.8510547,64.2578722 C69.3568808,64.0160432 63.9081467,65.5823153 59.5445817,69.1469801 C55.6976839,72.290096 55.3856641,80.6863848 52.4583326,81.4501943 C48.2058427,82.5598986 42.2818421,78.5816138 39.0270077,76.214531 C32.6624096,71.5857526 31.1561652,60.8431942 30.642864,53.6758724 C30.0120926,44.8580348 31.3291729,34.4002532 27.9188335,26 C26.2597768,26 27.3540339,42.1288693 27.3540339,42.1288693 L27.3540339,62.4851205 C27.3856735,77.7732046 36.935095,100.655445 58.1080116,109.393004 C63.2861266,111.52982 75.0153111,115 83.9999331,115 C92.9845551,115 104.71374,111.860188 109.891855,109.723371 C131.064771,100.985813 140.614193,77.7732046 140.646169,62.4851205 L140.646169,42.1288693 C140.646169,42.1288693 141.740089,26 140.081033,26', id: path2 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path3 })),
            React.createElement("g", { id: 'Mask' }),
            React.createElement("g", { id: 'Top/Accessories/Winter-Hat-2', transform: 'translate(-1.000000, 0.000000)' },
                React.createElement("g", { id: 'hat', strokeWidth: '1', fillRule: 'evenodd', transform: 'translate(61.000000, 0.000000)' },
                    React.createElement("g", { id: 'string', transform: 'translate(0.000000, 176.000000)', fill: '#F4F4F4' },
                        React.createElement("circle", { id: 'puff', cx: '9', cy: '65', r: '9' }),
                        React.createElement("rect", { x: '8', y: '0', width: '2', height: '58' })),
                    React.createElement("g", { id: 'string', transform: 'translate(126.000000, 168.000000)', fill: '#F4F4F4' },
                        React.createElement("circle", { id: 'puff', cx: '9', cy: '65', r: '9' }),
                        React.createElement("rect", { x: '8', y: '0', width: '2', height: '58' })),
                    React.createElement("circle", { id: 'puff', fill: '#F4F4F4', cx: '72', cy: '20', r: '20' }),
                    React.createElement("mask", { id: mask2, fill: 'white' },
                        React.createElement("use", { xlinkHref: '#' + path1 })),
                    React.createElement("use", { id: 'Combined-Shape', fill: '#F4F4F4', xlinkHref: '#' + path1 }),
                    React.createElement(HatColor_1.default, { maskID: mask2, defaultColor: 'Blue01' }),
                    React.createElement("rect", { id: 'color-dark', fillOpacity: '0.2', fill: '#000000', x: '-1', y: '21', width: '146', height: '46', mask: "url(#".concat(mask2, ")") }),
                    React.createElement("g", { id: 'light-triangles', transform: 'translate(29.000000, 32.000000)', fill: '#FFFFFF', fillOpacity: '0.5' },
                        React.createElement("polygon", { id: 'Triangle', transform: 'translate(12.500000, 9.000000) rotate(180.000000) translate(-12.500000, -9.000000) ', points: '12.5 0 25 18 0 18' }),
                        React.createElement("polygon", { id: 'Triangle', transform: 'translate(43.500000, 9.000000) rotate(180.000000) translate(-43.500000, -9.000000) ', points: '43.5 0 56 18 31 18' }),
                        React.createElement("polygon", { id: 'Triangle', transform: 'translate(74.500000, 9.000000) rotate(180.000000) translate(-74.500000, -9.000000) ', points: '74.5 0 87 18 62 18' })),
                    React.createElement("g", { id: 'dark-triangles', transform: 'translate(13.000000, 41.000000)', fill: '#000000', fillOpacity: '0.5' },
                        React.createElement("polygon", { id: 'Triangle', points: '12.5 0 25 18 0 18' }),
                        React.createElement("polygon", { id: 'Triangle', points: '43.5 0 56 18 31 18' }),
                        React.createElement("polygon", { id: 'Triangle', points: '74.5 0 87 18 62 18' }),
                        React.createElement("polygon", { id: 'Triangle', points: '105.5 0 118 18 93 18' }))),
                React.createElement(facialHair_1.default, null),
                this.props.children)));
    };
    WinterHat2.optionValue = 'WinterHat2';
    return WinterHat2;
}(React.Component));
exports.default = WinterHat2;
// Keep the static property for compatibility
WinterHat2.optionValue = 'WinterHat2';
