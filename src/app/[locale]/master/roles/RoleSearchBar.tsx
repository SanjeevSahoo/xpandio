"use client";

import TApp from "@/_common/types/project/TApp";
import TModule from "@/_common/types/project/TModule";
import React, { useEffect, useState } from "react";
import AppFilter from "../AppFilter";
import { Label } from "@/_common/components/ui/label";
import ModuleFilter from "../ModuleFilter";
import { Button } from "@/_common/components/ui/button";
import { Plus, SearchIcon, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

interface IProps {
  appList: TApp[];
  moduleList: TModule[];
}

function RoleSearchBar(props: IProps) {
  const { appList, moduleList } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedApp, setSelectedApp] = useState<string>("-1");
  const [selectedModule, setSelectedModule] = useState<string>("-1");
  const [filteredModuleList, setFilteredModuleList] = useState<TModule[]>([
    ...moduleList,
  ]);

  useEffect(() => {
    const urlAppId = searchParams.get("app");
    if (
      (urlAppId || urlAppId === "0") &&
      appList.filter((item) => item.id.toString() === urlAppId).length > 0
    ) {
      setSelectedApp(urlAppId);
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedApp === "-1") {
      setFilteredModuleList([...moduleList]);
    } else {
      const currFilteredModuleList = moduleList.filter(
        (item) => item.project_id === +selectedApp
      );
      setFilteredModuleList([...currFilteredModuleList]);
      const urlModuleId = searchParams.get("module");
      if (
        (urlModuleId || urlModuleId === "0") &&
        currFilteredModuleList.filter(
          (item) => item.id.toString() === urlModuleId
        ).length > 0
      ) {
        setSelectedModule(urlModuleId);
      } else {
        setSelectedModule("-1");
      }
    }
  }, [moduleList, selectedApp, searchParams]);

  const handleSearch = () => {
    const sp = new URLSearchParams(searchParams);
    if (selectedApp === "-1") {
      sp.delete("app");
    } else {
      sp.set("app", selectedApp);
    }
    if (selectedModule === "-1") {
      sp.delete("module");
    } else {
      sp.set("module", selectedModule);
    }
    router.push(`${pathname}?${sp.toString()}`);
    if (selectedApp === "-1") {
      router.refresh();
    }
  };

  const handleAddClose = () => {
    router.back();
    router.refresh();
  };

  if (pathname === "/master/roles/add") {
    return (
      <div className="h-[55px] p-2 px-4 bg-accent grid grid-cols-[1fr_auto] gap-4 items-center">
        <div className="font-semibold text-primary text-left ">
          Add New Role
        </div>
        <div className="flex justify-end items-center">
          <Button
            variant="destructive"
            size="icon"
            title="Close"
            onClick={handleAddClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[55px] p-2 px-4 bg-accent grid grid-cols-[auto_auto_auto_1fr] gap-4 items-center">
      <div className="w-[350px] flex items-center space-x-2">
        <Label>Application:</Label>
        <AppFilter
          appList={[...appList]}
          selectedApp={selectedApp}
          setSelectedApp={setSelectedApp}
        />
      </div>
      <div className="w-[350px] flex items-center space-x-2">
        <Label>Module:</Label>
        <ModuleFilter
          moduleList={[...filteredModuleList]}
          selectedModule={selectedModule}
          setSelectedModule={setSelectedModule}
        />
      </div>
      <div>
        <Button
          onClick={handleSearch}
          variant="primary"
          className="w-[100px]"
          type="button"
        >
          <SearchIcon className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>
      <div className="flex justify-end items-center">
        <Link href="/master/roles/add">
          <Button variant="success" size="icon" title="Add New Role">
            <Plus className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default RoleSearchBar;
