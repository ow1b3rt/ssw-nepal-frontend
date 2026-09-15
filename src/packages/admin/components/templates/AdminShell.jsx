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
        className={`relative flex flex-col gap-1 border-r border-gray-200 bg-white p-3 transition-all duration-200 ${
          panel ? "w-55" : "w-18"
        }`}
      >
        <button
          type="button"
          onClick={() => setPanel((prev) => !prev)}
          title={panel ? "Collapse sidebar" : "Expand sidebar"}
          className="absolute top-8 -right-3.5 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:text-gray-900 focus:outline-none"
        >
          {panel ? <PanelLeftClose size={16} /> : <PanelLeftOpen size={16} />}
        </button>

        <div className="px-1 py-2">
          <Logo panel={panel} />
        </div>

        <div className="mt-2 h-px bg-gray-200" />

        <div className="mt-2 flex-1 overflow-y-auto">
          {/* Pass the filtered entities */}
          <AdminNav items={visibleEntities} panel={panel} />
        </div>
      </div>

      <div className="flex flex-1 justify-center overflow-y-auto bg-gray-50 p-4">
        <div className="flex max-w-275 flex-1 flex-col overflow-y-auto">
          <div className="flex w-full justify-between">
            <Breadcrumb />
            <div className="flex items-center gap-4 pr-4">
              <span className="border-primary-blue-dark bg-faint-blue text-primary-blue flex rounded-full border px-2 py-1 text-xs">
                <User2 size={18} fill="currentColor" />
                {user?.role?.toUpperCase() || "USER"}
              </span>
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
