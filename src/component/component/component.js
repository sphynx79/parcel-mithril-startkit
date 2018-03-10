import m from 'mithril'
import "./component.scss"

class Component {

    constructor() {
        this._componentName = this.constructor.name
    }

    view({attrs}){
        return m("div", "CIAO")
    }


}

export default Component

