DROP DATABASE IF EXISTS estoque;

CREATE DATABASE estoque;

USE estoque;

CREATE TABLE itens_estoque (
  id INT(11) NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(255),
  autor VARCHAR(50),
  descricao TEXT,
  numero_itens INT(2),
  PRIMARY KEY (id)
);

INSERT INTO itens_estoque (titulo, autor, descricao, numero_itens) VALUES ('SOA Aplicado','Alexandre Saudate','Cada vez mais, sistemas corporativos exigem o reaproveitamento de funcionalidades, e consequentemente a integração entre diferentes sistemas se torna uma realidade. Essa é uma tendência natural das arquiteturas modernas. A arquitetura orientada a serviços (Service Oriented Architecture - SOA) existe justamente para resolver essa situação. Aprenda como integrar sistemas com web services, mensageria assíncrona, orquestração e muito mais de uma maneira prática, focada, onde desde primeiro capítulo você já constrói e se integra a um serviço.',3);
INSERT INTO itens_estoque (titulo, autor, descricao, numero_itens) VALUES ('TDD no Mundo Real','Mauricio Aniche','Por que não testamos software? Por que é caro? Por que é demorado? Por que é chato? Testes automatizados são a solução para todos esses problemas. Aprenda a escrever um programa que testa seu programa de forma rápida, barata e produtiva, e aumente a qualidade do seu produto final.',5);
INSERT INTO itens_estoque (titulo, autor, descricao, numero_itens) VALUES ('A Web Mobile','Sérgio Lopes','Com o crescimento absurdo do uso de smartphones e tablets, A Web quebrou novas fronteiras. Sites enjaulados no Desktop são coisa do passado. A Web é multidispositivo e você precisa suportar mobile, TV, relógio... e até Desktop! Programe a Web moderna, transformada pela mobilidade, touch screens e plataformas diversas.',2);
