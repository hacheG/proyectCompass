import React from 'react';
import './Ranking.css';

class Ranking extends React.Component {

    render() {
        return(
            <div>
                <div className="leaderboard">
                    <h1>
                        <img src="https://img.icons8.com/small/16/000000/ranking.png"/>
                        Most active Players
                    </h1>
                    <ol>
                        <li>
                            <mark>Jerry Wood</mark>
                            <small>315</small>
                        </li>
                        <li>
                            <mark>YOU</mark>
                            <small>301</small>
                        </li>
                        <li>
                            <mark>Raymond Knight</mark>
                            <small>292</small>
                        </li>
                        <li>
                            <mark>Trevor McCormick</mark>
                            <small>245</small>
                        </li>
                        <li>
                            <mark>Andrew Fox</mark>
                            <small>203</small>
                        </li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default Ranking;
