import TurndownService from 'turndown';

export function h2m(html) {

    const turndownService = new TurndownService();

    //fix: 代码块pre的显示
    turndownService.addRule('codeBlock', {
        filter: ['pre'],
        replacement: function (content,node) {
            return '\n```text\n' + node.textContent + '```'
        }
    })

    //pref: 代码块中的strong标签将被忽略
    turndownService.addRule('emph', {
        filter: ['strong'],
        replacement: function (content, node) {
            if (node.parentNode.nodeName == 'PRE') {
                //代码块中的strong被忽略
                return '**' + content + '**';
            } else {
                return '**' + content + '**'
            }
        }
    })

    //题目,转换为一级标题
    turndownService.addRule('h2', {
        filter: ['h2'],
        replacement: function (content, node) {
            return '# ' + node.textContent + '\n\n';
        }
    })
    const feat1 = '## 1. Description - '
    // 题目难度，转换成二级标题
    turndownService.addRule('h3', {
        filter: ['h3'],
        replacement: function (content) {
            return feat1 + content;
        }
    })

    //过滤hr，因为github pages标题渲染结果自带hr
    turndownService.addRule('hr', {
        filter: ['hr'],
        replacement: function (content) {
            return '';
        }
    })

    //Constraints部分
    turndownService.addRule('li', {
        filter: ['li'],
        replacement: function (content) {
            return '- ' + content + '\n';
        }
    })
    const markdown = turndownService.turndown(html)
    return markdown
}



