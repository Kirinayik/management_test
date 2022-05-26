import styled from '@emotion/styled'

type NavbarListItem = {
  isActive: boolean
}

export const NavbarListItem = styled.li<NavbarListItem>`
  ${(props) =>
    props.isActive &&
    `
    color: ${props.theme.colors.white};
    background: rgba(216,228,251, 0.3);
    position: relative;
    
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
  line-height: 20px;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background: rgba(216, 228, 251, 0.3);
  }
`
