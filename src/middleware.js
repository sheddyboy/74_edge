"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.middleware = void 0;
const server_1 = require("next/server");
function middleware(req) {
    const res = server_1.NextResponse.next();
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set("Access-Control-Allow-Methods", "GET");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res;
}
exports.middleware = middleware;
exports.config = {
    matcher: "/api/:path*",
};
