"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var words = [
            { id: 1, english: 'gorgeous', explain: '极好的，称心的', type: 'a' },
            { id: 2, english: 'cherish', explain: '珍惜', type: 'v' },
            { id: 3, english: 'bizarre', explain: '奇怪的，离奇的', type: 'a' },
            { id: 4, english: 'cherish', explain: '珍惜', type: 'v' },
            { id: 5, english: 'gorgeous', explain: '极好的，称心的', type: 'a' },
            { id: 6, english: 'cherish', explain: '珍惜', type: 'v' },
            { id: 7, english: 'gorgeous', explain: '极好的，称心的', type: 'a' },
            { id: 8, english: 'cherish', explain: '珍惜', type: 'v' },
            { id: 9, english: 'gorgeous', explain: '极好的，称心的', type: 'a' },
            { id: 10, english: 'cherish', explain: '珍惜', type: 'v' },
            { id: 11, english: 'icecream', explain: '冰淇淋', type: 'n' }
        ];
        return { words: words };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map