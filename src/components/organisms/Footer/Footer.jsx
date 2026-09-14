import { footerData as staticFooterData } from "@/data/footer";

import { getNavData } from "@/lib/api/navitems";

import FooterView from "@/components/footer";

async function getFooterData() {
  const { training, services } = await getNavData();

  const columns = staticFooterData.columns.map((column) => {
    if (column.title === "Services" && services.length) {
      return { ...column, links: services };
    }
    if (column.title === "Training" && training.length) {
      return { ...column, links: training };
    }
    return column;
  });

  return { ...staticFooterData, columns };
}

export default async function Footer() {
  const data = await getFooterData();
  return <FooterView data={data} />;
}