import Head from 'next/head';
import Link from 'next/link';

 function todo({data}) {
    return (
        <>
        <Head>
            <title>Course {data.title}</title>
        </Head>

        <main className="container mt-12 mx-auto">
            <h1 className="text-3xl">{data.title}</h1>
            <p>please</p>
            <Link href="/random">bring me to random</Link>
        </main>
        </>
    )
}

todo.getInitialProps = async (props) => {
    const {id} = props.query;
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(json => json)
        return { data}
    } catch (error) {
        
    }
};

export default todo;