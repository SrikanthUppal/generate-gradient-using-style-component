// Style your elements here
import styled from 'styled-components/macro'

export const GradientAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media (min-width: 768px) {
    width: 80%;
    max-width: 1110px;
  }
`
export const Heading = styled.h1`
  color: #ededed;
  text-align: center;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  padding: 0px 32px 0px 32px;
  @media (min-width: 768px) {
    font-size: 28px;
  }
`
export const Description = styled.p`
  color: #ffffff79;
  font-family: 'Roboto';
  font-size: 21px;
  font-weight: 500;
  text-align: center;
`
export const PickColorDescription = styled(Description)`
  color: #ededed;
`
export const GradientDirectionList = styled.ul`
  padding-left: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 50%;
    max-width: 456px;
  }
`
export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 200px;
  @media (min-width: 768px) {
    min-width: 300px;
  }
`
export const InputColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorHexCode = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
`
export const Input = styled.input`
  width: 100px;
  height: 46px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 600;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  margin-top: 22px;
  padding: 8px 18px 8px 18px;
  font-size: 14px;
`
