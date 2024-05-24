function customRender(reactElement,container){
    /*const domELement=document.createElement
    (reactElement.type)

    domELement.innerHTML=reactElement.childern

    domELement.setAttribute('href',reactElement.props.href)

    domELement.setAttribute('target',reactElement.props.target)

    container.appendChild(domELement)*/

    //it is loopin in below and better tan above code
    const domELement=document.createElement
    (reactElement.type)

    domELement.innerHTML=reactElement.childern

    for (const prop in reactElement.props) {
        if (prop=== 'childern') {
            continue
        }
        domELement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domELement)


    
}


//makin our own react library
const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },

    childern:'Click me to visit google'
}

const  mainConatiner =document.querySelector('#root')

customRender(reactElement,mainConatiner)


