import styled from '@emotion/styled'

type NavbarListItem = {
  isActive: boolean
  isNew: boolean
}

export const NavbarListItem = styled.li<NavbarListItem>`
  color: rgba(255, 255, 255, 0.6);
  position: relative;
  ${(props) =>
    props.isActive &&
    `
    color: ${props.theme.colors.white};
    background: rgba(216,228,251, 0.3);
    
    &::before {
      content: '';
      width: 3px;
      height: 100%;
      background: ${props.theme.colors.accent};
      position: absolute;
      top: 0;
      left: 0;
    }
  `};
  ${(props) =>
    props.isNew &&
    `
    &::after {
      content: '';
      width: 8px;
      height: 8px;
      background: ${props.theme.colors.yellow};
      box-shadow: 0px 3px 8px rgba(237, 218, 1, 0.5);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
    }
  `}
  line-height: 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background: rgba(216, 228, 251, 0.3);
  }
`
