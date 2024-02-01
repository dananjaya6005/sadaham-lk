import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import sadaham_lk_bg from "../../assets/sadaham_lk_bg.png";
import ayanna_logo from "../../assets/ayannaLogo.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "./Home.css";
import { FaCirclePlay } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";

//banner_logo_start_from_here
import abhidarma from "../../assets/BannerLogo/adiadarmaya.png";
import anumondana from "../../assets/BannerLogo/anumodana.png";
import anushasana from "../../assets/BannerLogo/anushasana.png";
import bawana from "../../assets/BannerLogo/bawana.png";
import damma_padaya from "../../assets/BannerLogo/dhamma_padaya.png";
import kamatahan from "../../assets/BannerLogo/kamatahan.png";
import sakachcha from "../../assets/BannerLogo/sakachchana.png";
import suthra from "../../assets/BannerLogo/suthra.png";
import winaya from "../../assets/BannerLogo/winaya.png";
import bawana_books from "../../assets/BannerLogo/bwana_books.png";
import wandana_books from "../../assets/BannerLogo/wandana_books.png";
import swameenWahanse from "../../assets/swaminwahanse_logo.png";
import damma_icon from "../../assets/icon_damma.png";
import lotus_end_img from "../../assets/lotus_end_img.png";

const supabase = createClient(
  "https://pfcpiefhtaayktqkegvm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmY3BpZWZodGFheWt0cWtlZ3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0MTM2NjQsImV4cCI6MjAyMTk4OTY2NH0.0I7OqVZTG7vGX9w4NJNe55zsqUv2HJRVqPB7fUtqD9Q"
);

const damma_karunu_banner = [
  {
    image: suthra,
    link: "/suthra",
  },

  {
    image: winaya,
    link: "/winaya",
  },

  {
    image: abhidarma,
    link: "/abhidarma",
  },

  {
    image: anumondana,
    link: "/anumondana",
  },
  {
    image: anushasana,
    link: "/anushasana",
  },

  {
    image: bawana,
    link: "/bawana",
  },
  {
    image: damma_padaya,
    link: "/damma_padaya",
  },
  {
    image: kamatahan,
    link: "/kamatahan",
  },
  {
    image: sakachcha,
    link: "/sakachcha",
  },
];

const nitharaAsana = [
  {
    title: "මේ ජීවිතයේදීම සෝවාන් ඵලය ලබමු",
    time: "12:10",
    link: "/swameenWahanse",
  },
  {
    title: "පසුතැවෙන ඔබගේ මුලු ජීවිතයම වාසනාවන්ත, පුන්‍යවන්ත කරගන්නා ආකාරය",
    time: "09:25",
    link: "/swameenWahanse",
  },
  {
    title: "සැමට ආකර්ෂනීය පුද්ගලයෙක් වීමේ පියවර",
    time: "22:55",
    link: "/swameenWahanse",
  },

  {
    title: "කර්මය අපගේ ජීවිතයට බලපාන ආකාරය",
    time: "42:21",
    link: "/swameenWahanse",
  },
];

const Theme1 = [
  {
    image:
      "https://pfcpiefhtaayktqkegvm.supabase.co/storage/v1/object/public/sadahamAsset/cf78caa6ee.jpg",
    buttonPirmaryColor: "#F9A826",
  },
];

const Theme2 = [
  {
    image:
      "https://pfcpiefhtaayktqkegvm.supabase.co/storage/v1/object/public/sadahamAsset/6910a413e5.jpg",
    buttonPirmaryColor: "red",
  },
];

