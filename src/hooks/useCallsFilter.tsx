export const useCallsFilter = (type: string) => {
  switch (type) {
    case 'in_out': {
      return {
        defaultValue: 'Все типы',
        items: [
          { value: '1', name: 'Входящие' },
          { value: '0', name: 'Исходящие' },
        ],
      }
    }
    case 'from_type[]': {
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
    case 'sources[]': {
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
    case 'errors[]': {
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
