import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientAppContainer,
  ResponsiveContainer,
  Heading,
  Description,
  GradientDirectionList,
  PickColorDescription,
  InputsContainer,
  InputColorContainer,
  ColorHexCode,
  Input,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientValue: gradientDirectionsList[0].value,
    fromColor: '#8ae323',
    toColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  clickGradientDirection = direction => {
    this.setState({activeGradientValue: direction})
  }

  onChangeFromColor = event => {
    this.setState({fromColor: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColor: event.target.value})
  }

  onClickGenerate = () => {
    const {activeGradientValue, fromColor, toColor} = this.state
    this.setState({
      gradientValue: `to ${activeGradientValue}, ${fromColor}, ${toColor}`,
    })
  }

  render() {
    const {gradientValue, activeGradientValue, fromColor, toColor} = this.state
    return (
      <GradientAppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Description>Choose Direction</Description>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                directionDetails={eachDirection}
                isActive={activeGradientValue === eachDirection.value}
                clickGradientDirection={this.clickGradientDirection}
              />
            ))}
          </GradientDirectionList>
          <PickColorDescription>Pick The Colors</PickColorDescription>
          <InputsContainer>
            <InputColorContainer>
              <ColorHexCode>{fromColor}</ColorHexCode>
              <Input
                type="color"
                value={fromColor}
                onChange={this.onChangeFromColor}
              />
            </InputColorContainer>
            <InputColorContainer>
              <ColorHexCode>{toColor}</ColorHexCode>
              <Input
                type="color"
                value={toColor}
                onChange={this.onChangeToColor}
              />
            </InputColorContainer>
          </InputsContainer>
          <GenerateButton type="button" onClick={this.onClickGenerate}>
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </GradientAppContainer>
    )
  }
}
export default GradientGenerator