const Home = () => {
  const [data, setData] = useState<any>([]);
  const [ThemeAplly, setThemeAplly] = useState<any>([]);
  const [bgOpacity, setBgOpacity] = useState("");
  const [bgImage, setBgImage] = useState();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await supabase.from("Theme").select();
    console.log(data);
    setData(data);
  }

  useEffect(() => {
    extractThemeData();
  }, [data]);

  function extractThemeData() {
    data.map((item: any) => {
      // console.log(item.themeData);

      if (item.id === "themeBg_img" && item.themeData === "Theme1") {
        setThemeAplly(Theme1);
        console.log("theme1");
      } else if (item.id === "themeBg_img" && item.themeData === "Theme2") {
        setThemeAplly(Theme2);
        console.log("theme2");
      }

      console.log(item.id);
    });
  }

  function extractOpacityData() {
    let opacity_dark;

    data.map((item: any) => {
      switch (item.themeData) {
        case "30":
          opacity_dark = "bg-opacity-30";
          console.log("30");
          break;
        case "40":
          opacity_dark = "bg-opacity-40";
          console.log("40");
          break;
        case "50":
          opacity_dark = "bg-opacity-50";
          console.log("50");
          break;
        case "60":
          opacity_dark = "bg-opacity-60";
          console.log("60");
          break;
        case "70":
          opacity_dark = "bg-opacity-70";
          console.log("70");
          break;
        case "80":
          opacity_dark = "bg-opacity-80";
          console.log("80");
          break;
        case "90":
          opacity_dark = "bg-opacity-90";
          console.log("90");
          break;
      }
    });

    return opacity_dark;
  }

  console.warn(extractOpacityData());
  // console.log(bgOpacity);
  // console.warn(ThemeAplly[0]?.image);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${ThemeAplly[0]?.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          width: "100vw",
          display: "flex",

          justifyContent: "center",

          // alignItems: 'center'
        }}
        className=""
      >
        <div
          className={`w-screen bg-black flex ${extractOpacityData()}  justify-center items-center`}
        >
          <div className="w-[80%] flex jus flex-col ">
            <p className="mt-10 text-2xl text-center font-bold  text-white">
              අතිපූජනීය නා උයනේ අරියධම්ම නාහිමිපාණන් වහන්සේ විසින් සිදුකරන ලද
              ධර්ම දාන
            </p>

            <div className="flex rounded-md  mt-14 justify-center ">
              <img
                src={ayanna_logo}
                alt="logo"
                className="w-10 h-10 rounded-l-lg  cursor-pointer "
              />
              <input
                type="text"
                placeholder="දහම් කරුණු පිරික්සන්න ..."
                className=" w-80  h-fit  px-5 py-2 shadow-lg rounded-r-lg "
              />
              <button className="bg-amber-400 h-fit text-slate-800 font-semibold px-5 py-2 rounded-lg shadow-lg ml-5  ">
                සොයන්න
              </button>
            </div>

            <p className="text-center mt-10 mb-4 text-white ">
              චිරං තිට්ඨතු ලෝකස්මිං - සම්මා සම්බුද්ධ සාසනං ෴
            </p>
            <p className="text-center  text-white">
              සම්බුදු සසුන ලෝතුල බොහෝ කල් පවතීවා
            </p>
          </div>
        </div>
      </div>

      <div className=" flex justify-center ">
        <Tabs
          defaultValue="deshana"
          className="w-[70%]  flex my-6 flex-col justify-center items-center "
        >
          <TabsList>
            <TabsTrigger value="deshana">දේශනා</TabsTrigger>
            <TabsTrigger value="poth">පොත්</TabsTrigger>
          </TabsList>
          <TabsContent value="deshana">
            <div>
              <div className="flex flex-wrap justify-center  w-[100%]">
                {damma_karunu_banner.map((item: any) => (
                  <div className="m-5">
                    <img
                      src={item.image}
                      alt="logo"
                      className="w-28 h-28 shadow-lg object-cover border-2 border-amber-700 rounded-lg cursor-pointer 
                hover:scale-110 transition duration-500 ease-in-out hover:drop-shadow-[0_35px_35px_rgba(204,102,0,0.4)] "
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="poth">
            <div className="flex">
              <img
                src={bawana_books}
                alt="logo"
                className="w-40 rounded-md m-5  cursor-pointer 
                hover:scale-110 transition duration-500 ease-in-out hover:drop-shadow-[0_35px_35px_rgba(204,102,0,0.4)] "
              />
              <img
                src={wandana_books}
                alt="logo"
                className="w-40 rounded-md m-5   cursor-pointer 
                hover:scale-110 transition duration-500 ease-in-out hover:drop-shadow-[0_35px_35px_rgba(204,102,0,0.4)] "
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className=" flex justify-center my-10  ">
        <div className="flex w-[80%]  ">
          <div className="flex">
            <div>
              <h1 className="text-lg font-semibold my-8 text-slate-800 ">
                අතිපූජනීය නා උයනේ අරියධම්ම නාහිමිපාණන් වහන්සේ
              </h1>
              <p className="w-[90%] leading-loose ">
                ශ්‍රී කල්‍යාණි යෝගාශ්‍රම සංස්ථාවේ සමුත්පාදක කඩවැද්දුව ශ්‍රී
                ජිනවංසාභිධාන මාහිමිපාණන් වහන්සේ විසින් 'යෝගාශ්‍රම සංස්ථාවේ හදවත'
                යනුවෙන් හඳුන්වා සම්භාවනාවට පාත්‍ර කරන ලද්දා වූ ශ්‍රීමත් සුගත
                තථාගත ශ්‍රී සම්බුද්ධ පාදස්පර්ෂයෙන් පරම පවිත්‍රත්වයට පත් වූ ජය
                භූමිය වන මේ ශ්‍රී ලංකාද්වීපයෙහි ත්‍රිවිධ ශාසනභාරධාරීව වැඩවිසූ
                ශ්‍රී කල්‍යාණි යෝගාශ්‍රම සංස්ථාධිපති, ප්‍රධාන අනුශාසක මහා
                බෝධිසත්ව ගුණ සමන්වාගත අතිපූජනීය නාඋයනේ අරියධම්මාභිධාන ශ්‍රී ලංකා
                රාමඤ්ඤ මහා නිකායේ අනුනායක මාහිමිපාණන් වහන්සේගේ ජීවන තොරතුරු
                හිරුසඳු සෙයින් බෞද්ධ ලෝකයා අතර අතිශයින් ප්‍රකටව පවතින නමුදු, ඒ
                මහෝත්තම ජීවන චරිතය සංක්ෂිප්තව මෙහි සටහන් කොට තබනුයේ එය සටහන්
                නොකිරීමෙන් මෙම ලිපිපෙළ රන්කොත ගිලිහී ගිය සෑයක් සෙයින් ඌනභාවයට
                පත් වන බැවිනි.
              </p>
              <p className="text-blue-600 font-semibold my-5 cursor-pointer ">
                තවත් කියවන්න
              </p>
            </div>
            <img
              src={swameenWahanse}
              alt="logo"
              className="w-80 rounded-lg shadow-lg "
            />
          </div>
        </div>
      </div>

      <div className=" flex justify-center">
        <div className="w-[80%] ">
          <p className="font-semibold">නිතර ශ්‍රවණය කරන දහම් කරුණු</p>

          <div className="my-5">
            {nitharaAsana.map((item: any) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-row items-center border-b-2 py-2 justify-between  ">
                    <div className=" items-center flex">
                      <img src={damma_icon} alt="" className="w-6 h-6" />
                      <p className=" py-2 italic text-sm mx-4">{item.title}</p>
                    </div>

                    <div className="flex items-center mr-20 ">
                      <IoMdTime className="mx-2" />

                      <p className="mr-8 text-slate-600">{item.time}</p>
                      <FaCirclePlay
                        className="cursor-pointer mx-5"
                        size={35}
                        color="#663300"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="my-10 flex justify-center">
        <img src={lotus_end_img} alt="" className="w-40 opacity-90" />
      </div>
    </>
  );
};

export default Home;
