import {useEffect, useRef,useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Youtube from 'react-youtube';
import {CSSTransition} from 'react-transition-group';

import courses from 'src/constant/api/courses';
import Header from 'src/parts/Header';
import formatThousand from 'src/parts/helpers/formatThousand';

import Layar from 'public/images/layar.svg';
import Member from 'public/images/member.svg';
import Trophy from 'public/images/trophy.svg';

import Footer from 'src/parts/footer'
import Feature from 'src/parts/details/feature'
import CoursePhoto from 'src/parts/details/CoursePhotos'
import RenderPreview from 'src/parts/details/RenderPreview';
import HappyStudent from 'src/parts/details/happystudent';

 function DetailsCourse({data}) {

     const footer = useRef(null);
     const [isSticky,setisSticky] = useState(()=> true);

     useEffect(() => {
         const stickyoffsettop = footer.current.getBoundingClientRect().top
         const stickymetatoggler = () => {
             setisSticky(stickyoffsettop >= window.pageYOffset + window.innerHeight)
         }
         window.addEventListener("scroll",stickymetatoggler )
         return () => {
             window.removeEventListener("scroll",stickymetatoggler )
         }
     }, []);
    return (
        <>
        <Head>
            <title>Course {data.title}</title>
        </Head>

        <section className="px-4 pt-10 relative overflow-hidden" style={{ height: 660 }}>
            {
                data?.chapters?.[0]?.lessons?.[0]?.video &&
                 <div className="video-wrapper min-h-screen md:min-h-full">
                     <Youtube className="w-full"  videoId={data?.chapters?.[0]?.lessons?.[0]?.video}
                      id={data?.chapters?.[0]?.lessons?.[0]?.video}
                       opts={{ playerVars:{
                           loop:1,
                           mute:1,
                           autoplay:1,
                           controls:0,
                           showinfo:0
                       } }}
                       onEnd={(event) => {
                           event.target.playVideo();
                       }}
                       > </Youtube>
                 </div>
            }

            <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-75"></div>
            <div className="meta-title absolute inset-0 object-fill z-0 w-full flex justify-center items-center">
                <div className="text-center">
                    <h3 className="text-lg text-white">Course Online</h3>
                    <h4 className="text-3xl md:text-6xl text-teal-500 font-semibold">
                        {data?.name ?? "nama kelas"}
                    </h4>
                </div>
            </div>
            <div className="container mx-auto z-20 relative">
                <Header></Header>
            </div>
        </section>

        <section className="container mx-auto pt-24 relative">
            <div className="md:absolute top-0 w-full transform md:-translate-y-1/2">
                <div className="w-3/4 mx-auto">
                    <div className="flex flex-wrap justify-between">
                        <Feature data={{ 
                            icon: <Member className="fill-teal-500"/>,
                            meta: "Student",
                            value: data?.total_student ?? 0
                         }}/>
                         <Feature data={{ 
                            icon: <Layar className="fill-teal-500"/>,
                            meta: "Video",
                            value: data?.total_videos ?? 0
                         }}/>
                         <Feature data={{ 
                            icon: <Trophy className="fill-teal-500"/>,
                            meta: "Certificate",
                            value: data?.certificate === 1 ? "Tersedia" : "-"
                         }}/>
                    </div>
                </div>
            </div>
            <div>
                <CSSTransition in={isSticky} timeout={300} classNames="meta-price" unmountOnExit>
                    <div className="meta-price w-full bg-white z-10 left-0 md:py-3">
                        <div className="w-full md:w-3/4 md:mx-auto">
                            <div className="flex items-center">
                                <div className="w-full ml-2 md:mx-auto">
                                    <h2 className="text-gray-600 text-xs md:text-base">Nama Kelas</h2>
                                    <h3 className="text-base md:text-2xl text-gray-900">{data?.name ?? "nama kelas"}</h3>
                                </div>
                                <h5 className="text-base md:text-2xl text-teal-500 whitespace-no-wrap mr-4">
                                    {data?.type ==="free" ? "Free" : <span>Rp. {formatThousand(data?.price ?? 0)}</span>}
                                </h5>
                                <a href={`${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/joined/${data.id}`} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 whitespace-nowrap">
                                    {data?.type === "free" ? "Enroll Now" : "Buy Now"}
                                </a>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </div>
            <div className="w-3/4 mx-auto mt-8">
                <div className="w-full md:w-3/4">
                    <section>
                        <h6 className="font-medium text-gray-900 text-2xl mb-4">About <span className="text-teal-500">Course</span></h6>
                        <p className="text-gray-600 md:text-lg text-base leading-relaxed mb-3">
                            {data?.description ?? "no description"}
                        </p>
                    </section>

                   <section className="mt-10">
                        <h6 className="font-medium text-gray-900 text-2xl mb-4">
                            Course <span className="text-teal-500">Photos</span>
                        </h6>
                        <div className="flex flex-wrap justify-start items-center -mx-4 mt-6">
                            {data?.images?.length > 0 ? (
                            data?.images?.map?.((photo, index) => (
                                <CoursePhoto data={photo.image} key={index} />
                            ))
                            ) : (
                            <div className="w-full text-center py-12">No Item Found</div>
                            )}
               </div>
            </section>

            <section className="mt-10">
                <h6 className="font-medium text-gray-900 text-2xl mb-4">
                    You Will  <span className="text-teal-500">Learn</span>
                </h6>
                {
                    data?.chapters?.length > 0 ? 
                    <RenderPreview previews={data.chapters}></RenderPreview>
                    : <div className="w-full text-center py-12">No Chapters Found</div>
                }
            </section>   
            <section className="mt-10 w-full md:w-2/3">
                <h6 className="font-medium text-gray-900 text-2xl mb-4">
                    Our  <span className="text-teal-500">Instructor</span>
                </h6>
                <div className="flex items-center">
                    <img src={data?.mentor?.profile ?? ""} alt="mentor photo" className="w-20 h-20 rounded-full overflow-hidden object-cover"/>
                    <div className="ml-4">
                        <h2 className="text-lg text-gray-900">
                            {data?.mentor?.name}
                        </h2>
                        <h3 className="text-sm text-gray-60">
                            {data?.mentor?.profession}
                        </h3>
                    </div>
                </div>
                </section>  

                <section className="mt-10 w-full md:w-6/12">
                    <h6 className="font-medium text-gray-900 text-2xl mb-4">
                         Happy  <span className="text-teal-500">Student</span>
                    </h6>

                    {
                        data.reviews?.map?.((testimonial,index) => {
                            return <HappyStudent key={index} data={testimonial}></HappyStudent>
                        })
                    }
                    </section>     
                </div>
            </div>
        </section>
        <div style={{ height:2000 }}></div>
        <section className="mt-24 bg-purple-900 py-12" ref={footer}>
            <Footer></Footer>
        </section>
        </>
    )
}

DetailsCourse.getInitialProps = async (props) => {
    const {id} = props.query;
    try {
        const data = await courses.details(id);

        return { data};
    } catch (error) {
        return error;
    }
};

export default DetailsCourse;