window.dom = {
    //新增
    create(string) {
        const container = document.createElement('template');
        container.innerHTML = string.trim();
        //console.log(container)
        return container.content.firstChild;
    },

    //新增一个弟弟
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling)
    },

    //新增一个哥哥
    before(node, node2) {
        node.parentNode.insertBefore(node2, node)
    },

    //新增一个孩子
    append(parent, node) {
        parent.appendChild(node);
    },
    //新增一个爸爸
    warp(node, parent) {
        //node.parentNode.appendChild(parent) //新增的孩子在最后
        //parent.appendChild(node)
        dom.before(node, parent)
        dom.append(parent, node)
    },


    remove(node) {//删除结点
        node.parentNode.removeChild(node);
        return node;
    },
    empty(node) {//删除后代
        let array = [];
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array;
    },
    attr(node, name, value) { //读写属性       --重载
        if (arguments.length === 3) {

            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },
    text(node, value) { //读写文本内容 --适配
        if (arguments.length === 2) {

            if ('innerText' in node) {
                node.innerText = value;
            }
            else {
                node.textContent = value;
            }
        } else if (arguments.length === 1) {

            if ('innerText' in node) {
                return node.innerText;
            }
            else {
                return node.textContent
            }
        }

    },

    html(node, value) {//读写HTML内容
        if (arguments.length === 2) {
            node.innerHTML = value;
        }
        else if (arguments.length === 1) {
            return node.innerHTML;
        }
    },
    style(node, name, value) {  //修改style属性
        if (arguments.length === 3) {
            //dom.style(div,'color','red')
            node.style[name] = value;
        }
        else if (arguments.length === 2) {
            if (typeof name === 'string') {
                //dom.style(div,'color')
                return node.style[name]
            } else if (name instanceof Object) {
                //dom.style(div, { border: '1px solid red', color: 'blue' })
                const object = name
                for (let key in object) {
                    node.style[key] = object[key];
                }
            }
        }
    },
    class: {  //class 增加  删除   检测包含
        add(node, className) {
            node.classList.add(className);
        },
        remove(node, className) {
            node.classList.remove(className);
        },
        contains(node, className) {
            return node.classList.contains(className);
        }
    },
    on(node, eventName, fn) {//添加事件监听
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {//删除事件监听
        node.removeEventListener(eventName, fn)
    },

    find(selector, scope) {//获取标签或标签们
        return (scope || document).querySelectorAll(selector)

    },
    parent(node) {//获取父元素

        return node.parentNode;
    },
    children(node) {//获取子元素
        return node.children;
    },
    siblings(node) {//获取兄弟姐妹
        return Array.from(node.parentNode.children).filter(n => n !== node)
    },

    next(node) {//获取弟弟
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling;
        }
        return x;
    },

    previous(node) {//获取哥哥
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling;
        }
        return x;
    },

    each(nodeList, fn) {//便利所有节点
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    index(node) {//获取排行位置
        let x = node.parentNode;
        let i
        for (i = 0; i < x.children.length; i++) {
            if (x.children[i] === node) {
                break;
            }
        }
        return i;
    }


}
