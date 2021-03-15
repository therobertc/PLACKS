import React from 'react';
import { Card, Button } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';


const TrackList = ({ track }) => {
  return (
    <React.Fragment>
      {Object.keys(track).length > 0 && (
        <div className="albums">
          {track.items.map((track, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: '18rem' }}>
                  <a
                    target="_blank"
                    href={track.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(track.images) ? (
                      <Card.Img
                        variant="top"
                        src={track.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img src={music} alt="" />
                    )}
                  </a>
                  <Card.Body>
                    <Card.Title>{track.name}</Card.Title>
                    <Card.Text>
                      <small>
                        {track.artists.map((artist) => artist.name).join(', ')}
                      </small>
                    </Card.Text>

                    <Button variant="info" type="submit">
          Place Bid
        </Button>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default TrackList;
