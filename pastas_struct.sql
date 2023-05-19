DROP DATABASE pastas;
CREATE DATABASE pastas;

\c pastas

-- Tablas sin FOREIGN
CREATE TABLE producto_pasta (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(64) NOT NULL,
    descripcion VARCHAR(256) NULL,
    -- Precio a la venta para consumidores
    precio DECIMAL(10,2) NOT NULL,
    -- Costo de producción del producto
    costo DECIMAL(10,2) NOT NULL,
    stock INTEGER NOT NULL
);

CREATE TABLE venta (
    id SERIAL PRIMARY KEY,
    fecha TIMESTAMP NOT NULL,
    total DECIMAL(10,2) NOT NULL
);

-- Tablas con FOREIGN
CREATE TABLE detalle_venta (
    cantidad INTEGER NOT NULL,
    venta_id INTEGER REFERENCES venta,
    producto_pasta_id INTEGER REFERENCES producto_pasta,
    subTotal DECIMAL(10,2)
);

CREATE TABLE ingrediente (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(64) NOT NULL,
    descripcion VARCHAR(256) NULL,
    -- Costo de obtención del ingrediente
    costo DECIMAL(10,2) NOT NULL,
    stock INTEGER NOT NULL
);

CREATE TABLE producto_pasta_ingrediente (
    producto_pasta_id INTEGER REFERENCES producto_pasta,
    ingrediente_id INTEGER REFERENCES ingrediente,
    -- Expresada en kilos
    cantidadKg DECIMAL(10,2) NOT NULL
);

-- Algunos datos de prueba para hacer consultas
INSERT INTO producto_pasta (id, nombre, descripcion, precio, costo, stock) VALUES
(1, 'Fideos',                      'Fideos de harina de trigo',     80, 50,     100),
-- 0.5 de harina de trigo
(2, 'Tallarines',                  'Tallarines de harina de trigo', 90, 75,     100),
-- 0.5 de harina de trigo
(3, 'Spaghetti',                   'Spaghetti de harina de trigo',  90, 75,     100),
-- 0.5 de harina de trigo
(4, 'Fideos rellenos carne',       'Fideos de harina integral',     210, 180,   100),
-- 0.5 de harina integral + 0.5 de carne
(5, 'Tallarines rellenos pollo',   'Tallarines de harina integral', 180, 155,   100),
-- 0.5 de harina integral + 0.5 de pollo
(6, 'Spaghetti rellenos verdura',  'Spaghetti de harina integral',  150, 137.5, 100),
-- 0.5 de harina integral + 0.5 de verdura
(7, 'Ravioles rellenos premium',   'Ravioles premium',              530, 265,   100),
-- 1 de harina integral + 1 de carne + 0.5 de verdura
(8, 'Sorrentinos de J&Q',          'Sorrentinos premium de J&Q',    600, 290,   100);
-- 1 de harina de trigo + 1 de jamón + 2 de queso

INSERT INTO ingrediente (id, nombre, descripcion, costo, stock) VALUES
(1, 'Harina de trigo',     'Harina de trigo',     50,  100),
(2, 'Harina integral',     'Harina integral',     90,  100),
(3, 'Carne',               'Carne',               120, 100),
(4, 'Pollo',               'Pollo',               110, 100),
(5, 'Verdura',             'Verdura',             95,  100),
(6, 'Jamón',               'Jamón cocido',        100, 100),
(7, 'Queso',               'Queso gruyeré',       70,  100);

INSERT INTO producto_pasta_ingrediente (producto_pasta_id, ingrediente_id, cantidadKg) VALUES
(1, 1, 1),
(2, 1, 1.5),
(3, 1, 1.5),
(4, 2, 1),
(5, 2, 1),
(6, 2, 1),
(4, 3, 0.75),
(5, 4, 0.5),
(6, 5, 0.5),
(7, 2, 1),
(7, 3, 1),
(7, 5, 0.5),
(8, 1, 1),
(8, 6, 1),
(8, 7, 2);

INSERT INTO venta (id, fecha, total) VALUES
(1, '2021-01-01 00:00:00', 670),
(2, '2021-01-02 00:00:00', 1200),
(3, '2021-01-03 00:00:00', 500),
(4, '2021-01-04 00:00:00', 500),
(5, '2021-01-05 00:00:00', 330);

INSERT INTO detalle_venta (cantidad, venta_id, producto_pasta_id) VALUES
(5, 1, 1),
(3, 1, 2),
(1, 2, 1),
(8, 2, 4),
(3, 2, 3),
(2, 3, 1),
(1, 3, 2),
(1, 3, 3),
(1, 4, 1),
(1, 4, 2),
(1, 4, 3),
(1, 5, 5),
(1, 5, 6);