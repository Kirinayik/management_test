import { useAppDispatch, useAppSelector } from '../store/hooks'
import { useEffect, useRef, useState } from 'react'
import { $api } from '../http'
import { setCurrentCall } from '../store/calls/callsState'

export const useRecordPlayer = (
  recordId: string,
  partnerId: string,
  id: number
) => {
  const dispatch = useAppDispatch()
  const { currentCall } = useAppSelector((state) => state.calls)
  const isActive = currentCall === id
  const [sliderValue, setSliderValue] = useState(0)
  const [duration, setDuration] = useState(1)
  const [isPlay, setIsPlay] = useState(false)
  const [recordUrl, setRecordUrl] = useState('')
  const audioRef = useRef(null)

  useEffect(() => {
    if (recordId && partnerId) {
      ;(async () => {
        try {
          const { data } = await $api.post(
            `mango/getRecord?record=${recordId}&partnership_id=${partnerId}`,
            {},
            {
              responseType: 'blob',
            }
          )
          const mp3 = new Blob([data], { type: 'audio/mp3' })
          const url = window.URL.createObjectURL(mp3)

          setRecordUrl(url)
        } catch (e) {
          console.log(e)
        }
      })()
    }
  }, [])

  useEffect(() => {
    if (!isActive) {
      setIsPlay(false)

      if (audioRef.current) {
        // @ts-ignore
        audioRef.current.load()
      }
    }
  }, [isActive, audioRef.current])

  const handleSetIsPlay = (e: any) => {
    e.stopPropagation()
    if (isPlay) {
      setIsPlay(false)
      // @ts-ignore
      audioRef.current.pause()
    } else {
      setIsPlay(true)
      // @ts-ignore
      audioRef.current.play()

      if (!isActive) {
        dispatch(setCurrentCall(id))
      }
    }
  }

  const handleGetCurrentTime = (e: any) => {
    const currentTime = e.currentTarget.currentTime.toFixed(2)
    setSliderValue(+currentTime)
  }

  const handleSetDuration = (e: any) => {
    setDuration(+e.currentTarget.duration.toFixed(2))
  }

  const handleSliderChange = (e: Event, newValue: number | number[]) => {
    // @ts-ignore
    audioRef.current.currentTime = newValue
    setSliderValue(newValue as number)
  }

  const handleClosePlay = (e: any) => {
    e.stopPropagation()
    setIsPlay(false)
    dispatch(setCurrentCall(0))
  }

  const handleOnEnded = () => {
    setIsPlay(false)
  }

  return {
    handleOnEnded,
    handleClosePlay,
    handleSliderChange,
    handleSetDuration,
    handleGetCurrentTime,
    handleSetIsPlay,
    sliderValue,
    duration,
    recordUrl,
    audioRef,
    isPlay,
  }
}
