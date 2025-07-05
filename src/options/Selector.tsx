import * as React from 'react'

import Option from './Option'
import { OptionContext, OptionContextClass } from './OptionContext'

function getComponentOptionValue(component: React.ComponentClass) {
  const optionValue = (component as any).optionValue
  if (!optionValue) {
    throw new Error(`optionValue should be provided for ${component}`)
  }
  return optionValue
}

export interface Props {
  option: Option
  defaultOption: React.ComponentClass | string
}

export default class Selector extends React.Component<
  Props & { children?: React.ReactNode }
> {
  private optionContext: OptionContextClass | null = null

  componentDidMount() {
    this.optionContext = this.context as OptionContextClass
    if (this.optionContext) {
      const { option, defaultOption } = this.props
      const defaultValue =
        typeof defaultOption === 'string'
          ? defaultOption
          : getComponentOptionValue(defaultOption)
      this.optionContext.addStateChangeListener(this.optionContextUpdate)
      this.optionContext.optionEnter(option.key)
      const optionState = this.optionContext.getOptionState(option.key)
      this.updateOptionValues()
      if (optionState) {
        this.optionContext.setDefaultValue(option.key, defaultValue)
      }
    }
  }

  componentDidUpdate(prevProps: Props & { children?: React.ReactNode }) {
    if (prevProps !== this.props) {
      this.updateOptionValues(this.props)
    }
  }

  componentWillUnmount() {
    if (this.optionContext) {
      this.optionContext.removeStateChangeListener(this.optionContextUpdate)
      this.optionContext.optionExit(this.props.option.key)
    }
  }

  render() {
    let result: React.ReactNode | null = null
    const { option, children } = this.props
    if (this.optionContext) {
      const value = this.optionContext.getValue(option.key)!
      React.Children.forEach(children, (child) => {
        if (getComponentOptionValue((child as any).type) === value) {
          result = child
        }
      })
    }
    return result
  }

  private optionContextUpdate = () => {
    this.forceUpdate()
  }

  private updateOptionValues(
    nextProps?: Props & { children?: React.ReactNode }
  ) {
    if (!this.optionContext) return

    const { option, children } = nextProps || this.props
    const values = React.Children.map(
      children,
      // TODO: also validate and throw error if we don't see optionValue
      (child) => getComponentOptionValue((child as any).type)
    )
    if (new Set(values).size !== values?.length) {
      throw new Error('Duplicate values')
    }
    this.optionContext.setOptions(option.key, values)
  }

  static contextType = OptionContext
}
