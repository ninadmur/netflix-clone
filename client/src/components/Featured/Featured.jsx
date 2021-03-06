import './featured.scss';
import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Featured = ({ type }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getContent = async () => {
      try {
        const res = await axios.get(`/movies/random`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2M5ZjQ3ODViMTk1NzMzMTg1Nzc2YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODg2NjY0MiwiZXhwIjoxNjQ5Mjk4NjQyfQ.Hmb4NZWYjzTqKxMM3DMhowNsRzzZ_0jGAyGuJ_1X6K4',
          },
        });
        setContent(res.data[0]);
        console.log(content);
      } catch (err) {
        console.log(err);
      }
    };
    getContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content.image} alt="" />
      <div className="info">
        <img src={content.imgSm} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
