exports.keys = 'xianggg';
// mongo config
exports.mongose = {
    client:{
        url:'mongodb://xianggg:!@#456@47.95.255.156/family',
        option:{}
    }
}
// 添加view配置
exports.view ={
    defaultViewEngine:'nunjucks',
    mapping: {
        '.tpl':'nunjucks'
    }
}
exports.news={
    pageSize:5,
    serverUrl:'https://hacker-news.firebaseio.com/v0'
}
exports.middleware = [
    'robot'
]
exports.robot = {
    ua:[
        /Baiduspider/i
    ]
}


