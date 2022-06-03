import styled from '@emotion/styled/macro'

type CallsListItemContainerProps = {
  isActive: boolean
}

type CallsFilterSelectItemProps = {
  isActive: boolean
}

type CheckboxProps = {
  checked: boolean
}

type CallsCalendarButtonProps = {
  isToday: boolean
  isActive: boolean
}

export const CheckboxContainer = styled.div<CheckboxProps>`
  display: inline-block;
  vertical-align: middle;
  width: 16px;
  height: 16px;
  padding-right: 16px;
`

export const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledCheckbox = styled.div<CheckboxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border: 2px solid
    ${(props) =>
      !props.checked ? props.theme.colors.grey : props.theme.colors.accent};
  border-radius: 4px;
  background: ${(props) =>
    !props.checked ? 'transparent' : props.theme.colors.accent};

  & > svg {
    font-size: 16px;
    color: ${(props) => props.theme.colors.white};
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`

export const CallsFilterSelectContainer = styled.ul`
  padding: 0;
  position: absolute;
  z-index: 1000;
  top: 110%;
  left: 0;
  width: 100%;
  border: 1px solid #eaf0fa;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 26px rgba(233, 237, 243, 0.8);
`

export const CallsFilterSelectItem = styled.li<CallsFilterSelectItemProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 15px;
  color: ${(props) =>
    props.isActive ? props.theme.colors.accent : props.theme.colors.secondary};
  padding: 15px 20px;
  user-select: none;

  &:hover {
    background: rgba(0, 95, 248, 0.13);
    color: ${(props) => props.theme.colors.primary};

    ${StyledCheckbox} {
      border: 2px solid ${(props) => props.theme.colors.accent};
    }
  }

  & > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const CallsFilterSearchInput = styled.input`
  display: block;
  width: 100%;
  background: transparent;
  border: 0;

  &:focus-visible {
    outline: none;
  }
`

export const CallsListItemContainer = styled.li<CallsListItemContainerProps>`
  font-size: 15px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(212, 223, 243, 0.2);
  padding: 10px 40px;
  height: 65px;
  gap: 30px;
  cursor: pointer;
  background: ${(props) =>
    props.isActive ? 'rgba(212, 223, 243, 0.2)' : 'transparent'};

  & .calls__audio {
    visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};
  }

  & .calls__errors {
    visibility: ${(props) => (!props.isActive ? 'visible' : 'hidden')};
  }

  & .calls__time {
    visibility: ${(props) => (!props.isActive ? 'visible' : 'hidden')};
  }

  &:hover {
    background: rgba(212, 223, 243, 0.2);

    & .calls__audio {
      visibility: visible;
      flex-grow: 1;
    }

    & .calls__errors {
      visibility: hidden;
    }

    & .calls__time {
      visibility: hidden;
    }
  }
`

export const CallsCalendarInfo = styled.div`
  cursor: pointer;
  display: flex;
  min-width: 100px;
  color: ${(props) => props.theme.colors.accent};
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: relative;
`

export const CallsCalendarContainer = styled.div`
  position: absolute;
  top: 40px;
  left: -200px;
  padding: 15px;
  width: 300px;
  min-height: 350px;
  z-index: 1001;
  cursor: auto;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 26px 6px rgba(233, 237, 243, 1);
`

export const CallsCalendarButton = styled.button<CallsCalendarButtonProps>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  padding: 5px;
  font-size: 18px;
  background-color: ${(props) =>
    props.isToday
      ? props.theme.colors.accent
      : props.isActive
      ? props.theme.colors['accent-hover']
      : 'transparent'};
  color: ${(props) =>
    props.isToday || props.isActive ? props.theme.colors.white : 'inherit'};

  &:hover {
    background-color: ${(props) =>
      props.isToday
        ? props.theme.colors.accent
        : props.theme.colors['accent-hover']};
    color: ${(props) => props.theme.colors.white};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;

    &:hover {
      background-color: transparent;
      color: inherit;
    }
  }
`
