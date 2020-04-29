import React from 'react';
import Period from './Period';
import artEgyptien from '../Images/art-egyptien.jpg';
import artGrecRomain from '../Images/art-antique.jpg';
import artMedieval from '../Images/art-medieval.jpg';
import artModerne from '../Images/art-moderne.jpg';

//Ici mettre un tableau en dur des periodes (periods) qu'on veut afficher, avec des objets {key=id:, title:, date:, content: }
//Puis le composant PeriodList sous forme de fonction qui map periods, et qui pour chaque period , passe le composant
//Period , en lui passant une key unique (l'id de la période,), le title la date, et le contenu

const periods = [
  {
    id:10,
    title: 'Art Egyptien',
    date: '3150 av. .J-C. - 150 av. .J-C.',
    content: 'blablabla', 
    url: artEgyptien
  },
  {
    id:13,
    title: 'Art Grec et Romain',
    date: 'VIIème siècle av. .J-C. - Ier siècle ap. .J-C.',
    content: 'tic',
    url: artGrecRomain
  },
  {
    id:17,
    title: 'Art Médiéval',
    date: 'Vème siècle ap. .J-C. - XIIIème siècle ap. .J-C.',
    content: 'tac',
    url: artMedieval
  },
  {
    id:21,
    title: 'Art Moderne',
    date: 'XXème siècle ap. .J-C.' ,
    content: 'toto',
    url: artModerne
  },
]

class PeriodsList extends React.Component {
/*     constructor(props) {
        super(props);
        this.state = {
            periodsId: '',
        }
    } */
/*     getPeriodsId = async() => {
        const periodsId = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/departments')
        .then(res => res.data)
        .then(data => data.departments)
        this.setState({ periodsId });
      } */
  render() {
    return (
      <div>
        {periods.map(period => (
          <Period key={period.id} title={period.title} date={period.date} content={period.content} url={period.url} />
        ))}
      </div>
    )
  }
  
};

export default PeriodsList;