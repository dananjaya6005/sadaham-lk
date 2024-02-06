//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import ayanna_logo from '../../assets/ayannaLogo.png';
import { createClient } from "@supabase/supabase-js";
import ReactAudioPlayer from 'react-audio-player';
import { IoMdTime } from "react-icons/io";
import damma_icon from '../../assets/icon_damma.png';
import { FaCirclePlay } from "react-icons/fa6";
import { FaBorderAll } from "react-icons/fa6";
import { LiaRandomSolid } from "react-icons/lia";
import { MdBorderAll } from "react-icons/md";




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
    "https://pfcpiefhtaayktqkegvm.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmY3BpZWZodGFheWt0cWtlZ3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0MTM2NjQsImV4cCI6MjAyMTk4OTY2NH0.0I7OqVZTG7vGX9w4NJNe55zsqUv2HJRVqPB7fUtqD9Q"
  );


export default function Search() {

    const [data, setData] = useState([]);
    const [searchTag, setSearchTag] = useState('');
    const [audio, setAudio] = useState('');
    const [audioSrc, setAudioSrc] = useState("");
    const [dataFetchedStore, setDataFetchedStore] = useState([]);
    const [secondarySearchParams , setSecondarySearchParams] = useState();
  

    const location  = useLocation();

    const searchParams = location.state.SearchData;



      // Fetch data from Supabase
  useEffect(() => {
    const fetchData = async () => {
      let { data , error } = await supabase
        .from('SadahamStore')
        .select('*');
      setData(data.filter(item => item.tags.includes(searchParams)));
      setDataFetchedStore(data);
      
      
    };
    fetchData();
  }, []);

  const filteredData = data.filter(item => item.tags.includes(searchParams));


  const secondarySearch = ()=>{
    setData(dataFetchedStore.filter(item => item.tags.includes(searchTag)));
     setSecondarySearchParams(searchTag);

  }



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





  return (
    <div className=' flex justify-center items-center flex-col ' >
     
        <div className='w-[80%] bg-gradient-to-tl from-yellow-700
         to-amber-900 my-10 rounded-2xl max-[500px]:w-[97%] ' >


        <div className="flex rounded-md   my-8 justify-center max-[500px]:flex-col max-[500px]:mx-5  ">
              <div className="flex  max-[500px]:justify-center ">
                <img
                  src={ayanna_logo}
                  alt="logo"
                  className="w-10 h-10 rounded-l-lg  cursor-pointer "
                />
                <input
                  type="text"
                  onChange={(e)=>{setSearchTag(e.target.value)}}
                  placeholder="දහම් කරුණු පිරික්සන්න ..."
                  className=" w-80  bg h-fit  px-5 py-2 shadow-lg rounded-r-lg "
                />
              </div>
              <button
              onClick={secondarySearch}
                className="bg-amber-400 h-fit text-slate-800 font-semibold px-5 py-2 rounded-lg shadow-lg ml-5
              max-[500px]:w-fit max-[500px]:self-center max-[500px]:mt-5 "
              >
                සොයන්න
              </button>
            </div>




        <div  className=' flex justify-center my-8 ' > 
          <button className="bg-white hover:bg-grey text-grey-darkest py-2 px-2 rounded inline-flex items-center mx-5 ">
          <MdBorderAll />
            <span className='mx-2'>සියලු දේශනා</span>
          </button>

          <button className="bg-white hover:bg-grey text-grey-darkest py-2 px-2 rounded inline-flex items-center mx-5">
          <LiaRandomSolid />

            <span className='mx-2'>අහඹු දේශනා</span>
          </button>
         </div>

    
        </div>

        <div className='max-[500px]:mx-10 text-center'>
            <p className=' '> <span className='font-semibold text-blue-500 cursor-cell italic ' >
              {secondarySearchParams ? secondarySearchParams : searchParams} {" "}
              </span>යන දහම් කරුණ සදහම් දේශනා ශ්‍රවණය කරන්න.</p>
        </div>

        <div className=' w-[60%] my-9 max-[500px]:w-[93%] '>

          <div>
            {data.length === 0 ? <p className='text-center text-2xl my-10 text-slate-400'> <span className='text-red-400' >{searchParams}</span> කරුණු  සඳහා සදහම් දේශනා නොමැත. </p> : null } 
          </div>

        {data.map(item => (
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
                                  {
                                    renderAudioPlayer()
      
                                  }
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
  )
}
