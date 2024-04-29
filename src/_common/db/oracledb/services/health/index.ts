import { simpleQuery } from "@/_common/db/oracledb/connection";
import TLocationQueryData from "@/_common/types/health/TLocationQueryData";
import THealthLocation from "@/_common/types/health/THealthLocation";
import THealthIndexQueryData from "@/_common/types/health/THealthIndexQueryData";
import THealthIndexReport from "@/_common/types/health/THealthIndexReport";
import removeJSONNull from "@/_common/utils/json-util";

const getLocations = async (): Promise<TLocationQueryData> => {
  let retVal: TLocationQueryData = {
    error: false,
    errorMessage: "",
    data: [],
  };

  try {
    let resultLocations: any = await simpleQuery(
      ` SELECT 
            id "id",
            locn_name "name" 
        FROM 
            locations 
        WHERE 
            act_flg = 'Active' 
        ORDER BY 
            id  ASC `,
      {},
      {},
      "health"
    ).catch((err) => {
      console.log(err);
      return {
        errorMessage: "DB Error",
        errorTransKey: "api_res_db_error",
      };
    });

    if (!resultLocations || resultLocations.errorMessage) {
      retVal.error = true;
      retVal.errorMessage = resultLocations.errorMessage;
    } else {
      const currData: THealthLocation[] = resultLocations.rows;

      if (currData.length > 0) {
        retVal.data = [...currData];
      } else {
        retVal.error = true;
        retVal.errorMessage = "Location not found";
      }
    }
  } catch (err) {
    console.log(err);
    retVal.error = true;
    retVal.errorMessage = "Unknown DB Error";
  }

  return retVal;
};

