import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
  const [data, setData] = useState<any>([]);
  const [bgOpacity, setBgOpacity] = useState("30");
  const [themeBgImg, setThemeBgImg] = useState("Theme1");

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
      .update({ themeData: themeBgImg})
      .eq("id", "themeBg_img");

    console.log(data);
  }

  return (
    <>
    <h1 className="text-xl font-bold text-gray-700 my-5 text-center">සැකසුම් පිටුව</h1>
    
    <div className=" text-center flex justify-center flex-row ">


   
    <div className="w-fit">
      <div className=" w-fit" >
        
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

        <button onClick={updateBgImg} className="bg-black px-4 py-2 rounded-full text-white my-5">යොමු කරන්න</button>
      </div>

      <div className="my-4">
        <Select onValueChange={(value)=>{setBgOpacity(value)}} >
          <SelectTrigger  className="w-[300px]">
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

        <button onClick={updateOpacity} className="bg-black px-4 py-2 rounded-full text-white my-5">යොමු කරන්න</button>
      </div>

      </div>

     
    </div>
    </>
  );
}
