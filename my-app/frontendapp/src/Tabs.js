import React from 'react';

import './Tabs.css';

import Tab1Content from './tabs/tab1/Tab1Content.js';
import Tab2Content from './tabs/tab2/Tab2Content.js';


export default class TabList extends React.Component {

  state = {};

  handleChangeTab = selectedTab => this.setState({ selectedTab })

  render() {
    return (
      <Tabs
        selectedTab={this.state.selectedTab}
        onChangeTab={this.handleChangeTab}
      >
        <h1>React tabs</h1>
        <Tab name="first" title="Herzlich willkommen zu React">
          <Tab1Content/>
        </Tab>
        <Tab name="second" title="Es gibt ein Beispiel des REST request">
          <Tab2Content/>
        </Tab>
        
      </Tabs>
    )
  }
}

function Tabs({ children, selectedTab, onChangeTab }) {
  let tabProps = []
  const content = React.Children.map(children, (child) => {
    if (child.type === Tab) {
      const { title, name } = child.props
      tabProps.push({ title, name })
      // By default show first tab if there is none selected
      if (selectedTab ? (selectedTab !== child.props.name) : (tabProps.length !== 1)) {
        return null
      }
    }
    return child
  })

  const finalSelectedTab = selectedTab ||
        (tabProps.length > 0 && tabProps[0].name)

  return (
    <div className="tabs">
      <Tablist
        selectedTab={finalSelectedTab}
        onChangeTab={onChangeTab}
        tabs={tabProps}
      />
      <div className="tabs__content">
        {content}
      </div>
    </div>
  )
}

function Tablist({ tabs, selectedTab, onChangeTab }) {
  const linkClass = selected => {
    const c = 'tabs__tablist__link'
    return selected ? `${c} ${c}--selected` : c
  }

  return (
    <menu className="tabs__tablist">
      <ul>
        {tabs.map(({ name, title }) =>
          <li aria-selected={name === selectedTab} role="tab" key={name}>
            <a
              className={linkClass(name === selectedTab)}
              onClick={() => onChangeTab(name)}
             >
              {title}
             </a>
          </li>
        )}
      </ul>
    </menu>
  )
}

function Tab({ name, children }) {
  return (
    <div id={`tab-${name}`} className="tabs__tab">
      {children}
    </div>
  )
}

//ReactDOM.render(<ExampleTabs />, document.body)
