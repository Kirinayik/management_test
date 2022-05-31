import { Box, List } from '@mui/material'
import { useTheme } from '@emotion/react'
import CallsListHeader from './CallsListHeader'
import CallsListItem from './CallsListItem'
import { useAppSelector } from '../../../store/hooks'
import { useEffect, useState } from 'react'
import { $api } from '../../../http'
import {
  callsSelectors,
  setList,
  updateList,
} from '../../../store/calls/callsState'
import { useDispatch } from 'react-redux'
import SearchButton from '../../common/buttons/SearchButton/SearchButton'
import { getDefaultDate } from '../../../helpers/getDefaultDate'
import InfiniteScroll from 'react-infinite-scroller'
import { callsNext } from '../../../helpers/callsNext'
import { setOffset } from '../../../store/search/searchState'
import Loader from '../../common/Loader'

const CallsList = () => {
  const { colors } = useTheme()
  const { url, offset } = useAppSelector((state) => state.search)
  const list = useAppSelector(callsSelectors.selectAll)
  const { total } = useAppSelector((state) => state.calls)
  const dispatch = useDispatch()
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    ;(async () => {
      setFetching(true)
      const { dateStart, dateEnd } = getDefaultDate()

      try {
        const { data } = await $api.post(
          `mango/getList?date_start=${dateStart}&date_end=${dateEnd}&limit=25`
        )
        dispatch(setList(data))
      } catch (e) {
        console.log(e)
      } finally {
        setFetching(false)
      }
    })()
  }, [])

  const fetchItems = async () => {
    if (fetching) return
    setFetching(true)

    try {
      const { results } = await callsNext(url, offset)
      dispatch(updateList(results))
      dispatch(setOffset())
    } catch (e) {
      console.log(e)
    } finally {
      setFetching(false)
    }
  }

  return (
    <Box
      sx={{
        background: colors.white,
        borderRadius: '6px',
        boxShadow: '0px 4px 5px #E9EDF3',
      }}
    >
      <CallsListHeader />
      <InfiniteScroll
        loadMore={fetchItems}
        hasMore={list.length !== total}
        getScrollParent={() => document.getElementById('#calls')}
        useWindow={false}
        pageStart={0}
        initialLoad={false}
        loader={<Loader key={'loader'} />}
      >
        <List>
          {list &&
            list.map((item) => <CallsListItem item={item} key={item.id} />)}
        </List>
      </InfiniteScroll>
      <SearchButton />
    </Box>
  )
}

export default CallsList
