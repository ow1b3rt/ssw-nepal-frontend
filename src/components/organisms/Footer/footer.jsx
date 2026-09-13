import { footerData as staticFooterData } from "@/data/footer";

import { getNavData } from "@/lib/api/navitems";

export async function getFooterData() {
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
