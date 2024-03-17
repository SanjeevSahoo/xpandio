-- FRM_USERS

create table t_frm_users
(
    id int not null primary key AUTO_INCREMENT,
    base_loc varchar(50),
    crt_by int,
    crt_ts datetime,
    designation varchar(50),
    email varchar(100),
    emp_id varchar(50) not null,
    emp_type varchar(50),
    gender varchar(25),
    grade varchar(25),
    mobile varchar(25),
    name varchar(255) not null,
    password varchar(255),
    rfid varchar(255),
    sap_status varchar(50) not null,
    separation_date varchar(50),
    unique_no varchar(50),
    upd_by int,
    upd_ts datetime,
    username varchar(50),
    allowed_domain_login varchar(25)
);