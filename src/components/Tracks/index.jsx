// Hooks and dependencies
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// components
import Player from '../Player'

// images
import vinyle from '../../assets/icons/vinyle.png'
import chocolateImg from '../../assets/pictures/chocolate.jpg'
import selfieImg from '../../assets/pictures/selfie.jpg'
import sexualImg from '../../assets/pictures/sexual.jpg'
import promiseImg from '../../assets/pictures/promise.jpg'
import wontImg from '../../assets/pictures/wont.jpg'

// styles
import './m-tracks.css'
import './d-tracks.css'

const Tracks = () => {

    const redirection1 = 'https://www.youtube.com/watch?v=B01sQ4XOzyw'

    const redirection2 = 'https://www.youtube.com/watch?v=9HY0Fx2lmzI'

    const redirection3 = 'https://www.youtube.com/watch?v=mE6cvsZZ54g'

    const redirection4 = 'https://www.youtube.com/watch?v=AbCxmHTW-1w'

    const singleArray = 

    [
        {	
            "img": `${selfieImg}`,
            "title": "Selfie-moi ton monde",
            "artiste": "Léon Showman",
            "label": "JS Musik",
            "sortie": "2019",
            "genre": "#Rnb",
            "text": "Un hommage à tous les papas du monde ...",
            "songTitle": "- Selfie moi ton monde -",
            "redirection": `${redirection2}`
        },
        {	
            "img": `${sexualImg}`,
            "title": "Sexual healing",
            "artiste": "Léon Showman",
            "label": "MTG Productions",
            "sortie": "2018",
            "genre": "#Soul",
            "text": "RIP Marvin G",
            "songTitle": "- Sexual healing -",
            "redirection": `${redirection3}`
        },
        {	
            "img": `${promiseImg}`,
            "title": "Promise of love",
            "artiste": "Léon Showman",
            "label": "VAZIVA Music",
            "sortie": "2012",
            "genre": "#Soul",
            "text": "Léon tient toujours ses promesses",
            "songTitle": "- Promise of love -",
            "redirection": `${redirection4}`
        },
        {	
            "img": `${wontImg}`,
            "title": "Won't let u down",
            "artiste": "Léon feat Aaron",
            "label": "XIII BIS Records",
            "sortie": "2011",
            "genre": "#House",
            "text": "Un pur son clubbing !",
            "songTitle": "- Won't let u down -",
            "redirection": ""
        }
    ]

	return (
		<section id='tracks' className='tracks'>
            <header>
                <h1>Tracks</h1>
                <img src={vinyle} alt='vynile'/>
                <span>
                    "En voilà un qui suggère presque de donner naissance au Rhythm & Blues façon Old Time, tant la fidélité et le style sont convaincants. Nous ne plongeons certes pas dans les années ’20 ou ’30 du siècle dernier, mais nous nous trouvons néanmoins presque immergés dans les années ’60."
                    <br/><br/>
                    Dominique Boulay - Blues Magazine (Fr) & Paris-Move 
                </span>
            </header>
            <div>
                <br/>
                <header>
                    - Albums -
                </header>
                <br/>
                <article>
                    <header>
                        <div>
                            <img src={chocolateImg} alt='chocolate'/>
                        </div>
                        <h1>Showman</h1>
                        <h2>
                            Artiste : Léon Chocolate
                            <br/>
                            Label : Vaziva Music
                            <br/>
                            Sortie : 2012
                            <br/>
                            Genre : #Soul
                        </h2>
                        <p>
                            Classé coup de cœur Fnac dès sa sorite !
                        </p>
                        <a className='bonus' href={redirection1}>
                            Extrait video
                            <FontAwesomeIcon className='bonus__arrow' icon={(faArrowRight)} />
                        </a>
                    </header>
                </article>  
                <br/>
                <header>
                    - Singles -
                </header>
                
                    {singleArray.map((items, index) => (
                        <>
                            <br/>
                            <article key={index}>
                                <header>
                                    <div>
                                        <img src={items.img} alt={`pochette-single-${items.img}`}/>
                                    </div>
                                    <h1>{items.title}</h1>
                                    <h2>
                                        Artiste : {items.artiste}
                                        <br/>
                                        Label : {items.label}
                                        <br/>
                                        Sortie : {items.sortie}
                                        <br/>
                                        Genre : {items.genre}
                                    </h2>
                                    <p>
                                        {items.text}
                                    </p>
                                    <a className='bonus' href={items.redirection}>
                                        Extrait video
                                        <FontAwesomeIcon className='bonus__arrow' icon={(faArrowRight)} />
                                    </a>
                                    <div className='player-container'>
                                        <div className='title'>
                                            <p>{items.songTitle}</p>
                                        </div>
                                        <Player />
                                    </div>
                                </header>
                            </article>
                            <br/>
                        </>
                    ))}

                <header>
                    - Playlist -
                </header>
                <br/>
                <article>
                    <header>
                        <div>
                            <img src={chocolateImg} alt='chocolate'/>
                        </div>
                        <h1>Showman</h1>
                        <h2>
                            Artiste : Léon Chocolate
                            <br/>
                            Label : Vaziva Music
                            <br/>
                            Sortie : 2012
                            <br/>
                            Genre : #Soul
                        </h2>
                        <p>
                            Classé coup de cœur Fnac dès sa sorite !
                        </p>
                    </header>
                </article>
            </div>
        </section>
	) 
}
 
export default Tracks