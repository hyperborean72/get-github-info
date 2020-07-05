"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(responseBody) {
        this.login = responseBody.login;
        this.fullName = responseBody.name;
        this.repoCount = responseBody.public_repos;
        this.followerCount = responseBody.followers;
    }
    return User;
}());
exports.User = User;
