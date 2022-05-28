export const useCallsFilter = (type: string) => {
  switch (type) {
    case 'callTypes': {
      return {
        defaultValue: 'Все типы',
        items: [
          { value: 1, name: 'Входящие' },
          { value: 0, name: 'Исходящие' },
          { value: '', name: 'все звонки' },
        ],
      }
    }
    case 'workers': {
      const workersArr = [
        { name: 'accountant', value: 'accountant' },
        { name: 'callleader', value: 'callleader' },
        { name: 'callmanager', value: 'callmanager' },
        { name: 'chief-accountant', value: 'chief-accountant' },
        { name: 'controller', value: 'controller' },
        { name: 'designer', value: 'designer' },
        { name: 'director', value: 'director' },
        { name: 'frmanager', value: 'frmanager' },
        { name: 'hr', value: 'hr' },
        { name: 'hr-assist', value: 'hr-assist' },
        { name: 'leader', value: 'leader' },
        { name: 'mainoperator', value: 'mainoperator' },
        { name: 'manager', value: 'manager' },
        { name: 'moderator', value: 'moderator' },
        { name: 'operator', value: 'operator' },
        { name: 'sale-manager', value: 'sale-manager' },
        { name: 'seo', value: 'seo' },
        { name: 'skillmanager', value: 'skillmanager' },
        { name: 'controller', value: 'controller' },
        { name: 'submoderator', value: 'submoderator' },
        { name: 'supervisor', value: 'supervisor' },
        { name: 'worksupport', value: 'worksupport' },
      ]

      return { defaultValue: 'Все сотрудники', items: workersArr }
    }
    case 'calls': {
      return {
        defaultValue: 'Все звонки',
        items: [
          { name: 'клиенты', value: 'clients' },
          { name: 'новые клиенты', value: 'new_clients' },
          { name: 'рабочие', value: 'workers' },
          { name: 'приложение', value: 'app' },
        ],
      }
    }
    case 'sources': {
      return {
        defaultValue: 'Все источники',
        items: [
          { name: 'с сайта', value: 'from_site' },
          { name: 'yandex номер', value: 'yandex' },
          { name: 'google номер', value: 'google' },
          { name: 'без источника', value: 'empty' },
        ],
      }
    }
    case 'ratings': {
      return { defaultValue: 'Все оценки', items: [] }
    }
    case 'errors': {
      return {
        defaultValue: 'Все ошибки',
        items: [
          { name: 'без ошибок', value: 'noerrors' },
          { name: 'скрипт не использован', value: 'noscript' },
        ],
      }
    }
    default: {
      return { defaultValue: 'None', items: [] }
    }
  }
}
