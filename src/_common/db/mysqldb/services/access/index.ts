import { DEFAULT_APP } from "@/_common/constants";
import { simpleQuery } from "@/_common/db/mysqldb/connection";
import TApp from "@/_common/types/project/TApp";
import TAppQueryData from "@/_common/types/project/TAppQueryData";
import TMenu from "@/_common/types/TMenu";
import TMenusQueryData from "@/_common/types/TMenusQueryData";
import TAppsQueryData from "@/_common/types/project/TAppsQueryData";

const getUrlWiseApp = async (baseUrl: string): Promise<TAppQueryData> => {
  let retVal: TAppQueryData = {
    error: false,
    errorMessage: "",
    data: { ...DEFAULT_APP },
  };

  try {
    let resultApps: any = await simpleQuery(
      `SELECT  
          t1.id "id",
          t1.name "name",
          t1.stage "stage",
          t1.hosting_status "hosting_status",
          IFNULL(t1.hosting_url,'') "hosting_url",
          t1.disp_name "disp_name",
          t1.short_desc "short_desc",
          t1.logo_url "logo_url",
          t1.project_lead_id "project_lead_id",
          t1.creation_type "creation_type",
          IFNULL(t1.own_login_url,'') "own_login_url",
          t1.client_dept "client_dept",
          t1.client_spoc_id "client_spoc_id",
          t1.team_id "team_id",
          IFNULL(t1.project_admins,'') "project_admins",
          t1.status "status",
          t1.base_url "base_url"
        FROM
          t_exp_projects t1
        WHERE
              t1.status = 'Active'
            AND t1.creation_type = 'App' 
            AND t1.base_url = ?
        `,
      [baseUrl]
    ).catch((err) => {
      console.log(err);
      return {
        errorMessage: "DB Error",
        errorTransKey: "api_res_db_error",
      };
    });

    if (!resultApps || resultApps.errorMessage) {
      retVal.error = true;
      retVal.errorMessage = resultApps.errorMessage;
    } else {
      const currApps: TApp[] = resultApps;

      if (currApps.length > 0) {
        retVal.data = { ...currApps[0] };
      } else {
        retVal.error = true;
        retVal.errorMessage = "App not found with given url";
      }
    }
  } catch (err) {
    console.log(err);
    retVal.error = true;
    retVal.errorMessage = "Unknown DB Error";
  }

  return retVal;
};

const getAppIdWiseApp = async (appId: number): Promise<TAppQueryData> => {
  let retVal: TAppQueryData = {
    error: false,
    errorMessage: "",
    data: { ...DEFAULT_APP },
  };

  try {
    let resultApps: any = await simpleQuery(
      `SELECT  
          t1.id "id",
          t1.name "name",
          t1.stage "stage",
          t1.hosting_status "hosting_status",
          IFNULL(t1.hosting_url,'') "hosting_url",
          t1.disp_name "disp_name",
          t1.short_desc "short_desc",
          t1.logo_url "logo_url",
          t1.project_lead_id "project_lead_id",
          t1.creation_type "creation_type",
          IFNULL(t1.own_login_url,'') "own_login_url",
          t1.client_dept "client_dept",
          t1.client_spoc_id "client_spoc_id",
          t1.team_id "team_id",
          IFNULL(t1.project_admins,'') "project_admins",
          t1.status "status",
          t1.base_url "base_url"
        FROM
          t_exp_projects t1
        WHERE
              t1.status = 'Active'
            AND t1.creation_type = 'App' 
            AND t1.id = ?
        `,
      [appId]
    ).catch((err) => {
      console.log(err);
      return {
        errorMessage: "DB Error",
        errorTransKey: "api_res_db_error",
      };
    });

    if (!resultApps || resultApps.errorMessage) {
      retVal.error = true;
      retVal.errorMessage = resultApps.errorMessage;
    } else {
      const currApps: TApp[] = resultApps;

      if (currApps.length > 0) {
        retVal.data = { ...currApps[0] };
      } else {
        retVal.error = true;
        retVal.errorMessage = "App not found with given Id";
      }
    }
  } catch (err) {
    console.log(err);
    retVal.error = true;
    retVal.errorMessage = "Unknown DB Error";
  }

  return retVal;
};

const getAppWiseMenus = async (
  userId: number,
  appId: number
): Promise<TMenusQueryData> => {
  let retVal: TMenusQueryData = {
    error: false,
    errorMessage: "",
    data: [],
  };

  try {
    let resultMenus: any = await simpleQuery(
      `SELECT  DISTINCT
          t1.id "id",
          t1.name "name",
          IFNULL(t1.mas_id,0) "mas_id",
          t1.sr_no "sr_no",
          t1.menu_type "menu_type",
          t1.menu_url "menu_url",
          t1.project_id "project_id",
          t1.module_id "module_id",
          t1.status "status",
          t1.menu_icon "menu_icon"
        FROM
          t_exp_menus t1,
          t_exp_menu_access t2,
          t_exp_user_roles t3
        WHERE
              t1.status = 'Active' 
            AND t1.id = t2.menu_id 
            AND t2.role_id = t3.role_id 
            AND t3.user_id = ?
            AND t1.project_id = ?
        ORDER BY
          IFNULL(t1.mas_id,0),
          t1.sr_no ASC
        `,
      [userId, appId]
    ).catch((err) => {
      console.log(err);
      return {
        errorMessage: "DB Error",
        errorTransKey: "api_res_db_error",
      };
    });

    if (!resultMenus || resultMenus.errorMessage) {
      retVal.error = true;
      retVal.errorMessage = resultMenus.errorMessage;
    } else {
      const currMenus: TMenu[] = resultMenus;

      if (currMenus.length > 0) {
        retVal.data = [...currMenus];
      } else {
        retVal.error = true;
        retVal.errorMessage = "Menu not found with given app";
      }
    }
  } catch (err) {
    console.log(err);
    retVal.error = true;
    retVal.errorMessage = "Unknown DB Error";
  }

  return retVal;
};

export { getUrlWiseApp, getAppWiseMenus, getAppIdWiseApp };
