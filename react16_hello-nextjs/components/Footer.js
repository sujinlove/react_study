const Footer = props => {
  return (
    <div>
      <div className="footer">
        <p className="pull-left">React on next.js</p>
        <p className="pull-right">Copyright&copy;2020</p>
      </div>
      <style jsx>{`
        .footer {
          padding: 10px 20px;
          background-color: #000;
          color: #fff;
        }

        .footer .pull-left {
          float: left;
        }

        .footer .pull-right {
          float: right;
        }

        .footer:after {
          display: block;
          content: "";
          clear: both;
          float: none;
        }
      `}</style>
    </div>
  );
};

export default Footer;
