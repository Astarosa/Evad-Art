import artEgyptien from '../Images/art-egyptien.jpg';
import artGrecRomain from '../Images/art-antique.jpg';
import artMedieval from '../Images/art-medieval.jpg';
import artModerne from '../Images/art-moderne.jpg';
import artMedievalIllustrationUne from '../Images/art-medieval-illustration-1.jpg';
import artModerneIllustrationUne from '../Images/art-moderne-illustration-1.jpg';

//Ici mettre un tableau en dur des periodes (periods) qu'on veut afficher, avec des objets {key=id:, title:, date:, content: }
//Puis le composant PeriodList sous forme de fonction qui map periods, et qui pour chaque period , passe le composant
//Period , en lui passant une key unique (l'id de la période,), le title la date, et le contenu.

const periods = [
  {
    id:10,
    title: 'Art Egyptien',
    date: '3150 av. .J-C. - 150 av. .J-C.',
    content: 
    {
      text:"L'art Egyptien n'est pas \"primitif\" au sens des peintures rupestres. Si les bas-reliefs sont une représentation tronquée de la nature, c'est une volonté des Egyptiens. En effet, leur but n'est pas de faire une représentation exacte de la réalité, il est bien plus important d'en faire une représentation complète: la tête se voit mieux de profil, le torse de face, les bras et les jambes de profil, etc. Pour la première fois, on peut parler de \"style\".",
      illustration: 'https://ekladata.com/3B7IUx3anXzGBOPMKFSpyuvXltE.jpg',
      description: 'Le style Egyptien',
    }, 
    url: artEgyptien,
    request: 'egypt',
  },
  {
    id:13,
    title: 'Art Grec et Romain',
    date: 'VIIème siècle av. .J-C. - Ier siècle ap. .J-C.',
    content:
    {
      text:"L'art Grec apporte une grande nouveauté : le but n'est plus d'imiter avec la plus grande fidélité possible le style des anciens mais, pour chaque sculpteur, de décider par lui même comment il va représenter le corps, chacun reprenant les grands succès des autres : comment réussir un torse, réaliser que la statue est plus vivante si le pied est légèrement soulevé, remarquer qu'un léger sourire rend sympa. L'idée générale est : \"n'imitez pas, innovez\". On invente le raccourci.",
      illustration: 'https://idata.over-blog.com/4/08/12/30/raccourci/Euthymides---detail2.JPG',
      description: "L'invention du raccourci : un pied de profil et l'autre de face",
    }, 
    url: artGrecRomain
  },
  {
    id:17,
    title: 'Art Médiéval',
    date: 'Vème siècle ap. .J-C. - XIIIème siècle ap. .J-C.',
    content:
    {
      text:"Avec le christianisme, la question de la place des images dans la religion se pose de manière renouvelée. Si pour tous les premiers chrétiens, il ne doit pas y avoir de représentation dans les églises, le Pape Grégoire le Grand, au IVème siècle, inverse la tendance. D'après lui, les images peuvent avoir un rôle d'enseignement pour les fidèles ne sachant pas lire. Le but n'est donc plus de représenter la réalité mais d'aller à l'essentiel pour plus de clarté et, ainsi, mieux éduquer.",
      illustration: artMedievalIllustrationUne,
      description: "Peu importe les proportions, le message doit être le plus clair possible",
    },
    url: artMedieval
  },
  {
    id:21,
    title: 'Art Moderne',
    date: 'XXème siècle ap. .J-C.' ,
    content:
    {
      text:"Faut il impérativement représenter une toile reconnaissable pour pouvoir exprimer ses sentiments.Le cap est franchit par le peintre russe Wassily Kandisky , pionnier de l'art abstrait connu également sous le nom d'art décoratif. Picasso lui emboîtera le pas en s'inspirant du fauvisme issu de l'impressionnisme de Monnet , comme peut l'illustrer son oeuvre intitulée violon et raisin.",
      illustration: artModerneIllustrationUne,
      description: 'Violon et raisins, Pablo Picasso, 1912',
    },
    url: artModerne
  },
]

export default periods;
