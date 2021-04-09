

const div = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素


/** const div = dom.create('<div><span>111</span></div>')
console.log(div)
dom.after(test, div)

const div3 = dom.create('<div id="parent"></div>')

dom.warp(test, div3)

const nodes = dom.empty(window.empty);
console.log(nodes)

dom.attr(test, 'title', 'niHao')

console.log(dom.attr(test, 'title'))

dom.text(test, 'zenBuCuo1')

dom.style(test, { border: '1px solid red', color: 'blue' })
console.log(dom.style(test, 'color'))
dom.style(test, 'color', 'black')

dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'blue')
console.log(dom.class.contains(test, 'blue'))

const fn = () => { console.log('点到了') }
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)

const testDiv = dom.find('#test2')[0]
//console.log(testDiv)
console.log(dom.find('.red', testDiv)[0])

console.log(dom.siblings(dom.find('#s3')[0]))
console.log(dom.next(dom.find('#s2')[0]))
console.log(dom.previous(dom.find('#s2')[0]))

dom.each(dom.find('#siblings'), (n) => dom.style(n, 'color', 'red'))

console.log(dom.index(dom.find('#s4')[0]))

**/

