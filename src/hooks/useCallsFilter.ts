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
          { name: 'Клиенты', value: 'clients' },
          { name: 'Новые клиенты', value: 'new_clients' },
          { name: 'Рабочие', value: 'workers' },
          { name: 'Приложение', value: 'app' },
        ],
      }
    }
    case 'sources[]': {
      return {
        defaultValue: 'Все источники',
        items: [
          { name: 'С сайта', value: 'from_site' },
          { name: 'Yandex номер', value: 'yandex' },
          { name: 'Google номер', value: 'google' },
          { name: 'Без источника', value: 'empty' },
        ],
      }
    }
    case 'errors[]': {
      return {
        defaultValue: 'Все ошибки',
        items: [
          { name: 'Без ошибок', value: 'noerrors' },
          { name: 'Скрипт не использован', value: 'noscript' },
        ],
      }
    }
    default: {
      return { defaultValue: 'None', items: [] }
    }
  }
}
