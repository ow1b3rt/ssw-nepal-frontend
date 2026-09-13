"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, PanelLeftClose, PanelLeftOpen, User2 } from "lucide-react";

import { ConfirmationDialog } from "@/components/molecules/ConfirmationModal";

import { useApi } from "../../contexts/ApiContext.jsx";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { getEntities } from "../../lib/runtime.config.js";
import Breadcrumb from "../molecules/Breadcrumb.jsx";
import { AdminNav } from "../organisms/AdminNav.jsx";
import { Logo } from "../organisms/AdminNavLogo.jsx";

export function AdminShell({ children }) {
  const [panel, setPanel] = useState(true);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const { user, logout } = useAuth();
  const { post } = useApi();
  const router = useRouter();

  // Dynamically filter entities based on the user's role and the entity's roles array
  const entities = getEntities();
  const visibleEntities = Object.fromEntries(
    Object.entries(entities).filter(([_, entity]) => {
      return entity.roles?.includes(user?.role);
    }),
  );

  const handleLogout = async () => {
    await logout();
    router.push("/admin/login");
  };

  return (
    <div className="bg-black-500 flex h-screen text-xs">
      <div
        className={`bg-primary-green relative flex flex-col gap-1 transition-all duration-500 ${
          panel ? "w-55" : "w-18"
        }`}
      >
        <button
          type="button"
          onClick={() => setPanel((prev) => !prev)}
          title={panel ? "Collapse sidebar" : "Expand sidebar"}
          className="border-primary-green-dark text-primary-green-dark absolute top-40 -right-3.5 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 bg-white shadow-sm transition-colors hover:text-gray-900 focus:outline-none"
        >
          {panel ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
        </button>

        <div className="bg-white px-3 py-2">
          <Logo panel={panel} />
        </div>

        {/* <div className="mt-2 h-px bg-gray-200" /> */}

        <div className="bg-primary-green-dark flex-1 overflow-y-auto">
          {/* Pass the filtered entities */}
          <AdminNav items={visibleEntities} panel={panel} />
        </div>
      </div>

      <div className="flex flex-1 justify-start overflow-y-auto bg-gray-50 p-4">
        <div className="flex max-w-full flex-1 flex-col overflow-y-auto pl-4">
          <div className="flex w-full justify-between">
            <Breadcrumb />
            <div className="flex items-center gap-4 pr-4">
              <p className="border-primary-blue-dark text-primary-blue flex gap-2 rounded-full border bg-white px-2 py-1 text-sm font-semibold">
                <User2
                  size={20}
                  className="border-primary-blue-dark rounded-full border-2 bg-white"
                />
                {user?.role?.toUpperCase() || "USER"}
              </p>
              <button
                className="wrapper-btn cursor-pointer"
                title="Logout"
                onClick={() => setLogoutOpen(true)}
              >
                <LogOut size={18} className="text-primary-red" />
              </button>
            </div>
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </div>

      <ConfirmationDialog
        open={logoutOpen}
        onOpenChange={setLogoutOpen}
        title="Are you sure to Logout?"
        description="You'll need to sign in again to access the admin panel."
        confirmLabel="Confirm"
        variant="destructive"
        onConfirm={handleLogout}
      />
    </div>
  );
}
