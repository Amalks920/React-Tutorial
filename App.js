const heading=React.createElement('h1',{id:"heading",xyz:"abc"},'i am h1 tag')
// console.log(heading)
// root.render(heading)

//create parent

const parent=React.createElement('div',{id:'parent'},
[React.createElement('div',{id:'child'},
[heading,
React.createElement('h2',{id:'heading-2'},'create React App')])
],
[React.createElement('div',{id:'child-2'},
[heading,
React.createElement('h2',{id:'heading-3'},'create React App')])
]
)

const root=ReactDOM.createRoot(document.getElementById('root'))
console.log(parent)
root.render(parent)


