//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";
import { IoMdTime } from "react-icons/io";
import ReactAudioPlayer from 'react-audio-player';
import damma_icon from '../../assets/icon_damma.png';
import { FaCirclePlay } from "react-icons/fa6";

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";


const supabase = createClient(
  "https://jtfbpluaopseuxmtjonn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0ZmJwbHVhb3BzZXV4bXRqb25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNjY5NjYsImV4cCI6MjA1MTg0Mjk2Nn0.IXv8YuHfLDXFuufY86STUFfDstdYVWI9JTtZj_0uDmk"
);

export default function Anushasana() {

  const [data, setData] = useState([]);
  const [searchTag, setSearchTag] = useState('');
  const [audio, setAudio] = useState('');

  
  const [audioSrc, setAudioSrc] = useState("");

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
  const filteredData = data.filter(item => item.tags.includes('අනුශාසනා'));

  console.log(filteredData);


  function getOperatingSystem() {
    let operatingSystem = 'Not known';
    if (window.navigator.appVersion.indexOf('Win') !== -1) { operatingSystem = 'Windows OS'; }
    if (window.navigator.appVersion.indexOf('Mac') !== -1) { operatingSystem = 'MacOS'; }
    if (window.navigator.appVersion.indexOf('X11') !== -1) { operatingSystem = 'UNIX OS'; }
    if (window.navigator.appVersion.indexOf('Linux') !== -1) { operatingSystem = 'Linux OS'; }
    if (/Android/.test(navigator.userAgent)) { operatingSystem = 'Android'; }
    if (/iPhone|iPad|iPod/.test(navigator.userAgent)) { operatingSystem = 'iOS'; }
    return operatingSystem;
  }




  const renderAudioPlayer = () => {
    const os = getOperatingSystem();
    if(os === 'Android' || os === 'Windows OS') {
      return (
      <div className=" flex justify-center">
      <ReactAudioPlayer
      className="w-1/2 max-[500px]:w-[95%] "
      src={audioSrc}
      autoPlay={true}
      controls
      />
      </div>
      );
   }
    else if(os === 'iOS') {
      return (

      <div className=" flex justify-center">
      <audio controls className=""  >
      <source src={audioSrc} type="audio/mpeg"/>
      
        Your browser does not support the audio element.
      </audio> 
      </div>
      )
    }
  }


  const CalTimeDurationAudio = (meta) => {
    const {duration} = meta.target;
    
     return duration;
  }




  return (
    <>
 <div className=' min-h-screen'>
    < div className='w-screen bg-amber-200 py-4 flex justify-center shadow-lg  my-5'>
      <p className='text-center text-slate-700 font-semibold w-[75%]'>
      පිරිසිදු ත්‍රිපිටකගත සූත්‍ර හා අටුවා ඇසුරෙන් නා උයනේ අරියධම්ම නාහිමිපාණන් වහන්සේ විසින් පවත්වන්නට යෙදුනු ධර්ම දේශනා
     </p></div>

     <p className='text-center my-8 text-xl font-semibold  text-blue-500' >අනුශාසනා දේශනා</p>



    <div className=' w-screen flex justify-center my-10' >
    <div className='w-[75%] max-[500px]:w-[90%] ' >
    
      {filteredData.map(item => (
                        <div key={item.id}>
                        <div className="flex flex-row items-center border-b-2 py-2 justify-between ">
                          <div className=" items-center flex">
                            <img src={damma_icon} alt="" className="w-6 h-6" />
                            <p className=" py-2 italic text-sm mx-4  ">{item.name}</p>
                          </div>
      
                          <div className="flex items-center mr-20 max-[500px]:mr-1 ">
                            <IoMdTime className="mx-2" />
      
                            <p className="mr-8 text-slate-600">{item.duration}</p>
      
                            <Drawer>
                              <DrawerTrigger>  
                                 <FaCirclePlay
                              onClick={() => {
                                setAudioSrc(item.link);
                              }}
                              className="cursor-pointer mx-5"
                              size={35}
                              color="#663300"
                            />
                            </DrawerTrigger>
                              <DrawerContent>
                                <DrawerHeader>
                                  <DrawerTitle><p className="my-4" >{item.name}</p></DrawerTitle>
                                  <DrawerDescription>
                                    <p className="text-xs">අතිපූජනීය නා උයනේ අරියධම්ම නාහිමිපාණන් වහන්සේ විසින් සිදුකරන ලද දේශනාවකි.</p>
                                  
                                  </DrawerDescription>
                                </DrawerHeader>
                                <DrawerFooter>
                                <div>
                              <AudioPlayer
                                autoPlay
                                src={audioSrc}
                              />
                            </div>
                                  <DrawerClose>
                                    <button>වසන්න</button>
                                  </DrawerClose>
                                </DrawerFooter>
                              </DrawerContent>
                            </Drawer>
      
                         
                          </div>
                        </div>
                      </div>
      ))}
    </div>
    </div>
    </div>
    </>
  )
}
