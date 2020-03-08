import Layout from "../components/Layout";
import Link from "next/link";

const getParam = () => {
  return (
    <Layout>
      <h1>get_param.js</h1>
      <h2>100 + 200 = ?</h2>
      <ul>
        <li>
          <Link href="/get_param_result/?ans=100" as="/helloworld">
            100
          </Link>
        </li>
        <li>
          <Link href="/get_param_result/?ans=200" as="/helloworld">
            200
          </Link>
        </li>
        <li>
          <Link href="/get_param_result/?ans=300" as="/helloworld">
            300
          </Link>
        </li>
        <li>
          <Link href="/get_param_result/?ans=400" as="/helloworld">
            400
          </Link>
        </li>
      </ul>
    </Layout>
  );
};

export default getParam;
