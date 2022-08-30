# projectpos
# this is simple project in my work
#
#
#
#
#
#                                                                          01:23:00
#                                                                          01:11:43
#                                                                          01:08:00  ->  01:11:47
# packages for project in app.js                                              58:46
# classroom in https://www.youtube.com/watch?v=1aXZQcG2Y6I      STOP IN VÍDEO 29:50
# https://raddy.dev/blog/simple-user-management-system-nodejs-express-mysql-handlebars/
# npm install express dotenv express-handlebars body-parser mysql
# npm install --save-dev nodemon

# database modeling
create table tabprinters(id integer not null auto_increment
				            		,namepri varchar(100) not null
                        ,model varchar(50) not null
                        ,seralnumber varchar(50) not null
                        ,id_tabmanufacturers integer not null
                        ,foreign key(id_tabmanufacturers) references tabmanufactures(id)
                        ,id_tabproviders integer not null
                        ,foreign key(id_tabproviders) references tabproviders(id)
						,constraint primary key(id)) default charset = utf8mb4;
----------------------------------------------------------------------------------------                        
create table tabmanufacturers(id integer not null auto_increment
							 ,nameman varchar(100) not null
							 ,cnpj varchar(18) not null
							 ,address varchar(100) not null
							 ,constraint primary key(id)) default charset = utf8mb4;
------------------------------------------------------------------------------------------------------------------------
flush privileges;

alter user 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

drop table tabcardspos;

select * from tabcardspos d where d.dateoccurrence like '%2022-08-05%';

select * from tabcardspos;

// selecting with clausules INNER JOIN
select 
 d.nameoperator
,d.numboxfisic
,d.numboxlogic
,d.valuepos
,d.id_tabcardsflags
,f.nameflag
from tabcardspos d inner join tabcardsflags f on d.id_tabcardsflags = f.id;

insert into tabcardspos(id
                       ,nameoperator
                       ,numboxfisic
                       ,numboxlogic
                       ,valuepos
                       ,id_cardflag
                       ,dateoccurrence
                       ,notes) values(default
                                     ,'Nazaré'
                                     ,2233
                                     ,3737
                                     ,283.91
                                     ,2
                                     ,current_timestamp()
                                     ,'Este é apenas um teste de registro das informações');

select * from tabcardsflags; 

INSERT INTO tabcardsflags(id, nameflag) VALUES(DEFAULT, 'Visa')
                                        ,(DEFAULT, 'Mastercard')
                                        ,(DEFAULT, 'Diners')
                                        ,(DEFAULT, 'American Express')
                                        ,(DEFAULT, 'Brasilcard')
                                        ,(DEFAULT, 'CrediShop')
                                        ,(DEFAULT, 'Tricard');

create table tabcardsflags(id INTEGER NOT NULL AUTO_INCREMENT
					                ,nameflag VARCHAR(20)
                          ,CONSTRAINT PRIMARY KEY(id));

select * from tabcardspos;

insert into tabcardspos(id
                       ,nameoperator
                       ,numboxfisic
                       ,numboxlogic
                       ,valuepos
                       ,id_cardflag
                       ,dateoccurrence
                       ,notes) values(default
                                     ,'Josenilde'
                                     ,7
                                     ,3
                                     ,172.91
                                     ,4
                                     ,current_timestamp()
                                     ,'Este é apenas um teste de registro das informações'),
                                     (default
                                     ,'Adriana'
                                     ,20
                                     ,5
                                     ,187.82
                                     ,2
                                     ,current_timestamp()
                                     ,'Este é apenas um teste de registro das informações'),
                                     (default
                                     ,'Ana Amélia'
                                     ,5
                                     ,6
                                     ,355.19
                                     ,3
                                     ,current_timestamp()
                                     ,'Este é apenas um teste de registro das informações'),
                                     (default
                                     ,'Nayara Thomas'
                                     ,14
                                     ,8
                                     ,65.78
                                     ,1
                                     ,current_timestamp()
                                     ,'Este é apenas um teste de registro das informações'),
                                     (default
                                     ,'Maria Benedita'
                                     ,10
                                     ,2
                                     ,1373.18
                                     ,2
                                     ,current_timestamp()
                                     ,'Este é apenas um teste de registro das informações');

drop table tabcardspos;
                                     
create table tabcardspos(id integer not null auto_increment
  						          ,nameoperator varchar(50) not null
						            ,numboxfisic char(4)
                        ,numboxlogic char(4)
                        ,valuepos decimal(6, 2) not null 
                        ,id_tabcardsflags int
					              ,dateoccurrence timestamp not null default current_timestamp
                        ,stathus VARCHAR(10) NOT NULL DEFAULT 'active'
						            ,notes text
                        ,constraint foreign key(id_tabcardsflags) references tabcardsflags(id)
						            ,constraint primary key(id)) default charset = utf8mb4;
                        
------------ old script -------------------------------------------                                     
create table tabcardspos(id integer not null auto_increment
					            	,nameoperator varchar(100) not null
					              ,numboxfisical integer(4)
                        ,valuepos decimal(6, 2) not null 
					              ,dateoccurrence timestamp not null default current_timestamp
						            ,notes text
						            ,constraint primary key(id)) default charset = utf8mb4;

show tables;

use dberpcontrol;

drop database d;

drop database dberpcontrol;

show databases;

create database dberpcontrol default character set utf8mb4 default COLLATE utf8mb4_general_ci;