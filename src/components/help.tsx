import React from 'react';
import { Link } from "react-router-dom";

function Help() {

    return (
        <section className="section">

            <div className="container is-fluid">
                <h1 className="title is-uppercase">Handball Resultate und Spiele</h1>
                <ul>
                    <li>
                        <Link to="/verein/140675">Verwende /verein/140675 fuer einen ganzen Verein, z.B. 140675</Link>
                    </li>
                    <li>
                        <Link to="/team/34772">Verwende /team/34772 fuer ein einzelnes Team, z.B. 34772</Link>
                    </li>
                </ul>
            </div >
        </section>

    );
}

export default Help;