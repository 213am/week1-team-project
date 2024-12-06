// 푸터영역 출력부 입니다
import { Footer, Ul } from "./footer";

function Index() {
  return (
    <Footer>
      <h3 className="copyright">copyright</h3>
      <Ul className="foot_notice">
        <li className="f1">
          <a id="f1-1" href="#">
            이용약관
          </a>
        </li>
        <li className="f2">
          <a id="f2-2" href="#">
            개인정보 처리방침
          </a>
        </li>
        <li className="f3">
          <a id="f3-3" href="#">
            인쇄복권당첨금지급기준
          </a>
        </li>
        <li className="f4">
          <a id="f4-4" href="#">
            불법사행행위신고센터
          </a>
        </li>
        <li className="f5">
          <a id="f5-5" href="#">
            수탁사업자소개
          </a>
        </li>
        <li className="f6">
          <a id="f6-6" href="#">
            ENGLISH
          </a>
        </li>
      </Ul>

      {/* retrun /div */}
    </Footer>
  );
}
export default Index;
