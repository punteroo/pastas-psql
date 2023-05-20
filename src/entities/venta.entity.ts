import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Venta {
  /** The sale's ID number. */
  @PrimaryGeneratedColumn()
  id: number;

  /** The date and time this sale was made. */
  @Column({ type: 'timestamp', nullable: false })
  fecha: Date;

  /** The total amount debited to the client. */
  @Column({ type: Number, precision: 10, scale: 2, nullable: false })
  total: number;
}
