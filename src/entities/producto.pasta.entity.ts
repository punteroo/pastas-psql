import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductoPasta {
  /** The pasta product's unique ID. */
  @PrimaryGeneratedColumn()
  id: number;

  /** The pasta product name. */
  @Column({ type: String, nullable: false, length: 64 })
  nombre: string;

  /** An optional description for the pasta product. */
  @Column({ type: String, nullable: true, length: 256 })
  descripcion?: string;

  /** A price tag for this specific product. */
  @Column({ type: Number, precision: 10, scale: 2, nullable: false })
  precio: number;

  /** A cost tag to produce this product. Calculated based on its ingredients. */
  @Column({ type: Number, precision: 10, scale: 2, nullable: false })
  costo: number;

  /** The amount of items in the store for this product. */
  @Column({ type: 'integer', nullable: false })
  stock: number;
}
