import { useEffect, useState } from 'react'

export const useCalendar = (intialDate: Date) => {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  const DAYS_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
  const MONTH = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const today = new Date()
  const [date, setDate] = useState(intialDate)
  const [day, setDay] = useState(date.getDate())
  const [month, setMonth] = useState(date.getMonth())
  const [year, setYear] = useState(date.getFullYear())

  const getStartDayOfMonth = (date: Date) => {
    const startDateOfMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay()
    return startDateOfMonth === 0 ? 7 : startDateOfMonth
  }

  const [startDay, setStartDay] = useState(getStartDayOfMonth(date))

  useEffect(() => {
    setDay(date.getDate())
    setMonth(date.getMonth())
    setYear(date.getFullYear())
    setStartDay(getStartDayOfMonth(date))
  }, [date])

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  }

  const days = isLeapYear(year) ? DAYS_LEAP : DAYS

  const handlePrevMonth = () => {
    if (month > 0) {
      setDate(new Date(year, month - 1, day))
    }
  }

  const handleNextMonth = () => {
    if (month < 11) {
      setDate(new Date(year, month + 1, day))
    }
  }

  return {
    DAYS_WEEK,
    MONTH,
    date,
    day,
    month,
    year,
    startDay,
    days,
    handlePrevMonth,
    handleNextMonth,
    today,
  }
}
