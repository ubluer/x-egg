exports.keys = 'xianggg';
// mongo config
exports.mongo = {
    client: {
        host: '47.95.225.156',
        port: '27017',
        name: 'family',
        user: 'xianggg',
        password: '!23%2456',
        options: {},
    },
};
// 添加view配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    }
};
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0'
};
exports.middleware = [
    'robot'
];
exports.robot = {
    ua: [
        /Baiduspider/i
    ]
};

