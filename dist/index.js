"use strict";
/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.setPermissions = exports.deleteData = exports.getData = exports.updateData = exports.createData = exports.updateEmail = exports.updatePassword = exports.updateUsername = exports.refreshToken = exports.login = exports.deleteToken = exports.createToken = exports.deleteAccount = exports.createAccount = exports.baseUrl = void 0;
exports.baseUrl = "http://localhost:3000/api/v1/accounts";
function createAccount(username, password, email) {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(exports.baseUrl, "/account/create"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: username,
                            password: password,
                            email: email
                        })
                    })];
                case 1:
                    r = _a.sent();
                    return [4 /*yield*/, r.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.createAccount = createAccount;
function deleteAccount(username, password) {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(exports.baseUrl, "/account/delete"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: username,
                            password: password
                        })
                    })];
                case 1:
                    r = _a.sent();
                    return [4 /*yield*/, r.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.deleteAccount = deleteAccount;
function createToken(username, password, permissions) {
    if (permissions === void 0) { permissions = ["ADMIN"]; }
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(exports.baseUrl, "/account/token/create"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: username,
                            password: password,
                            permissions: permissions
                        })
                    })];
                case 1:
                    r = _a.sent();
                    return [4 /*yield*/, r.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.createToken = createToken;
function deleteToken(username, password, token) {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(exports.baseUrl, "/account/token/delete"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: username,
                            password: password,
                            token: token
                        })
                    })];
                case 1:
                    r = _a.sent();
                    return [4 /*yield*/, r.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.deleteToken = deleteToken;
function login(token) {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(exports.baseUrl, "/account/token/login"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: token
                        })
                    })];
                case 1:
                    r = _a.sent();
                    return [4 /*yield*/, r.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.login = login;
function refreshToken(token) {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(exports.baseUrl, "/account/token/refresh"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: token
                        })
                    })];
                case 1:
                    r = _a.sent();
                    return [4 /*yield*/, r.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.refreshToken = refreshToken;
function updateUsername(token, newUsername) {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(exports.baseUrl, "/account/update/username"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: token,
                            newUsername: newUsername
                        })
                    })];
                case 1:
                    r = _a.sent();
                    return [4 /*yield*/, r.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updateUsername = updateUsername;
function updatePassword(token, oldPassword, newPassword) {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(exports.baseUrl, "/account/update/password"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: token,
                            oldPassword: oldPassword,
                            newPassword: newPassword
                        })
                    })];
                case 1:
                    r = _a.sent();
                    return [4 /*yield*/, r.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updatePassword = updatePassword;
function updateEmail(token, newEmail) {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(exports.baseUrl, "/account/update/email"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: token,
                            newEmail: newEmail
                        })
                    })];
                case 1:
                    r = _a.sent();
                    return [4 /*yield*/, r.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updateEmail = updateEmail;
function createData(token, data) {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(exports.baseUrl, "/data/create"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: token,
                            data: data
                        })
                    })];
                case 1:
                    r = _a.sent();
                    return [4 /*yield*/, r.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.createData = createData;
function updateData(token, data) {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(exports.baseUrl, "/data/update"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: token,
                            data: data
                        })
                    })];
                case 1:
                    r = _a.sent();
                    return [4 /*yield*/, r.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.updateData = updateData;
function getData(token, id) {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(exports.baseUrl, "/data/get"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: token,
                            dataId: id
                        })
                    })];
                case 1:
                    r = _a.sent();
                    return [4 /*yield*/, r.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getData = getData;
function deleteData(token, id) {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(exports.baseUrl, "/data/delete"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: token,
                            dataId: id
                        })
                    })];
                case 1:
                    r = _a.sent();
                    return [4 /*yield*/, r.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.deleteData = deleteData;
function setPermissions(token, dataId, permissions, user) {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(exports.baseUrl, "/data/permissions/set"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: token,
                            dataId: dataId,
                            permissions: permissions,
                            user: user
                        })
                    })];
                case 1:
                    r = _a.sent();
                    return [4 /*yield*/, r.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.setPermissions = setPermissions;
function removeUser(token, dataId, user) {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(exports.baseUrl, "/data/permissions/remove"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            token: token,
                            dataId: dataId,
                            user: user
                        })
                    })];
                case 1:
                    r = _a.sent();
                    return [4 /*yield*/, r.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.removeUser = removeUser;
//# sourceMappingURL=index.js.map