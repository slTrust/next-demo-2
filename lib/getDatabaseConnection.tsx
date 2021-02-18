import {createConnection} from 'typeorm';

const promise = (async function () {
    console.log('创建connection.')
    /*
    立即执行函数，引用的时候被执行，始终返回 promise的结果
    1。 createConnection 是一个 返回promise的 所以想要他必须包裹在 async 的匿名函数里 代号xx
    2。 然后立即执行 xx
    3。 promise 这个函数就代表 我去执行 createConnection 这个异步操作
    */
    return await createConnection();
})();


export const getDatabaseConnection = async () => {
    /*
    别人引用的时候  第一次得到 connection
    第二次依然得到 connection，因为 promise只执行了一次
    promise 之后不管重复引入多少次都不会重新执行
     */
    return promise;
};

