import { Column, JoinColumn, OneToOne, Entity, PrimaryColumn } from 'typeorm';
import { Venta } from './venta.entity';
import { ProductoPasta } from './producto.pasta.entity';

@Entity()
export class DetalleVenta {
  @PrimaryColumn()
  id: number;

  /** The amount of this item the client has bought. */
  @Column({ type: 'integer', nullable: false })
  cantidad: number;

  /** The sale this detail is related to. */
  @OneToOne(Venta.name)
  @JoinColumn()
  venta_id: Venta;

  /** The product this detail is referring to. */
  @OneToOne(ProductoPasta.name)
  @JoinColumn()
  producto_pasta_id: ProductoPasta;

  /** A calculated amount based on the product amount and price tag. */
  @Column({ type: 'integer', precision: 10, scale: 2, nullable: true })
  subTotal: number;
}
