import Header from "../components/header/Index";
import Main from "./main/Index";
import Footer from "../components/footer/Index";
import { Layout } from "./layout";

const Index = () => {
  return (
    <Layout>
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
};
export default Index;
