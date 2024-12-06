import Banner from "./Banner";
import Category from "./Category";
import { SectionWrapLayout } from "./SectionWrapLayout";
import Shortcut from "./Shortcut";

function SectionWrap() {
  return (
    <SectionWrapLayout>
      <Category></Category>
      <Banner></Banner>
      <Shortcut></Shortcut>
    </SectionWrapLayout>
  );
}
export default SectionWrap;
