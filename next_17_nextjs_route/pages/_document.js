// HTML 구조를 재정의하기 위한 참조
import Document, { Html, Head, Main, NextScript } from "next/document";

// styledComponent를 사용하기 위한 참조
import { ServerStyleSheet } from "styled-components";

/**
 * 모든 next.js 페이지가 동작하기 전에 우선 동작하는 클래스
 * 클래스 형태만 지원된다.
 * 이 코드에서 처리하는 구현은 모든 페이지에 적용되는 전역 선언이 된다.
 */
class MyDocument extends Document {
  /**
   * 초기화 함수
   * 이 함수에서 리턴하는 객체를 렌더링 함수 안에서 this.props로 접근한다.
   * @param {} param0
   */
  static getInitialProps({ renderPage }) {
    // 1) ServerStyledsheet 객체 생성
    const sheet = new ServerStyleSheet();

    // 2) 각 페이지의 컴포넌트에 style이 적용된 결과를 렌더링한 결과 생성
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    // 3) 컴포넌트에 적용된 style을 styleTag라는 이름으로 객체로 반환함
    const styleTags = sheet.getStyleElement();

    // 4) 반환받은 styleTags를 props로 리턴
    return { ...page, styleTags };
  }

  /**
   * 화면 렌더링 함수
   */
  render() {
    return (
      <Html>
        <Head>
          <title>Hello Next.js</title>
          {this.props.styleTags}
          <script src="//code.jquery.com/jquery.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
