-- =====================================================
-- ECOFOOD - script.sql (MySQL)
-- =====================================================

-- =====================================================
-- 0. LIMPEZA (permite rodar o script varias vezes)
-- =====================================================

DROP VIEW IF EXISTS vw_notificacoes;
DROP VIEW IF EXISTS vw_lista_compras;
DROP VIEW IF EXISTS vw_estoque;
DROP TABLE IF EXISTS registros_impacto;
DROP TABLE IF EXISTS itens_lista_compras;
DROP TABLE IF EXISTS produtos;
DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS restaurantes;

-- =====================================================
-- 1. CRIACAO DAS TABELAS
-- =====================================================

CREATE TABLE restaurantes (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  nome          VARCHAR(150) NOT NULL,
  senha         VARCHAR(255) NOT NULL,
  endereco      VARCHAR(255) NOT NULL,
  telefone      VARCHAR(20) NOT NULL,
  email         VARCHAR(254) NOT NULL UNIQUE,
  cnpj          VARCHAR(18) NOT NULL UNIQUE,
  atualizadoEm  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE usuarios (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  nome           VARCHAR(150) NOT NULL,
  fotoUrl        VARCHAR(255),
  email          VARCHAR(254) NOT NULL UNIQUE,
  senha          VARCHAR(255) NOT NULL,
  restauranteId  INT NOT NULL,
  atualizadoEm   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (restauranteId) REFERENCES restaurantes(id)
);

CREATE TABLE produtos (
  id                  INT AUTO_INCREMENT PRIMARY KEY,
  nome                VARCHAR(150) NOT NULL,
  codigoBarras        VARCHAR(50),
  localArmazenamento  VARCHAR(20) NOT NULL,          -- GELADEIRA, FREEZER ou DISPENSA
  categoria           VARCHAR(50) NOT NULL,
  quantidade          DOUBLE NOT NULL DEFAULT 1,
  unidade             VARCHAR(10) NOT NULL DEFAULT 'un',
  dataValidade        DATETIME NOT NULL,
  status              VARCHAR(20) NOT NULL DEFAULT 'ATIVO',  -- ATIVO, ESGOTADO, APROVEITADO ou NAO_APROVEITADO
  restauranteId       INT NOT NULL,
  deuEntradaEm        DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  atualizadoEm        DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (restauranteId) REFERENCES restaurantes(id)
);

CREATE TABLE registros_impacto (
  id              INT AUTO_INCREMENT PRIMARY KEY,
  produtoId       INT NOT NULL,
  restauranteId   INT NOT NULL,
  quantidadeKg    DOUBLE NOT NULL,
  foiAproveitado  BOOLEAN NOT NULL,                  -- 1 = aproveitado, 0 = desperdicado
  criadoEm        DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (produtoId) REFERENCES produtos(id),
  FOREIGN KEY (restauranteId) REFERENCES restaurantes(id)
);

CREATE TABLE itens_lista_compras (
  id                  INT AUTO_INCREMENT PRIMARY KEY,
  nome                VARCHAR(150) NOT NULL,
  localArmazenamento  VARCHAR(20) NOT NULL,
  categoria           VARCHAR(50) NOT NULL DEFAULT 'Outros',
  quantidade          DOUBLE NOT NULL DEFAULT 1,
  unidade             VARCHAR(10) NOT NULL DEFAULT 'un',
  prioridade          BOOLEAN NOT NULL DEFAULT 0,
  comprado            BOOLEAN NOT NULL DEFAULT 0,
  restauranteId       INT NOT NULL,
  criadoEm            DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (restauranteId) REFERENCES restaurantes(id)
);

-- =====================================================
-- 2. INSERTS DE EXEMPLO
-- =====================================================

INSERT INTO restaurantes (nome, senha, endereco, telefone, email, cnpj)
VALUES
  ('Restaurante Sabor Verde', '123456', 'Rua das Flores, 100 - Sao Paulo', '11999990000',
   'contato@saborverde.com', '12345678000199');

INSERT INTO usuarios (nome, email, senha, restauranteId)
VALUES
  ('Maria Souza', 'maria@saborverde.com', '123456', 1);

INSERT INTO produtos
  (nome, categoria, localArmazenamento, quantidade, unidade, dataValidade, restauranteId)
VALUES
  ('Tomate Italiano',   'Hortifruti', 'GELADEIRA', 2.3, 'kg', '2026-10-21', 1),
  ('Alface Americana',  'Hortifruti', 'GELADEIRA', 1,   'un', '2026-10-22', 1),
  ('Peito de Frango',   'Carnes',     'GELADEIRA', 2,   'kg', '2026-10-23', 1),
  ('Queijo Mussarela',  'Laticinios', 'GELADEIRA', 1.2, 'kg', '2026-10-24', 1),
  ('Sorvete Baunilha',  'Sobremesas', 'FREEZER',   3,   'L',  '2026-10-21', 1),
  ('Pao de Queijo',     'Padaria',    'FREEZER',   24,  'un', '2026-10-22', 1),
  ('Molho de Tomate',   'Molhos',     'DISPENSA',  5,   'un', '2026-10-21', 1),
  ('Feijao',            'Graos',      'DISPENSA',  3,   'kg', '2026-11-30', 1);

-- produto esgotado (nao aparece no estoque, vai para a lista de compras)
INSERT INTO produtos
  (nome, categoria, localArmazenamento, quantidade, unidade, dataValidade, status, restauranteId)
VALUES
  ('Cafe', 'Graos', 'DISPENSA', 0, 'kg', '2026-12-31', 'ESGOTADO', 1);

INSERT INTO itens_lista_compras
  (nome, localArmazenamento, categoria, quantidade, unidade, prioridade, restauranteId)
VALUES
  ('Cafe', 'DISPENSA', 'Graos', 1, 'kg', 1, 1);

INSERT INTO registros_impacto (produtoId, restauranteId, quantidadeKg, foiAproveitado)
VALUES
  (1, 1, 2.3, 1),
  (3, 1, 0.5, 0);

-- =====================================================
-- 3. VIEWS
-- =====================================================

-- Estoque: so produtos ATIVOS, com os dias que faltam para vencer
CREATE VIEW vw_estoque AS
SELECT
  p.id,
  p.nome,
  p.categoria,
  p.localArmazenamento,
  p.quantidade,
  p.unidade,
  p.dataValidade,
  DATEDIFF(DATE(p.dataValidade), CURDATE()) AS diasRestantes,
  p.restauranteId,
  r.nome AS nomeRestaurante
FROM produtos p
INNER JOIN restaurantes r
  ON p.restauranteId = r.id
WHERE p.status = 'ATIVO';

-- Lista de compras: itens que ainda nao foram comprados
CREATE VIEW vw_lista_compras AS
SELECT
  i.id,
  i.nome,
  i.localArmazenamento,
  i.categoria,
  i.quantidade,
  i.unidade,
  i.prioridade,
  r.nome AS nomeRestaurante
FROM itens_lista_compras i
INNER JOIN restaurantes r
  ON i.restauranteId = r.id
WHERE i.comprado = 0;

-- Notificacoes: produtos ATIVOS que vencem em ate 3 dias (ou ja venceram)
CREATE VIEW vw_notificacoes AS
SELECT
  p.id AS produtoId,
  p.nome,
  p.dataValidade,
  p.restauranteId,
  DATEDIFF(DATE(p.dataValidade), CURDATE()) AS diasRestantes,
  CASE
    WHEN DATE(p.dataValidade) < CURDATE() THEN 'VENCIDO'
    WHEN DATE(p.dataValidade) = CURDATE() THEN 'VENCE_HOJE'
    ELSE 'PROXIMO_DO_VENCIMENTO'
  END AS tipo,
  CASE
    WHEN DATE(p.dataValidade) < CURDATE() THEN 'Este alimento esta vencido.'
    WHEN DATE(p.dataValidade) = CURDATE() THEN 'Este alimento vence hoje.'
    ELSE 'Este alimento esta proximo do vencimento.'
  END AS mensagem
FROM produtos p
WHERE p.status = 'ATIVO'
  AND DATE(p.dataValidade) <= DATE_ADD(CURDATE(), INTERVAL 3 DAY);

-- =====================================================
-- 4. CONSULTAS (SELECT)
-- =====================================================

-- Tela de Estoque: aba Geladeira (o que vence primeiro aparece primeiro)
SELECT * FROM vw_estoque
WHERE localArmazenamento = 'GELADEIRA'
  AND restauranteId = 1
ORDER BY dataValidade ASC;

-- Aba Freezer
SELECT * FROM vw_estoque
WHERE localArmazenamento = 'FREEZER'
  AND restauranteId = 1
ORDER BY dataValidade ASC;

-- Aba Dispensa
SELECT * FROM vw_estoque
WHERE localArmazenamento = 'DISPENSA'
  AND restauranteId = 1
ORDER BY dataValidade ASC;

-- Barra de busca: produtos da geladeira que contem "tom"
SELECT * FROM vw_estoque
WHERE localArmazenamento = 'GELADEIRA'
  AND nome LIKE '%tom%'
ORDER BY dataValidade ASC;

-- Alerta vermelho: quantos produtos vencem em ate 7 dias (por aba)
SELECT localArmazenamento, COUNT(*) AS totalProximosVencimento
FROM vw_estoque
WHERE diasRestantes <= 7
  AND restauranteId = 1
GROUP BY localArmazenamento;

-- Lista de compras
SELECT * FROM vw_lista_compras;

-- Itens da lista de compras agrupados por local
SELECT localArmazenamento, COUNT(*) AS totalItens
FROM itens_lista_compras
WHERE comprado = 0
GROUP BY localArmazenamento;

-- Impacto: quanto foi aproveitado e quanto foi desperdicado (kg)
SELECT
  foiAproveitado,
  SUM(quantidadeKg) AS totalKg
FROM registros_impacto
WHERE restauranteId = 1
GROUP BY foiAproveitado;

-- Impacto com o nome do produto (JOIN)
SELECT p.nome, ri.quantidadeKg, ri.foiAproveitado
FROM registros_impacto ri
INNER JOIN produtos p
  ON ri.produtoId = p.id;

-- Notificacoes: lista de produtos que precisam de atencao
SELECT * FROM vw_notificacoes
WHERE restauranteId = 1
ORDER BY dataValidade ASC;

-- Notificacoes: quantidade (o numerinho do sino)
SELECT COUNT(*) AS quantidade
FROM vw_notificacoes
WHERE restauranteId = 1;

-- Todas as tabelas
SELECT * FROM restaurantes;
SELECT * FROM usuarios;
SELECT * FROM produtos;
SELECT * FROM registros_impacto;
SELECT * FROM itens_lista_compras;

-- =====================================================
-- 5. DETALHE E STATUS DO PRODUTO
-- =====================================================

-- Detalhe de um produto (tela de detalhes), com o nome do restaurante
SELECT
  p.id, p.nome, p.quantidade, p.unidade, p.categoria,
  p.localArmazenamento, p.dataValidade, p.status,
  p.deuEntradaEm, p.atualizadoEm,
  r.id AS restauranteId, r.nome AS nomeRestaurante
FROM produtos p
INNER JOIN restaurantes r
  ON p.restauranteId = r.id
WHERE p.id = 1;

-- Marcar um produto como aproveitado (ele sai do estoque)
UPDATE produtos SET status = 'APROVEITADO' WHERE id = 1;

-- Marcar um produto como nao aproveitado
UPDATE produtos SET status = 'NAO_APROVEITADO' WHERE id = 3;

-- Quantos produtos existem em cada status
SELECT status, COUNT(*) AS total
FROM produtos
GROUP BY status;