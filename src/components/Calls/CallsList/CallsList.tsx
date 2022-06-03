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
import InfiniteScroll from 'react-infinite-scroller'
import { callsNext } from '../../../helpers/callsNext'
import { setOffset } from '../../../store/search/searchState'
import Loader from '../../common/Loader'
import { generateUrl } from '../../../helpers/generateUrl'

const CallsList = () => {
  const { colors } = useTheme()
  const { offset, filters } = useAppSelector((state) => state.search)
  const list = useAppSelector(callsSelectors.selectAll)
  const { total } = useAppSelector((state) => state.calls)
  const dispatch = useDispatch()
  const [fetching, setFetching] = useState(false)
  const [url, setUrl] = useState(generateUrl(filters))

  useEffect(() => {
    setUrl(generateUrl(filters))
  }, [filters])

  useEffect(() => {
    ;(async () => {
      setFetching(true)

      try {
        const { data } = await $api.post(url)
        dispatch(setList(data))
        dispatch(setOffset(-offset + 25))
      } catch (e) {
        console.log(e)
      } finally {
        setFetching(false)
      }
    })()
  }, [url])

  const fetchItems = async () => {
    if (fetching) return
    setFetching(true)

    try {
      const { results } = await callsNext(url, offset)
      dispatch(updateList(results))
      dispatch(setOffset(25))
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
    </Box>
  )
}

export default CallsList
