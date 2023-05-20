import { Entity, JoinColumn, OneToOne, Column, PrimaryColumn } from 'typeorm';
import { ProductoPasta } from './producto.pasta.entity';
import { Ingrediente } from './ingrediente.entity';

@Entity()
export class ProductoPastaIngrediente {
  @PrimaryColumn()
  id: number;

  /** The pasta product this ingredient belongs to. */
  @OneToOne(ProductoPasta.name)
  @JoinColumn()
  producto_pasta_id: ProductoPasta;

  /** The ingredient required to produce the product. */
  @OneToOne(Ingrediente.name)
  @JoinColumn()
  ingrediente_id: Ingrediente;

  /** The amount in kg required of this ingredient to produce the pasta product. */
  @Column({ type: Number, precision: 10, scale: 2, nullable: false })
  cantidadKg: number;
}
