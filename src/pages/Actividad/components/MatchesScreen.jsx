import { formatDate } from '../../../services/formatData';

const MatchesScreen = ({ match }) => {
  return (
    <div className='actividades-wrapper'>
      <div className='image-wrapper'>
        <div className='rounded-image'>
          <img src={match.homeTeam.crest} alt='' />
        </div>
        <h3 className='texto-secundario'>{match.homeTeam.name}</h3>
      </div>
      <div className='texto-div'>
        <h1 className='texto-principal'>VS</h1>
        <h3>{formatDate(match?.utcDate)}</h3>
      </div>
      <div className='image-wrapper'>
        <div className='rounded-image'>
          <img src={match.awayTeam.crest} alt='' />
        </div>
        <h3 className='texto-secundario'>{match.awayTeam.name}</h3>
      </div>
    </div>
  );
};

export default MatchesScreen;
