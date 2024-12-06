// 헤더영역 출력부 입니다
import "./header.js";
import { HeaderLayout } from "./header.js";
import HeaderLogo from "./HeaderLogo.jsx";
import Navigation from "./Navigation.jsx";

function Index() {
  return (
    <HeaderLayout>
      <HeaderLogo />
      <Navigation />
    </HeaderLayout>
  );
}
export default Index;
