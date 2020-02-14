import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'I want in that way', id: 1 },
    { title: 'I Love you', id: 2 },
    { title: 'Quit playingn games with my heart', id: 3 }
  ]);

  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  const [age, setAge] = useState(20);

  useEffect(() => {
    console.log('From Useeffect');
  }, []);

  useEffect(() => {
    console.log('From Useeffect', songs);
  }, [songs]);

  useEffect(() => {
    console.log('From Useeffect', age);
  }, [age]);

  return (
    <div className="song-list">
      <h3>Songs App</h3>
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to : {age}</button>
    </div>
  );
};

export default SongList;
