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
					   ,notes) VALUES(DEFAULT,'Maria Benedita','10','018',23.65,'Visa Crédito','2022-08-30', CURRENT_TIMESTAMP(),'Ativo','')
                          ,(DEFAULT,'Nayara Thomas','20','227',176.56,'Visa Crédito','2022-08-30', CURRENT_TIMESTAMP(),'Ativo','')
                          ,(DEFAULT,'Herlaraissa','17','008',583.61,'Credishop','2022-08-30', CURRENT_TIMESTAMP(),'Ativo','')
                          ,(DEFAULT,'Marisangela','006','002',230.67,'Elo Débito','2022-08-30', CURRENT_TIMESTAMP(),'Ativo','')
                          ,(DEFAULT,'Ezeriel','23','001',736.83,'Mastercard Crédito','2022-08-30', CURRENT_TIMESTAMP(),'Ativo','')
                          ,(DEFAULT,'Jhon','001','13',627.83,'Trcard Crédito','2022-08-30', CURRENT_TIMESTAMP(),'Ativo','');
--tabela sem chave estrangeira para as bandeiras de cartões
--modelada em 30/08/2022
CREATE TABLE tbcardspos(id INTEGER NOT NULL AUTO_INCREMENT
  						         ,nameoperator VARCHAR(50) NOT NULL
						           ,numboxfisic CHAR(4) NOT NULL
                       ,numboxlogic CHAR(4)
                       ,valuepos DECIMAL(6, 2) NOT NULL 
                       ,cardpos VARCHAR(50)
                       ,dateregister DATE NOT NULL
					             ,dateoccurrence TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
                       ,statusreg VARCHAR(10) NOT NULL DEFAULT "active"
						           ,notes TEXT
						           ,CONSTRAINT PRIMARY KEY(id)) DEFAULT CHARSET = utf8mb4;
------------------------------------------------------------------------------------------------                       