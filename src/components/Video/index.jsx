import ReactPlayer from 'react-player'
import computerVDO from '../../assets/video/footerVDO.mp4'

const Video = () => {
    
	return (
		<div className='vdo'>
			<ReactPlayer 
                url={computerVDO}
                playing={true} 
                playsinline={true} 
                muted
                loop={true}
                margin='auto'
                width='100%'
                height='auto'
            />
		</div>
	)
}
 
export default Video