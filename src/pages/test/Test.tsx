//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";

import ReactAudioPlayer from 'react-audio-player';





const supabase = createClient(
  "https://jtfbpluaopseuxmtjonn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0ZmJwbHVhb3BzZXV4bXRqb25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNjY5NjYsImV4cCI6MjA1MTg0Mjk2Nn0.IXv8YuHfLDXFuufY86STUFfDstdYVWI9JTtZj_0uDmk"
);

const Test = () => {
  const [data, setData] = useState([]);
  const [searchTag, setSearchTag] = useState('');
  const [audio, setAudio] = useState('');

  // Fetch data from Supabase
  useEffect(() => {
    const fetchData = async () => {
      let { data: fetchedData } = await supabase
        .from('SadahamStore')
        .select('*');
      setData(fetchedData);
      
      
    };
    fetchData();
  }, []);



  // Filter data based on searchTag
  const filteredData = data.filter(item => item.tags.includes(searchTag));

  console.log(filteredData);



 

  return (

    <>
    <div>
      <input 
        type="text" 
        placeholder="Search by tag" 
        value={searchTag} 
        onChange={e => setSearchTag(e.target.value)} 
      />
      {filteredData.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <button onClick={()=>{setAudio(item.link)}}>Link</button>
          <p>Tags: {item.tags.join(', ')}</p>
        </div>
      ))}
    </div>


    <ReactAudioPlayer
  src={audio}
  autoPlay={true}
  controls
/>
    </>
  );
};

export default Test;
