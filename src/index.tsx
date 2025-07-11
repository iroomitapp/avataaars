import * as React from 'react'

import Avatar, { AvatarStyle } from './avatar'
import { OptionContext, OptionContextClass, allOptions } from './options'

export { default as Avatar, AvatarStyle } from './avatar'
export {
  Option,
  OptionContext,
  OptionContextClass,
  allOptions,
} from './options'

import { default as PieceComponent } from './avatar/piece'

export interface Props {
  avatarStyle: string
  className?: string
  style?: React.CSSProperties
  topType?: string
  accessoriesType?: string
  hairColor?: string
  facialHairType?: string
  facialHairColor?: string
  clotheType?: string
  clotheColor?: string
  graphicType?: string
  eyeType?: string
  eyebrowType?: string
  mouthType?: string
  skinColor?: string
  pieceType?: string
  pieceSize?: string
  viewBox?: string
}

export default class AvatarComponent extends React.Component<Props> {
  private optionContext: OptionContextClass = new OptionContextClass(allOptions)

  componentDidMount() {
    this.updateOptionContext(this.props)
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      this.updateOptionContext(this.props)
    }
  }

  render() {
    const { avatarStyle, style, className } = this.props
    return (
      <OptionContext.Provider value={this.optionContext}>
        <Avatar
          avatarStyle={avatarStyle as AvatarStyle}
          style={style}
          className={className}
        />
      </OptionContext.Provider>
    )
  }

  private updateOptionContext(props: Props) {
    const data: { [index: string]: string } = {}
    for (const option of allOptions) {
      const value = props[option.key]
      if (!value) {
        continue
      }
      data[option.key] = value
    }
    this.optionContext.setData(data)
  }
}

export class Piece extends React.Component<Props> {
  private optionContext: OptionContextClass = new OptionContextClass(allOptions)

  componentDidMount() {
    this.updateOptionContext(this.props)
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      this.updateOptionContext(this.props)
    }
  }

  render() {
    const { avatarStyle, style, pieceType, pieceSize, viewBox } = this.props
    return (
      <OptionContext.Provider value={this.optionContext}>
        <PieceComponent
          avatarStyle={avatarStyle as AvatarStyle}
          style={style}
          pieceType={pieceType}
          pieceSize={pieceSize}
          viewBox={viewBox}
        />
      </OptionContext.Provider>
    )
  }

  private updateOptionContext(props: Props) {
    const data: { [index: string]: string } = {}
    for (const option of allOptions) {
      const value = props[option.key]
      if (!value) {
        continue
      }
      data[option.key] = value
    }
    this.optionContext.setData(data)
  }
}
