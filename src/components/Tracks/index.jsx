// images
import vinyle from '../../assets/icons/vinyle.png'
import chocolate from '../../assets/pictures/chocolate.jpg'

// styles
import './m-tracks.css'
import './d-tracks.css'

const Tracks = () => {

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
                <header>
                    - Albums -
                </header>
                <article>
                    <header>
                        <div>
                            <img src={chocolate} alt='chocolate'/>
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

                <header>
                    - Singles -
                </header>
                <article>
                    <header>
                        <div>
                            <img src={chocolate} alt='chocolate'/>
                        </div>
                        <h1>Selfie-moi ton monde</h1>
                        <h2>
                            Artiste : Léon Showman
                            <br/>
                            Label : JS Musik
                            <br/>
                            Sortie : 2019
                            <br/>
                            Genre : #Rnb
                        </h2>
                        <p>
                            Comme un hommage à sa fille ...
                        </p>
                    </header>
                </article> 

                <header>
                    - Divers -
                </header>
                <article>
                    <header>
                        <div>
                            <img src={chocolate} alt='chocolate'/>
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