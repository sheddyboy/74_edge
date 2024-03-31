"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = exports.runtime = void 0;
const server_1 = require("next/server");
exports.runtime = "edge";
function GET(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch(`${process.env.BASE_URL}/inventory`, {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
                    "Content-Type": "application/json",
                },
            });
            const data = yield res.json();
            return server_1.NextResponse.json(data, { status: 200 });
        }
        catch (error) {
            return server_1.NextResponse.json(error, { status: 400 });
        }
    });
}
exports.GET = GET;
