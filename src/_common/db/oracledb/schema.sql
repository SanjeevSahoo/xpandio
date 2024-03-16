-- FRM_USERS

create table t_frm_users
(
    id number,
    base_loc varchar2(50),
    crt_by number,
    crt_ts date,
    designation varchar2(50),
    email varchar2(100),
    emp_id varchar2(50) not null,
    emp_type varchar2(50),
    gender varchar2(25),
    grade varchar2(25),
    mobile varchar2(25),
    name varchar2(255) not null,
    password varchar2(255),
    rfid varchar2(255),
    sap_status varchar2(50) not null,
    separation_date varchar2(50),
    unique_no varchar2(50),
    upd_by number,
    upd_ts date,
    username varchar2(50),
    allowed_domain_login varchar2(25)
);