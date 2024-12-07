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
