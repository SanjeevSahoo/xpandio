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

CREATE SEQUENCE t_exp_teams_pk_seq START WITH 1;

CREATE OR REPLACE TRIGGER tr_exp_teams_pk_seq 
BEFORE INSERT ON t_exp_teams 
FOR EACH ROW
BEGIN
  SELECT t_exp_teams_pk_seq.NEXTVAL
  INTO   :new.id
  FROM   dual;
END;


insert into t_exp_teams (name, manager_id, crt_date) values ('JSR Web Team', 1, SYSDATE);



-- FRM MEMBERS

create table t_exp_team_members
(
    id number,
    team_id number not null,
    member_id number not null,
    crt_by number,
    crt_date date
);

alter table t_exp_team_members
add constraint pk_exp_teamsmember_id primary key (id);



CREATE SEQUENCE t_exp_team_mem_pk_seq START WITH 1;

CREATE OR REPLACE TRIGGER tr_exp_team_mem_pk_seq 
BEFORE INSERT ON t_exp_team_members 
FOR EACH ROW
BEGIN
  SELECT t_exp_team_mem_pk_seq.NEXTVAL
  INTO   :new.id
  FROM   dual;
END;

insert into t_exp_team_members (team_id, member_id, crt_date) values (1, 1, SYSDATE);
insert into t_exp_team_members (team_id, member_id, crt_date) values (1, 2, SYSDATE);
insert into t_exp_team_members (team_id, member_id, crt_date) values (1, 68636, SYSDATE);

-- FRM PROJECTS

create table t_exp_projects
(
    id number,
    name varchar2(255) not null,
    stage varchar2(50),         -- Planning , Development etc
    hosting_status varchar2(50) not null, -- In App , Standalone
    hosting_url varchar2(500),
    disp_name varchar2(255) not null, 
    short_desc varchar2(500),
    logo_url varchar2(255),    
    project_lead_id number,
    creation_type varchar2(50) not null, -- App, Project
    own_login_url varchar2(255),
    client_dept varchar2(255),
    client_spoc_id number,
    team_id number,
    crt_by number,
    crt_date date,
    upd_by number,
    upd_date date
);

alter table t_exp_projects
add constraint pk_exp_projects_id primary key (id);


CREATE SEQUENCE t_exp_projects_pk_seq START WITH 1;

CREATE OR REPLACE TRIGGER tr_exp_projects_pk_seq 
BEFORE INSERT ON t_exp_projects
FOR EACH ROW
BEGIN
  SELECT t_exp_projects_pk_seq.NEXTVAL
  INTO   :new.id
  FROM   dual;
END;

insert into t_exp_projects (name, stage, hosting_status, disp_name, logo_url, project_lead_id, creation_type, client_dept, client_spoc_id, team_id, crt_date, upd_date) values ('Occupational Health Portal', 'Development', 'In App', 'Health App', 'health_logo.png', 1, 'App', 'Health', 1, 1, SYSDATE, SYSDATE);


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
);

alter table t_exp_project_members
add constraint pk_exp_projectmember_id primary key (id);


CREATE SEQUENCE t_exp_project_mem_pk_seq START WITH 1;

CREATE OR REPLACE TRIGGER tr_exp_project_mem_pk_seq 
BEFORE INSERT ON t_exp_project_members
FOR EACH ROW
BEGIN
  SELECT t_exp_project_mem_pk_seq.NEXTVAL
  INTO   :new.id
  FROM   dual;
END;


insert into t_exp_project_members (project_id, member_id, dev_role, support_role, testing_role, crt_date) values (1, 2, 'Yes', 'No', 'No', SYSDATE);
insert into t_exp_project_members (project_id, member_id, dev_role, support_role, testing_role, crt_date) values (1, 68636, 'Yes', 'Yes', 'No', SYSDATE);

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
);

alter table t_exp_project_modules
add constraint pk_exp_projectmodules_id primary key (id);


CREATE SEQUENCE t_exp_project_mod_pk_seq START WITH 1;

CREATE OR REPLACE TRIGGER tr_exp_project_mod_pk_seq 
BEFORE INSERT ON t_exp_project_modules
FOR EACH ROW
BEGIN
  SELECT t_exp_project_mod_pk_seq.NEXTVAL
  INTO   :new.id
  FROM   dual;
END;



-- FRM MENUS

create table t_exp_menus
(
    id number,
    name varchar2(255) not null,
    mas_id number,   
    sr_no number, 
    menu_type varchar2(100) not null, -- Relative / Absolute
    menu_url varchar2(255),
    project_id number,
    module_id number, 
    crt_by number,
    crt_date date
);

alter table t_exp_menus
add constraint pk_exp_menu_id primary key (id);


CREATE SEQUENCE t_exp_menus_pk_seq START WITH 1;

CREATE OR REPLACE TRIGGER tr_exp_menus_pk_seq 
BEFORE INSERT ON t_exp_menus
FOR EACH ROW
BEGIN
  SELECT t_exp_menus_pk_seq.NEXTVAL
  INTO   :new.id
  FROM   dual;
END;
