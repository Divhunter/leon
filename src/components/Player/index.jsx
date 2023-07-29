// Hooks and dependencies
import { useState, useRef, useEffect } from 'react'
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs'

// Songs
import wont from '../../assets/songs/wont.mp3'

// styles
import './m-player.css'
import './d-player.css'

const Player = () => {

    const [ isPlaying, setIsPlaying ] = useState(false)
    const [ currentSong,  setCurrentSong ] = useState({wont})
    const audioElem = useRef()
    const clickRef = useRef()
    const PlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
        if (isPlaying) {
            audioElem.current.play()
        }
        else {
            audioElem.current.pause()
        }
    }, [isPlaying])

    const onPlaying = () => {
        const duration = audioElem.current.duration
        const ct = audioElem.current.currentTime

        setCurrentSong({ ...currentSong, 'progress': ct / duration * 100, 'length': duration })
    }

    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth
        const offset = e.nativeEvent.offsetX
        const divprogress = offset / width * 100;
        audioElem.current.currentTime = divprogress / 100 * currentSong.length
    }
    
	return (
		<>
            <audio src={wont} ref={audioElem} onTimeUpdate={onPlaying}/>
            <div className='navigation'>
                <div 
                    className='navigation-wrapper' 
                    onClick={checkWidth} 
                    ref={clickRef}
                >
                    <div className='seek-bar' style={{width: `${currentSong.progress+'%'}`}}></div>
                </div>
            </div>
            <div className='controls'>
                {isPlaying ? 
                    <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause} /> :
                    <BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause} />
                }
            </div>
		</>
	)
}
 
export default Player