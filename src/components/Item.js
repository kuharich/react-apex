import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import './../css/item.css';

class Item extends Component {

  getArtist() {
    return this.props.artistName || '';
  }

  getTrack() {
    return this.props.trackName || '';
  }

  getRelease() {
    let date = new Date(this.props.releaseDate);
    return date.toDateString();
  }

  getGenre() {
    return this.props.primaryGenreName || '';
  }

  getPrice() {
    return this.props.trackPrice || '';
  }

  getAlbum() {
    return this.props.collectionName || '';
  }

  getYear() {
    return this.props.releaseDate.split('-')[0] || '';
  }

  getThumbnail() {
    const noImage = <b>Thumbnail Unavailable</b>;
    const image = <img src={this.props.artworkUrl100.replace('100x100', '300x300')} alt={this.props.collectionName}/>;
    return image || noImage;
  }

  render() {
    return(
      <div>
        <Row>
          <Col xs={4} className="album-details">
            <p>{this.getArtist()}</p>
            <p>{this.getTrack()}</p>
            <p>{this.getRelease()}</p>
            <p>{this.getGenre()}</p>
          </Col>
          <Col xs={4} className="price">
            <p>&nbsp;</p>
            <p>&nbsp;&nbsp;${this.getPrice()}</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </Col>
        </Row>
        <hr/>
    </div>
    )
  }

}

export default Item;
