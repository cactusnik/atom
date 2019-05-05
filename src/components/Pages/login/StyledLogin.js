import styled from 'styled-components'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const StyledLogin = styled('main')`
  display: flex;
  justify-content: center;
`

const StyledLoginPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  padding: 16px 24px 24px;
  margin-top: 100px;
`

const StyledLoginForm = styled('form')`

`

const StyeldLoginSubmit = styled(Button)`
  margin: 16px 0 0;
`

export {
    StyledLogin,
    StyledLoginPaper,
    StyledLoginForm,
    StyeldLoginSubmit
}
