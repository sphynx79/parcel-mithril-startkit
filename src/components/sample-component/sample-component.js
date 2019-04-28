// src/components/test/test.js

import m from 'mithril'
import "./sample-component.scss"

class SampleComponent {
    constructor() {
        this._componentName = this.constructor.name
    }

    oninit({ state }) {
        state.count = 0
    }

    view(vnode) {
        return m(".sample-component", [
            m("h1", { class: "title" }, `You click ${vnode.state.count} times`),
            m("button.bx--btn.bx--btn--primary.bx--btn--sm[type='button']",
                {
                    onclick: function() {
                        vnode.state.count++
                    },
                },
                "clicks"
            ),
        ])
    }

    oncreate(vnode) {
        if (process.env.NODE_ENV !== "production") {
            let logStateAttrs = {
                attrs: vnode.attrs,
                state: vnode.state,
            }
            console.log(`Component: ${this._componentName}`, logStateAttrs)
        }
    }
}

export default SampleComponent
