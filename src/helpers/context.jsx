import React, { createContext } from "react"

const defaultContextValue = {
  data: {
    // set your initial data shape here
    data: [],
  },
  set: () => {},
}

const { Provider, Consumer } = createContext(defaultContextValue)

class ContextProviderComponent extends React.Component {
  constructor() {
    super()

    this.setData = this.setData.bind(this)
    this.state = {
      ...defaultContextValue,
      set: this.setData,
    }
  }

  setData(newData) {
    this.setState(state => ({
      data: {
        ...state.data,
        ...newData,
      },
    }))
  }
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { Consumer, ContextProviderComponent }
