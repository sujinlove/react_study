import Link from "next/link";

const ulStyle = {
  listStyle: "none",
  padding: "0",
  margin: "0"
};

const liStyle = {
  display: "inline-block"
};

const linkStyle = {
  marginRight: "1rem"
};

const Header = props => {
  return (
    <ul style={ulStyle}>
      <li style={liStyle}>
        <Link href="/">
          <a style={linkStyle}>홈</a>
        </Link>
      </li>
      <li style={liStyle}>
        <Link href="/about">
          <a style={linkStyle}>소개</a>
        </Link>
      </li>
      <li style={liStyle}>
        <Link href="/get_param">
          <a style={linkStyle}>GET 파라미터</a>
        </Link>
      </li>
    </ul>
  );
};

export default Header;
