import { Button } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { generateUrl } from '../../../../store/search/searchState'
import { $api } from '../../../../http'
import { setList } from '../../../../store/calls/callsState'
import { batch } from 'react-redux'

const SearchButton = () => {
  const dispatch = useAppDispatch()
  const { url } = useAppSelector((state) => state.search)
  const [isActive, setIsActive] = useState(false)
  const {
    in_out,
    date_start,
    'from_type[]': from_type,
    'sources[]': sources,
    search,
    'errors[]': errors,
  } = useAppSelector((state) => state.search.filters)
  const prevState = useRef({
    in_out,
    date_start,
    from_type,
    sources,
    search,
    errors,
  })

  useEffect(() => {
    if (
      prevState.current.in_out !== in_out ||
      prevState.current.errors !== errors ||
      prevState.current.date_start !== date_start ||
      prevState.current.from_type !== from_type ||
      prevState.current.sources !== sources ||
      prevState.current.search !== search
    ) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [
    in_out,
    date_start,
    from_type,
    sources,
    search,
    errors,
    prevState.current,
  ])

  useEffect(() => {
    if (url !== 'mango/getList?') {
      ;(async () => {
        try {
          const { data } = await $api.post(url)
          dispatch(setList(data))
        } catch (e) {
          console.log(e)
        }
      })()
    }
  }, [url])

  const handleGenerateUrl = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    batch(() => {
      dispatch(generateUrl())
    })
    prevState.current = {
      in_out,
      date_start,
      from_type,
      sources,
      search,
      errors,
    }
  }

  return (
    <>
      {isActive && (
        <Button
          onClick={handleGenerateUrl}
          variant={'contained'}
          sx={{ position: 'fixed', bottom: '30px', right: '30px' }}
        >
          Search
        </Button>
      )}
    </>
  )
}

export default SearchButton
