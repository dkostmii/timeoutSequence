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
const timeout1 = () => {
    return new Promise((res) => {
        setTimeout(() => {
            // Timeout 1 code
            res("timeout1");
        }, 1000);
    });
};
const timeout2 = () => {
    return new Promise((res) => {
        setTimeout(() => {
            // Timeout 2 code
            res("timeout2");
        }, 1000);
    });
};
const timeout3 = () => {
    return new Promise((res) => {
        setTimeout(() => {
            // Timeout 3 code
            res("timeout3");
        }, 1000);
    });
};
// timeout sequence
/*
timeout1()
.then(value => {
    console.log(value);
    return timeout2();
})
.then(value => {
    console.log(value);
    return timeout3();
})
.then(value => {
    console.log(value);
});
*/
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(yield timeout1());
    console.log(yield timeout2());
    console.log(yield timeout3());
}))();
