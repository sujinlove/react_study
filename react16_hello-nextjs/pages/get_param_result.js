import { withRouter } from "next/router";
import Layout from "../components/Layout";

const getParamResult = props => {
  console.log(props);

  const { router } = props;
  console.log(router);

  //const { query } = props.url;

  return (
    <Layout>
      {router.query.ans == 300 ? (
        <h1 style={{ color: "green" }}>정답입니다.</h1>
      ) : (
        <h1 style={{ color: "red" }}>오답입니다.</h1>
      )}
    </Layout>
  );
};

// Router로 컴포넌트를 Wrappering 처리
export default withRouter(getParamResult);
