import styles from './Categories.module.css'
import Card from '../Card';
import videos from '../../json/db.json'

function Categories({ titulo }){
    return(
        <>
        <h2>{ titulo }</h2>
        <section className={ styles.cards }>
          {videos.map(video => <Card id={video.id} key={video.id}/>)}
        </section>  
        </>
    );
}

export default Categories;