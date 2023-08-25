function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
       if(prop === 'children') continue

       domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)

}

const reactElement = {
    type : 'a',
    props : {
        href:'https://google.com',
        target : '_blank',
        class : 'link'
    },
    children : 'Click me to visit Google'
}

// const reactElement = {
//     type : 'img',
//     props : {
//         src :'',
//         alt : "Urban city"
        
//     },
//     children : ''
// }

const mainContainer = document.querySelector("#root")
customRender(reactElement,mainContainer)
