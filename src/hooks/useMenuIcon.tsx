import CallIcon from '@mui/icons-material/Call'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import ArticleIcon from '@mui/icons-material/Article'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import CheckIcon from '@mui/icons-material/Check'
import DirectorIcon from '../styles/icons/DirectorIcon'

const useMenuIcon = (type: string) => {
  switch (type) {
    case 'Итоги': {
      return <DirectorIcon />
    }
    case 'Звонки': {
      return <CallIcon />
    }
    case 'Сообщения': {
      return <MailOutlineIcon />
    }
    case 'Настройки': {
      return <SettingsIcon />
    }
    case 'Контрагенты': {
      return <PeopleAltIcon />
    }
    case 'Банк': {
      return <AccountBalanceIcon />
    }
    case 'Заказы': {
      return <CheckIcon />
    }
    case 'Отчеты': {
      return <ArticleIcon />
    }
    default: {
      return <ArticleIcon />
    }
  }
}

export default useMenuIcon
