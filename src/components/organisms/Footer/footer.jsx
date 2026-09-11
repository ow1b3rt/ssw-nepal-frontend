import { getNavData } from "@/lib/api/navitems";
import { footerData as staticFooterData } from "@/data/footer";

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
