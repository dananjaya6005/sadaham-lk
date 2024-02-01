import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MdLogout } from "react-icons/md";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router";
import ReactAudioPlayer from "react-audio-player";
import { useRef } from "react";
import { Input } from "@/components/ui/input";



import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const supabase = createClient(
  "https://pfcpiefhtaayktqkegvm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmY3BpZWZodGFheWt0cWtlZ3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0MTM2NjQsImV4cCI6MjAyMTk4OTY2NH0.0I7OqVZTG7vGX9w4NJNe55zsqUv2HJRVqPB7fUtqD9Q"
);

export default function Settings() {
  const navigate = useNavigate();

  const [data, setData] = useState<any>([]);
  const [bgOpacity, setBgOpacity] = useState("30");
  const [themeBgImg, setThemeBgImg] = useState("Theme1");
  const { signOut } = useClerk();

  const [name,setName] = useState('');
  const [description,setDescription] = useState('');  
  const [tags,setTags] = useState('');
  const [link , setLink ] = useState('');







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
      .insert({  name: 'dfdf' ,  description: 'fdfdfd' , tags : ['fd','fdf'] , link : 'dsds'})
      console.log(data)
}


  async function getData() {
    const { data } = await supabase.from("SadahamStore").select();
    console.log(data);
    setData(data);
  }
  


  return (
    <>
      <h1 className="text-xl font-bold text-gray-700 my-5 text-center">
        සැකසුම් පිටුව
      </h1>

      {tags}

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
            <Label className="my-2" htmlFor="tag">ටැග්</Label>
            <Input
              onChange={(e)=>setTags(e.target.value)}
              type="text"
              id="tag"
              placeholder="උදා : කර්මය , ජීවිතය , ..."
            />
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



      <div className=" text-center flex justify-center flex-row ">
        <div className="w-fit">
          <div className=" w-fit">
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
              className="bg-black px-4 py-2 rounded-full text-white my-5"
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
              className="bg-black px-4 py-2 rounded-full text-white my-5"
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
