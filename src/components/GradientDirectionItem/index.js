// Write your code here
import {ListItem, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, clickGradientDirection} = props
  const {value, displayText} = directionDetails

  const onClickDirection = () => {
    clickGradientDirection(value)
  }

  return (
    <ListItem>
      <Button isActive={isActive} type="button" onClick={onClickDirection}>
        {displayText}
      </Button>
    </ListItem>
  )
}
export default GradientDirectionItem
