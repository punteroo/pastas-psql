import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingrediente {
  /** This ingredients' unique ID. */
  @PrimaryGeneratedColumn()
  id: number;

  /** A name to identify this ingredient by. */
  @Column({ type: String, length: 64, nullable: false })
  nombre: string;

  /** An optional description for this ingredient. */
  @Column({ type: String, length: 256, nullable: true })
  descripcion?: string;

  /** How much does this ingredient cost to use in production? */
  @Column({ type: Number, precision: 10, scale: 2, nullable: false })
  costo: number;

  /** The amount in stock for this ingredient, in kilograms. */
  @Column({ type: 'integer', nullable: false })
  stock: number;
}
