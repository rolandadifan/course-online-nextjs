import Head from 'next/head';
import Link from 'next/link';

function Random({data}) {
    return (
        
            <Head>
                <title>Course Random</title>
                <main className="container mt-12">
                    <h1 className="text-3xl">
                        Testing random links
                    </h1>
                    <ul>
                    {data.map((todo)=>{
                        return (
                            <li key={todo.id}>{todo?.title ?? "-"}{""}
                            <Link href={`/random/${todo.id}`}>
                                 <a>Launch</a> 
                            </Link>
                            </li>
                        );
                    })}
                    </ul>
                </main>
            </Head>
    )
}

Random.getInitialProps = async () => {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => json)
        return { data}
    } catch (error) {
        
    }
};

export default Random;