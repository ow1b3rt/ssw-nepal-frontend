import { buildNavConfig, getNavData } from "@/lib/api/navitems";

import Navbar from "./navbar";

export default async function Nav() {
  const navData = await getNavData();

  const navConfig = buildNavConfig(navData);

  return <Navbar navItems={navConfig} />;
}
