-- /*parei aos 01:39:20*/ 
-- https://www.youtube.com/watch?v=1aXZQcG2Y6I&t=5504s

--remodelagem da base de dadods DBERPCONTROL 
---remodelagem da tabela tbcardspos
CREATE TABLE tbcardsflags(id INTEGER NOT NULL AUTO_INCREMENT
					               ,nameflag VARCHAR(20)
                         ,CONSTRAINT PRIMARY KEY(id)) DEFAULT CHARSET = utf8mb4;
----------------------------------------------------------------------------------
CREATE TABLE tbcardspos(id INTEGER NOT NULL AUTO_INCREMENT
  						         ,nameoperator VARCHAR(50) NOT NULL
						           ,numboxfisic CHAR(4)
                       ,numboxlogic CHAR(4)
                       ,valuepos DECIMAL(6, 2) NOT NULL 
                       ,id_tbcardsflags INT
					             ,dateoccurrence TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
                       ,statusreg VARCHAR(10) NOT NULL DEFAULT "active"
						           ,notes TEXT
                       ,CONSTRAINT FOREIGN KEY(id_tbcardsflags) REFERENCES tbcardsflags(id)
						           ,CONSTRAINT PRIMARY KEY(id)) DEFAULT CHARSET = utf8mb4;
-------------------------------------------------------------------------------------------------
--AQUI É REGISTRADO AS INFORMAÇÕES DAS NOVAS TABELAS
--table
CREATE TABLE tbhardwareout(id INTEGER NOT NULL AUTO_INCREMENT
                          ,desccription VARCHAR(50) NOT NULL
                          ,deptoorig
                          ,deptodest) DEFAULT CHARSET = utf8mb4;

                       
CREATE TABLE tbdepartment() DEFAULT CHARSET = utf8mb4;

CREATE TABLE tbdepartment(id INTEGER NOT NULL AUTO_INCREMENT
                         ,description VARCHAR(30) NOT NULL
                         ,dateregister TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP()
                         ,CONSTRAINT PRIMARY KEY(id)) DEFAULT CHARSET = utf8mb4;
                       
SELECT * FROM tbhardware; 

INSERT INTO tbhardware(id
                      ,description
                      ,model
                      ,serialnumber
                      ,qt
                      ,id_provider
                      ,dateregister) VALUES(DEFAULT, 'Epson LCD Projector', 'H552A', 'TUJK3X00099', 1, 6, CURRENT_TIMESTAMP())
                                          ,(DEFAULT, 'Epson LCD Projector', 'H369A', 'NE6K1302403', 1, 6, CURRENT_TIMESTAMP());

CREATE TABLE tbhardware(id INTEGER NOT NULL AUTO_INCREMENT
                       ,description VARCHAR(50) NOT NULL
                       ,model VARCHAR(20) NOT NULL
                       ,serialnumber VARCHAR(30) NOT NULL
                       ,qt INT NOT NULL
                       ,id_provider INT NOT NULL
                       ,dateregister TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP()
                       ,CONSTRAINT PRIMARY KEY(ID)
                       ,CONSTRAINT FOREIGN KEY(id_provider) REFERENCES tbprovider(id))DEFAULT CHARSET = utf8mb4;

SELECT * FROM tbprovider;

INSERT INTO tbprovider(id
                      ,name
                      ,cnpj
                      ,ie
                      ,dateregister TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP())
                      VALUES(DEFAULT, 'Epson S/A', '11.111.111/1111-16', '');

INSERT INTO tbprovider(id
                      ,name
                      ,cnpj
                      ,ie
                      ,dateregister) 
                      VALUES(DEFAULT, 'FORNECEDOR 1', '11.111.111/1111-11', '', CURRENT_TIMESTAMP())
                           ,(DEFAULT, 'FORNECEDOR 2', '11.111.111/1111-12', '', CURRENT_TIMESTAMP())
                           ,(DEFAULT, 'FORNECEDOR 3', '11.111.111/1111-13', '', CURRENT_TIMESTAMP())
                           ,(DEFAULT, 'FORNECEDOR 4', '11.111.111/1111-14', '', CURRENT_TIMESTAMP())
                           ,(DEFAULT, 'FORNECEDOR 5', '11.111.111/1111-15', '', CURRENT_TIMESTAMP())
                           ,(DEFAULT, 'Epson S/A', '11.111.111/1111-16', '', CURRENT_TIMESTAMP());
                          
                          
CREATE TABLE tbprovider(id INTEGER NOT NULL AUTO_INCREMENT
                       ,name VARCHAR(50) NOT NULL
                       ,cnpj VARCHAR(18) NOT NULL
                       ,ie VARCHAR(12)
                       ,dateregister TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP()
                       ,CONSTRAINT PRIMARY KEY(id))DEFAULT CHARSET = utf8mb4;
                      
SELECT * FROM tbcardspos;                       
                
--populando table TBCARDSPOS, com informações
--modelada em 30/08/2022
INSERT INTO  tbcardspos(id 
					   ,nameoperator
					   ,numboxfisic 
             ,numboxlogic 
             ,valuepos 
             ,cardpos 
             ,dateregister 
					   ,dateoccurrence
             ,statusreg 
					   ,notes) VALUES(DEFAULT,'Maria Benedita','10','018',23.65,'Visa Crédito','2022-08-30', DEFAULT, DEFAULT,'')
                          ,(DEFAULT,'Nayara Thomas','20','227',176.56,'Visa Crédito','2022-08-30', DEFAULT, DEFAULT,'')
                          ,(DEFAULT,'Herlaraissa','17','008',583.61,'Credishop','2022-08-30', DEFAULT, DEFAULT,'')
                          ,(DEFAULT,'Marisangela','006','002',230.67,'Elo Débito','2022-08-30', DEFAULT, DEFAULT,'')
                          ,(DEFAULT,'Ezeriel','23','001',736.83,'Mastercard Crédito','2022-08-30', DEFAULT, DEFAULT,'')
                          ,(DEFAULT,'Jhon','001','13',627.83,'Trcard Crédito','2022-08-30', DEFAULT, DEFAULT,'');
--tabela sem chave estrangeira para as bandeiras de cartões
--esta é atualmente a tabela principal do sistema de registro POS
--foi colocada em produção na data 06/09/2022. 
--modelada em 30/08/2022
CREATE TABLE tbcardspos(id INTEGER NOT NULL AUTO_INCREMENT
  						         ,nameoperator VARCHAR(50) NOT NULL
						           ,numboxfisic CHAR(4) NOT NULL
                       ,numboxlogic CHAR(4)
                       ,valuepos DECIMAL(6, 2) NOT NULL 
                       ,cardpos VARCHAR(50)
                       ,dateregister DATE NOT NULL
					             ,dateoccurrence TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP()
                       ,statusreg VARCHAR(10) NOT NULL DEFAULT 'active'
						           ,notes TEXT
						           ,CONSTRAINT PRIMARY KEY(id)) DEFAULT CHARSET = utf8mb4;
------------------------------------------------------------------------------------------------

create database erpcontroldb default character set utf8mb4 default COLLATE utf8mb4_general_ci;
------------------------------------------------------------------------------------------------                       