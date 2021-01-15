import Head from 'next/head';
import Link from 'next/link';

import axios from 'src/configs/axios';
import Circle from 'public/images/circle-accent-1.svg';
import Header from 'src/parts/Header';
import Hero from 'src/parts/Hero';
import Clients from 'src/parts/Clients';
import ListCourse from 'src/parts/ListCourse';
import ListCategories from 'src/parts/ListCategories';
import Footer from 'src/parts/footer';


function Home({data}) {
  return (
    <>
      <Head>
        <title>Course Online</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="stylesheet icon" href={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.png`}/>
      </Head>

      <main>
        <section className="header-clipping pt-10 min-h-screen md:min-h-0">
            <Circle className="absolute left-0 bottom-0"></Circle>
            {/* <div className="sunshine"></div> */}
            <div className="container mx-auto px-4">
              <Header onLight></Header>
              <Hero></Hero>
            </div>
        </section>
        <section className="container px-4 mx-auto md:pt-24">
          <Clients></Clients>
        </section>
        <section className="container px-4 mx-auto md:pt-24">md:
           <ListCourse data={data}></ListCourse>
        </section>
        <section className="container px-4 mx-auto md:pt-24">
            <ListCategories></ListCategories>
        </section>
        <section className="mt-24 px-4 bg-purple-900 py-12">
            <Footer></Footer>
        </section>
      </main>
    </>
  )
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get(`/courses`)
    return {data: data.data.data};
  } catch (error) {
    return error;
  }
}

export default Home;

