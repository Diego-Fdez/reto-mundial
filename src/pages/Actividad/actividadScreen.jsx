import './Styles/actividades.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MatchesScreen from './components/MatchesScreen';
import Loader from '../../components/Loader/Loader';

const ActividadScreen = () => {
  const [matches, setMatches] = useState([]);
  const [teams, setTeams] = useState([]);
  const [teamSelected, setTeamSelected] = useState(758);
  const [loading, setLoading] = useState(false);
  const baseUrl = 'http://localhost:4000/api/v1';

  const getData = async () => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const result = await axios.get(
      `${baseUrl}/teams-matches/${teamSelected}`,
      options
    );
    setMatches(result.data.matches);
  };

  const getTeams = async () => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    setLoading(true);
    const result = await axios.get(`${baseUrl}/get-teams`, options);
    setTeams(result.data.teams);
    setLoading(false);
  };

  useEffect(() => {
    getTeams();
    getData();
  }, [teamSelected, setTeamSelected]);
  console.log(matches);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className='container-fluid flex-grow-1 align-items-center justify-content-center position-relative vh-100 overflow-hidden'>
          <div className='rotate45'></div>
          <div className='select-div'>
            <select onChange={(e) => setTeamSelected(e.target.value)}>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
          {matches?.map((match, i) => (
            <div key={i}>
              <MatchesScreen match={match} />
            </div>
          ))}
          <div className='rotate45_2'></div>
        </main>
      )}
    </>
  );
};

export default ActividadScreen;
