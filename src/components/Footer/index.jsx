// Hooks and dependencies
import { Link } from 'react-scroll'
import {fab, faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faAt, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// images
import logo from '../../assets/icons/logo.png'

// video
import Video from '../../components/Video'

// styles
import './m-footer.css'

const Footer = () => {

	return (
		<footer className='footer'>
            <div className='footer__video'>
                < Video />
            </div>
            <div className='footer__container-video'>
                <h1 className='footer__container-video__fellow-me'>Suivez moi...</h1>
                <div className='footer__container-video__link'>
                    <FontAwesomeIcon className='footer__container-video__link__icon icon-fb' icon={(fab, faFacebook)} />
                    <FontAwesomeIcon className='footer__container-video__link__icon icon-tw' icon={(fab, faTwitter)} />
                    <FontAwesomeIcon className='footer__container-video__link__icon icon-lk' icon={(fab, faLinkedin)} />
                    <FontAwesomeIcon className='footer__container-video__link__icon icon-in' icon={(fab, faInstagram)} />
                    <FontAwesomeIcon className='footer__container-video__link__icon icon-yt' icon={(fab, faYoutube)} />
                </div>
                <Link to='header'>
                    <img className='footer__container-video__logo' src={logo} alt='logo-leon'/>
                </Link>
            </div>
			<div className='footer__container-info'>
                <article className='footer__container-info__content'>
                    <div className='footer__container-info__li'>
						<FontAwesomeIcon
							className='footer__container-info__li__icon-info' 
							icon={faAt} 
						/>
                        <p className='footer__container-info__li__text'>
                            contact@leon-web.fr
                            <br/>
                            leon-web@gmail.com
                        </p>
                    </div>
                    <div className='footer__container-info__li'>
                        <FontAwesomeIcon
                            className='footer__container-info__li__icon-info' 
                            icon={faPhone} 
                        />
                        <p className='footer__container-info__li__text'>
                            (+33) 427 115 913
                            <br/>
                            (+33) 610 145 371
                        </p>
                    </div>
                    <div className='footer__container-info__li'>
                        <FontAwesomeIcon
                            className='footer__container-info__li__icon-info' 
                            icon={faGlobe} 
                        />
                        <p className='footer__container-info__li__text'>
                            https://www.leon-web.com/
                            <br/>
                            https://www.facebook.com/leon-web/
                        </p>
                    </div>
                </article>
            </div>
            <div className='footer__copyright'>
                <p>
                    © 2023 - conception web par Aaron DIVIOKA
                </p>
            </div>
		</footer>
	) 
}
 
export default Footer