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

const wandana_books =[
 {
  id : 1,
  name : "asirimath-budumaga-piyasatahan-min",
  image : "https://files.catbox.moe/rjy8cn.gif",
  pdf : "https://files.catbox.moe/tbk3k2.pdf"

 },
 {
  id : 2,
  name : "atavisi-buddha-vandana-theruvan-vandana-saha-seth-pirith-dehsana-min",
  image : "https://files.catbox.moe/yuwj1o.gif",
  pdf : "https://files.catbox.moe/dayv1b.pdf"

 },
 {
  id : 3,
  name : "bodhi-vandanaava-min",
  image : "https://files.catbox.moe/98murc.gif",
  pdf : "https://files.catbox.moe/o7uq4f.pdf" 
 },
 {
  id : 4,
  name : "buddhanussati-bhavana-piritha",
  image : "https://files.catbox.moe/39lxzg.jpg",
  pdf : "https://files.catbox.moe/ivpltj.pdf"

 },
 {
  id: 5,
  name : "buddha-vandana-kramaya-min",
  image : "https://files.catbox.moe/v7c8dq.gif",
  pdf : "https://files.catbox.moe/h67euw.pdf"
 },

 {
  id : 6,
  name : "chakravarthi-sihanada-suthra-dharma-deshanaya-min",
  image : "https://files.catbox.moe/zb1phf.gif",
  pdf : "https://files.catbox.moe/bwrb02.pdf"
 },
 {
  id : 7,
  name : "devaduta-sutta-min",
  image : "https://files.catbox.moe/8xg5ll.gif",
  pdf : "https://files.catbox.moe/neia65.pdf"
 },
 {
  id : 8,
  name : "kalaguna-dath-seriyuth-maharahathan-vahanse-min",
  image : "https://files.catbox.moe/5hz9iw.gif",
  pdf : "https://files.catbox.moe/4jjx4t.pdf"
 },

 {
  id : 9,
  name : "mahathphala-lebiemata-dan-pinkam-kalayuthu-aakaraya-min",
  image : "https://files.catbox.moe/pw19v6.gif",
  pdf : "https://files.catbox.moe/o3qwas.pdf"
 },

 {
    id : 10,
    name : "manokaaya-saha-maranaya-min",
    image : "https://files.catbox.moe/a8323x.gif",
    pdf : "https://files.catbox.moe/ucict8.pdf"
 },
 {
    id : 11,
    name : "niwan-dekieme-keti-maga-min",
    image : "https://files.catbox.moe/fxcpm7.gif",
    pdf : "https://files.catbox.moe/lmy07b.pdf"


 }
 ,{
    id : 12,
    name : "paharada-sutta-deshanaya-min",
    image : "https://files.catbox.moe/sggjvg.gif",
    pdf : "https://files.catbox.moe/rqu9bd.pdf"

 },
 {
    id : 13,
    name : "shanthi-piritha-min",
    image : "https://files.catbox.moe/uk5m3f.gif",
    pdf : "https://files.catbox.moe/xx5rwy.pdf"
 },

 {
    id : 14,
    name : "sitha-misa-kaya-nethi-babalova-kaya-misa-sitha-nethi-babalova-min",
    image : "https://files.catbox.moe/zcwjzl.gif",
    pdf : "https://files.catbox.moe/uykecf.pdf"

 },
 {
    id : 15,
    name : "suseta-aakara-vashithava-sahitha-aasravakshayakara-gnanaya-min",
    image : "https://files.catbox.moe/fs6a01.gif",
    pdf : "https://files.catbox.moe/ksndo4.pdf"

 },
 {
    id : 16,
    name : "thanhaven-jaya-geniema-min",
    image : "https://files.catbox.moe/miyleg.gif",
    pdf : "https://files.catbox.moe/0b0fg8.pdf"

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


function books_wandana() {
  const [numPages, setNumPages] = useState(null);
  const [pdfSource, setPdfSource] = useState('https://files.catbox.moe/lmy07b.pdf');
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
        <p className="text-center text-xl m-5 text-slate-700 font-semibold " >වන්දනා පොත්</p>

      <div className=" flex justify-center" >
      <div  className="w-[60%] ">
      <Carousel>
  <CarouselContent>
  
    {
      wandana_books.map((book , index)=>{
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

export default books_wandana;
