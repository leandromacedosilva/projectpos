# Aqui ficam registradas as partes dos conhecimentos e técnicas usadas para este projeto

# projeto orientado por meio do vídeo localizado no endereço
# https://www.youtube.com/watch?v=4fWWn2Pe2Mk 
# último stop 20:00

# notas da modelagem do banco de daddos (MYSQL)

SHOW GRANTS FOR 'bigdata'@'127.0.0.1';
FLUSH PRIVILEGES;
GRANT ALL PRIVILEGES ON *.* TO 'bigdata'@'127.0.0.1';
CREATE USER 'bigdata'@'127.0.0.1' IDENTIFIED BY 'if123';

flush privileges;

alter user 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

select * from tabcardspos;

insert into tabcardspos(id
                       ,nameoperator
                       ,numboxfisic
                       ,numboxlogic
                       ,valuepos
                       ,dateoccurrence
                       ,notes) values(default
                                     ,'Josenilde'
                                     ,7
                                     ,39.43
                                     ,current_timestamp()
                                     ,'Este é apenas um teste de registro das informações'),
                                     (default
                                     ,'Josenilde'
                                     ,7
                                     ,172.91
                                     ,current_timestamp()
                                     ,'Este é apenas um teste de registro das informações'),
                                     (default
                                     ,'Adriana'
                                     ,20
                                     ,187.82
                                     ,current_timestamp()
                                     ,'Este é apenas um teste de registro das informações'),
                                     (default
                                     ,'Ana Amélia'
                                     ,5
                                     ,355.19
                                     ,current_timestamp()
                                     ,'Este é apenas um teste de registro das informações'),
                                     (default
                                     ,'Nayara Thomas'
                                     ,14
                                     ,65.78
                                     ,current_timestamp()
                                     ,'Este é apenas um teste de registro das informações'),
                                     (default
                                     ,'Maria Benedita'
                                     ,10
                                     ,1373.18
                                     ,current_timestamp()
                                     ,'Este é apenas um teste de registro das informações');

create table tabcardspos(id integer not null auto_increment
  						          ,nameoperator varchar(100) not null
					              ,numboxfisic char(4)
                        ,numboxlogic char(4)
                        ,valuepos decimal(6, 2) not null 
					              ,dateoccurrence timestamp not null default current_timestamp
						            ,notes text
						            ,constraint primary key(id)) default charset = utf8mb4;

select * from i;

select * from f;

drop table fs;
drop table i;

show tables;

use dberpcontrol;

drop database d;

drop database dberpcontrol;

show databases;

create database dberpcontrol default character set utf8mb4 default COLLATE utf8mb4_general_ci; 