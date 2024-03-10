//@ts-nocheck
import React, { useState , useRef ,useEffect   } from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const bawana_books =[
 {
  id : 1,
  name : "abhi-dharma-bhavana",
  image : "https://files.catbox.moe/aur51d.jpg",
  pdf : "https://files.catbox.moe/jwbm0r.pdf"

 },
 {
  id : 2,
  name : "anapana-sathi-deshanawa",
  image : "https://files.catbox.moe/vliwvj.jpg",
  pdf : "https://files.catbox.moe/smjyhf.pdf"

 },
 {
  id : 3,
  name : "bhavana",
  image : "https://files.catbox.moe/mln3yi.gif",
  pdf : "https://files.catbox.moe/jwmdpl.pdf" 
 },
 {
  id : 4,
  name : "buddhanussati-bhavana-piritha",
  image : "https://files.catbox.moe/39lxzg.jpg",
  pdf : "https://files.catbox.moe/ivpltj.pdf"

 },
 {
  id: 5,
  name : "maithree-asubha-maranasati-bhavana",
  image : "https://files.catbox.moe/dof25q.jpg",
  pdf : "https://files.catbox.moe/c7qsgc.pdf"
 },

 {
  id : 6,
  name : "maithree-ganga",
  image : "https://files.catbox.moe/asarc9.jpg",
  pdf : "https://files.catbox.moe/p3uhvk.pdf"
 },
 {
  id : 7,
  name : "sama-sathalis-karmasthana-bhavana",
  image : "https://files.catbox.moe/j9cdn3.jpg",
  pdf : "https://files.catbox.moe/fu6nx7.pdf"
 },
 {
  id : 8,
  name : "sathipatthana-bhavanava",
  image : "https://files.catbox.moe/m84lsf.jpg",
  pdf : "https://files.catbox.moe/3visym.pdf"
 },

 {
  id : 9,
  name : "vipassana-bhavana-kramaya-seyado-himi-ariyadhamma-himi",
  image : "https://files.catbox.moe/plgtyk.jpg",
  pdf : "https://files.catbox.moe/s358pn.pdf"
 }



  
]


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


let width = 546.248; //420.96 * 1.3 = 546.248
let height = 773.76; //595.2 * 1.3 = 773.76

const Page = React.forwardRef<HTMLDivElement, { pageNumber: number }>(({ pageNumber }, ref) => (
  <div className="  shadow-xl" ref={ref}>
    <ReactPdfPage noData="" loading="බාගත වෙමින් පවතී ..." renderTextLayer={false} renderAnnotationLayer={false}  pageNumber={pageNumber} height={height}  width={width} />
    
  </div>
));


function Books_bawana() {
  const [numPages, setNumPages] = useState(null);
  const [pdfSource, setPdfSource] = useState('https://files.catbox.moe/smjyhf.pdf');
  const [isFlipBookReady, setIsFlipBookReady] = useState(false);



  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const flipBookRef = useRef(null);

  const nextPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext(); // Flip to next page
    }
  };

  const prevPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev(); // Flip to previous page
    }
  };


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
   if(windowWidth < 768){
    width = 364.16;
    height = 516.48;
   }
  }, [windowWidth]);

  return (
    <>
   
     <div className="min-h-screen flex justify-center flex-col   ">
     <p className="text-center text-xl m-5 text-slate-700 font-semibold " >භාවනා පොත්</p>

      <div className=" flex justify-center" >
      <div  className="w-[60%] ">
      <Carousel>
  <CarouselContent>
  
    {
      bawana_books.map((book , index)=>{
        return(
          <CarouselItem className="basis-1/6 max-[500px]:basis-1/2  m-3 justify-center flex  items-center " >
              <img onClick={()=>{setPdfSource(book.pdf)}} className="w-36 shadow-md rounded-xl cursor-pointer hover:w-32 duration-500  hover:outline outline-slate-400 " src={book.image} alt="sadaham.lk" />
          </CarouselItem>
        )
      })
    }

  
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

      </div>

      </div>




    <div className="my-20  flex justify-center" >
    <Document className=" border-2 " file={pdfSource} onLoadSuccess={onDocumentLoadSuccess}>
      <HTMLFlipBook 
      ref={flipBookRef}
      mobileScrollSupport={true}
       width={width} className=" outline-slate-400 shadow-xl" 
       height={height}
       
      
       minWidth={300}
       // Add other missing properties here
       >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </HTMLFlipBook>
    </Document>
    </div>


    </div>
    <div className=" flex justify-center mb-10 " >
      <div className=" w-1/3 flex justify-around max-[500px]:w-full " >
    <button className="bg-amber-800 text-slate-100 font-semibold px-6 py-2 rounded-xl" onClick={prevPage}><GrPrevious className="inline" /> පෙර පිටුව</button>
    <button className="bg-amber-800 text-slate-100 font-semibold px-6 py-2 rounded-xl" onClick={nextPage}>පසු පිටුව <GrNext className="inline" /></button>
    </div>
    </div>
    
    </>
  );
}

export default Books_bawana;
