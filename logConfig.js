const log4js = require('log4js');
const fs = require('fs');

function confirmDir(strDir) {
    if (!fs.existsSync(strDir)) {
        fs.mkdirSync(strDir);
        console.info(`createPath: ${strDir}`);
    }
    return strDir;
}

log4js.configure({
    appenders: {
        out: {
            type: 'dateFile',
            // 文件名为= filename + pattern, 设置为alwaysIncludePattern：true
            filename: confirmDir('./log/'), // 需要手动创建此文件夹
            pattern: 'yyyy-MM-dd.log',
            // 包含模型
            alwaysIncludePattern: true,
        },
    },
    categories: {
        default: {
            appenders: ['out'],
            level: 'info',
        },
    },
});

function logger(name) {
    const log = log4js.getLogger(name);
    return log;
}

module.exports = {
    logger,
};
