import { getFooterData } from "@/components/organisms/Footer/footer";
import FooterView from "@/components/footer"; // your existing markup, renamed

export default async function Footer() {
  const data = await getFooterData();
  return <FooterView data={data} />;
}
