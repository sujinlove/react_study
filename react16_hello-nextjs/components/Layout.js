import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = props => {
  return (
    <div>
      <Head>
        <title>hello Next.js</title>
      </Head>
      <Header />
      <hr />
      {props.children}
      <hr />
      <Footer />
    </div>
  );
};

export default Layout;
