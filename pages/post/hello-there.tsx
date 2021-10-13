import Head from 'next/head';
import Image from 'next/image';

const Hello = () => (
    <>
        <Head>
            <title>Hello there :: My Blog</title>
            <meta property="og:title" content="Hello there :: My Blog"></meta>
        </Head>
        <article>
            <h1>Hello There!</h1>
            <Image
                src="/post/hello-there/floresta.jpg"
                width={640}
                height={426}
                alt="Floresta"
            />
            <p>Photo by <a href="https://pixabay.com/pt/users/robertocarlossantos-1280564/">Roberto Carlos Santos</a> on pixabay</p>
        </article>
    </>
);

export default Hello;
