import Head from "next/head";
import Link from "next/link";
import Style from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="Samiur Rahman Mukul" />
      </Head>

      <div>
        <h1 className={Style.title}>Home Page !</h1>

        <p className={Style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ex nostrum rem quibusdam natus ipsum cumque odit similique incidunt architecto. Debitis in perspiciatis nostrum sint quis id dignissimos. Ducimus aliquid sed iste magni! Vero, autem consequuntur. Nesciunt harum dolore accusantium doloremque aut minus? Reprehenderit, adipisci accusantium optio totam rem iusto.
        </p>

        <br />
        <Link href="/ninjas">
          <a className={Style.btn}>See More Ninjas</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
