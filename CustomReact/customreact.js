function Mainfunction(reactElement,container) {
//    const domelement =  document.createElement(reactElement.type);
//    domelement.innerHTML = reactElement.childern
//    domelement.setAttribute ("href",reactElement.props.href);
//    domelement.setAttribute ("target",reactElement.props.target);
//    container.appendChild(domelement);

const  domElement =  document.createElement(reactElement.type);
domElement.innerHTML = reactElement.childern;
for (const prop in reactElement.props) {
    if(prop === 'childern') continue;
    domElement.setAttribute (prop,reactElement.props[prop]);
}
container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props:{
        href:'https://google.com',
        target: '_blank'
    },
    childern:'Click me to visit google'
}

var dom = document.querySelector("#root");

Mainfunction(reactElement,dom);