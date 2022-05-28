import styled from '@emotion/styled'
import { Select } from '@mui/material'

type CallsListItemContainerProps = {
  isActive: boolean
}

export const CallsFilterSelectButton = styled(Select)`
  font-style: normal;
  max-width: 200px;
  overflow: hidden;
  & > div {
    padding: 0;
  }

  & fieldset {
    border: 0;
  }
`

export const CallsFilterSelectButtonItem = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:first-letter {
    text-transform: uppercase;
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
