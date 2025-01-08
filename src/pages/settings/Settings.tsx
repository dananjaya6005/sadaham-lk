//@ts-nocheck
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MdLogout } from "react-icons/md";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router";

import { Input } from "@/components/ui/input";
import { IoIosAddCircleOutline } from "react-icons/io";



import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const supabase = createClient(
  "https://jtfbpluaopseuxmtjonn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0ZmJwbHVhb3BzZXV4bXRqb25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNjY5NjYsImV4cCI6MjA1MTg0Mjk2Nn0.IXv8YuHfLDXFuufY86STUFfDstdYVWI9JTtZj_0uDmk"
);

export default function Settings() {
  const navigate = useNavigate();

  const [data, setData] = useState<any>([]);
  const [bgOpacity, setBgOpacity] = useState("30");
  const [themeBgImg, setThemeBgImg] = useState("Theme1");
  const { signOut } = useClerk();

  const [name,setName] = useState('');
  const [description,setDescription] = useState('');  
  const [tags,setTags] = useState([] as string[]);
  const [link , setLink ] = useState('');
  const [tempTag , setTempTag] = useState('');
  const [duration , setDuration] = useState('');


  console.log(tags)





  async function updateOpacity() {
    const { data } = await supabase
      .from("Theme")
      .update({ themeData: parseInt(bgOpacity) })
      .eq("id", "bg_opacity");

    console.log(data);
  }

  async function updateBgImg() {
    const { data } = await supabase
      .from("Theme")
      .update({ themeData: themeBgImg })
      .eq("id", "themeBg_img");

    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);


  async function storeData() {
    const { data } = await supabase
      .from('SadahamStore')
      .insert({  name: name ,  description: description , tags : tags , link : link , duration : duration})
      console.log(data)
}


  async function getData() {
    const { data } = await supabase.from("SadahamStore").select();
    console.log(data);
    setData(data);
  }

  function handleTagCLick(){
    setTags([...tags,tempTag])
    setTempTag('')
  }
  


  return (
    <>
      <h1 className="text-xl font-bold text-gray-700 my-5 text-center">
        සැකසුම් පිටුව ⚙️
      </h1>

      <div  className="bg-slate-700 text-gray-100 font-semibold text-center p-2 m-5 rounded-xl">ගොනු උඩුගත කරන්න. 📁</div>

      


      <div className=" flex justify-center  ">

        <div className=" flex justify-center flex-col  w-1/3	 " >
          <div className="grid w-full max-w-sm items-center gap-1.5 my-3 ">
            <Label className="my-2" htmlFor="name">පටිගත ගොනුවේ නාමය</Label>
            <Input
             onChange={(e)=>setName(e.target.value)}
              type="text"
              id="name"
              placeholder="උදා : කර්මය ජීවිතයට බලපාන ආකාරය..."
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 my-3 ">
            <Label className="my-2" htmlFor="description">විස්තරය</Label>
            <Input
              onChange={(e)=>setDescription(e.target.value)}
              type="text"
              id="description"
              placeholder="විස්තරයක් ඇතුලත් කරන්න..."
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 my-3 ">

            <div className="my-2" >
            <Select
              onValueChange={(value) => {
                setTags([value]);
              }}
            >
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="ප්‍රධාන පටිගත වර්ගය තෝරන්න" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="සූත්‍ර">සූත්‍ර</SelectItem>
                <SelectItem value="විනය">විනය</SelectItem>
                <SelectItem value="අභිධර්මය">අභිධර්මය</SelectItem>
                <SelectItem value="භාවනා">භාවනා</SelectItem>
                <SelectItem value="කමටහන්">කමටහන්</SelectItem>
                <SelectItem value="සාකච්ඡා">සාකච්ඡා</SelectItem>
                <SelectItem value="ධම්මපදය">ධම්මපදය</SelectItem>
                <SelectItem value="අනුමෝදනා">අනුමෝදනා</SelectItem>
                <SelectItem value="අනුශාසනා">අනුශාසනා</SelectItem>
                
              </SelectContent>
            </Select>
            </div>

            
            <div className="my-5">
            <Label className="my-2" htmlFor="duration">ධාවන කාලය</Label>
            <Input className="my-2" value={duration} onChange={(e)=>{setDuration(e.target.value)}} type="text" id="duration" placeholder="උදා : 10:00" />
            </div>


            <Label className="my-2" htmlFor="tag">ටැග්</Label>
            <div className="flex ">
            <Input
             value={tempTag}
              onChange={(e)=>setTempTag(e.target.value)}
              type="text"
              id="tag"
              placeholder="උදා : කර්මය , ජීවිතය , ..."
            />

              <IoIosAddCircleOutline 
          onClick={() => {
            handleTagCLick();
          }}
          className="bg-slate-700 p-2 rounded-lg ml-5 cursor-pointer "
          size={40}
          color="white"
        />
            </div>

            <div className=" my-2 flex flex-wrap flex-row">
              {
                tags.map((tag)=>{
                  return(
                    <div >
                    <div className="bg-slate-200 px-2 text-xs py-1 rounded-lg ml-5 w-fit my-1 ">{tag}</div>
                    </div>
                  )
                })
              }
            </div>





          </div>

          

          <div className="grid w-full max-w-sm items-center gap-1.5 my-3 ">
            <Label className="my-2" htmlFor="link">ගොනු යොමුව</Label>
            <Input
              onChange={(e)=>setLink(e.target.value)}
              type="text"
              id="link"
              placeholder="උදා : https://sharedby.blomp.com/lo3...."
            />
          </div>

          <button onClick={storeData} className="bg-slate-800 px-6 py-2 text-white rounded-full my-3 hover:bg-slate-600 duration-500 " >උඩුගත කරන්න</button>

          


        </div>
      </div>

        <br />
          <hr />
          <br />

      <div className=" text-center flex justify-center  flex-row ">
        <div className="w-1/3  ">
          <div className=" w-full">
            <p className="my-5"> පසුබිම් තේමාව තෝරන්න</p>
            <RadioGroup
              onValueChange={(value) => {
                setThemeBgImg(value);
              }}
              defaultValue="Theme1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Theme1" id="Theme1" />
                <Label htmlFor="Theme 1">Theme 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Theme2" id="Theme2" />
                <Label htmlFor="Theme 2 ">Theme 2</Label>
              </div>
            </RadioGroup>

            <button
              onClick={updateBgImg}
              className="bg-gray-900 cursor-pointer w-full px-4 py-2 rounded-full text-white my-5"
            >
              යොමු කරන්න
            </button>
          </div>

          <div className="my-4">
            <Select
              onValueChange={(value) => {
                setBgOpacity(value);
              }}
            >
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="පසුබිමෙහි විනිවිදභාවය" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30</SelectItem>
                <SelectItem value="40">40</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="60">60</SelectItem>
                <SelectItem value="70">70</SelectItem>
                <SelectItem value="80">80</SelectItem>
                <SelectItem value="90">90</SelectItem>
              </SelectContent>
            </Select>

            <button
              onClick={updateOpacity}
              className="bg-gray-900 cursor-pointer px-4 py-2 w-full rounded-full text-white my-5"
            >
              යොමු කරන්න
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8">
        <MdLogout
          onClick={() => {
            signOut();
            navigate("/");
          }}
          className="bg-slate-700 p-2 rounded-full cursor-pointer "
          size={40}
          color="white"
        />
      </div>

      <div></div>
    </>
  );
}
