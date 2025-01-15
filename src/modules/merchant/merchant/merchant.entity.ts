import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('merchant')
export class Merchant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  requester_name: string;

  @Column()
  action_type: string;

  // Automatically set to current date when the entity is created
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  // Automatically updated to current date whenever the entity is updated
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
