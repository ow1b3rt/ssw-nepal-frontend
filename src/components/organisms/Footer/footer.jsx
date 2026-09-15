import FooterView from "@/components/footer"; // your existing markup, renamed
import { getFooterData } from "@/components/organisms/Footer/footer";

export default async function Footer() {
  const data = await getFooterData();
  return <FooterView data={data} />;
}
