import React, { Component } from 'react'
import "./DotaTeams.scss";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDotaTeams } from '../../actions/fetchDotaTeamsAction' ;

export class DotaTeams extends Component {    
    componentDidMount() {
        this.props.fetchDotaTeams();
    }

    render() {
        const teams = this.props.teams.slice(0, 10);
        console.log(teams);
        let team;
        if (teams.length > 0) {
            team = teams.map(team => (
                <div key={team.team_id}>
                    <img src={team.logo_url}/>
                    <ul>
                        <li>Rating : {team.rating}</li>
                        <li>Wins : {team.wins}</li>
                        <li>Losses : {team.losses}</li>
                    </ul>
                </div>
            ));
        } else {
            team = <h2>Loading Data</h2>;
        }
        return (
            <div>
                <h1>DOTA TEAM LIST</h1>
                {team}
            </div>
        );
    }
}

DotaTeams.propTypes = {
    fetchDotaTeams: PropTypes.func.isRequired,
    teams: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    teams: state.dota.teams
});

export default connect(mapStateToProps, { fetchDotaTeams })(DotaTeams);
