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

alter table t_frm_users
add constraint pk_frm_user_id primary key (id);


-- FRM TEAMS

create table t_exp_teams
(
    id number,
    name varchar2(100) not null,
    manager_id number not null,
    crt_by number,
    crt_date date
);


alter table t_exp_teams
add constraint pk_exp_teams_id primary key (id);

-- FRM MEMBERS

create table t_exp_team_members
(
    id number,
    team_id number not null,
    member_id number not null,
    crt_by number,
    crt_date date
)

alter table t_exp_team_members
add constraint pk_exp_teamsmember_id primary key (id);

-- FRM PROJECTS

create table t_exp_projects
(
    id number,
    name varchar2(255) not null,
    stage varchar2(50),         -- Planning , Development etc
    hosting_status varchar2(50) not null, -- In App , Standalone
    disp_name varchar2(255) not null, 
    logo_url varchar2(255),
    logo_dark_url varchar2(255),
    project_lead_id number,
    creation_type varchar2(50) not null, -- App, Project
    own_login_url varchar2(255),
    client_dept varchar2(255),
    client_spoc_id number,
    support_team_id number,
    crt_by number,
    crt_date date,
    upd_by number,
    upd_date date
);

alter table t_exp_projects
add constraint pk_exp_projects_id primary key (id);


-- FRM PROJECT MEMBERS

create table t_exp_project_members
(
    id number,
    project_id number not null,
    member_id number not null,
    dev_role varchar2(10),
    support_role varchar2(10),
    testing_role varchar2(10),
    crt_by number,
    crt_date date
)

alter table t_exp_project_members
add constraint pk_exp_projectmember_id primary key (id);


-- FRM PROJECT MODULES

create table t_exp_project_modules
(
    id number,
    project_id number not null,
    name varchar2(255) not null,
    disp_name varchar2(255) not null,
    module_lead_id number,
    client_spoc_id number,
    module_admins varchar2(255)
)

alter table t_exp_project_modules
add constraint pk_exp_projectmodules_id primary key (id);
