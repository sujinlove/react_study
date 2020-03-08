import styled, { css } from "styled-components";

const Myh1 = styled.h1`
  color: #000099;
`;

const index = () => {
  return (
    <div className="container">
      <div className="page-header">
        <Myh1>
          Hello Next.js <small>with Bootstrap3</small>
        </Myh1>
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        ></link>
      </div>
    </div>
  );
};

export default index;
