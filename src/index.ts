const timeout1 = () => {
    return new Promise((res: (value: string) => void) => {
        setTimeout(() => {
            // Timeout 1 code
            res("timeout1")
        }, 1000);
    });
};

const timeout2 = () => {
    return new Promise((res: (value: string) => void) => {
        setTimeout(() => {
            // Timeout 2 code
            res("timeout2")
        }, 1000)
    });
};


const timeout3 = () => {
    return new Promise((res: (value: string) => void) => {
        setTimeout(() => {
            // Timeout 3 code
            res("timeout3")
        }, 1000)
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

(async () => {
    console.log(await timeout1());
    console.log(await timeout2());
    console.log(await timeout3());
})();
