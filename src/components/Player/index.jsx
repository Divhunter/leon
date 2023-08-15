// Hooks and dependencies
import { useRef, useEffect, useState } from 'react'
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs'

// Songs
import wontLetSong from '../../assets/songs/wont.mp3'
import selfieSong from '../../assets/songs/selfie.mp3'
import sexualSong from '../../assets/songs/sexual.mp3'
import promiseSong from '../../assets/songs/promise.mp3'

// styles
import './m-player.css'
import './d-player.css'

const Player = () => {


    const [ isPlaying, setIsPlaying ] = useState(false)

    const [ currentSong, setCurrentSong ] = useState(false)

    const clickRef = useRef()

    const audioElem = useRef()

    const songsArray = 

    [
        {	
            "urlSong": `${selfieSong}`
        },
        {	
            "urlSong": `${sexualSong}`
        },
        {	
            "urlSong": `${promiseSong}`
        },
        {	
            "urlSong": `${wontLetSong}`
        }
    ]

    const PlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    const onPlaying = () => {
        
        const duration = audioElem.current.duration

        const ct = audioElem.current.currentTime

        setCurrentSong({ ...currentSong, 'progress': ct / duration * 100, 'length': duration })
    }

    useEffect(() => {
        if (isPlaying) {
            audioElem.current.play()
        }
        else {
            audioElem.current.pause()
        }
    }, [isPlaying, audioElem])

    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth
        const offset = e.nativeEvent.offsetX
        const divprogress = offset / width * 100
        audioElem.current.currentTime = divprogress / 100 * currentSong.length
    }
    
	return (
        <>  
            {songsArray.map((items, index) => (
                <audio 
                    key={index}
                    src={items.urlSong}
                    ref={audioElem}
                    onTimeUpdate={onPlaying}
                >
                </audio>
            ))}
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