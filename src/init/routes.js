import m from 'mithril'
import Component from '../component/component/component.js'

m.route.prefix('')

m.route(document.getElementById("app"), '/', {
    '/': {render: () => {return m(Component)}}
})

