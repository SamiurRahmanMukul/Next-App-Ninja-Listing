import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    document.title = "404 - Page Not Found";

    setTimeout(() => {
      router.push("/");
    }, 1000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Ninja List | 404</title>
        <meta name="keywords" content="Samiur Rahman Mukul" />
      </Head>

      <div className="not-found">
        <h1>Oops...</h1>
        <h2>That page cannot be found :(</h2>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a>Home Page</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
