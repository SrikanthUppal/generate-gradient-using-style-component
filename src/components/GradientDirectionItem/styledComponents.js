import styled from 'styled-components/macro'

export const ListItem = styled.li`
  width: 46%;
  @media (min-width: 768px) {
    width: 24%;
  }
`
export const Button = styled.button`
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  width: 100%;
  background-color: #ffffff;
  font-family: 'Roboto';
  padding: 8px 16px 8px 16px;
  margin-bottom: 8px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
