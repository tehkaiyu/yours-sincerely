import styled from 'styled-components';

const Button = styled.button`
  padding: ${({ theme }) => `0 ${theme.spacings(3)}`};
  background-color: ${({ theme }) => theme.ui.button.background};
  color: ${({ theme }) => theme.ui.button.color};
  font-weight: ${({ theme }) => theme.ui.button.fontWeight};
  box-shadow: ${({ theme }) => theme.ui.button.shadow};
  border-radius: 4px;
  letter-spacing: -0.2px;
  height: 36px;
  line-height: 36px;
  transition: 0.2s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.ui.button.hover.shadow};
    background-color: ${({ theme }) => theme.ui.button.hover.background};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default Button;