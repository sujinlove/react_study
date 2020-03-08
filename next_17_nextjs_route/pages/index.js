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
      </div>
    </div>
  );
};

export default index;
