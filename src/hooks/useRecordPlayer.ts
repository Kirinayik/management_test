import { useAppDispatch, useAppSelector } from '../store/hooks'
import { SyntheticEvent, useEffect, useRef, useState } from 'react'
import { setCurrentCall } from '../store/calls/callsState'
import { $api } from '../http'

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
  const audioRef = useRef<HTMLAudioElement>(null)

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
        audioRef.current.load()
      }
    }
  }, [isActive, audioRef.current])

  const handleSetIsPlay = () => {
    if (isPlay) {
      setIsPlay(false)
      audioRef.current?.pause()
    } else {
      setIsPlay(true)
      audioRef.current?.play()

      if (!isActive) {
        dispatch(setCurrentCall(id))
      }
    }
  }

  const handleGetCurrentTime = (e: SyntheticEvent<HTMLAudioElement>) => {
    const currentTime = e.currentTarget.currentTime.toFixed(2)
    setSliderValue(+currentTime)
  }

  const handleSetDuration = (e: SyntheticEvent<HTMLAudioElement>) => {
    setDuration(+e.currentTarget.duration.toFixed(2))
  }

  const handleSliderChange = (e: Event, newValue: number | number[]) => {
    if (audioRef.current && 'currentTime' in audioRef.current) {
      audioRef.current.currentTime = newValue as number
    }
    setSliderValue(newValue as number)
  }

  const handleClosePlay = () => {
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
