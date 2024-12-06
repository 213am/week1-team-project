// 메인영역 출력부 입니다
import "../main/main.js";
import ImgSlider from "./imgSlider";
import SectionWrap from "./SectionWrap";
import { MainLayout } from "../main//MainLayout";


function Index() {
  return (
    <MainLayout>
      <ImgSlider></ImgSlider>
      <SectionWrap></SectionWrap>
    </MainLayout>
  );
}
export default Index;
