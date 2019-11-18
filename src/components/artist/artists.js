import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import '../../App.css'


const Artists = (() => {

    const [artists, setArtists] = useState([]);
    
    useEffect(() => {
        fetch('http://tannerv.ddns.net:3000/api/artists')
            .then(response => response.json())
            .then(json => setArtists(json))
            .catch(() => {
                console.log("error");
            })
    });
        return (
            <div className="container">
                <div className='artist'>
                    <p className="arrow-back"><Link to="/" className="return"> &lsaquo; Library </Link></p>

                    <h2><strong>Artist</strong></h2>
                    {artists.map((item, index) =>
                        <Table>
                            <tbody>
                                <tr>
                                    <td className='artistname'> <Link to={`/artist/${item.artist}`} className='artists'> {item.artist}  <span>&rsaquo; </span> </Link></td>
                                </tr>
                            </tbody>
                        </Table>
                    )}

                </div>
            </div>
        )
    
});

export default Artists