const getHealthIndexReport = async (
  fyear: number,
  locnId: number
): Promise<THealthIndexQueryData> => {
  let retVal: THealthIndexQueryData = {
    error: false,
    errorMessage: "",
    data: [],
  };

  /*
  
           
         
           
            , b.mobile
            ,
            , 
            , a.phs_bp
            , a.phs_bpd
            , a.phs_bps1
            , a.phs_bpd1
            , 
            , a.phs_bpd2
            , a.lab_sgr_rbs
            , CASE WHEN a.phs_conc_count='0' THEN 'N' ELSE 'Y' END as conc_count
            , CASE WHEN a.phs_addict <>'["9"]' THEN 'Y' ELSE 'N' END as addc_flg
            , a.phs_leave_count
            , NVL(a.phs_hlth_scr,0) phs_hlth_scr
            , CASE  WHEN NVL(a.phs_hlth_scr,0) >=0 AND NVL(a.phs_hlth_scr,0) <=8 THEN 'Poor Health' 
                    WHEN NVL(a.phs_hlth_scr,0) >=9 AND NVL(a.phs_hlth_scr,0) <=11 THEN 'Average Health'
                    ELSE 'Best Health' END MedicalAssesment
            , getohpchronicname(a.phs_conc_name) phs_conc_name
            , a.phs_sysexam
            , CASE WHEN a.vsn_dv_leg IS NOT NULL THEN a.vsn_dv_leg||' With Glass' ELSE '' END vsn_dv_leg
            , CASE WHEN a.vsn_dv_lewg IS NOT NULL THEN a.vsn_dv_lewg ELSE '' END vsn_dv_lewg
            , CASE WHEN a.vsn_dv_reg IS NOT NULL THEN a.vsn_dv_reg||' With Glass' ELSE '' END vsn_dv_reg
            , CASE WHEN a.vsn_dv_rewg IS NOT NULL THEN a.vsn_dv_rewg ELSE '' END vsn_dv_rewg				
            , a.lab_sgr_fbs
            , a.lab_sgr_ppbs
            , a.lab_sgr_hba1c
            , a.lab_kft_creat
            , a.lab_lp_chol
            , a.lab_lp_tg
            , a.lab_cbc_hb
            , a.lab_tp_t3
            , a.lab_tp_t4
            , a.lab_tp_tsh
            , a.ecg_diagn
            , a.ecg_remarks
            , a.tmt_status
            , a.tmt_date
            , a.tmt_remarks
            , a.lab_kft_urea
            , a.lab_lp_hdl
            , a.lab_lp_ldl
            , a.lab_lft_sgot
            , a.lab_lft_sgpt
            , a.lab_tlc
            , a.lab_dlc_n
            , a.lab_dlc_l
            , a.lab_dlc_e
            , a.lab_dlc_m
          
            , b.critical_flg
            , CASE WHEN a.phs_addict LIKE '%\"9\"%' THEN 1 ELSE 0 END Score_Addict
            , CASE WHEN NVL(a.phs_bmi,0) < 25 THEN 2 WHEN NVL(a.phs_bmi,0) >= 25 AND NVL(a.phs_bmi,0) < 30 THEN 1 ELSE 0 END Score_BMI
            , CASE WHEN NVL(a.phs_ht_flg,'Nil') = 'Nil' THEN 3 WHEN NVL(a.phs_ht_flg,'Nil') = 'Controlled' THEN 2 ELSE 0 END Score_HT
            , CASE WHEN NVL(a.phs_dbt_flg,'Nil') = 'Nil' THEN 3 WHEN NVL(a.phs_dbt_flg,'Nil') = 'Controlled' THEN 2 ELSE 0 END Score_DBT
            , CASE WHEN NVL(a.phs_leave_count,0) <=10 THEN 2 WHEN NVL(a.phs_leave_count,0) >= 11 AND NVL(a.phs_leave_count,0) <= 30 THEN 1 ELSE 0 END Score_Leave
            , CASE WHEN NVL(a.phs_conc_count,0) = 0 THEN 3 WHEN NVL(a.phs_conc_count,0) = 1 THEN 2 WHEN NVL(a.phs_conc_count,0) = 2 THEN 1 ELSE 0 END Score_Chronic               
            , b.grade
            , b.email
            , b.cctext
            , CASE WHEN NVL(d.phs_addict, 'NA') LIKE '%\"9\"%' THEN 1 ELSE 0 END Score_AddictOld 
            , CASE WHEN NVL(d.phs_bmi, 0) < 25 THEN 2 WHEN NVL(d.phs_bmi, 0) >= 25 AND NVL(d.phs_bmi, 0) < 30 THEN 1 ELSE 0 END Score_BMIOld                
            , CASE WHEN NVL(d.phs_ht_flg,'Nil') = 'Nil' THEN 3 WHEN NVL(d.phs_ht_flg,'Nil') = 'Controlled' THEN 2 ELSE 0 END Score_HTOLd
            , CASE WHEN NVL(d.phs_dbt_flg,'Nil') = 'Nil' THEN 3 WHEN NVL(d.phs_dbt_flg,'Nil') = 'Controlled' THEN 2 ELSE 0 END Score_DBTOLd
            , CASE WHEN NVL(d.phs_leave_count,0) <=10 THEN 2 WHEN NVL(d.phs_leave_count,0) >= 11 AND NVL(d.phs_leave_count,0) <= 30 THEN 1 ELSE 0 END Score_LeaveOLd
            , CASE WHEN NVL(d.phs_conc_count,0) = 0 THEN 3 WHEN NVL(d.phs_conc_count,0) = 1 THEN 2 WHEN NVL(d.phs_conc_count,0) = 2 THEN 1 ELSE 0 END Score_ChronicOLd
            , NVL(d.phs_hlth_scr,0) phs_hlth_scrOld
            , CASE  WHEN NVL(d.phs_hlth_scr,0) >=0 AND NVL(d.phs_hlth_scr,0) <=8 THEN 'Poor Health' 
                    WHEN NVL(d.phs_hlth_scr,0) >=9 AND NVL(d.phs_hlth_scr,0) <=11 THEN 'Average Health'
                    ELSE 'Best Health' END MedicalAssesmentOld
  */
  try {
    let resultHealthIndexReport: any = await simpleQuery(
      ` SELECT
            NVL(b.ticket_no,'') "ticket_no",
            NVL(b.emp_name,'') "emp_name",
            NVL(TO_CHAR(a.phs_dt,'DD-Mon-YYYY'),'') "test_date",
            NVL(a.tst_year,0) "tst_year",
            NVL(a.tst_cycle,0) "tst_cycle",
            NVL(b.gender,'') "gender",
            NVL(FLOOR(TO_NUMBER(TRUNC(SYSDATE)-TRUNC(b.dob))/365.25),0)  "age",
            NVL(b.height,0) "height",
            NVL(a.phs_weight,0) "phs_weight",
            NVL(c.tol_level_name,'') "div_name",
            NVL(a.phs_bmi,0) "phs_bmi",
            NVL(a.phs_bp,'') "phs_bp",
            NVL(a.phs_bps1,'') "phs_bps1",
            NVL(a.phs_bps2,'') "phs_bps2",
            NVL(TO_CHAR(a.test_ts,'DD-Mon-YYYY'),'') "log_test_date",
            NVL(a.emp_id,0) "emp_id"
        FROM
            mcs_emp_tests a
            LEFT JOIN mcs_organisation_levels c ON a.div_id = c.tol_level_id
            JOIN mcs_emp_master b ON a.emp_id=b.id
            LEFT OUTER JOIN mcs_emp_tests d  ON d.emp_id = a.emp_id and d.tst_year = a.tst_year - 1 and d.tst_cycle = 1
        WHERE
            a.tst_cycle!=0
            AND a.act_tests LIKE '%4%'
            AND a.sch_tests LIKE '%4%'
            AND a.locn_id=${locnId} AND a.tst_year=${fyear}
        `,
      {},
      {},
      "health"
    ).catch((err) => {
      console.log(err);
      return {
        errorMessage: "DB Error",
        errorTransKey: "api_res_db_error",
      };
    });

    if (!resultHealthIndexReport || resultHealthIndexReport.errorMessage) {
      retVal.error = true;
      retVal.errorMessage = resultHealthIndexReport.errorMessage;
    } else {
      const currData: THealthIndexReport[] = removeJSONNull(
        resultHealthIndexReport.rows
      );

      if (currData.length > 0) {
        retVal.data = [...currData];
      } else {
        retVal.data = [];
      }
    }
  } catch (err) {
    console.log(err);
    retVal.error = true;
    retVal.errorMessage = "Unknown DB Error";
  }

  return retVal;
};

export { getLocations, getHealthIndexReport };
